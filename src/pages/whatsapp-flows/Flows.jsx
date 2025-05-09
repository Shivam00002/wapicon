import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, Zap, FileEdit, Bot, Link, BarChart3 } from "lucide-react";

const FlowsFeatures = () => {
  const features = [
    {
      icon: (
        <RefreshCw className="text-green-600 dark:text-green-400" size={24} />
      ),
      title: "Dynamic Branching",
      description:
        "Create personalized paths based on customer responses, ensuring each interaction is relevant and contextual to their needs.",
    },
    {
      icon: <Zap className="text-green-600 dark:text-green-400" size={24} />,
      title: "No-Code Builder",
      description:
        "Easily design complex flows with our intuitive drag-and-drop interface — no technical skills required. Launch in minutes, not days.",
    },
    {
      icon: (
        <FileEdit className="text-green-600 dark:text-green-400" size={24} />
      ),
      title: "Form & Data Collection",
      description:
        "Gather customer information in a conversational manner with custom forms and data validation that integrates with your systems.",
    },
    {
      icon: <Bot className="text-green-600 dark:text-green-400" size={24} />,
      title: "AI-Enhanced Responses",
      description:
        "Leverage artificial intelligence to understand customer intent and provide intelligent, contextual responses automatically.",
    },
    {
      icon: <Link className="text-green-600 dark:text-green-400" size={24} />,
      title: "Seamless Integrations",
      description:
        "Connect with your CRM, e-commerce platform, and other business tools for real-time data exchange and updates.",
    },
    {
      icon: (
        <BarChart3 className="text-green-600 dark:text-green-400" size={24} />
      ),
      title: "Detailed Analytics",
      description:
        "Track engagement, drop-off points, and conversion rates to continuously optimize your flows for better performance.",
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
            Powerful Features for WhatsApp Flows
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Create dynamic, interactive conversation flows that engage your
            customers and drive results
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
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

export default FlowsFeatures;
