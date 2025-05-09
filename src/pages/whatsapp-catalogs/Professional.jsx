import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const CatalogInterface = () => {
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

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const imageIn = {
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

  const features = [
    {
      title: "Custom Branding",
      description:
        "Apply your brand's colors, logo, and style to create a consistent shopping experience that reinforces your brand identity.",
    },
    {
      title: "Multiple Product Images",
      description:
        "Upload multiple images per product to show different angles, variations, and details, helping customers make informed decisions.",
    },
    {
      title: "Product Variants",
      description:
        "Display size, color, material, and other product variations with individual pricing and availability for each option.",
    },
    {
      title: "Call-to-Action Buttons",
      description:
        'Add customized buttons like "Add to Cart," "Buy Now," or "Inquire" to each product for seamless customer actions.',
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-[#f7fbf8] dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={staggerItems}
          >
            <motion.div variants={fadeInUp} className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Professional WhatsApp
                <br />
                Catalog Interface
              </h2>
            </motion.div>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex gap-4 mb-10"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div variants={fadeInUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-500 dark:bg-green-600 text-white font-medium rounded-md shadow-md hover:bg-green-600 dark:hover:bg-green-700 transition-colors"
              >
                Preview Catalog Interface
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={imageIn}
          >
            <div className="relative">
              <img
                src="https://wapikon.com/wp-content/uploads/2025/02/Untitled-design-2025-02-12T010917.106.png"
                alt="WhatsApp Catalog Interface Preview"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CatalogInterface;
