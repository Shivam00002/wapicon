import React, { useState, useEffect } from "react";
import { Shield, ChevronDown, Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const featureItems = [
    "No Code Chatbots",
    "Shopify/Woocomerce Integrations",
    "WhatsApp Business API",
    "WhatsApp Catalogs",
    "WhatsApp Flows",
  ];

  const resourceItems = [
    "Tutorials",
    "Knowledge Base",
    "Create Support Ticket",
  ];

  // Mobile-specific toggle functions (for click)
  const toggleFeatures = () => {
    setFeaturesOpen(!featuresOpen);
    if (resourcesOpen) setResourcesOpen(false);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
    if (featuresOpen) setFeaturesOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Check system preference on initial load
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <nav
      className={`${
        darkMode ? "dark bg-gray-900" : "bg-white"
      } shadow-sm py-4 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {darkMode ? (
                <div className="h-8 w-8 bg-green-400 rounded-full flex items-center justify-center">
                  <Moon size={16} className="text-gray-900" />
                </div>
              ) : (
                <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Sun size={16} className="text-white" />
                </div>
              )}
            </div>
            <span
              className={`ml-2 text-xl font-semibold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              wap!kon
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <div className="relative group">
              <button
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-green-400"
                    : "text-gray-600 hover:text-green-500"
                } flex items-center`}
              >
                Features
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div
                className={`absolute -left-16 z-10 mt-2 w-64 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
              >
                {featureItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`block px-6 py-1 text-base ${
                      darkMode
                        ? "text-gray-300 hover:text-green-400"
                        : "text-gray-800 hover:text-green-500"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-600 hover:text-green-500"
              }`}
            >
              Pricing
            </a>
            <a
              href="#"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-600 hover:text-green-500"
              }`}
            >
              Contact
            </a>
            <div className="relative group">
              <button
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-green-400"
                    : "text-gray-600 hover:text-green-500"
                } flex items-center`}
              >
                Resources
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div
                className={`absolute z-10 mt-2 -left-16 w-64 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
              >
                {resourceItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`block px-6 py-1 - text-base ${
                      darkMode
                        ? "text-gray-300 hover:text-green-400"
                        : "text-gray-800 hover:text-green-500"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-600 hover:text-green-500"
              } flex items-center`}
            >
              <Shield size={16} className="mr-1" />
              Free Sign Up
            </a>
            <a
              href="#"
              className={`${
                darkMode
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-green-500 hover:bg-green-600"
              } text-white px-4 py-2 rounded-md`}
            >
              Dashboard
            </a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-800 text-yellow-300"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-800 text-yellow-300"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-500 hover:text-green-500"
              } focus:outline-none`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden mt-2 px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            darkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          <div className="block">
            <button
              onClick={toggleFeatures}
              className={`w-full text-left px-3 py-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } flex items-center justify-between`}
            >
              <span>Features</span>
              <ChevronDown
                size={16}
                className={`ml-1 transform ${
                  featuresOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {featuresOpen && (
              <div className="pl-4 mt-1 space-y-1">
                {featureItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`block px-3 py-2 text-base ${
                      darkMode
                        ? "text-gray-400 hover:text-green-400"
                        : "text-gray-800 hover:text-green-500"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href="#"
            className={`block px-3 py-2 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Pricing
          </a>
          <a
            href="#"
            className={`block px-3 py-2 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Contact
          </a>
          <div className="block">
            <button
              onClick={toggleResources}
              className={`w-full text-left px-3 py-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } flex items-center justify-between`}
            >
              <span>Resources</span>
              <ChevronDown
                size={16}
                className={`ml-1 transform ${
                  resourcesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {resourcesOpen && (
              <div className="pl-4 mt-1 space-y-1">
                {resourceItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`block px-3 py-2 text-base ${
                      darkMode
                        ? "text-gray-400 hover:text-green-400"
                        : "text-gray-800 hover:text-green-500"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div
            className={`pt-4 border-t ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <a
              href="#"
              className={`block px-3 py-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } flex items-center`}
            >
              <Shield size={16} className="mr-1" />
              Free Sign Up
            </a>
            <a
              href="#"
              className={`block px-3 py-2 mt-1 ${
                darkMode ? "bg-green-600" : "bg-green-500"
              } text-white rounded-md text-center`}
            >
              Dashboard
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
