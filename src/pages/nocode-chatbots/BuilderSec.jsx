import React from "react";
import { motion } from "framer-motion";
import { Check, Instagram, MessageCircle } from "lucide-react";

const BuilderSec = () => {
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
      title: "Intuitive Visual Interface",
      description:
        "Design complex conversation flows by simply dragging and connecting nodes. See your entire chatbot flow at a glance.",
    },
    {
      title: "Pre-Built Components",
      description:
        "Use our library of ready-made message types, input collectors, logic blocks, and integrations to build your bot faster.",
    },
    {
      title: "Real-Time Testing",
      description:
        "Preview and test your chatbot directly in the builder. See exactly how your flows will work before going live.",
    },
    {
      title: "Version Control",
      description:
        "Save multiple versions of your chatbot and easily roll back to previous iterations if needed.",
    },
  ];

  return (
    <div className="w-full bg-[#f7fbf8] dark:bg-gray-900 py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10 xl:gap-16">
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12"
              variants={fadeInUp}
            >
              Drag-and-Drop Chatbot
              <br className="hidden sm:block" /> Builder
            </motion.h2>

            <div className="space-y-6 sm:space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 sm:gap-4"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Check
                        size={12}
                        className="text-green-500 dark:text-green-400"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-8 sm:mt-10">
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium rounded-md transition-colors text-sm sm:text-base">
                Try Builder Now
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="w-full"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="https://wapikon.com/wp-content/uploads/2025/02/Untitled-design-2025-02-12T005336.446.png"
                  alt="WhatsApp Chatbot Builder Interface"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BuilderSec;