import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const FlowsBenefits = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const benefits = [
    {
      title: "24/7 Customer Support",
      description:
        "Provide instant responses and assistance to your customers around the clock, without increasing staffing costs.",
    },
    {
      title: "Higher Conversion Rates",
      description:
        "Guide prospects through your sales funnel with personalized recommendations and timely follow-ups.",
    },
    {
      title: "Reduced Response Time",
      description:
        "Respond to customer inquiries instantly, improving satisfaction and reducing churn.",
    },
    {
      title: "Scalable Customer Interactions",
      description:
        "Handle hundreds or thousands of conversations simultaneously without sacrificing quality or personalization.",
    },
    {
      title: "Valuable Customer Insights",
      description:
        "Gather data about customer preferences, pain points, and behavior to improve your products and services.",
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={staggerItems}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10"
            >
              Benefits of WhatsApp Flows
            </motion.h2>

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex gap-4 mb-8"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 mt-6 lg:mt-0"
            initial="hidden"
            animate="visible"
            variants={imageAnimation}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative">
              <img
                src="https://www.omnichat.ai/wp-content/uploads/WhatsApp-Flows_%E8%8B%B1%E6%96%87_7-1.png"
                alt="WhatsApp Flows Benefits Demonstration"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FlowsBenefits;
