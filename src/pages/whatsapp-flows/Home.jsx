import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Play, Clock } from "lucide-react";
import FlowsFeatures from "./Flows";
import FlowsWork from "./FlowsWork";
import FlowsBenefits from "./FlowsBenefits";
import FlowsAction from "./FlowsAction";
import FlowsDemo from "./SeeFlows";
import FlowsCTA from "./GetStart";

const WhatsAppFlows = () => {
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
        staggerChildren: 0.15,
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
    <div className="py-16 md:py-24 bg-[#f7fbf8] dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="w-full lg:w-1/2 mb-10 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 shadow-sm mb-6"
            >
              <MessageSquare
                className="text-green-500 dark:text-green-400"
                size={16}
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                WhatsApp Business Solution
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              <span className="text-gray-900 dark:text-white">
                Create Interactive{" "}
              </span>
              <br />
              <span className="text-green-500 dark:text-green-400">
                WhatsApp Flows{" "}
              </span>
              <span className="text-gray-900 dark:text-white">For</span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Your Business
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-xl"
            >
              Guide your customers through personalized journeys with no-code,
              interactive conversation flows that convert prospects, automate
              support, and deliver exceptional experiences.
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
                Start Building Flows
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-green-500 text-green-600 dark:text-green-400 dark:border-green-500 font-medium rounded-md hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center justify-center"
              >
                <Play size={18} className="mr-2" />
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative"
            initial="hidden"
            animate="visible"
            variants={imageAnimation}
          >
            <div className="relative">
              <motion.div
                className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 z-10 w-60"
                animate={{
                  y: [0, -8, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2">
                    <Clock
                      className="text-gray-500 dark:text-gray-400"
                      size={16}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    24/7 Support
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Automate responses to common questions
                </p>
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 z-10 w-60"
                animate={{
                  y: [0, 8, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2">
                    <MessageSquare
                      className="text-green-500 dark:text-green-400"
                      size={16}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Increased Conversion
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Guide customers to purchase
                </p>
              </motion.div>

              <img
                src="https://developers.sinch.com/10c7c6409df68cf4019d258555a906c8/whatsapp_flows.png"
                alt="WhatsApp Flows Demonstration"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <FlowsFeatures />
      <FlowsWork />
      <FlowsBenefits />
      <FlowsAction />
      <FlowsDemo />
      <FlowsCTA />
    </div>
  );
};

export default WhatsAppFlows;
