import React from "react";
import { motion } from "framer-motion";

const ChatbotTemp = () => {
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

  const templates = [
    {
      id: "customer-support",
      image:
        "https://cdn.prod.website-files.com/67d03e74d0392958abb8d70a/67d03e74d0392958abb8d802_img-whatsapp-02.jpg",
      title: "Customer Support Bot",
      description:
        "Handle common customer queries, troubleshoot issues, and route complex cases to human agents automatically.",
    },
    {
      id: "lead-generation",
      image:
        "https://cdn.prod.website-files.com/67d03e74d0392958abb8d70a/67d03e74d0392958abb8d802_img-whatsapp-02.jpg",
      title: "Lead Generation Bot",
      description:
        "Qualify leads, collect contact information, and schedule appointments or demos automatically.",
    },
    {
      id: "ecommerce",
      image:
        "https://cdn.prod.website-files.com/67d03e74d0392958abb8d70a/67d03e74d0392958abb8d802_img-whatsapp-02.jpg",
      title: "E-commerce Sales Bot",
      description:
        "Showcase products, answer questions, process orders, and handle shipping inquiries all through WhatsApp.",
    },
  ];

  return (
    <div className="w-full bg-[#f7fbf8] dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready-to-Use Chatbot Templates
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get started quickly with our professionally designed templates for
            common business needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {templates.map((template) => (
            <motion.div
              key={template.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={fadeInUp}
            >
              <div className="p-6 pb-3">
                <img
                  src={template.image}
                  alt={`${template.title} Template Flowchart`}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="p-6 pt-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {template.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {template.description}
                </p>
                <div className="text-center">
                  <button className="w-full px-6 py-2 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30 text-green-600 dark:text-green-400 font-medium rounded-md transition-colors">
                    Use This Template
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ChatbotTemp;
