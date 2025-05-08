import React from "react";
import { motion } from "framer-motion";
import EcommerceFeatures from "./EcommerceFeatures";
import IntegrationSteps from "./IntegrationSteps";
import HowItWorks from "./HowItWorks";

const EcommerceHero = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
  };

  return (
    <div className="w-full mt-10 sm:mt-8 md:mt-10 bg-green-50 dark:bg-gray-900 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
              <motion.div
                className="bg-white dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-green-600 dark:text-green-400 font-medium flex items-center text-xs sm:text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.875 18.844c-.565.02-1.133.033-1.72.033-3.464 0-6.73-.82-9.155-2.064l.923-3.373-1.008.363c-.787-1.275-1.243-2.776-1.243-4.38C.672 5.797 5.583.875 11.67.875c5.664 0 10.277 4.448 10.577 10.077-1.51.08-3 .565-4.564 1.594-.962.637-1.74 1.402-2.394 2.146-.645.735-1.064 1.5-1.413 2.152zm.008-1.507c.476-.94 1.016-1.758 1.492-2.205.602-.565 1.557-1.267 2.457-1.757a9.96 9.96 0 0 1 2.55-1.16c-.476 3.335-3.335 5.937-6.5 6.122zm-5.435-2.785c.467.516 1.547 1.274 3.154 1.3 1.236-.008 2.543-.427 3.836-1.583 1.153-1.033 1.976-2.654 2.335-3.836-2.37.943-4.492 2.654-5.988 4.85-.943 1.39-1.968 2.19-3.337 2.19-.516 0-1.14-.224-1.78-.662-.635-.437-1.39-1.125-2.133-1.878.943-.072 2.53-.073 3.913-.38z" />
                  </svg>
                  WhatsApp
                </span>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-purple-600 dark:text-purple-400 font-medium flex items-center text-xs sm:text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.581 19.997c-1.669.107-3.371-.198-4.727-.93V19c0-.211-.084-.416-.235-.566s-.355-.235-.566-.235H5.418c-.211 0-.417.085-.567.235s-.234.355-.234.566v.259a10.798 10.798 0 0 1-2.935-4.286h.266c.211 0 .416-.084.566-.235s.234-.355.234-.566v-2.553c0-.211-.084-.417-.234-.567s-.355-.234-.566-.234h-.267c.581-1.544 1.571-2.911 2.872-4.062.086.11.185.209.299.288l2.733 1.9c.16.111.35.169.543.169h4.8c.211 0 .416-.084.566-.235s.234-.355.234-.566V5c0-.211-.084-.416-.234-.566s-.355-.235-.566-.235h-1.307c.204-.143.452-.256.73-.256h3.431c.211 0 .416.085.566.235s.235.355.235.566v2.553c0 .211-.084.416-.235.566s-.354.235-.566.235h-.187a10.842 10.842 0 0 1-1.361 5.017 10.868 10.868 0 0 1-3.013 3.411 10.806 10.806 0 0 1-1.483.964v.428c0 .211.084.416.235.566s.355.234.566.234h1.553c.211 0 .416.085.566.235s.235.355.235.567v.427z" />
                  </svg>
                  WooCommerce
                </span>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-green-600 dark:text-green-400 font-medium flex items-center text-xs sm:text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.327 16.437c-.172.167-.43.305-.784.305-.448 0-.807-.301-.807-.75a.746.746 0 0 1 .728-.75c.14 0 .277.029.392.084l1.66-1.661-.89-.889-1.144 1.142a1.112 1.112 0 0 0-.307-.047c-.614 0-1.115.504-1.115 1.118s.5 1.12 1.115 1.12c.36 0 .675-.168.882-.432l.87.868a2.213 2.213 0 0 1-1.752.788c-1.232 0-2.231-.999-2.231-2.231s.999-2.231 2.231-2.231c.587 0 1.121.225 1.52.596l1.641-1.644-.89-.889-1.143 1.142a1.089 1.089 0 0 0-.307-.046c-.613 0-1.114.503-1.114 1.117s.504 1.117 1.117 1.117c.36 0 .675-.168.882-.431l.868.868a2.21 2.21 0 0 1-1.75.787c-1.23 0-2.23-.998-2.23-2.23s.999-2.23 2.23-2.23c.588 0 1.122.224 1.52.595l1.642-1.644-.89-.889-1.143 1.142a1.112 1.112 0 0 0-.308-.046c-.613 0-1.114.503-1.114 1.117s.504 1.117 1.117 1.117c.36 0 .675-.168.882-.431l.868.868a2.21 2.21 0 0 1-1.75.787c-1.23 0-2.23-.998-2.23-2.23 0-1.233.998-2.23 2.23-2.23.587 0 1.122.224 1.52.595l.643-.644c.39-.39.878-.584 1.421-.584 1.118 0 2.026.908 2.026 2.025 0 .544-.197 1.035-.524 1.414l-1.246 1.246a1.105 1.105 0 0 0-.308-.047c-.613 0-1.114.504-1.114 1.117 0 .614.504 1.117 1.117 1.117.36 0 .675-.168.882-.431l.868.868a2.21 2.21 0 0 1-1.75.787c-1.232 0-2.231-.998-2.231-2.23s.999-2.231 2.231-2.231c.587 0 1.121.225 1.52.596l.656-.656c.392-.392.856-.581 1.417-.581 1.087 0 1.998.89 1.998 1.977 0 .544-.214 1.019-.547 1.375l-3.35 3.348z" />
                  </svg>
                  Shopify
                </span>
              </motion.div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="text-gray-900 dark:text-white">Seamless </span>
              <span className="text-green-500 dark:text-green-400">
                WhatsApp
              </span>
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              <span className="text-green-500 dark:text-green-400">
                Integration
              </span>
              <span className="text-gray-900 dark:text-white"> with Your</span>
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 dark:text-white">
              E-Commerce Store
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              Connect your WooCommerce or Shopify store to WhatsApp Business and
              transform customer engagement with automated messaging, order
              updates, and personalized support - all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button
                className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-colors duration-300 text-sm sm:text-base"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Start Free Integration
              </motion.button>

              <motion.button
                className="border border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-colors duration-300 text-sm sm:text-base"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-6 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <img
              src="https://wapikon.com/wp-content/uploads/2025/01/Wapikon-Marketing-Material-800-x-800-px-1024-x-763-px-2.png"
              alt="WhatsApp E-Commerce Integration Interface"
              className="w-full h-auto rounded-lg shadow-lg"
            />

            <motion.div
              className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg max-w-[160px] sm:max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 sm:mr-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1.5 sm:p-2 rounded-full">
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm md:text-base">
                    Automated Order Updates
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Keep customers informed at every step
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 sm:bottom-12 md:bottom-16 right-4 sm:right-6 md:right-8 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg max-w-[160px] sm:max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2 sm:mr-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1.5 sm:p-2 rounded-full">
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm md:text-base">
                    Instant Customer Support
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Resolve issues directly in WhatsApp
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <EcommerceFeatures />
      <IntegrationSteps />
      <HowItWorks />
    </div>
  );
};

export default EcommerceHero;
