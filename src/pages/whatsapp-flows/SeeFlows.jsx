import React from "react";
import { motion } from "framer-motion";
import { Play, Calendar } from "lucide-react";

const FlowsDemo = () => {
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

  const imageAnimation = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <div className="py-10 sm:py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10 lg:gap-12">
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
            >
              See WhatsApp Flows in Action
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6"
            >
              Experience firsthand how our WhatsApp Flows can transform your
              customer interactions. Our demo showcases the powerful
              capabilities and ease of use that will help your business
              communicate more effectively.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8"
            >
              From automated customer support to interactive product catalogs,
              see how flows can be customized to meet your specific business
              needs and drive meaningful engagement with your customers.
            </motion.p>

            <motion.div variants={fadeInUp} className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 bg-green-500 dark:bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-600 dark:hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <Calendar size={18} className="mr-2" />
                Request a Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-8 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={imageAnimation}
          >
            <div className="relative max-w-lg mx-auto lg:ml-auto lg:mr-0">
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20">
                <div className="px-3 sm:px-4 py-1 sm:py-2 bg-green-500 dark:bg-green-600 text-white rounded-full text-sm sm:text-base font-medium">
                  Live Demo
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <img
                  src="https://www.cm.com/cdn/web/en/blog/content/microsoftteams-image-37.png"
                  alt="WhatsApp Flows Demo"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FlowsDemo;
