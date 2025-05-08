import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  MessageCircle,
  Bell,
  Send,
  Image,
  Video,
  File,
  MapPin,
} from "lucide-react";

const MessageTypes = () => {
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

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Advanced Message Types
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Engage customers with rich, interactive message formats only
            available through the Business API
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <img
                  src="https://www.360dialog.com/wp-content/uploads/2023/03/whatsapp-interactive-messages-reply-1024x989.png"
                  alt="Template Message Example"
                  className="w-full max-w-xs h-auto rounded-lg shadow-sm"
                />
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
                <h4 className="text-green-600 dark:text-green-400 text-sm font-medium mb-1">
                  Template Messages
                </h4>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Pre-Approved Templates
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                Send structured notifications, alerts, and updates to customers
                even without prior conversation. Ideal for appointment
                reminders, delivery updates, and important notifications.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-2">
                  <img
                    src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_807,h_807/https://www.cbot.ai/wp-content/uploads/2021/05/whatsappbusiness-eng.png"
                    alt="WhatsApp Customer Support Conversation"
                    className="w-1/2 h-auto rounded-lg shadow-sm"
                  />
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1200/1*Yh5I4WBBkcoQtTG-fHMBMA.jpeg"
                    alt="WhatsApp Conversational Commerce"
                    className="w-1/2 h-auto rounded-lg shadow-sm"
                  />
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                <h4 className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">
                  Session Messages
                </h4>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Two-Way Conversations
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                Engage in natural, free-flowing conversations within a 24-hour
                customer service window. Respond to customer inquiries with
                personalized support and rich media.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="p-6">
              <div className="relative mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 flex justify-center">
                  <div className="relative">
                    <img
                      src="https://www.360dialog.com/wp-content/uploads/2023/03/whatsapp-interactive-messages-reply-1024x989.png"
                      alt="Message Anatomy"
                      className="w-full max-w-xs h-auto rounded-lg"
                    />

                    <div className="absolute left-2 top-20 w-44 sm:w-64">
                      <div className="space-y-12 sm:space-y-16">
                        <motion.div
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="h-3 w-3 rounded-full bg-white border-4 border-green-500 mt-1"></div>
                          <div className="ml-2">
                            <div className="text-gray-900 dark:text-white text-xs font-medium">
                              Header
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 text-xs">
                              (optional, 20 chars of text or
                              image/video/document)
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="h-3 w-3 rounded-full bg-white border-4 border-green-500 mt-1"></div>
                          <div className="ml-2">
                            <div className="text-gray-900 dark:text-white text-xs font-medium">
                              Body
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 text-xs">
                              (mandatory, 1024 chars)
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="h-3 w-3 rounded-full bg-white border-4 border-green-500 mt-1"></div>
                          <div className="ml-2">
                            <div className="text-gray-900 dark:text-white text-xs font-medium">
                              Footer
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 text-xs">
                              (optional, text only, 60 chars)
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="h-3 w-3 rounded-full bg-white border-4 border-green-500 mt-1"></div>
                          <div className="ml-2">
                            <div className="text-gray-900 dark:text-white text-xs font-medium">
                              Buttons
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 text-xs">
                              (max. 3; text only, 20 chars)
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
                <h4 className="text-green-600 dark:text-green-400 text-sm font-medium mb-1">
                  Interactive Messages
                </h4>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Buttons & List Messages
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                Enhance customer experience with interactive buttons, list
                options, and call-to-action elements that simplify navigation
                and drive conversions.
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex space-x-2">
                  <motion.button
                    className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Yes
                  </motion.button>
                  <motion.button
                    className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    No
                  </motion.button>
                </div>
                <motion.button
                  className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded text-sm font-medium w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Visit Website
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <img
                  src="https://www.ampalainfo.com/wp-content/uploads/2024/01/whatsapp-api-integration.png"
                  alt="WhatsApp Rich Media Examples"
                  className="w-full max-w-md h-auto rounded-lg shadow-sm"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                <h4 className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">
                  Rich Media
                </h4>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Multi-Format Content
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                Share images, videos, documents, location pins, and contact
                cards to provide comprehensive information and enhance customer
                engagement.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                {[
                  { icon: <Image size={18} />, label: "Images" },
                  { icon: <Video size={18} />, label: "Videos" },
                  { icon: <File size={18} />, label: "Documents" },
                  { icon: <MapPin size={18} />, label: "Location" },
                ].map((type, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg flex flex-col items-center"
                    whileHover={{ y: -3 }}
                  >
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-1">
                      {type.icon}
                    </div>
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {type.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            {
              icon: <Bell size={18} />,
              title: "Notifications",
              color:
                "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
            },
            {
              icon: <MessageSquare size={18} />,
              title: "Quick Replies",
              color:
                "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
            },
            {
              icon: <MessageCircle size={18} />,
              title: "Interactive Buttons",
              color:
                "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
            },
            {
              icon: <Send size={18} />,
              title: "Automated Responses",
              color:
                "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
              variants={fadeIn}
              whileHover={{
                y: -4,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mb-3`}
              >
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MessageTypes;
