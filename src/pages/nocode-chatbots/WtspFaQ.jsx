import React from "react";
import { motion } from "framer-motion";

const WhatsAppFAQ = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const slideInUp = {
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

  const faqItems = [
    {
      id: 1,
      question: "Do I need technical skills to build a WhatsApp chatbot?",
      answer:
        "Not at all! Wapikon's no-code chatbot builder is designed for everyone, regardless of technical background. Our visual drag-and-drop interface makes it easy to create sophisticated conversation flows without writing a single line of code. We also offer pre-built templates and components to help you get started quickly.",
    },
    {
      id: 2,
      question: "How does the WhatsApp chatbot handle complex questions?",
      answer:
        "Our chatbots use a combination of keyword recognition, natural language processing, and AI to understand and respond to customer queries. For complex questions that go beyond the bot's capabilities, we provide a seamless handoff to human agents. The transition includes the full conversation history, ensuring your team has all the context they need to provide excellent service.",
    },
    {
      id: 3,
      question: "Can I connect my chatbot to my existing business systems?",
      answer:
        "Absolutely! Wapikon chatbots integrate with a wide range of business tools including CRM systems (Salesforce, HubSpot), e-commerce platforms (Shopify, WooCommerce), payment processors (Stripe, PayPal), and many more. We also support Zapier and Make (Integromat) for connecting to thousands of other applications without any coding required.",
    },
    {
      id: 4,
      question: "How do I measure the performance of my WhatsApp chatbot?",
      answer:
        "Our platform provides comprehensive analytics that track key metrics like conversation volume, response times, resolution rates, conversion rates, and customer satisfaction. You can monitor which conversation paths are most effective, identify common customer questions, and continuously optimize your chatbot based on real data.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Common Questions About WhatsApp Automation
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know to get started
          </p>
        </motion.div>

        <motion.div
          className="space-y-4 sm:space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              className="mb-4 sm:mb-6 overflow-hidden"
              variants={slideInUp}
            >
              <div className="w-full text-left py-3 sm:py-4 md:py-5 px-4 sm:px-5 md:px-6 bg-green-50 dark:bg-green-900/20 rounded-t-lg font-semibold text-gray-900 dark:text-white text-base sm:text-lg">
                {item.question}
              </div>

              <div className="py-3 sm:py-4 md:py-5 px-4 sm:px-5 md:px-6 bg-white dark:bg-gray-800 rounded-b-lg text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.answer}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhatsAppFAQ;
