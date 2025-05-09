import React from "react";
import { motion } from "framer-motion";


const SimpleAPi = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const implementationSteps = [
    {
      number: 1,
      title: "Business Verification",
      description:
        "We'll guide you through Meta's business verification process to get your account approved quickly.",
      image:
        "https://cdn.prod.website-files.com/67d03e74d0392958abb8d732/67d03e74d0392958abb8da86_4-2-1024x462.png",
    },
    {
      number: 2,
      title: "API Setup",
      description:
        "Our team configures your WhatsApp Business API account and provides access credentials.",
      image:
        "https://i.ytimg.com/vi/eoB06H9x7VU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCLHFHjHupKppc0oay0vcDAOhPMPg",
    },
    {
      number: 3,
      title: "Integration",
      description:
        "Connect the API to your systems using our SDKs, webhooks, or pre-built integrations.",
      image:
        "https://cdn.prod.website-files.com/64a7e03d500c505242d97ef0/6790cfff31e3b7a6ff19ec63_66ebe6c4b7fc216e0b662bc1_66daec598b3793374b2a5de4_66b24fba4d62276619ab6340_660fc8934abb3b0ae2ee5b3d_Steps%2525252520to%2525252520Set%2525252520Up%2525252520Your_WhatsApp%2525252520Business%2525252520API%2525252520Account.webp",
    },
    {
      number: 4,
      title: "Go Live",
      description:
        "Launch your WhatsApp Business channel and start engaging with customers at scale.",
      image:
        "https://www.interakt.shop/wp-content/uploads/2024/05/WhatsApp-API-Integratio-1-1200x720.png",
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
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple API Implementation Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get your business on WhatsApp Business API in four easy steps
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {implementationSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="p-6 pb-4 flex-grow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-500 text-white font-bold rounded-full text-xl">
                    {step.number}
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {step.description}
                </p>
                <div className="mt-auto h-48 sm:h-56 md:h-48 lg:h-40 xl:h-48 overflow-hidden rounded-md">
                  <img
                    src={step.image}
                    alt={`Step ${step.number}: ${step.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SimpleAPi;
