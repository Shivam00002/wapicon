import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Smartphone,
  RefreshCw,
  Globe,
  Link,
  Calendar,
} from "lucide-react";

const CatalogManagement = () => {


  const managementFeatures = [
    {
      icon: (
        <BarChart className="text-green-600 dark:text-green-400" size={24} />
      ),
      title: "Analytics Dashboard",
      description:
        "Track catalog views, product popularity, customer engagement, and sales performance with detailed analytics.",
    },
    {
      icon: (
        <Smartphone className="text-green-600 dark:text-green-400" size={24} />
      ),
      title: "Mobile Management",
      description:
        "Update your catalog on-the-go with our mobile app. Add products, change prices, or manage inventory from anywhere.",
    },
    {
      icon: (
        <RefreshCw className="text-green-600 dark:text-green-400" size={24} />
      ),
      title: "Bulk Upload & Editing",
      description:
        "Import product lists, make batch updates, and manage multiple catalog items simultaneously for efficiency.",
    },
    {
      icon: <Globe className="text-green-600 dark:text-green-400" size={24} />,
      title: "Multi-language Support",
      description:
        "Create catalogs in multiple languages to serve international customers and expand your business globally.",
    },
    {
      icon: <Link className="text-green-600 dark:text-green-400" size={24} />,
      title: "E-commerce Integration",
      description:
        "Sync your WhatsApp Catalog with existing online stores like Shopify, WooCommerce, or Magento for unified inventory.",
    },
    {
      icon: (
        <Calendar className="text-green-600 dark:text-green-400" size={24} />
      ),
      title: "Scheduled Updates",
      description:
        "Plan catalog changes in advance, such as seasonal collections, limited-time offers, or holiday promotions.",
    },
  ];

  return (
    <div className="py-16 md:py-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Advanced Catalog Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Powerful tools to manage and optimize your WhatsApp Catalog
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {managementFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogManagement;
