import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Check } from "lucide-react";

const CatalogsPayments = () => {
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
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 py-8 md:py-16 px-4 md:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-12 lg:mt-0 flex items-center justify-center">
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
              className="w-full max-w-lg mx-auto px-4 sm:px-8 lg:px-0"
            >
              <img
                src="https://wapikon.com/wp-content/uploads/2025/01/Frame-37079-1.webp"
                alt="WhatsApp Catalogs and Payments Interface"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 pr-0 lg:pl-12 order-1 lg:order-2">
            <motion.div
              className="inline-flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full mb-6"
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
              <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                Payments on WhatsApp
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
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
              WhatsApp Catalogs and Native Payments
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Simplify Shopping, Boost Conversions
            </motion.h2>

            <motion.p
              ref={descriptionRef}
              className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
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
              Empower your business with WhatsApp Catalogs and Native Payments
              to create a seamless shopping experience. Showcase your products,
              let customers browse effortlessly, and enable instant payments—all
              within WhatsApp.
            </motion.p>

            <div className="space-y-8">
              <motion.div
                ref={feature1Ref}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: feature1InView ? 1 : 0.5,
                  x: feature1InView ? 0 : 10,
                  transition: { duration: 0.6 },
                }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Check className="text-green-500 h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Showcase Products with Ease
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    Use WhatsApp Catalogs to display your products, allowing
                    customers to browse and select effortlessly, enhancing
                    visibility and driving interest.
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={feature2Ref}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: feature2InView ? 1 : 0.5,
                  x: feature2InView ? 0 : 10,
                  transition: { duration: 0.6 },
                }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Check className="text-green-500 h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Simplify Transactions and Boost Sales
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    Provide a seamless shopping experience with secure native
                    WhatsApp payments, reducing cart abandonment and increasing
                    conversions—all within a single platform.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogsPayments;
