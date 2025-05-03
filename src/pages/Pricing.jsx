import React, { useState, useEffect } from "react";
import { Check, Globe, Edit, Save, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"; 

const Pricing = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const navigate = useNavigate();

  const [countries, setCountries] = useState([
    { code: "US", name: "United States", currency: "USD" },
    { code: "GB", name: "United Kingdom", currency: "GBP" },
    { code: "EU", name: "European Union", currency: "EUR" },
    { code: "IN", name: "India", currency: "INR" },
  ]);

  const [pricingPlans, setPricingPlans] = useState({
    US: {
      basic: 9.99,
      pro: 19.99,
      enterprise: 49.99,
    },
    GB: {
      basic: 7.99,
      pro: 15.99,
      enterprise: 39.99,
    },
    EU: {
      basic: 8.99,
      pro: 17.99,
      enterprise: 44.99,
    },
    IN: {
      basic: 499,
      pro: 999,
      enterprise: 2499,
    },
  });

  const [newCountry, setNewCountry] = useState({
    code: "",
    name: "",
    currency: "",
    basic: "",
    pro: "",
    enterprise: "",
  });

  useEffect(() => {
    const savedCountries = localStorage.getItem("pricingCountries");
    const savedPricingPlans = localStorage.getItem("pricingPlans");

    if (savedCountries && savedPricingPlans) {
      try {
        setCountries(JSON.parse(savedCountries));
        setPricingPlans(JSON.parse(savedPricingPlans));
        toast.success("Pricing data loaded successfully");
      } catch (error) {
        console.error("Error loading saved pricing data:", error);
        toast.error("Failed to load pricing data");
      }
    }
  }, []);

  const [editMode, setEditMode] = useState(false);
  const [editingCountry, setEditingCountry] = useState(null);

  const features = [
    "Unlimited products",
    "Basic analytics",
    "24/7 support",
    "API access",
    "Custom branding",
    "Advanced analytics",
    "Priority support",
    "Custom integrations",
  ];

  const plans = [
    {
      name: "Basic",
      priceKey: "basic",
      features: features.slice(0, 3),
      color: "green",
    },
    {
      name: "Pro",
      priceKey: "pro",
      features: features.slice(0, 6),
      color: "green",
      popular: true,
    },
    {
      name: "Enterprise",
      priceKey: "enterprise",
      features: features,
      color: "green",
    },
  ];

  const handleAddCountry = () => {
    if (!newCountry.code || !newCountry.name || !newCountry.currency) {
      toast.error("Please fill in all country details");
      return;
    }

    if (newCountry.code.length !== 2) {
      toast.error("Country code must be exactly 2 characters");
      return;
    }

    if (countries.some((country) => country.code === newCountry.code)) {
      toast.error("Country code already exists");
      return;
    }

    if (
      parseFloat(newCountry.basic) <= 0 ||
      parseFloat(newCountry.pro) <= 0 ||
      parseFloat(newCountry.enterprise) <= 0
    ) {
      toast.error("All plan prices must be greater than zero");
      return;
    }

    setCountries([
      ...countries,
      {
        code: newCountry.code,
        name: newCountry.name,
        currency: newCountry.currency,
      },
    ]);

    setPricingPlans({
      ...pricingPlans,
      [newCountry.code]: {
        basic: parseFloat(newCountry.basic) || 0,
        pro: parseFloat(newCountry.pro) || 0,
        enterprise: parseFloat(newCountry.enterprise) || 0,
      },
    });

    setNewCountry({
      code: "",
      name: "",
      currency: "",
      basic: "",
      pro: "",
      enterprise: "",
    });
    
    toast.success(`${newCountry.name} added successfully`);
  };

  const handlePriceUpdate = (country, plan, value) => {
    setPricingPlans({
      ...pricingPlans,
      [country]: {
        ...pricingPlans[country],
        [plan]: parseFloat(value) || 0,
      },
    });
  };

  const handleRemoveCountry = (code) => {
    if (code === "US" || code === "GB" || code === "EU" || code === "IN") {
      toast.error("Cannot remove default countries");
      return;
    }

    setCountries(countries.filter((country) => country.code !== code));

    const updatedPricingPlans = { ...pricingPlans };
    delete updatedPricingPlans[code];
    setPricingPlans(updatedPricingPlans);

    if (selectedCountry === code) {
      setSelectedCountry("US");
    }
    
    toast.success("Country removed successfully");
  };

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
    setEditMode(false);
    toast(isAdminMode ? "Exited admin mode" : "Entered admin mode", {
      icon: "🔧",
    });
  };

  const saveChanges = () => {
    console.log("Countries:", countries);
    console.log("Pricing Plans:", pricingPlans);

    localStorage.setItem("pricingCountries", JSON.stringify(countries));
    localStorage.setItem("pricingPlans", JSON.stringify(pricingPlans));

    toast.success("Changes saved successfully!");
    setEditMode(false);
  };

  return (
    <div className="min-h-screen mt-10 bg-gray-50 dark:bg-gray-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">

      <Toaster position="top-right" toastOptions={{
        style: {
          border: '1px solid #22C55D',
          padding: '16px',
          color: '#171717',
        },
        success: {
          duration: 3000,
          style: {
            background: '#f0fdf4',
            border: '1px solid #22C55D',
          },
          iconTheme: {
            primary: '#22C55D',
            secondary: '#FFFFFF',
          },
        },
        error: {
          duration: 4000,
          style: {
            background: '#fef2f2',
            border: '1px solid #ef4444',
            color: '#b91c1c',
          },
          iconTheme: {
            primary: '#ef4444',
            secondary: '#FFFFFF',
          },
        },
      }} />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400">
            Choose the plan that's right for you
          </p>

          <button
            onClick={toggleAdminMode}
            className="mt-4 px-4 py-2 text-sm rounded-md text-white"
            style={{ backgroundColor: "#22C55D", borderColor: "transparent" }}
          >
            {isAdminMode ? "Exit Admin Mode" : "Admin Mode"}
          </button>
        </div>

        {isAdminMode && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Admin Control Panel
            </h3>

            <div className="flex justify-between mb-6">
              <button
                onClick={() => {
                  setEditMode(!editMode);
                  toast(editMode ? "Editing canceled" : "Now editing prices", {
                    icon: editMode ? "❌" : "✏️",
                  });
                }}
                className="px-4 py-2 text-sm rounded-md text-white hover:bg-green-700"
                style={{
                  backgroundColor: "#22C55D",
                  borderColor: "transparent",
                }}
              >
                {editMode ? "Cancel Editing" : "Edit Prices"}
              </button>

              {editMode && (
                <button
                  onClick={saveChanges}
                  className="px-4 py-2 text-sm rounded-md text-white hover:bg-green-700 flex items-center"
                  style={{
                    backgroundColor: "#22C55D",
                    borderColor: "transparent",
                  }}
                >
                  <Save className="h-4 w-4 mr-1" />
                  Save All Changes
                </button>
              )}
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <caption className="text-sm text-gray-500 dark:text-gray-400 p-2">
                  Manage pricing for all countries
                </caption>
                <thead
                  className="bg-gray-50 dark:bg-gray-900"
                  style={{ color: "#22C55D" }}
                >
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Country
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Code
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Currency
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Basic
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Pro
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Enterprise
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {countries.map((country) => (
                    <tr key={country.code}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {country.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {country.code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {country.currency}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {editMode ? (
                          <input
                            type="number"
                            step="0.01"
                            value={pricingPlans[country.code]?.basic || 0}
                            onChange={(e) =>
                              handlePriceUpdate(
                                country.code,
                                "basic",
                                e.target.value
                              )
                            }
                            className="w-24 p-1 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        ) : (
                          country.currency +
                          " " +
                          (pricingPlans[country.code]?.basic || 0)
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {editMode ? (
                          <input
                            type="number"
                            step="0.01"
                            value={pricingPlans[country.code]?.pro || 0}
                            onChange={(e) =>
                              handlePriceUpdate(
                                country.code,
                                "pro",
                                e.target.value
                              )
                            }
                            className="w-24 p-1 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        ) : (
                          country.currency +
                          " " +
                          (pricingPlans[country.code]?.pro || 0)
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {editMode ? (
                          <input
                            type="number"
                            step="0.01"
                            value={pricingPlans[country.code]?.enterprise || 0}
                            onChange={(e) =>
                              handlePriceUpdate(
                                country.code,
                                "enterprise",
                                e.target.value
                              )
                            }
                            className="w-24 p-1 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white"
                          />
                        ) : (
                          country.currency +
                          " " +
                          (pricingPlans[country.code]?.enterprise || 0)
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {editMode && (
                          <button
                            onClick={() => handleRemoveCountry(country.code)}
                            className="text-green-600 hover:text-green-800 dark:hover:text-green-400"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {editMode && (
              <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Add New Country
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Country Code (2 letters)
                    </label>
                    <input
                      type="text"
                      maxLength={2}
                      value={newCountry.code}
                      onChange={(e) =>
                        setNewCountry({
                          ...newCountry,
                          code: e.target.value.toUpperCase(),
                        })
                      }
                      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="e.g. JP"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Country Name
                    </label>
                    <input
                      type="text"
                      value={newCountry.name}
                      onChange={(e) =>
                        setNewCountry({ ...newCountry, name: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="e.g. Japan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Currency Code
                    </label>
                    <input
                      type="text"
                      value={newCountry.currency}
                      onChange={(e) =>
                        setNewCountry({
                          ...newCountry,
                          currency: e.target.value.toUpperCase(),
                        })
                      }
                      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="e.g. JPY"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Basic Plan Price
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={newCountry.basic}
                      onChange={(e) =>
                        setNewCountry({ ...newCountry, basic: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Pro Plan Price
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={newCountry.pro}
                      onChange={(e) =>
                        setNewCountry({ ...newCountry, pro: e.target.value })
                      }
                      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Enterprise Plan Price
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={newCountry.enterprise}
                      onChange={(e) =>
                        setNewCountry({
                          ...newCountry,
                          enterprise: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <button
                  onClick={handleAddCountry}
                  className="mt-4 px-4 py-2 rounded-md text-white hover:bg-green-700 flex items-center"
                  style={{
                    backgroundColor: "#22C55D",
                    borderColor: "transparent",
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Country
                </button>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="relative w-full max-w-xs">
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                const country = countries.find(c => c.code === e.target.value);
                toast(`Switched to ${country.name} pricing`, {
                  icon: "🌍",
                  duration: 2000,
                });
              }}
              className="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md pl-10 pr-8 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
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

        <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700 transition-all hover:shadow-md ${
                plan.popular ? "ring-2 ring-green-500" : ""
              }`}
            >
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                {plan.popular && (
                  <p className="mt-2 text-sm text-green-600">Most popular</p>
                )}
                <p className="mt-4 flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                    {
                      countries.find((c) => c.code === selectedCountry)
                        ?.currency
                    }
                    {pricingPlans[selectedCountry]?.[plan.priceKey] || 0}
                  </span>
                  <span className="ml-1 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </p>
                <button
                  onClick={() => {
                    toast.success(`Selected ${plan.name} plan!`);
                    navigate("/signup");
                  }}
                  style={{
                    backgroundColor: "#22C55D",
                    borderColor: "transparent",
                  }}
                  className="mt-6 sm:mt-8 block w-full border rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                  Get started
                </button>
              </div>
              <div className="pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 sm:px-6">
                <h4 className="text-xs font-semibold text-gray-900 dark:text-white tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;