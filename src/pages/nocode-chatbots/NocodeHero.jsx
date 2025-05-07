import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Check } from "lucide-react";
import Automation from "./Automation";
import BuilderSec from "./BuilderSec";
import ChatbotTemp from "./ChatbotTemp";
import Communication from "./Communication";

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
      <div className="container mx-auto px-4 py-8 md:py-6 lg:py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          <motion.div
            className="w-full lg:w-5/12 mb-16 lg:mb-0 px-1 sm:px-4"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 shadow-sm mb-6"
            >
              <MessageSquare
                className="text-green-500 dark:text-green-400"
                size={18}
              />
              <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 whitespace-normal sm:whitespace-nowrap">
                WhatsApp Business Solution
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white leading-tight"
            >
              <span className="text-gray-900 dark:text-white">
                Build No-Code
              </span>
              <span className="text-green-500 dark:text-green-400 block mt-2">
                {" "}
                WhatsApp Chatbots
              </span>
              <span className="text-gray-900 dark:text-white block mt-2">
                In Minutes
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg mb-10 text-gray-700 dark:text-gray-300 max-w-lg"
            >
              Automate customer service, lead generation, and sales with
              Wapikon's powerful no-code WhatsApp chatbot builder. Create
              intelligent conversational flows without writing a single line of
              code.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors"
              >
                Build Your Chatbot
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-green-500 dark:border-green-500 text-green-600 dark:text-green-400 font-medium rounded-md hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-7/12 relative px-4 md:px-6 lg:px-0"
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
                className="absolute top-2 sm:top-4 md:top-0 right-1/2 transform translate-x-1/2 md:translate-x-0 md:right-auto md:left-0 lg:left-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 z-10 w-64 sm:w-72"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2">
                    <div className="text-gray-500 dark:text-gray-300 font-bold">
                      +
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    No-Code Builder
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Create complex flows with drag-and-drop simplicity
                </p>
              </motion.div>

              <motion.div
                className="absolute bottom-4 sm:bottom-8 md:bottom-0 right-1/2 transform translate-x-1/2 md:translate-x-0 md:right-0 lg:right-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 z-10 w-64 sm:w-72"
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
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2">
                    <Check
                      className="text-green-500 dark:text-green-400"
                      size={16}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    24/7 Automation
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Serve customers instantly any time of day
                </p>
              </motion.div>

              <motion.div
                className="relative mx-auto mt-20 mb-20 md:mt-24 md:mb-24 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
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
    </div>
  );
};

export default NoCodeChatboat;
