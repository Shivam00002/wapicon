import React from "react";
import { motion } from "framer-motion";
import { Play, Calendar } from "lucide-react";

const CatalogDemo = () => {
  return (
    <div className="py-16 md:py-24 bg-[#f7fbf8] dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="w-full lg:w-1/2 pr-0 lg:pr-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="absolute top-4 right-4">
              <div className="px-4 py-2 bg-green-500 dark:bg-green-600 text-white rounded-full font-medium">
                Interactive Demo
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              See WhatsApp Catalog in Action
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Experience how your catalog will look and function on WhatsApp.
              Our interactive demo showcases the intuitive browsing experience,
              product details view, and seamless purchasing process.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Find out how your customers can discover your products, ask
              questions, and make purchases—all without leaving the WhatsApp
              conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-green-500 dark:bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-600 dark:hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <Play size={18} className="mr-2" />
                Watch Demo
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 font-medium rounded-md shadow-sm border-2 border-green-500 dark:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center justify-center"
              >
                <Calendar size={18} className="mr-2" />
                Request Live Tour
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 -left-4 -bottom-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg z-0"></div>
              <img
                src="https://wapikon.com/wp-content/uploads/2025/02/Untitled-design-2025-02-12T010917.106.png"
                alt="WhatsApp Catalog Demo"
                className="relative z-10 w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CatalogDemo;
