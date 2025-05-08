import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSec = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "How long does the WhatsApp Business API verification take?",
      answer:
        "With Wapikon, the verification process is streamlined and typically takes 24-48 hours. We handle the Meta verification requirements on your behalf, including business name verification, domain verification, and display name approval. Our expert team guides you through each step, ensuring a smooth and quick approval process.",
    },
    {
      question: "What's the difference between template and session messages?",
      answer:
        'Template messages are pre-approved message formats that allow businesses to send notifications to customers without them initiating a conversation first. These are ideal for appointment reminders, shipping updates, and important alerts. Session messages (or "conversation messages") can be sent freely within a 24-hour window after a customer messages you. The 24-hour window resets each time a customer sends a new message to your business.',
    },
    {
      question: "How does WhatsApp Business API pricing work?",
      answer:
        "Wapikon offers transparent pricing with a monthly subscription fee based on your chosen plan, plus a per-message fee for messages beyond your included allocation. Template messages and session messages have different rates, with conversation messages typically costing less. We offer volume discounts for higher message volumes, and our pricing is regionally adjusted to align with Meta's official pricing structure.",
    },
    {
      question:
        "Can I integrate WhatsApp Business API with my existing systems?",
      answer:
        "Yes, Wapikon's WhatsApp Business API solution is designed for seamless integration with your existing business systems. We provide comprehensive APIs, webhooks, and SDKs for popular programming languages, along with pre-built connectors for common platforms like Salesforce, HubSpot, Zendesk, and more. Our team can also develop custom integrations for your specific business requirements.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Common Questions About WhatsApp Business API
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about implementing the WhatsApp Business
            API for your company
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-6 py-5 text-left bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <span className="ml-4 flex-shrink-0 text-green-600 dark:text-green-400">
                  {openFAQ === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </span>
              </motion.button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="px-6 py-5 bg-white dark:bg-gray-800"
                  >
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSec;
