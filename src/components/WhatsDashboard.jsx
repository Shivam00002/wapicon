import React from "react";
import { motion } from "framer-motion";

const DashboardImg = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 p-3 sm:p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 sm:mb-6 md:mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-3xl md:whitespace-nowrap text-gray-900  lg:text-5xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white px-2">
            Reach and notify customers on WhatsApp at scale
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 px-2">
            Reach your entire customers base on WhatsApp in a single click at
            lightning speed
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full flex justify-center items-center"
        >
          <img
            src="https://wapikon.com/wp-content/uploads/2025/03/Untitled-design-3.png"
            alt="WhatsApp Dashboard Interface"
            className="w-full max-w-full md:max-w-5xl lg:max-w-6xl rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardImg;
