import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Check } from "lucide-react";

const FlowsForms = () => {
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

  const imageY = useTransform(scrollY, [0, 300], [0, 30]);
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.02]);
  const headingY = useTransform(scrollY, [0, 300], [0, -15]);
  const descriptionOpacity = useTransform(scrollY, [0, 100, 200], [0.7, 1, 1]);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 py-6 sm:py-8 md:py-16 px-4 md:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 xl:gap-12">
          <div className="w-full lg:w-5/12 pb-8 lg:pb-0">
            <motion.div
              style={{
                y: imageY,
                scale: imageScale,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
              whileInView={{
                filter: ["brightness(1)", "brightness(1.03)", "brightness(1)"],
                transition: { duration: 3, repeat: Infinity },
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="px-2 sm:px-0"
            >
              <img
                src="https://wapikon.com/wp-content/uploads/2025/02/Untitled-design-2025-02-12T011308.059.png"
                alt="WhatsApp Native Flows and Forms Interface"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12">
            <motion.div
              className="inline-flex items-center bg-gray-100 dark:bg-gray-800 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-5"
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
                Forms on WhatsApp
              </span>
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight"
              style={{ y: headingY }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Native Flows and Forms for Effortless Engagement
            </motion.h1>

            <motion.h2
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 sm:mb-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Simplify Customer Interactions with Integrated Flows and Forms
              with WhatsApp
            </motion.h2>

            <motion.div
              ref={descriptionRef}
              className="mb-6 sm:mb-8"
              style={{ opacity: descriptionOpacity }}
              animate={{
                opacity: descriptionInView ? 1 : 0.7,
                transition: { duration: 0.5 },
              }}
            >
              <motion.p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Wapikon's{" "}
                <span className="font-semibold">Native Flow and Forms</span>{" "}
                feature enables businesses to create interactive workflows and
                custom forms directly within WhatsApp, ensuring effortless
                communication and enhanced engagement.
              </motion.p>
            </motion.div>

            <div className="space-y-6 sm:space-y-8">
              <motion.div
                ref={feature1Ref}
                className="flex items-start gap-3 sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: feature1InView ? 1 : 0.5,
                  x: feature1InView ? 0 : -10,
                  transition: { duration: 0.6 },
                }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Check className="text-green-500 h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Effortless Integration and Automation
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Built directly into WhatsApp, Wapikon's Native Flows and
                    Forms streamline customer interactions with intuitive
                    workflows and automated tasks like lead collection, support
                    tickets, and appointment scheduling. Real-time data
                    collection saves time and enhances operational efficiency.
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={feature2Ref}
                className="flex items-start gap-3 sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: feature2InView ? 1 : 0.5,
                  x: feature2InView ? 0 : -10,
                  transition: { duration: 0.6 },
                }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Check className="text-green-500 h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Personalized Engagement and Data Management
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Create custom forms for surveys, registrations, or feedback,
                    and tailor workflows to individual customer needs. Connect
                    seamlessly with your CRM and other business tools to
                    centralize data management and create comprehensive customer
                    profiles.
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

export default FlowsForms;
