import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Check } from "lucide-react";

const CRMChatbox = () => {
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
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 py-8 md:py-16 px-4 md:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
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
            >
              <img
                src="https://wapikon.com/wp-content/uploads/2025/02/cv34jxb668zg37ir.png"
                alt="Wapikon CRM with Chatbox Interface"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12">
            <motion.div
              className="inline-flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full mb-5"
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
                Client Support on WhatsApp
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
              style={{ y: headingY }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Inbuilt CRM with Chatbox
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Streamline Customer Management and WhatsApp Conversations in One
              Place
            </motion.h2>

            <motion.div
              ref={descriptionRef}
              className="mb-8"
              style={{ opacity: descriptionOpacity }}
              animate={{
                opacity: descriptionInView ? 1 : 0.7,
                transition: { duration: 0.5 },
              }}
            >
              <motion.p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Wapikon's{" "}
                <span className="font-semibold">
                  Inbuilt CRM with WhatsApp Inbox
                </span>{" "}
                combines customer relationship management and live chat
                capabilities to provide a seamless experience for businesses and
                their customers.
              </motion.p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                ref={feature1Ref}
                className="flex items-start gap-4"
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
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Centralized Customer Management and Real-Time Engagement
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    Manage customer details, interaction history, and insights
                    from a single dashboard while engaging with them directly
                    through an integrated chatbox for seamless real-time
                    communication.
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={feature2Ref}
                className="flex items-start gap-4"
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
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Personalized Support and Automation
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    Deliver tailored responses using past conversation tracking,
                    automate tasks like reminders and follow-ups, and enable
                    team collaboration to efficiently handle customer queries.
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

export default CRMChatbox;
