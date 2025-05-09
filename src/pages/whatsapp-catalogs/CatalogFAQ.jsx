import React from "react";
import { motion } from "framer-motion";

const CatalogFAQ = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-16 md:py-10 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Common Questions About WhatsApp Catalog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to know to get started
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="shadow-sm rounded-lg overflow-hidden"
            whileHover={{
              scale: 1.01,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-t-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                What's the difference between WhatsApp Catalog and a website?
              </h3>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-b-lg border border-gray-100 dark:border-gray-700 border-t-0">
              <p className="text-gray-600 dark:text-gray-300">
                WhatsApp Catalog operates directly within WhatsApp
                conversations, allowing customers to browse and purchase without
                switching apps. Unlike a website, it enables immediate two-way
                communication about products, real-time questions and answers,
                and a more personalized shopping experience. It's designed for
                convenience and conversational commerce rather than replacing a
                full website.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="shadow-sm rounded-lg overflow-hidden"
            whileHover={{
              scale: 1.01,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-t-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                How many products can I add to my WhatsApp Catalog?
              </h3>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-b-lg border border-gray-100 dark:border-gray-700 border-t-0">
              <p className="text-gray-600 dark:text-gray-300">
                Our WhatsApp Catalog solution supports unlimited products across
                unlimited categories. You can organize them into logical groups
                to help customers find what they're looking for easily. Each
                product can have multiple images, detailed descriptions, pricing
                options, and variants.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="shadow-sm rounded-lg overflow-hidden"
            whileHover={{
              scale: 1.01,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-t-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Can I process payments through WhatsApp Catalog?
              </h3>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-b-lg border border-gray-100 dark:border-gray-700 border-t-0">
              <p className="text-gray-600 dark:text-gray-300">
                Yes, our WhatsApp Catalog integrates with popular payment
                processors to enable secure in-chat payments. Customers can
                complete their purchase without leaving WhatsApp. We support
                credit/debit cards, digital wallets, and other payment methods
                depending on your region. For businesses that prefer alternative
                arrangements, we also support manual payment coordination like
                bank transfers.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="shadow-sm rounded-lg overflow-hidden"
            whileHover={{
              scale: 1.01,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-t-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                How do I keep my catalog updated with my inventory?
              </h3>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-b-lg border border-gray-100 dark:border-gray-700 border-t-0">
              <p className="text-gray-600 dark:text-gray-300">
                Our catalog management system offers several ways to keep your
                inventory synchronized. You can make manual updates through our
                easy-to-use dashboard, use our mobile app for on-the-go changes,
                or set up automatic syncing with your existing e-commerce
                platforms like Shopify, WooCommerce, or Magento. This ensures
                your WhatsApp Catalog always reflects accurate product
                availability and pricing.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CatalogFAQ;
