import React, { useState, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSelector = ({ isDarkMode, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [mounted, setMounted] = useState(false);

  const languages = [
    { name: "English", code: "en" },
    { name: "हिन्दी (Hindi)", code: "hi" },
    { name: "العربية (Arabic)", code: "ar" },
    { name: "ਪੰਜਾਬੀ (Punjabi)", code: "pa" },
    { name: "ગુજરાતી (Gujarati)", code: "gu" },
    { name: "मराठी (Marathi)", code: "mr" },
    { name: "తెలుగు (Telugu)", code: "te" },
    { name: "Español (Spanish)", code: "es" },
    { name: "Français (French)", code: "fr" },
    { name: "Русский (Russian)", code: "ru" },
    { name: "Deutsch (German)", code: "de" },
  ];
  
  
  useEffect(() => {
    setMounted(true);

    const existingScript = document.getElementById("google-translate-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,ar,pa,gu,mr,te,es,fr,ru,de",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }

    const removeGoogleTranslateBar = () => {
      const interval = setInterval(() => {
        const googleFrame = document.querySelector(".goog-te-banner-frame");
        const googleContainer = document.querySelector(".goog-te-gadget");
        const googleBody = document.querySelector("body");

        if (googleFrame) googleFrame.style.display = "none";
        if (googleContainer) googleContainer.style.display = "none";
        if (googleBody) googleBody.style.top = "0px";
      }, 500);

      setTimeout(() => clearInterval(interval), 3000);
    };

    setTimeout(removeGoogleTranslateBar, 1000);
  }, []);

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language.name);
    setIsOpen(false);

    setTimeout(() => {
      const translateDropdown = document.querySelector(".goog-te-combo");
      if (translateDropdown) {
        translateDropdown.value = language.code;
        translateDropdown.dispatchEvent(new Event("change"));
      }
    }, 100);
  };

  if (!mounted) return null;

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  return (
    <div className="language-selector relative">
      {isMobile ? (
        <div
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className="relative"
        >
          <button
            className={`p-2 rounded-full ${
              isDarkMode
                ? "bg-gray-800 text-gray-300"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <Globe size={20} />
          </button>
        </div>
      ) : (
        <div
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className="relative"
        >
          <button
            className={`flex items-center px-3 py-1 rounded-md border ${
              isDarkMode
                ? "border-gray-700 text-gray-300 hover:text-green-400"
                : "border-gray-200 text-gray-600 hover:text-green-500"
            }`}
          >
            <Globe size={16} className="mr-1" />
            <span className="mx-1">{selectedLanguage}</span>
            <ChevronDown
              size={14}
              className={`ml-1 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            className={`absolute right-0 z-20 mt-2 w-48 rounded-md shadow-lg overflow-hidden ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
            style={{
              border: isDarkMode ? "1px solid #374151" : "1px solid #e5e7eb",
            }}
          >
            <div className="py-1">
              {languages.map((language, index) => (
                <button
                  key={index}
                  onClick={() => changeLanguage(language)}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                    selectedLanguage === language.name
                      ? isDarkMode
                        ? "bg-gray-700 text-green-400"
                        : "bg-green-50 text-green-600"
                      : isDarkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onMouseOver={() => (document.body.style.cursor = "pointer")}
                  onMouseOut={() => (document.body.style.cursor = "default")}
                >
                  {language.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div id="google_translate_element" className="hidden"></div>

      <style jsx global>{`
        .goog-te-banner-frame {
          display: none !important;
        }
        .goog-te-gadget {
          display: none !important;
        }
        body {
          top: 0px !important;
        }
        .skiptranslate {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector;
