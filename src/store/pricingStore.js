
const createStore = (initialState, actions) => {
    let state = initialState;
    const listeners = new Set();

    const getState = () => state;

    const setState = (partial) => {
        state = { ...state, ...partial };
        listeners.forEach(listener => listener(state));
    };

    const subscribe = (listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
    };

    const actionsWithSet = {};
    Object.keys(actions).forEach(key => {
        actionsWithSet[key] = (...args) => actions[key](getState, setState, ...args);
    });

    return { getState, setState, subscribe, ...actionsWithSet };
};


export const usePricingStore = (() => {
    const store = createStore(
        {
            countries: [
                { code: "US", name: "United States", currency: "USD" },
                { code: "GB", name: "United Kingdom", currency: "GBP" },
                { code: "EU", name: "European Union", currency: "EUR" },
                { code: "IN", name: "India", currency: "INR" },
            ],
            pricingPlans: {
                US: { basic: 9.99, pro: 19.99, enterprise: 49.99 },
                GB: { basic: 7.99, pro: 15.99, enterprise: 39.99 },
                EU: { basic: 8.99, pro: 17.99, enterprise: 44.99 },
                IN: { basic: 499, pro: 999, enterprise: 2499 },
            },
            planFeatures: {
                basic: [
                    "Up to 10 products",
                    "Basic analytics",
                    "Email support",
                    "Standard templates"
                ],
                pro: [
                    "Up to 100 products",
                    "Advanced analytics",
                    "Priority support",
                    "Custom templates",
                    "API access",
                    "Team collaboration"
                ],
                enterprise: [
                    "Unlimited products",
                    "Enterprise analytics",
                    "24/7 phone support",
                    "Custom branding",
                    "Advanced API access",
                    "Team collaboration",
                    "Custom integrations",
                    "Dedicated account manager"
                ]
            },
            selectedCountry: "US",
            isAdminMode: false,
            editMode: false,
            toastMessage: "",
            toastType: "",
        },
        {

            showToast: (get, set, message, type = "success") => {
                set({ toastMessage: message, toastType: type });
                setTimeout(() => set({ toastMessage: "", toastType: "" }), 3000);
            },


            toggleAdminMode: (get, set) => {
                const { isAdminMode } = get();
                set({
                    isAdminMode: !isAdminMode,
                    editMode: false
                });
                store.showToast(!isAdminMode ? "Entered admin mode" : "Exited admin mode");
            },

            toggleEditMode: (get, set) => {
                const { editMode } = get();
                set({ editMode: !editMode });
                store.showToast(editMode ? "Editing canceled" : "Now in edit mode");
            },


            setSelectedCountry: (get, set, countryCode) => {
                const { countries } = get();
                const country = countries.find(c => c.code === countryCode);
                set({ selectedCountry: countryCode });
                if (country) {
                    store.showToast(`Switched to ${country.name} pricing`);
                }
            },

            addCountry: (get, set, newCountry) => {
                const { countries, pricingPlans } = get();

                if (!newCountry.code || !newCountry.name || !newCountry.currency) {
                    store.showToast("Please fill in all country details", "error");
                    return false;
                }

                if (newCountry.code.length !== 2) {
                    store.showToast("Country code must be exactly 2 characters", "error");
                    return false;
                }

                if (countries.some(country => country.code === newCountry.code)) {
                    store.showToast("Country code already exists", "error");
                    return false;
                }

                const basicPrice = parseFloat(newCountry.basic) || 0;
                const proPrice = parseFloat(newCountry.pro) || 0;
                const enterprisePrice = parseFloat(newCountry.enterprise) || 0;

                if (basicPrice <= 0 || proPrice <= 0 || enterprisePrice <= 0) {
                    store.showToast("All plan prices must be greater than zero", "error");
                    return false;
                }

                set({
                    countries: [...countries, {
                        code: newCountry.code,
                        name: newCountry.name,
                        currency: newCountry.currency,
                    }],
                    pricingPlans: {
                        ...pricingPlans,
                        [newCountry.code]: {
                            basic: basicPrice,
                            pro: proPrice,
                            enterprise: enterprisePrice,
                        }
                    }
                });

                store.showToast(`${newCountry.name} added successfully`);
                return true;
            },

            removeCountry: (get, set, code) => {
                const { countries, pricingPlans, selectedCountry } = get();

                if (["US", "GB", "EU", "IN"].includes(code)) {
                    store.showToast("Cannot remove default countries", "error");
                    return;
                }

                const updatedPricingPlans = { ...pricingPlans };
                delete updatedPricingPlans[code];

                set({
                    countries: countries.filter(country => country.code !== code),
                    pricingPlans: updatedPricingPlans,
                    selectedCountry: selectedCountry === code ? "US" : selectedCountry
                });

                store.showToast("Country removed successfully");
            },


            updatePrice: (get, set, country, plan, value) => {
                const { pricingPlans } = get();
                const numValue = parseFloat(value) || 0;

                set({
                    pricingPlans: {
                        ...pricingPlans,
                        [country]: {
                            ...pricingPlans[country],
                            [plan]: numValue,
                        }
                    }
                });
            },


            addFeature: (get, set, planType, feature) => {
                const { planFeatures } = get();

                if (!feature.trim()) {
                    store.showToast("Please enter a feature name", "error");
                    return false;
                }

                if (planFeatures[planType].includes(feature.trim())) {
                    store.showToast("Feature already exists in this plan", "error");
                    return false;
                }

                set({
                    planFeatures: {
                        ...planFeatures,
                        [planType]: [...planFeatures[planType], feature.trim()]
                    }
                });

                store.showToast("Feature added successfully");
                return true;
            },

            removeFeature: (get, set, planType, index) => {
                const { planFeatures } = get();

                if (planFeatures[planType].length <= 2) {
                    store.showToast("Cannot remove features - minimum 2 required per plan", "error");
                    return;
                }

                set({
                    planFeatures: {
                        ...planFeatures,
                        [planType]: planFeatures[planType].filter((_, i) => i !== index)
                    }
                });

                store.showToast("Feature removed successfully");
            },

            updateFeature: (get, set, planType, index, newValue) => {
                const { planFeatures } = get();
                const updatedFeatures = [...planFeatures[planType]];
                updatedFeatures[index] = newValue;

                set({
                    planFeatures: {
                        ...planFeatures,
                        [planType]: updatedFeatures
                    }
                });
            },


            saveChanges: (get, set) => {
                const state = get();
                console.log("Saved State:", {
                    countries: state.countries,
                    pricingPlans: state.pricingPlans,
                    planFeatures: state.planFeatures
                });

                set({ editMode: false });
                store.showToast("All changes saved successfully!");
            }
        }
    );

    return store;
})();


export const useStore = () => {
    const [state, setState] = React.useState(usePricingStore.getState());

    React.useEffect(() => {
        const unsubscribe = usePricingStore.subscribe(setState);
        return unsubscribe;
    }, []);

    return state;
};