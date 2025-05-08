import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, Bot, Users, BarChart2, Shield, Link } from "lucide-react";

const KeyFeatures = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const features = [
    {
      title: "Unlimited Messaging",
      description:
        "Scale your communications with no limits on message volume. Send thousands of messages simultaneously for broadcasts, notifications, and customer support.",
      icon: (
        <RefreshCw size={20} className="text-blue-600 dark:text-blue-400" />
      ),
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Advanced Automation",
      description:
        "Connect your existing systems and automate customer journeys with our robust API integrations and webhook support.",
      icon: <Bot size={20} className="text-green-600 dark:text-green-400" />,
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      title: "Multi-Agent Support",
      description:
        "Enable unlimited team members to communicate with customers through your WhatsApp Business account simultaneously.",
      icon: (
        <Users size={20} className="text-indigo-600 dark:text-indigo-400" />
      ),
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain deep insights into message delivery, read rates, response times, and customer engagement metrics.",
      icon: (
        <BarChart2 size={20} className="text-purple-600 dark:text-purple-400" />
      ),
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      title: "Enterprise Security",
      description:
        "Benefit from end-to-end encryption, role-based access control, and compliance with global data protection regulations.",
      icon: <Shield size={20} className="text-red-600 dark:text-red-400" />,
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      title: "Seamless Integration",
      description:
        "Connect with your CRM, ERP, helpdesk, and other business systems through our extensive API and pre-built connectors.",
      icon: <Link size={20} className="text-teal-600 dark:text-teal-400" />,
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            WhatsApp Business API Key Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Unlock enterprise messaging capabilities with our powerful WhatsApp
            Business API solution
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center`}
                  >
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyFeatures;
