import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, FileText } from "lucide-react";

const FeatureCards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70 },
    },
  };

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-around gap-4 md:gap-6 mb-8 sm:mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2"
          >
            <CheckCircle className="text-green-500 h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-base sm:text-lg md:text-xl font-medium text-gray-800 dark:text-white">
              Announce new product updates
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2"
          >
            <CheckCircle className="text-green-500 h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-base sm:text-lg md:text-xl font-medium text-gray-800 dark:text-white">
              Re-engage and stay on top of mind
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2"
          >
            <CheckCircle className="text-green-500 h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-base sm:text-lg md:text-xl font-medium text-gray-800 dark:text-white">
              Send targeted communication
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <CheckCircle className="text-green-500" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white">
              Green tick
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Get your business verified as a brand on WhatsApp
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <CheckCircle className="text-green-500" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white">
              Bulk broadcast
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Send personalised messages directly to all your customers
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Users className="text-green-500" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white">
              Customer segmentation
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Create groups and run personalised campaigns
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <FileText className="text-green-500" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white">
              Catalogues
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Send custom catalogues to your customers
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureCards;
