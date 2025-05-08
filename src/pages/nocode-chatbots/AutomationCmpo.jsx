import React from "react";
import { motion } from "framer-motion";

const AutomationComp = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const buttonHover = {
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.2 } },
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-100 dark:bg-green-900/20 rounded-full filter blur-3xl opacity-20 z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
          whileHover="hover"
          whileTap="tap"
          variants={buttonHover}
        >
          Interactive Demo
        </motion.button>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              See WhatsApp Automation in Action
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Experience how your chatbot will look and function on WhatsApp.
              Our interactive demo showcases the intuitive conversation flows,
              quick responses, and seamless business process automation.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Discover how your customers can get instant support, find
              products, and complete transactions—all without leaving their
              favorite messaging app.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 shadow-md"
                whileHover="hover"
                whileTap="tap"
                variants={buttonHover}
              >
                Watch Demo
              </motion.button>

              <motion.button
                className="border border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 font-medium py-3 px-8 rounded-md transition-colors duration-300"
                whileHover="hover"
                whileTap="tap"
                variants={buttonHover}
              >
                Request Live Demo
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <motion.img
              src="https://wapikon.com/wp-content/uploads/2025/02/Untitled-design-2025-02-12T010120.521.png"
              alt="WhatsApp Automation Demo Interface"
              className="w-full h-auto rounded-lg shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />

            <motion.div
              className="absolute -left-6 -bottom-6 w-12 h-12 grid grid-cols-2 gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-green-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                />
              ))}
            </motion.div>

            <motion.div
              className="absolute -right-8 -top-8 text-blue-300 dark:text-blue-400 text-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              ✦
            </motion.div>
            <motion.div
              className="absolute right-12 bottom-8 text-blue-300 dark:text-blue-400 text-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              ✦
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AutomationComp;
