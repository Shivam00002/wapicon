import React, { useState, useEffect } from "react";
import { Shield, ChevronDown, Menu, X, Sun, Moon, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSelector from "./Language";
import dayLogo from "./logo/dayLogo.png";
import nightLogo from "./logo/nightLogo.png";

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

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const logoVariants = {
    initial: { rotate: 0 },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  const navItemVariants = {
    hover: {
      y: -2,
      color: darkMode ? "#34d399" : "#10b981",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <nav
      className={`${
        darkMode ? "dark bg-gray-900" : "bg-white"
      } shadow-sm py-3 md:py-4 transition-colors duration-300 fixed top-0 left-0 right-0 z-50 w-full`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              className="flex-shrink-0"
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
            >
              <img
                src={darkMode ? dayLogo : nightLogo}
                alt="wap!kon logo"
                className="h-7 md:h-8 w-auto"
              />
            </motion.div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            <div className="relative group">
              <motion.button
                variants={navItemVariants}
                whileHover="hover"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-green-400"
                    : "text-gray-600 hover:text-green-500"
                } flex items-center text-sm lg:text-base`}
              >
                Features
                <motion.div
                  animate={{ rotate: featuresOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} className="ml-1" />
                </motion.div>
              </motion.button>
              <motion.div
                className={`absolute -left-4 md:-left-16 z-10 mt-2 w-48 md:w-64 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-md shadow-lg py-1 transition-all duration-300`}
                initial="hidden"
                whileHover="visible"
                exit="exit"
                variants={dropdownVariants}
              >
                {featureItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`block px-4 md:px-6 py-1 text-sm md:text-base ${
                      darkMode
                        ? "text-gray-300 hover:text-green-400"
                        : "text-gray-800 hover:text-green-500"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </div>
            <motion.a
              href="#"
              variants={navItemVariants}
              whileHover="hover"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-600 hover:text-green-500"
              } text-sm lg:text-base`}
            >
              Pricing
            </motion.a>
            <motion.a
              href="#"
              variants={navItemVariants}
              whileHover="hover"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-600 hover:text-green-500"
              } text-sm lg:text-base`}
            >
              Contact
            </motion.a>
            <div className="relative group">
              <motion.button
                variants={navItemVariants}
                whileHover="hover"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-green-400"
                    : "text-gray-600 hover:text-green-500"
                } flex items-center text-sm lg:text-base`}
              >
                Resources
                <motion.div
                  animate={{ rotate: resourcesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} className="ml-1" />
                </motion.div>
              </motion.button>
              <motion.div
                className={`absolute z-10 mt-2 -left-8 md:-left-16 w-48 md:w-64 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-md shadow-lg py-1 transition-all duration-300`}
                initial="hidden"
                whileHover="visible"
                exit="exit"
                variants={dropdownVariants}
              >
                {resourceItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`block px-4 md:px-6 py-1 text-sm md:text-base ${
                      darkMode
                        ? "text-gray-300 hover:text-green-400"
                        : "text-gray-800 hover:text-green-500"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <LanguageSelector isDarkMode={darkMode} />

            <motion.a
              href="#"
              variants={navItemVariants}
              whileHover="hover"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-600 hover:text-green-500"
              } flex items-center text-sm lg:text-base whitespace-nowrap`}
            >
              <Shield size={16} className="mr-1" />
              Free Sign Up
            </motion.a>
            <motion.a
              href="#"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className={`${
                darkMode
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-green-500 hover:bg-green-600"
              } text-white px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base`}
            >
              Dashboard
            </motion.a>
            <motion.button
              onClick={toggleDarkMode}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-800 text-yellow-300"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector isDarkMode={darkMode} isMobile={true} />

            <motion.button
              onClick={toggleDarkMode}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-800 text-yellow-300"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>
            <motion.button
              onClick={toggleMobileMenu}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className={`${
                darkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-500 hover:text-green-500"
              } focus:outline-none`}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className={`md:hidden mt-2 px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
              darkMode ? "bg-gray-900" : "bg-white"
            } overflow-y-auto max-h-[calc(100vh-4rem)] shadow-lg`}
          >
            <div className="block">
              <motion.button
                onClick={toggleFeatures}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left px-3 py-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } flex items-center justify-between`}
              >
                <span>Features</span>
                <motion.div
                  animate={{ rotate: featuresOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} className="ml-1" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {featuresOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    className="pl-4 mt-1 space-y-1"
                  >
                    {featureItems.map((item, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        className={`block px-3 py-2 text-base ${
                          darkMode
                            ? "text-gray-400 hover:text-green-400"
                            : "text-gray-800 hover:text-green-500"
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        whileHover={{ x: 5 }}
                      >
                        {item}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`block px-3 py-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Pricing
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`block px-3 py-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Contact
            </motion.a>
            <div className="block">
              <motion.button
                onClick={toggleResources}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left px-3 py-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } flex items-center justify-between`}
              >
                <span>Resources</span>
                <motion.div
                  animate={{ rotate: resourcesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} className="ml-1" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    className="pl-4 mt-1 space-y-1"
                  >
                    {resourceItems.map((item, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        className={`block px-3 py-2 text-base ${
                          darkMode
                            ? "text-gray-400 hover:text-green-400"
                            : "text-gray-800 hover:text-green-500"
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        whileHover={{ x: 5 }}
                      >
                        {item}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className={`pt-4 border-t ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`block px-3 py-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } flex items-center`}
              >
                <Shield size={16} className="mr-1" />
                Free Sign Up
              </motion.a>
              <motion.a
                href="#"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className={`block px-3 py-2 mt-1 ${
                  darkMode ? "bg-green-600" : "bg-green-500"
                } text-white rounded-md text-center`}
              >
                Dashboard
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
