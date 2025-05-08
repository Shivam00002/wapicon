import React from "react";
import { motion } from "framer-motion";

const SuccessStories = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const caseStudies = [
    {
      id: "fashion",
      title: "Online Fashion Retailer",
      description:
        "An e-commerce fashion brand implemented a product recommendation chatbot that helps customers find the perfect outfit and completes purchases without leaving WhatsApp.",
      image:
        "https://cdn.prod.website-files.com/67d03e74d0392958abb8d70a/67d03e74d0392958abb8d802_img-whatsapp-02.jpg",
      metrics: [
        { value: "67%", label: "Conversion Rate" },
        { value: "35%", label: "Larger Orders" },
      ],
    },
    {
      id: "restaurant",
      title: "Restaurant Chain",
      description:
        "A popular restaurant created a reservation and ordering chatbot that handles table bookings, takeout orders, and answers menu questions automatically.",
      image:
        "https://cdn.prod.website-files.com/67d03e74d0392958abb8d70a/67d03e74d0392958abb8d802_img-whatsapp-02.jpg",
      metrics: [
        { value: "82%", label: "Support Automation" },
        { value: "3x", label: "Booking Increase" },
      ],
    },
    {
      id: "saas",
      title: "SaaS Company",
      description:
        "A software company deployed a lead qualification and demo scheduling bot that pre-qualifies prospects and books sales demos automatically.",
      image:
        "https://cdn.prod.website-files.com/67d03e74d0392958abb8d70a/67d03e74d0392958abb8d802_img-whatsapp-02.jpg",
      metrics: [
        { value: "53%", label: "More Qualified Leads" },
        { value: "41%", label: "Cost Reduction" },
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
          variants={fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            WhatsApp Automation Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how businesses are transforming their customer engagement with
            Wapikon chatbots
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="rounded-lg overflow-hidden"
              variants={fadeInUp}
            >
              <motion.div
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={study.image}
                  alt={`${study.title} Chatbot Flow`}
                  className="w-full h-auto rounded-md"
                />
              </motion.div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {study.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {study.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  {study.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessStories;
