import React from "react";
import {
  CheckCircle,
  PhoneCall,
  MessageCircle,

} from "lucide-react";
import { motion } from "framer-motion";
import FAQSec from "./FAQSec";
import AppDemoSec from "./ApiAction";
import SimpleAPi from "./SimpleAPI";
import RegularTable from "./RegularTable";
import SuccessStory from "./SuccessSt";
import DashboardUi from "./Dashboard";
import MessageTyps from "./MessageTyp";
import Enterprise from "./Enterprise";
import WhyChooseWapikon from "./WhyChooseWapikon";
import KeyFeatures from "./KeyFeatures";

const BusinessAPI = () => {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full bg-green-50 md:mt-10 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <motion.div
              className="inline-flex items-center bg-white dark:bg-gray-800 rounded-full px-4 py-2 mb-4 shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-green-500 dark:text-green-400 flex items-center text-sm font-medium">
                <span className="text-green-500 dark:text-green-400 mr-2">
                  <MessageCircle size={18} />
                </span>
                Official WhatsApp Solution Provider
              </span>
            </motion.div>

            <motion.div className="space-y-4" variants={staggerContainer}>
              <motion.h1
                className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
                variants={fadeInUp}
              >
                Enterprise-Grade
              </motion.h1>
              <motion.h1
                className="text-4xl sm:text-5xl font-bold text-green-500 dark:text-green-400"
                variants={fadeInUp}
              >
                WhatsApp Business
              </motion.h1>
              <motion.h1
                className="text-4xl sm:text-5xl font-bold"
                variants={fadeInUp}
              >
                <span className="text-green-500 dark:text-green-400">API</span>
                <span className="text-gray-900 dark:text-white"> Solution</span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-xl"
              variants={fadeInUp}
            >
              Scale your customer communications with Wapikon's powerful
              WhatsApp Business API integration. Enable your business to connect
              with billions of customers on the world's most popular messaging
              platform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              variants={fadeInUp}
            >
              <motion.button
                className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Get Started
              </motion.button>
              <motion.button
                className="border border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 font-medium py-3 px-6 rounded-md transition-colors duration-300"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-10 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <div className="relative">
              <motion.img
                src="https://www.360dialog.com/wp-content/uploads/2023/07/WhatsApp-Business-API-enterprise-solution.svg"
                alt="WhatsApp Business API Interface"
                className="w-full h-auto rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />

              <motion.div
                className="absolute -top-6 right-12 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <motion.div
                      className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full"
                      whileHover={{ backgroundColor: "#f0fff4" }}
                    >
                      <PhoneCall
                        size={20}
                        className="text-gray-500 dark:text-gray-300"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Official API
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Meta-verified business solution
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <CheckCircle
                        size={20}
                        className="text-green-500 dark:text-green-400"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Unlimited Scale
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Send thousands of messages instantly
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <FAQSec/>
      <AppDemoSec/>
      <SimpleAPi/>
      <RegularTable/>
      <SuccessStory/>
      <DashboardUi/>
      <MessageTyps/>
      <Enterprise/>
      <WhyChooseWapikon/>
      <KeyFeatures/>
    </div>
  );
};

export default BusinessAPI;
