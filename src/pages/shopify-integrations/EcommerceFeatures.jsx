import React from "react";
import { motion } from "framer-motion";
import {
  RefreshCw,
  ShoppingCart,
  Package,
  MessageSquare,
  BarChart2,
  Puzzle,
} from "lucide-react";

const EcommerceFeatures = () => {
  const features = [
    {
      id: "sync",
      icon: <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />,
      title: "Two-Way Sync",
      description:
        "Automatically sync products, orders, and customer data between your e-commerce platform and WhatsApp for seamless operations.",
    },
    {
      id: "cart",
      icon: <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />,
      title: "Abandoned Cart Recovery",
      description:
        "Send automated reminders to customers who leave items in their cart, with direct links to complete their purchase.",
    },
    {
      id: "order",
      icon: <Package className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />,
      title: "Order Status Updates",
      description:
        "Keep customers informed with automatic notifications for order confirmation, shipping, and delivery status updates.",
    },
    {
      id: "chatbot",
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />,
      title: "AI Chatbot Support",
      description:
        "Deploy intelligent chatbots to handle common customer queries, product recommendations, and basic support issues.",
    },
    {
      id: "analytics",
      icon: <BarChart2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
      title: "Analytics Dashboard",
      description:
        "Track message engagement, response rates, popular products, and conversion metrics in a comprehensive dashboard.",
    },
    {
      id: "nocode",
      icon: <Puzzle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />,
      title: "No-Code Integration",
      description:
        "Set up the entire integration without any coding knowledge using our intuitive dashboard and pre-built templates.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
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

  return (
    <div className="w-full mt-5 bg-white dark:bg-gray-900 py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            WhatsApp E-Commerce Integration Features
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to merge your online store with the world's most
            popular messaging platform
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-4 sm:p-5 md:p-6">
                <div className="mb-4 sm:mb-5">
                  <div className="bg-green-50 dark:bg-green-900/20 p-2 sm:p-3 rounded-lg inline-block">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EcommerceFeatures;
