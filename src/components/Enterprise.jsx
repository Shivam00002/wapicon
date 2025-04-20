import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Check } from "lucide-react";

const Enterprise = () => {
  const { scrollY } = useScroll();

  const descriptionRef = useRef(null);
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);

  const descriptionInView = useInView(descriptionRef, {
    once: false,
    amount: 0.3,
  });
  const feature1InView = useInView(feature1Ref, { once: false, amount: 0.3 });
  const feature2InView = useInView(feature2Ref, { once: false, amount: 0.3 });

  const imageY = useTransform(scrollY, [0, 300], [0, -30]);
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.05]);
  const headingY = useTransform(scrollY, [0, 300], [0, -15]);
  const descriptionOpacity = useTransform(scrollY, [0, 100, 200], [0.5, 1, 1]);
  const descriptionX = useTransform(scrollY, [0, 150], [-20, 0]);

  return (
    <div className="min-h-fit w-full bg-white dark:bg-gray-900 py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="inline-flex items-center bg-green-50 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileInView={{
            x: [0, 5, 0],
            transition: { duration: 2, repeat: Infinity, repeatDelay: 3 },
          }}
          viewport={{ once: false, amount: 0.8 }}
        >
          <div className="h-3 w-3 sm:h-4 sm:w-4 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
            API Integrations
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12 lg:pt-0 pt-6">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-12 leading-tight"
              style={{ y: headingY }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{
                textShadow: [
                  "0px 0px 0px rgba(0,0,0,0)",
                  "0px 0px 10px rgba(48,168,112,0.2)",
                  "0px 0px 0px rgba(0,0,0,0)",
                ],
                transition: { duration: 2, repeat: Infinity, repeatDelay: 2 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Enterprise-Grade
              <br />
              WhatsApp API
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Send Messages with Enterprise-Grade WhatsApp API
            </motion.h2>

            <motion.p
              ref={descriptionRef}
              className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-12 leading-relaxed"
              style={{
                opacity: descriptionOpacity,
                x: descriptionX,
              }}
              animate={{
                x: descriptionInView ? 0 : -20,
                opacity: descriptionInView ? 1 : 0.5,
                transition: { duration: 0.5 },
              }}
            >
              Transform your customer engagement strategy with{" "}
              <span className="font-bold">Wapikon</span>, the ultimate WhatsApp
              Cloud API solution for businesses. Deliver exceptional service and
              stay connected with your customers, wherever they are.
            </motion.p>

            <div className="mb-6 sm:mb-10">
              <motion.h3
                className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Get Started Quickly
              </motion.h3>
              <motion.div
                ref={feature1Ref}
                className="flex gap-3 sm:gap-5"
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: feature1InView ? 1 : 0.5,
                  x: feature1InView ? 0 : -20,
                  transition: { duration: 0.6 },
                }}
                whileInView={{
                  scale: [1, 1.02, 1],
                  transition: { duration: 2, repeat: Infinity, repeatDelay: 2 },
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <motion.div
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center"
                  whileInView={{
                    backgroundColor: [
                      "rgba(240, 253, 244, 1)",
                      "rgba(220, 252, 231, 1)",
                      "rgba(240, 253, 244, 1)",
                    ],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                    },
                  }}
                  viewport={{ once: false, amount: 0.8 }}
                >
                  <Check className="text-green-500" size={20} />
                </motion.div>
                <div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Set up your official WhatsApp Business Account in just 2
                    days and seamlessly integrate Wapikon with your existing
                    POS, ERP, eCommerce platforms, or any software supporting
                    Webhooks or APIs.
                  </p>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.h3
                className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Scale and Automate
              </motion.h3>
              <motion.div
                ref={feature2Ref}
                className="flex gap-3 sm:gap-5"
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: feature2InView ? 1 : 0.5,
                  x: feature2InView ? 0 : -20,
                  transition: { duration: 0.6 },
                }}
                whileInView={{
                  scale: [1, 1.02, 1],
                  transition: { duration: 2, repeat: Infinity, repeatDelay: 3 },
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <motion.div
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center"
                  whileInView={{
                    backgroundColor: [
                      "rgba(240, 253, 244, 1)",
                      "rgba(220, 252, 231, 1)",
                      "rgba(240, 253, 244, 1)",
                    ],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    },
                  }}
                  viewport={{ once: false, amount: 0.8 }}
                >
                  <Check className="text-green-500" size={20} />
                </motion.div>
                <div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Effortlessly send notifications to thousands of customers
                    with automated messaging and interactive templates.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-8 order-first lg:order-last">
            <motion.div
              style={{
                y: imageY,
                scale: imageScale,
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              whileInView={{
                filter: ["brightness(1)", "brightness(1.05)", "brightness(1)"],
                transition: { duration: 3, repeat: Infinity },
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto px-4 sm:px-0"
            >
              <img
                src="https://wapikon.com/wp-content/uploads/2025/01/libromi_connect-api.png"
                alt="WhatsApp API Code Interface"
                className="w-full h-auto rounded-lg shadow-lg"
              />

              {/* Hide elements on small screens, show on larger screens */}
              <motion.div
                className="absolute -top-8 -left-8 bg-white rounded-lg shadow-md p-3 w-36 hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Message template
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 h-6 w-full mb-2 rounded"></div>
                <div className="bg-gray-100 dark:bg-gray-700 h-10 w-full rounded"></div>
                <div className="bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded w-14 mt-2 text-center">
                  SEND
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -left-10 bg-white rounded-lg shadow-md p-3 w-20 h-20 hidden lg:flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-blue-800 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2z" />
                  </svg>
                </div>
                <div className="text-xs text-center mt-1 font-semibold text-gray-600 dark:text-gray-400">
                  WEBHOOK
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 right-16 bg-green-100 rounded-lg p-3 w-36 hidden lg:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="bg-green-200 dark:bg-green-700 h-2 w-full rounded mb-2"></div>
                <div className="bg-green-200 dark:bg-green-700 h-2 w-full rounded mb-2"></div>
                <div className="bg-green-200 dark:bg-green-700 h-2 w-full rounded"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
