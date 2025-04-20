import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Check } from "lucide-react";

const GreenTick = () => {
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

  const imageY = useTransform(scrollY, [0, 300], [0, -20]);
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.03]);
  const headingY = useTransform(scrollY, [0, 300], [0, -10]);
  const descriptionOpacity = useTransform(scrollY, [0, 100, 200], [0.5, 1, 1]);
  const descriptionX = useTransform(scrollY, [0, 150], [-20, 0]);

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-6 md:py-10 px-4 sm:px-6 md:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
              style={{
                y: imageY,
                scale: imageScale,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              whileInView={{
                filter: ["brightness(1)", "brightness(1.05)", "brightness(1)"],
                transition: { duration: 3, repeat: Infinity },
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src="https://wapikon.com/wp-content/uploads/2025/01/Untitled-design-2025-01-22T163730.648.png"
                alt="WhatsApp Green Tick Verification"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
            <motion.div
              className="inline-flex items-center bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full mb-4 sm:mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileInView={{
                x: [0, 5, 0],
                transition: { duration: 2, repeat: Infinity, repeatDelay: 3 },
              }}
              viewport={{ once: false, amount: 0.8 }}
            >
              <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-800 dark:text-gray-200 text-sm">
                Green Tick
              </span>
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight text-center lg:text-left"
              style={{ y: headingY }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{
                textShadow: [
                  "0px 0px 0px rgba(0,0,0,0)",
                  "0px 0px 8px rgba(48,168,112,0.15)",
                  "0px 0px 0px rgba(0,0,0,0)",
                ],
                transition: { duration: 2, repeat: Infinity, repeatDelay: 2 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Get Verified with the Green Tick Mark on WhatsApp
            </motion.h1>

            <motion.p
              ref={descriptionRef}
              className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-10 text-center lg:text-left"
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
              Stand out as a trusted and authentic brand on WhatsApp with the
              Verified Green Tick Mark.
            </motion.p>

            <div className="mb-6 sm:mb-8">
              <motion.h3
                className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Build Trust and Credibility
              </motion.h3>
              <motion.div
                ref={feature1Ref}
                className="flex gap-3 sm:gap-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: feature1InView ? 1 : 0.5,
                  x: feature1InView ? 0 : -20,
                  transition: { duration: 0.6 },
                }}
              >
                <motion.div
                  className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center"
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
                  <Check className="text-green-500" size={18} />
                </motion.div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  The Green Tick Mark confirms your business's legitimacy,
                  fostering trust and authenticity with your customers.
                </p>
              </motion.div>
            </div>

            <div>
              <motion.h3
                className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Safeguard Your Brand
              </motion.h3>
              <motion.div
                ref={feature2Ref}
                className="flex gap-3 sm:gap-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: feature2InView ? 1 : 0.5,
                  x: feature2InView ? 0 : -20,
                  transition: { duration: 0.6 },
                }}
              >
                <motion.div
                  className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center"
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
                  <Check className="text-green-500" size={18} />
                </motion.div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Verification protects against impersonation, ensuring
                  customers can easily identify your genuine account. Trusted by
                  top brands, Wapikon simplifies the process to help you achieve
                  WhatsApp verification seamlessly.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenTick;
