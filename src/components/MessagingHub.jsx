import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const MessagingHub = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 p-4 sm:p-6 md:p-8 lg:p-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
            <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <div className="h-3 w-3 bg-black dark:bg-white rounded-full mr-2"></div>
              <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                Omni-Channel Shared Inbox
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              All Conversations in One Place
            </h1>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed">
              Wapikon's Advanced Shared Inbox centralizes customer interactions
              from{" "}
              <span className="font-semibold">
                WhatsApp, Facebook Messenger, Instagram DM, Telegram
              </span>{" "}
              into one unified dashboard. Manage all chats efficiently without
              switching between platforms.
            </p>

            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Seamless Agent Management
              </h2>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check
                  className="text-green-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Assign conversations, track performance, and enable
                  multi-agent collaboration for faster resolutions.
                </p>
              </div>
            </div>

            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Smart Routing & AI Assistance
              </h2>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check
                  className="text-green-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Automatically transfer chats to the right agent and leverage
                  AI-powered suggestions to enhance response speed and accuracy.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center lg:justify-end relative">
            <motion.div
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://wapikon.com/wp-content/uploads/2025/03/Untitled-design-1.png"
                alt="Wapikon messaging hub diagram"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingHub;
