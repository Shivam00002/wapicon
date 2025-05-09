import React from "react";
import { motion } from "framer-motion";

const CreatingCatalog = () => {
  return (
    <div className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Creating Your WhatsApp Catalog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Four simple steps to set up your professional catalog
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-6 pb-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-medium mb-5">
                1
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Set Up Your Catalog
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Create your catalog structure with categories that match your
                business offerings.
              </p>
            </div>

            <div className="px-6 pb-6">
              <img
                src="https://cdn.prod.website-files.com/65f4803d6dc2aecf0f7a1be2/660567ee52ade253d261fad2_63ffaf4dc0833868150c451c_whatsapp-catalog-1.jpeg"
                alt="Set Up Your Catalog"
                className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-600"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-6 pb-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-medium mb-5">
                2
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Add Products/Services
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Upload product images, add detailed descriptions, set prices,
                and specify variants.
              </p>
            </div>

            <div className="px-6 pb-6">
              <img
                src="https://www.interakt.shop/wp-content/uploads/2023/03/Group-4429-768x586.webp"
                alt="Add Products/Services"
                className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-600"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-6 pb-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-medium mb-5">
                3
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Customize Display
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Organize your catalog layout, highlight featured items, and
                apply your branding.
              </p>
            </div>

            <div className="px-6 pb-6">
              <img
                src="https://www.tyntec.com/wp-content/uploads/2023/09/image_docs_wa_product_catalog_messages_003_1x-2.png"
                alt="Customize Display"
                className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-600"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-6 pb-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-medium mb-5">
                4
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Publish & Share
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Make your catalog live on WhatsApp and share it with customers
                directly via messaging.
              </p>
            </div>

            <div className="px-6 pb-6">
              <img
                src="https://www.omnichat.ai/wp-content/uploads/WA-Payment-%E8%8B%B1%E6%96%87_3.png"
                alt="Publish & Share"
                className="w-full h-auto rounded-md border border-gray-200 dark:border-gray-600"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CreatingCatalog;
