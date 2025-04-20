import React from "react";
import { motion } from "framer-motion";

const PricingHeader = () => {
  return (
    <div className="w-full bg-green-50 dark:bg-green-900/20 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-5"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
            Simple, Transparent Pricing
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include
            core WhatsApp Business features with no hidden fees.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingHeader;
