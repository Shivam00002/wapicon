import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Communication = () => {
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

  const benefits = [
    {
      title: "24/7 Instant Response",
      description:
        "Never leave customers waiting. Automated bots respond immediately at any time of day, increasing satisfaction and conversion rates.",
    },
    {
      title: "Scale Customer Service",
      description:
        "Handle thousands of conversations simultaneously without expanding your team. One bot can do the work of multiple agents.",
    },
    {
      title: "Reduce Operational Costs",
      description:
        "Automated chatbots can reduce customer service costs by up to 30% while increasing efficiency and customer satisfaction.",
    },
    {
      title: "Consistent Brand Experience",
      description:
        "Ensure every customer interaction follows your brand guidelines with pre-programmed responses and conversation flows.",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Gain valuable insights from chatbot conversations to improve your products, services, and marketing strategies.",
    },
  ];

  return (
    <div className="w-full bg-[#f7fbf8] dark:bg-gray-900 py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
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
              Why Automate WhatsApp
              <br className="hidden sm:block" /> Communication?
            </motion.h2>

            <div className="space-y-6 sm:space-y-8">
              {benefits.map((benefit, index) => (
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
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                className="w-full md:mt-16 lg:mt-32"
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
                  src="https://pickyassist.com/en/img/flow-bulder/Create-Chatbots-with-Drag-and-Drop.png"
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

export default Communication;
