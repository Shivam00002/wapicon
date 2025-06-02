import React, { useState } from "react";
import { Check, Globe, Edit, Save, Plus, Trash2, X, Settings } from "lucide-react";

// Zustand-like store implementation (simplified for this environment)
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

// Store for pricing data
const usePricingStore = (() => {
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
      // Toast actions
      showToast: (get, set, message, type = "success") => {
        set({ toastMessage: message, toastType: type });
        setTimeout(() => set({ toastMessage: "", toastType: "" }), 3000);
      },

      // Admin mode actions
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

      // Country actions
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

      // Pricing actions
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

      // Feature actions
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

      // Save changes
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

// Hook to use the store in components
const useStore = () => {
  const [state, setState] = useState(usePricingStore.getState());
  
  React.useEffect(() => {
    const unsubscribe = usePricingStore.subscribe(setState);
    return unsubscribe;
  }, []);

  return state;
};

const Pricing = () => {
  const state = useStore();
  const {
    countries,
    pricingPlans,
    planFeatures,
    selectedCountry,
    isAdminMode,
    editMode,
    toastMessage,
    toastType
  } = state;

  // Local form states
  const [newCountry, setNewCountry] = useState({
    code: "", name: "", currency: "", basic: "", pro: "", enterprise: ""
  });
  
  const [newFeatures, setNewFeatures] = useState({
    basic: "", pro: "", enterprise: ""
  });

  const plans = [
    {
      name: "Basic",
      priceKey: "basic",
      color: "blue",
      description: "Perfect for small businesses"
    },
    {
      name: "Pro",
      priceKey: "pro",
      color: "green",
      popular: true,
      description: "Most popular for growing teams"
    },
    {
      name: "Enterprise",
      priceKey: "enterprise",
      color: "purple",
      description: "Advanced features for large organizations"
    },
  ];

  const handleAddCountry = () => {
    if (usePricingStore.addCountry(newCountry)) {
      setNewCountry({
        code: "", name: "", currency: "", basic: "", pro: "", enterprise: ""
      });
    }
  };

  const handleAddFeature = (planType) => {
    if (usePricingStore.addFeature(planType, newFeatures[planType])) {
      setNewFeatures(prev => ({ ...prev, [planType]: "" }));
    }
  };

  const handleSelectPlan = (planName) => {
    const country = countries.find(c => c.code === selectedCountry);
    usePricingStore.showToast(`Selected ${planName} plan for ${country?.name}!`);
  };

  return (
    <div className="min-h-screen mt-10 bg-gray-50 dark:bg-gray-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-md text-white transition-all ${
          toastType === "error" ? "bg-red-500" : "bg-green-500"
        }`}>
          {toastMessage}
        </div>
      )}
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400">
            Choose the plan that's right for you
          </p>

          <button
            onClick={usePricingStore.toggleAdminMode}
            className="mt-4 px-4 py-2 text-sm rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors"
          >
            {isAdminMode ? "Exit Admin Mode" : "Admin Mode"}
          </button>
        </div>

        {/* Admin Panel */}
        {isAdminMode && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Admin Control Panel
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={usePricingStore.toggleEditMode}
                  className="px-4 py-2 text-sm rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors flex items-center"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  {editMode ? "Cancel Editing" : "Edit Mode"}
                </button>
                {editMode && (
                  <button
                    onClick={usePricingStore.saveChanges}
                    className="px-4 py-2 text-sm rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors flex items-center"
                  >
                    <Save className="h-4 w-4 mr-1" />
                    Save All Changes
                  </button>
                )}
              </div>
            </div>

            {editMode && (
              <div className="space-y-8">
                {/* Price Management */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Manage Pricing
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Country
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Currency
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Basic
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Pro
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Enterprise
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {countries.map((country) => (
                          <tr key={country.code}>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                              {country.name}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                              {country.currency}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <input
                                type="number"
                                step="0.01"
                                value={pricingPlans[country.code]?.basic || 0}
                                onChange={(e) => usePricingStore.updatePrice(country.code, "basic", e.target.value)}
                                className="w-20 p-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm dark:bg-gray-700 dark:text-white"
                              />
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <input
                                type="number"
                                step="0.01"
                                value={pricingPlans[country.code]?.pro || 0}
                                onChange={(e) => usePricingStore.updatePrice(country.code, "pro", e.target.value)}
                                className="w-20 p-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm dark:bg-gray-700 dark:text-white"
                              />
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <input
                                type="number"
                                step="0.01"
                                value={pricingPlans[country.code]?.enterprise || 0}
                                onChange={(e) => usePricingStore.updatePrice(country.code, "enterprise", e.target.value)}
                                className="w-20 p-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm dark:bg-gray-700 dark:text-white"
                              />
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <button
                                onClick={() => usePricingStore.removeCountry(country.code)}
                                className="text-red-600 hover:text-red-800 dark:hover:text-red-400"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Add New Country */}
                  <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h5 className="text-md font-medium text-gray-900 dark:text-white mb-4">
                      Add New Country
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <input
                        type="text"
                        maxLength={2}
                        placeholder="Country Code (e.g., JP)"
                        value={newCountry.code}
                        onChange={(e) => setNewCountry(prev => ({ ...prev, code: e.target.value.toUpperCase() }))}
                        className="p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                      <input
                        type="text"
                        placeholder="Country Name (e.g., Japan)"
                        value={newCountry.name}
                        onChange={(e) => setNewCountry(prev => ({ ...prev, name: e.target.value }))}
                        className="p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                      <input
                        type="text"
                        placeholder="Currency (e.g., JPY)"
                        value={newCountry.currency}
                        onChange={(e) => setNewCountry(prev => ({ ...prev, currency: e.target.value.toUpperCase() }))}
                        className="p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <input
                        type="number"
                        step="0.01"
                        placeholder="Basic Price"
                        value={newCountry.basic}
                        onChange={(e) => setNewCountry(prev => ({ ...prev, basic: e.target.value }))}
                        className="p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                      <input
                        type="number"
                        step="0.01"
                        placeholder="Pro Price"
                        value={newCountry.pro}
                        onChange={(e) => setNewCountry(prev => ({ ...prev, pro: e.target.value }))}
                        className="p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                      <input
                        type="number"
                        step="0.01"
                        placeholder="Enterprise Price"
                        value={newCountry.enterprise}
                        onChange={(e) => setNewCountry(prev => ({ ...prev, enterprise: e.target.value }))}
                        className="p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <button
                      onClick={handleAddCountry}
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center transition-colors"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Country
                    </button>
                  </div>
                </div>

                {/* Feature Management */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Manage Plan Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                      <div key={plan.priceKey} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                        <h5 className="text-lg font-medium text-gray-900 dark:text-white mb-3 capitalize">
                          {plan.name} Plan Features
                        </h5>
                        <div className="space-y-2 mb-4">
                          {planFeatures[plan.priceKey]?.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-900 rounded border">
                              <input
                                type="text"
                                value={feature}
                                onChange={(e) => usePricingStore.updateFeature(plan.priceKey, index, e.target.value)}
                                className="flex-1 p-1 text-sm border-0 bg-transparent text-gray-900 dark:text-white focus:outline-none"
                              />
                              <button
                                onClick={() => usePricingStore.removeFeature(plan.priceKey, index)}
                                className="text-red-600 hover:text-red-800 dark:hover:text-red-400 p-1"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Add new feature..."
                            value={newFeatures[plan.priceKey]}
                            onChange={(e) => setNewFeatures(prev => ({ ...prev, [plan.priceKey]: e.target.value }))}
                            className="flex-1 p-2 text-sm border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
                            onKeyPress={(e) => e.key === 'Enter' && handleAddFeature(plan.priceKey)}
                          />
                          <button
                            onClick={() => handleAddFeature(plan.priceKey)}
                            className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Country Selector */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-xs">
            <select
              value={selectedCountry}
              onChange={(e) => usePricingStore.setSelectedCountry(e.target.value)}
              className="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg pl-10 pr-8 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} ({country.currency})
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Globe className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                plan.popular ? "ring-2 ring-green-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? "pt-12" : ""}`}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {plan.description}
                  </p>
                  
                  <div className="mt-6 flex items-baseline justify-center">
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                      {countries.find(c => c.code === selectedCountry)?.currency}
                      {pricingPlans[selectedCountry]?.[plan.priceKey] || 0}
                    </span>
                    <span className="ml-1 text-lg font-medium text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>

                  <button
                    onClick={() => handleSelectPlan(plan.name)}
                    className={`mt-8 w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? "bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                    }`}
                  >
                    Get Started
                  </button>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
                    What's included
                  </h4>
                  <ul className="space-y-3">
                    {planFeatures[plan.priceKey]?.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                        <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
            Prices shown in {countries.find(c => c.code === selectedCountry)?.currency} for {countries.find(c => c.code === selectedCountry)?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;