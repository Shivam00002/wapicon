import React from "react";
import { motion } from "framer-motion";
import {
  Image,
  Folder,
  RefreshCw,
  ShoppingCart,
  Link2,
  MessageSquare,
} from "lucide-react";

const CatalogFeatures = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
      },
    },
  };

  const features = [
    {
      icon: <Image size={24} className="text-green-600 dark:text-green-400" />,
      title: "Visual Product Display",
      description:
        "Showcase your products with high-quality images, detailed descriptions, and pricing information in an organized catalog format.",
    },
    {
      icon: <Folder size={24} className="text-green-600 dark:text-green-400" />,
      title: "Product Categories",
      description:
        "Organize products into intuitive categories to help customers quickly find what they're looking for and browse related items.",
    },
    {
      icon: (
        <RefreshCw size={24} className="text-green-600 dark:text-green-400" />
      ),
      title: "Real-time Updates",
      description:
        "Update product information, pricing, and availability instantly. Changes reflect immediately across all customer interactions.",
    },
    {
      icon: (
        <ShoppingCart
          size={24}
          className="text-green-600 dark:text-green-400"
        />
      ),
      title: "In-Chat Shopping",
      description:
        "Enable customers to browse, select, and purchase products without ever leaving the WhatsApp conversation.",
    },
    {
      icon: <Link2 size={24} className="text-green-600 dark:text-green-400" />,
      title: "Shareable Catalog Links",
      description:
        "Create direct links to your catalog or specific products that can be shared in messages, on social media, or your website.",
    },
    {
      icon: (
        <MessageSquare
          size={24}
          className="text-green-600 dark:text-green-400"
        />
      ),
      title: "Integrated Messaging",
      description:
        "Allow customers to ask questions about specific products directly in the same chat where they're browsing your catalog.",
    },
  ];

  return (
    <div className="py-16 md:py-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            WhatsApp Catalog Core Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to showcase your products and services directly
            in WhatsApp
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CatalogFeatures;
