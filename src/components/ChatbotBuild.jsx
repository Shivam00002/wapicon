import React, { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";

const ChatbotBuilder = () => {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 300], [0, -30]);
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.05]);

  const headingX = useTransform(scrollY, [0, 200], [0, -15]);
  const descriptionX = useTransform(scrollY, [0, 200], [0, 15]);
  const featureScale = useTransform(scrollY, [100, 300], [0.95, 1.05]);

  const badgeX = useTransform(scrollY, [0, 200], [0, 20]);

  const headingLetters = "No-Code Chatbots for WhatsApp";

  const featureVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 p-4 md:p-8 lg:p-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-1/2 pl-0 lg:pl-8">
            <motion.div
              className="inline-flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full mb-6"
              style={{ x: badgeX }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
            >
              <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                Chatbot Builder for WhatsApp
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 overflow-hidden"
              style={{ x: headingX }}
            >
              {headingLetters}
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              style={{ x: descriptionX }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: 1.2,
                },
              }}
              whileInView={{
                textShadow: [
                  "0px 0px 0px rgba(0,0,0,0)",
                  "0px 0px 8px rgba(48,168,112,0.5)",
                  "0px 0px 0px rgba(0,0,0,0)",
                ],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 5,
                },
              }}
            >
              Automate Your WhatsApp Conversations Without Writing a Single Line
              of Code
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Say goodbye to complex coding and hello to effortless automation!
              With Wapikon's{" "}
              <span className="font-semibold">No-Code Chatbot Builder</span>
            </motion.p>

            <div className="space-y-10">
              <motion.div
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                style={{ scale: featureScale }}
              >
                <motion.h2
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-2"
                  whileInView={{
                    textShadow: [
                      "0px 0px 0px rgba(0,0,0,0)",
                      "0px 0px 10px rgba(48,168,112,0.3)",
                      "0px 0px 0px rgba(0,0,0,0)",
                    ],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 4,
                    },
                  }}
                >
                  Effortless Setup
                </motion.h2>
                <div className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-1"
                  >
                    <Check className="text-green-500 flex-shrink-0" size={24} />
                  </motion.div>
                  <motion.p
                    className="text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Build chatbots quickly using our drag-and-drop interface. No
                    technical skills required—perfect for small businesses and
                    startups.
                  </motion.p>
                </div>
              </motion.div>

              <motion.div
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                style={{ scale: featureScale }}
              >
                <motion.h2
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                  whileInView={{
                    textShadow: [
                      "0px 0px 0px rgba(0,0,0,0)",
                      "0px 0px 10px rgba(48,168,112,0.3)",
                      "0px 0px 0px rgba(0,0,0,0)",
                    ],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 4.5,
                    },
                  }}
                >
                  Seamless Integration
                </motion.h2>
                <div className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-1"
                  >
                    <Check className="text-green-500 flex-shrink-0" size={24} />
                  </motion.div>
                  <motion.p
                    className="text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Integrate your chatbots with WhatsApp to ensure smooth
                    customer communication. Connect with CRMs, APIs, and other
                    business tools effortlessly.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex items-center justify-center lg:justify-start relative">
            <motion.div
              style={{
                y: imageY,
                scale: imageScale,
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 100,
                delay: 0.3,
              }}
              className="w-full max-w-xl"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src="https://wapikon.com/wp-content/uploads/2025/02/Untitled-design-2025-02-12T005336.446.png"
                alt="WhatsApp Chatbot Builder Interface"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotBuilder;
