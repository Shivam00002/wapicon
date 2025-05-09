import React from "react";
import { motion } from "framer-motion";

const FlowsWork = () => {
  const steps = [
    {
      number: "1",
      title: "Design Your Flow",
      description:
        "Use our visual editor to map out your customer journey with branches, conditions, and response options.",
      image:
        "https://blog.peppercloud.com/content/images/2024/07/Artboard---4.png",
    },
    {
      number: "2",
      title: "Add Rich Content",
      description:
        "Enhance your flows with images, videos, buttons, and other interactive elements to engage users.",
      image:
        "https://www.cm.com/cdn/web/en/blog/content/microsoftteams-image-37.png",
    },
    {
      number: "3",
      title: "Test and Launch",
      description:
        "Preview your flow, test all paths, and go live with confidence knowing your customers will have a smooth experience.",
      image:
        "https://blog.peppercloud.com/content/images/2024/07/Artboard---6.png",
    },
    {
      number: "4",
      title: "Analyze and Optimize",
      description:
        "Track performance data and make data-driven improvements to increase engagement and conversion rates.",
      image:
        "https://cdn.prod.website-files.com/66efa862351a8bef3b48cb70/671e3d7f1b6a9d23984b5ca1_image-4.png",
    },
  ];

  return (
    <div className="py-16 md:py-10 bg-[#f7fbf8] dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            How WhatsApp Flows Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Building powerful conversation flows is simple with our intuitive
            platform
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-6 pb-4">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full bg-green-500 dark:bg-green-600 flex items-center justify-center text-white text-xl font-medium mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 h-48 md:h-56 lg:h-64 xl:h-72 overflow-hidden">
                <img
                  src={step.image}
                  alt={`Step ${step.number}: ${step.title}`}
                  className="w-full h-full object-contain rounded-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/400x300/f0f9f0/333?text=Step+${step.number}`;
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowsWork;
