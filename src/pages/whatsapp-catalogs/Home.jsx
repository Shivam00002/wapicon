import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  ArrowRight,
  Check,
  Plus,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";
import CatalogFeatures from "./CatelogFea";
import CatalogInterface from "./Professional";
import ProductsDisplay from "./Products";
import CatalogBenefits from "./WhyUse";
import CatalogTypes from "./CatalogTypes";
import CreatingCatalog from "./CatelogStep";
import SuccessStories from "./CatalogSuc";
import CatalogManagement from "./CatalogManagement";
import CatalogDemo from "./CatalogAction";
import CatalogFAQ from "./CatalogFAQ";

const WhatsAppCatalog = () => {
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

  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen w-full bg-[#f7fbf8] dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 shadow-sm mb-6"
            >
              <ShoppingCart
                className="text-green-500 dark:text-green-400"
                size={16}
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                WhatsApp Business Solution
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white leading-tight"
            >
              <span className="text-gray-900 dark:text-white">Create a</span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Professional
              </span>
              <br />
              <span className="text-green-500 dark:text-green-400">
                WhatsApp Catalog
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                For Your Business
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-xl"
            >
              Turn WhatsApp into your digital storefront with an interactive
              product catalog that lets customers browse, inquire, and purchase
              your products directly where they already communicate.
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
                Create Your Catalog
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-green-500 text-green-600 dark:text-green-400 dark:border-green-500 font-medium rounded-md hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
              >
                View Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative"
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
            <div className="relative">
              <motion.div
                className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 z-10 w-64 md:w-72"
                animate={floatAnimation}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2">
                    <Plus
                      className="text-gray-500 dark:text-gray-400"
                      size={16}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Visual Catalog
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Show your products with images and details
                </p>
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 z-10 w-64 md:w-72"
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
                    <Check
                      className="text-green-500 dark:text-green-400"
                      size={16}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    In-Chat Shopping
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Customers buy without leaving WhatsApp
                </p>
              </motion.div>

              <motion.div
                className="relative mx-auto max-w-lg"
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <img
                  src="https://wapikon.com/wp-content/uploads/2025/02/Untitled-design-2025-02-12T004724.128.png"
                  alt="WhatsApp Catalog Showcase"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <CatalogFeatures />
      <CatalogInterface />
      <ProductsDisplay />
      <CatalogBenefits />
      <CatalogTypes />
      <CreatingCatalog />
      <SuccessStories />
      <CatalogManagement />
      <CatalogDemo />
      <CatalogFAQ />
    </div>
  );
};

export default WhatsAppCatalog;
