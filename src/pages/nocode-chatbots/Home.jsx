import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Check } from "lucide-react";
import Automation from "./Automation";
import BuilderSec from "./BuilderSec";
import ChatbotTemp from "./ChatbotTemp";
import Communication from "./Communication";
import BuildingWtsap from "./Buildingwtsp";
import ChooseUr from "./ChooseUr";
import SuccessStories from "./SuccessStories";
import IntegrationsGrid from "../../components/Integrations";
import AutomationComp from "./AutomationCmpo";
import WhatsAppFAQ from "./WtspFaQ";

const NoCodeChatboat = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-[#f7fbf8] dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 py-6 md:py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          <motion.div
            className="w-full lg:w-5/12 mb-10 lg:mb-0 px-1 sm:px-4"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 shadow-sm mb-4 sm:mb-6"
            >
              <MessageSquare
                className="text-green-500 dark:text-green-400"
                size={16}
              />
              <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 whitespace-normal sm:whitespace-nowrap">
                WhatsApp Business Solution
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white leading-tight"
            >
              <span className="text-gray-900 dark:text-white">
                Build No-Code
              </span>
              <span className="text-green-500 dark:text-green-400 block mt-1 sm:mt-2">
                {" "}
                WhatsApp Chatbots
              </span>
              <span className="text-gray-900 dark:text-white block mt-1 sm:mt-2">
                In Minutes
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-lg mb-6 sm:mb-10 text-gray-700 dark:text-gray-300 max-w-lg"
            >
              Automate customer service, lead generation, and sales with
              Wapikon's powerful no-code WhatsApp chatbot builder. Create
              intelligent conversational flows without writing a single line of
              code.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors text-sm sm:text-base"
              >
                Build Your Chatbot
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-green-500 dark:border-green-500 text-green-600 dark:text-green-400 font-medium rounded-md hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-sm sm:text-base"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-7/12 relative px-2 sm:px-4 md:px-6 lg:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              },
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute top-0 right-1/2 transform translate-x-1/2 md:translate-x-0 md:right-auto md:left-0 lg:left-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 sm:p-4 z-10 w-56 sm:w-64 md:w-72"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-1 sm:p-2">
                    <div className="text-gray-500 dark:text-gray-300 font-bold text-xs sm:text-sm">
                      +
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                    No-Code Builder
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Create complex flows with drag-and-drop simplicity
                </p>
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-1/2 transform translate-x-1/2 md:translate-x-0 md:right-0 lg:right-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 sm:p-4 z-10 w-56 sm:w-64 md:w-72"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1 sm:p-2">
                    <Check
                      className="text-green-500 dark:text-green-400"
                      size={14}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                    24/7 Automation
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Serve customers instantly any time of day
                </p>
              </motion.div>

              <motion.div
                className="relative mx-auto mt-16 sm:mt-18 md:mt-20 lg:mt-24 mb-16 sm:mb-18 md:mb-20 lg:mb-24 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="https://wapikon.com/wp-content/uploads/2025/03/Screenshot-2025-03-27-024751.png"
                  alt="WhatsApp Chatbot Flow Diagram"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <Automation />
      <BuilderSec />
      <ChatbotTemp />
      <Communication />
      <BuildingWtsap />
      <ChooseUr />
      <SuccessStories />
      <IntegrationsGrid />
      <AutomationComp />
      <WhatsAppFAQ />
    </div>
  );
};

export default NoCodeChatboat;
