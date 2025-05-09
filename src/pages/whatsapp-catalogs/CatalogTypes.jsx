import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ShoppingBag, Utensils, Briefcase } from "lucide-react";

const CatalogTypes = () => {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const catalogTypes = [
    {
      icon: (
        <ShoppingBag className="text-green-600 dark:text-green-400" size={28} />
      ),
      title: "Standard Product Catalog",
      description:
        "Perfect for retail businesses selling physical products. Display products with images, descriptions, prices, and variations.",
      features: [
        "Multiple product categories",
        "Product variations (size, color, etc.)",
        "Inventory management",
      ],
    },
    {
      icon: (
        <Utensils className="text-green-600 dark:text-green-400" size={28} />
      ),
      title: "Food & Menu Catalog",
      description:
        "Designed for restaurants, cafes, and food businesses. Showcase your menu items with appetizing images and detailed descriptions.",
      features: [
        "Menu categories (appetizers, mains, etc.)",
        "Dietary information and allergens",
        "Special offers and combos",
      ],
    },
    {
      icon: (
        <Briefcase className="text-green-600 dark:text-green-400" size={28} />
      ),
      title: "Service Catalog",
      description:
        "Ideal for service-based businesses like salons, repair shops, and consultants. Present your services with clear descriptions and pricing.",
      features: [
        "Service duration and availability",
        "Package options and add-ons",
        "Booking functionality",
      ],
    },
  ];

  return (
    <div className="py-16 md:py-10 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Three Powerful Catalog Types
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the right catalog format for your business needs
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {catalogTypes.map((type, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 p-8 transition-all duration-300 hover:shadow-md flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-6">
                {type.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {type.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-8 flex-grow">
                {type.description}
              </p>

              <div className="space-y-3 mb-8">
                {type.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 border-2 border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 font-medium rounded-md hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-center mt-auto"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CatalogTypes;
