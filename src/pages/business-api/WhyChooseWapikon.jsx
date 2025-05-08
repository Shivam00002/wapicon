import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Zap,
  DollarSign,
  Code,
  Headphones,
  BarChart,
} from "lucide-react";

const WhyChooseWapikon = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    },
  };

  const features = [
    {
      title: "Rapid API Setup",
      description:
        "Get your WhatsApp Business API account verified and operational in just 24-48 hours, compared to weeks with other providers.",
      icon: <Zap size={18} />,
    },
    {
      title: "Cost-Effective Pricing",
      description:
        "Our transparent pay-as-you-go pricing model ensures you only pay for messages sent, with volume discounts as your usage grows.",
      icon: <DollarSign size={18} />,
    },
    {
      title: "Developer-Friendly Tools",
      description:
        "Comprehensive SDKs for popular programming languages, detailed API documentation, and sample code to accelerate your integration.",
      icon: <Code size={18} />,
    },
    {
      title: "24/7 Technical Support",
      description:
        "Dedicated account managers and technical support teams available around the clock to ensure your business communications never miss a beat.",
      icon: <Headphones size={18} />,
    },
    {
      title: "Scalable Solution",
      description:
        "Our infrastructure scales automatically with your needs, whether you're sending hundreds or millions of messages per month.",
      icon: <BarChart size={18} />,
    },
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="flex justify-center lg:justify-start relative order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageAnimation}
          >
            <div className="relative max-w-md">
              <img
                src="https://wapikon.com/wp-content/uploads/2025/01/CTWA-1024x763-1.webp"
                alt="WhatsApp Business API Integration Example"
                className="w-full h-auto rounded-lg shadow-lg"
              />

              <motion.div
                className="absolute bottom-24 right-20 hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18,18 L28,8 L32,32 L12,28 Z" fill="white" />
                </svg>

                <motion.div
                  className="absolute -bottom-6 -right-6"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="15"
                      cy="15"
                      r="15"
                      fill="white"
                      fillOpacity="0.3"
                    />
                    <circle
                      cx="15"
                      cy="15"
                      r="8"
                      fill="white"
                      fillOpacity="0.6"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-1 lg:order-2"
          >
            <motion.div className="mb-8" variants={fadeIn}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Why Choose Wapikon's
                <br />
                WhatsApp Business API
              </h2>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  variants={fadeIn}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                      <CheckCircle size={18} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseWapikon;
