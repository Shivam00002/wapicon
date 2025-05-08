import React from "react";
import { motion } from "framer-motion";

const ChooseUr = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const chatbotTypes = [
    {
      id: "sales",
      icon: "🛍️",
      title: "Sales & Marketing Bot",
      description:
        "Generate and nurture leads, recommend products, and guide customers through the sales funnel with personalized conversations.",
      features: [
        "Product recommendation engine",
        "Lead qualification flows",
        "Promotional campaign manager",
      ],
    },
    {
      id: "support",
      icon: "🎧",
      title: "Customer Support Bot",
      description:
        "Provide instant assistance for common questions, troubleshoot issues, and escalate complex problems to your support team when needed.",
      features: [
        "Intelligent FAQ handling",
        "Ticket creation and tracking",
        "Smart human handoff system",
      ],
    },
    {
      id: "transactional",
      icon: "📱",
      title: "Transactional Bot",
      description:
        "Handle bookings, reservations, orders, and payments directly through WhatsApp for a seamless customer experience.",
      features: [
        "Secure payment processing",
        "Booking/appointment scheduling",
        "Order status tracking",
      ],
    },
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Ideal Chatbot Type
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Different solutions for different business needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {chatbotTypes.map((type) => (
            <motion.div
              key={type.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-8"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center text-3xl">
                  {type.icon}
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {type.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-8 text-base">
                {type.description}
              </p>

              <div className="space-y-4 mb-8">
                {type.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-300">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <motion.button
                className="w-full px-6 py-3 border border-green-500 text-green-600 dark:text-green-400 font-medium rounded-md hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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

export default ChooseUr;
