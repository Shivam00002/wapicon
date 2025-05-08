import React from "react";
import { motion } from "framer-motion";

const BuildingWtsap = () => {
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

  const steps = [
    {
      number: 1,
      title: "Plan Your Flow",
      description:
        "Define your chatbot's goals and map out the conversation paths your customers will follow.",
      image:
        "https://cdn.prod.website-files.com/67d03e74d0392958abb8d70a/67d03e74d0392958abb8d802_img-whatsapp-02.jpg",
      imageAlt: "Chatbot flow diagram with conversation paths",
    },
    {
      number: 2,
      title: "Build with Drag & Drop",
      description:
        "Use our visual builder to create conversation flows by connecting message nodes and decision points.",
      image:
        "https://cdn.prod.website-files.com/67d03e74d0392958abb8d70a/67d03e74d0392958abb8d802_img-whatsapp-02.jpg",
      imageAlt: "Visual builder interface for chatbot creation",
    },
    {
      number: 3,
      title: "Test & Refine",
      description:
        "Preview your chatbot in real-time. Test different scenarios and optimize for the best user experience.",
      image:
        "https://cdn.prod.website-files.com/67d03e74d0392958abb8d70a/67d03e74d0392958abb8d802_img-whatsapp-02.jpg",
      imageAlt: "Testing interface showing chatbot preview",
    },
    {
      number: 4,
      title: "Deploy & Monitor",
      description:
        "Launch your chatbot on WhatsApp and track performance with our analytics dashboard.",
      image:
        "https://cdn.prod.website-files.com/67d03e74d0392958abb8d70a/67d03e74d0392958abb8d802_img-whatsapp-02.jpg",
      imageAlt: "Analytics dashboard with chatbot performance metrics",
    },
  ];

  return (
    <div className="w-full bg-[#f7fbf8] dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h1 className="text-3xl md:text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Building Your WhatsApp Chatbot
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Four simple steps to launch your automated WhatsApp assistant
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="flex flex-col"
              variants={fadeInUp}
            >
              <motion.div
                className="flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-2xl">
                  {step.number}
                </div>
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                {step.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                {step.description}
              </p>

              <motion.div
                className="mt-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="w-full h-auto rounded-md"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-end mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.button
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="Back to top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BuildingWtsap;
