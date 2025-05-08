import React from "react";
import { motion } from "framer-motion";
import {
  Send,
  MessageSquare,
  ShoppingCart,
  Package,
  PlusSquare,
  Bell,
  Calendar,
  Users,
  BarChart,
} from "lucide-react";

const SuccessStory = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3,
      },
    },
    hover: {
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1 + 0.4,
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.05,
      backgroundColor: "var(--hover-bg-color)",
      transition: {
        duration: 0.2,
      },
    },
  };

  const successStories = [
    {
      title: "Major Banking Institution",
      description:
        "A leading bank implemented WhatsApp API for customer support, transaction alerts, and account security notifications, reducing call center volume by 35%.",
      icon: <MessageSquare size={24} />,
      stats: [
        { value: "92%", label: "Read Rate" },
        { value: "4.8M", label: "Monthly Messages" },
      ],
    },
    {
      title: "E-commerce Marketplace",
      description:
        "An online retailer integrated WhatsApp API for order confirmations, shipping updates, and post-purchase support, increasing customer satisfaction scores.",
      icon: <ShoppingCart size={24} />,
      stats: [
        { value: "28%", label: "Support Cost Reduction" },
        { value: "62%", label: "Response Rate" },
      ],
    },
    {
      title: "Healthcare Provider",
      description:
        "A healthcare network deployed WhatsApp API for appointment reminders, prescription notifications, and patient follow-ups while maintaining HIPAA compliance.",
      icon: <PlusSquare size={24} />,
      stats: [
        { value: "43%", label: "Fewer Missed Appointments" },
        { value: "76%", label: "Patient Satisfaction" },
      ],
    },
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            WhatsApp Business API Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how enterprise businesses are leveraging WhatsApp API to
            transform their customer communications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
            >
              {index === 0 && (
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src="https://www.interakt.shop/wp-content/uploads/2023/03/2-3-768x543.webp"
                    alt="Banking WhatsApp Integration"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-blue-900/30 dark:bg-blue-900/60"></div>
                  <motion.div
                    className="absolute bottom-4 right-4 p-2 bg-green-500 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 15 }}
                  >
                    <Send size={20} className="text-white" />
                  </motion.div>
                </div>
              )}

              {index === 1 && (
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src="https://vertexsuite.in/wp-content/uploads/2023/07/2-1.png"
                    alt="E-commerce WhatsApp Integration"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-green-900/30 dark:bg-green-900/60"></div>
                  <motion.div
                    className="absolute bottom-4 right-4 p-2 bg-green-500 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 15 }}
                  >
                    <ShoppingCart size={20} className="text-white" />
                  </motion.div>
                </div>
              )}

              {index === 2 && (
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src="https://www.wati.io/wp-content/uploads/2024/01/WhatsApp-for-HealthcareA-Complete-Guide-1-%E2%80%93-1-1-1024x512.webp"
                    alt="Healthcare WhatsApp Integration"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-green-900/30 dark:bg-green-900/60"></div>
                  <motion.div
                    className="absolute bottom-4 right-4 p-2 bg-green-500 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 15 }}
                  >
                    <PlusSquare size={20} className="text-white" />
                  </motion.div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <motion.div
                    className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3"
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                  >
                    <div className="text-green-600 dark:text-green-400">
                      {story.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {story.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {story.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {story.stats.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md text-center"
                      variants={statVariants}
                      custom={statIndex}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      style={{
                        "--hover-bg-color": "var(--tw-color-green-100)",
                      }}
                    >
                      <motion.div
                        className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400"
                        initial={{ scale: 1 }}
                        whileInView={{
                          scale: [1, 1.2, 1],
                          transition: {
                            delay: 0.5 + statIndex * 0.2,
                            duration: 0.6,
                          },
                        }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center">
                        <BarChart
                          size={14}
                          className="mr-1 text-green-500 dark:text-green-400"
                        />
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
