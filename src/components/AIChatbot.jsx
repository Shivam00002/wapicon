import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Check } from "lucide-react";

const AIChatbotWhatsApp = () => {
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
        <div className="flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12">
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
                AI Chatbot on WhatsApp
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
              Automate WhatsApp Support with AI
            </motion.h1>

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
              Effortlessly manage customer support on WhatsApp with AI-powered
              chatbots and workflows. Provide instant, 24/7 responses,
              streamline queries, and enhance customer satisfaction with minimal
              effort.
            </motion.p>

            <div className="space-y-10">
              <motion.div
                ref={feature1Ref}
                className="flex gap-5"
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
                  className="flex-shrink-0 w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center"
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
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Always-On Support with Instant Responses
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-base">
                    Provide 24/7 assistance to customers, reducing wait times
                    and resolving queries faster with intelligent automation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={feature2Ref}
                className="flex gap-5"
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
                  className="flex-shrink-0 w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center"
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
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Customizable, Scalable, and Cost-Effective
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-base">
                    Tailor workflows to fit your business needs, handle
                    unlimited interactions seamlessly, and save on support costs
                    while enhancing customer engagement.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex items-center justify-center">
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
              className="w-full max-w-lg"
            >
              <img
                src="https://wapikon.com/wp-content/uploads/2025/02/Untitled-design-2025-02-12T010120.521.png"
                alt="WhatsApp AI Chatbot Interface"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatbotWhatsApp;
