import React from "react";
import { motion } from "framer-motion";
import { FileText, PhoneCall } from "lucide-react";

const AppDemoSec = () => {
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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
  };

  const floatingCardVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                See WhatsApp Business API
                <br />
                in Action
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Schedule a personalized demo to see how Wapikon's WhatsApp
                Business API solution can transform your customer
                communications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our product specialists will walk you through the platform's
                capabilities, integration options, and how it can address your
                specific business needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <PhoneCall size={18} className="mr-2" />
                Request Demo
              </motion.button>

              <motion.button
                className="border border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <FileText size={18} className="mr-2" />
                View API Documentation
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="relative"
          >
            <div className="relative bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-6 pb-12 sm:p-8 sm:pb-16">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Everything You Need to Know About{" "}
                <span className="text-green-600 dark:text-green-400">
                  WhatsApp Business Interactive Buttons
                </span>
              </h3>

              <motion.div
                className="relative mt-8"
                initial="initial"
                animate="animate"
                variants={floatingCardVariants}
              >
                <img
                  src="https://www.interakt.shop/wp-content/uploads/2022/08/Buttons.jpeg"
                  alt="WhatsApp Business Interactive Buttons Demo"
                  className="w-full h-auto rounded-lg shadow-lg"
                />

                <motion.div
                  className="absolute -top-5 -right-5 bg-green-500 dark:bg-green-600 text-white font-medium py-2 px-6 rounded-full shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppDemoSec;
