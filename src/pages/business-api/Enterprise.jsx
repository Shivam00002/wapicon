import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Server, Globe, Shield, Clock } from "lucide-react";

const Enterprise = () => {
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

  const imageFloatAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    },
  };

  const features = [
    {
      title: "Officially Verified by Meta",
      description:
        "Build trust with a green checkmark verification badge showing your business is officially approved by Meta to use the WhatsApp Business API.",
      icon: <CheckCircle />,
    },
    {
      title: "High-Volume Messaging",
      description:
        "Send thousands of messages simultaneously with high deliverability rates and real-time status tracking for each message.",
      icon: <Server />,
    },
    {
      title: "99.9% Uptime SLA",
      description:
        "Rely on our robust infrastructure with guaranteed uptime, ensuring your business communications never miss a beat.",
      icon: <Clock />,
    },
    {
      title: "Global Infrastructure",
      description:
        "Benefit from our globally distributed servers that ensure low latency and fast delivery to customers anywhere in the world.",
      icon: <Globe />,
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="mb-8" variants={fadeIn}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Enterprise-Grade Messaging
                <br />
                Infrastructure
              </h2>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  variants={fadeIn}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-8" variants={fadeIn}>
              <motion.button
                className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded-md transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageFloatAnimation}
          >
            <div className="relative max-w-md">
              <img
                src="https://wapikon.com/wp-content/uploads/2025/01/Feature-1.webp"
                alt="WhatsApp Business API Messaging Example"
                className="w-full h-auto rounded-lg shadow-lg"
              />

              <motion.div
                className="absolute -right-16 top-6 hidden lg:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full py-2 px-4 shadow-md">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    After retargetting
                  </span>
                </div>
                <svg
                  width="100"
                  height="80"
                  viewBox="0 0 100 80"
                  className="absolute -bottom-16 -left-10 text-yellow-400"
                  fill="none"
                >
                  <path
                    d="M20,10 Q60,10 80,50 T90,60"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M85,65 L90,60 L95,70"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -right-4 -top-4 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full py-1 px-3 shadow-md">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    After retargetting
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
