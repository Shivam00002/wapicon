import React from "react";
import { motion } from "framer-motion";
import {
  Puzzle,
  BarChart3,
  Workflow,
  Link,
  Bot,
  UserRound,
} from "lucide-react";

const Automation = () => {
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
      icon: <Puzzle className="text-green-500 dark:text-green-400" size={24} />,
      title: "Visual Flow Builder",
      description:
        "Create complex conversation flows using our intuitive drag-and-drop interface. No technical skills required.",
    },
    {
      icon: (
        <Workflow className="text-green-500 dark:text-green-400" size={24} />
      ),
      title: "Conditional Logic",
      description:
        "Build intelligent flows with if-then conditions, variables, and dynamic content based on user inputs and behaviors.",
    },
    {
      icon: (
        <BarChart3 className="text-green-500 dark:text-green-400" size={24} />
      ),
      title: "AI-Powered Analytics",
      description:
        "Gain insights into conversation performance, user engagement, and conversion rates with detailed dashboards.",
    },
    {
      icon: <Link className="text-green-500 dark:text-green-400" size={24} />,
      title: "Seamless Integrations",
      description:
        "Connect your chatbot to CRM systems, payment gateways, and other business tools without writing code.",
    },
    {
      icon: <Bot className="text-green-500 dark:text-green-400" size={24} />,
      title: "Natural Language AI",
      description:
        "Enable your bot to understand natural language queries and respond intelligently to customer questions.",
    },
    {
      icon: (
        <UserRound className="text-green-500 dark:text-green-400" size={24} />
      ),
      title: "Human Handoff",
      description:
        "Seamlessly transfer complex conversations to human agents when needed, with complete conversation context.",
    },
  ];

  return (
    <div className="w-full bg-[#f7fbf8] dark:bg-gray-900 py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            WhatsApp Automation Core Features
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to create intelligent, responsive chatbots
            without coding
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 sm:p-5 md:p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="bg-green-50 dark:bg-green-900/20 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Automation;
