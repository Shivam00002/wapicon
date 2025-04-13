import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const WhatsAppBusinessHero = () => {
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
    <div className="min-h-screen w-full bg-[#E9F7EE] mt-8 dark:bg-gray-900 transition-colors duration-300">
      <div className="container  mx-auto px-4 py-12 md:py-14 lg:py-18">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="w-full lg:w-1/2 mb-10 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm mb-6"
            >
              <MessageSquare className="text-green-500" size={20} />
              <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">
                Official WhatsApp Solution Provider
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white"
            >
              Enterprise-Grade
              <span className="text-green-500 block"> WhatsApp Business</span>
              <span className="text-gray-800 dark:text-white">API</span>{" "}
              <span className="text-gray-900 dark:text-gray-100">Solution</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg mb-8 text-gray-700 dark:text-gray-300"
            >
              Use the official WhatsApp API with Wapikon and avoid bans. Enjoy
              the lowest costs 💰 and 0% markup fees on Meta API, unlike others
              who charge 20-25% more.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-green-500 text-green-600 dark:text-green-400 font-medium rounded-md hover:bg-green-50 dark:hover:bg-gray-800 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative px-4 md:px-8 lg:px-2 xl:px-0"
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
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src="https://www.360dialog.com/wp-content/uploads/2023/07/WhatsApp-Business-API-enterprise-solution.svg"
                alt="WhatsApp Business API Enterprise Solution"
                className="w-full h-auto max-w-xl md:max-w-2xl lg:max-w-full xl:max-w-3xl mx-auto object-contain"
                style={{ maxHeight: "85vh" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppBusinessHero;
