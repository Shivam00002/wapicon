import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const CatalogBenefits = () => {
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

  const benefits = [
    {
      title: "Sell Where Customers Already Are",
      description:
        "Reach your customers on WhatsApp, where they spend hours daily, eliminating the need for them to visit a separate website.",
    },
    {
      title: "Reduced Friction in Buying Process",
      description:
        "Allow customers to browse and purchase in a single conversation without switching between apps or filling out forms.",
    },
    {
      title: "Immediate Customer Support",
      description:
        "Answer product questions instantly in the same conversation where customers are browsing, increasing conversion rates.",
    },
    {
      title: "Higher Conversion Rates",
      description:
        "Businesses using WhatsApp Catalog see up to 40% higher conversion rates compared to traditional e-commerce channels.",
    },
    {
      title: "Real-time Inventory Management",
      description:
        "Update product availability instantly to prevent overselling and ensure customers see accurate information.",
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-[#f7fbf8] dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 md:mb-16"
        >
          Why Use WhatsApp Catalog?
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={staggerItems}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex gap-4 mb-8"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={imageIn}
          >
            <div className="relative">
              <img
                src="https://lh7-us.googleusercontent.com/MlTMf1uQRl48-bjJJm8IJlT9DWVW1PX9659NQAklMHfJKKHzkI3IC-qPrNKHiUJ2vECCH_n1B0UiOy6gvS5Jdh796qe4xkyNKbYHKCSjkCApMUeaoF1ftZSdf3YWd0-TtD-9FVuVyv10ELA1FRQNnYY"
                alt="Benefits of WhatsApp Catalog"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CatalogBenefits;
