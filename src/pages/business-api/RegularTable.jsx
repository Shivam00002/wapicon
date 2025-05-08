import React from "react";
import { motion } from "framer-motion";
import { Check, X, ChevronRight } from "lucide-react";

const RegularTable = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const tableRowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
      },
    }),
  };

  const comparisonFeatures = [
    {
      feature: "Number of devices",
      app: "Limited to 4 linked devices",
      api: "Unlimited agents and connections",
    },
    {
      feature: "Automation",
      app: "Basic quick replies and greetings",
      api: "Advanced chatbots, integrations, and workflows",
    },
    {
      feature: "Broadcast messaging",
      app: "Limited to 256 contacts at once",
      api: "Unlimited broadcasts to your entire customer base",
    },
    {
      feature: "Template messages",
      app: "Not available",
      api: "Send notifications without prior customer contact",
    },
    {
      feature: "System integration",
      app: "Not available",
      api: "Seamless integration with CRM, ERP, ticketing systems",
    },
    {
      feature: "Analytics",
      app: "Basic message statistics",
      api: "Comprehensive analytics and reporting dashboard",
    },
    {
      feature: "Verification badge",
      app: "Not available",
      api: "Official green verification checkmark",
    },
    {
      feature: "Interactive messages",
      app: "Not available",
      api: "Buttons, list messages, and rich interactive formats",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            WhatsApp Business API vs. Regular WhatsApp Business App
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Understand the key differences and advantages of the
            enterprise-grade API solution
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <table className="min-w-full border-collapse">
            <thead>
              <motion.tr variants={tableRowVariants} custom={0}>
                <th className="py-4 px-6 bg-green-50 dark:bg-green-900/20 text-left text-gray-900 dark:text-white font-bold rounded-tl-lg">
                  Feature
                </th>
                <th className="py-4 px-6 bg-green-50 dark:bg-green-900/20 text-left text-gray-900 dark:text-white font-bold">
                  WhatsApp Business App
                </th>
                <th className="py-4 px-6 bg-green-50 dark:bg-green-900/20 text-left text-gray-900 dark:text-white font-bold rounded-tr-lg">
                  WhatsApp Business API (Wapikon)
                </th>
              </motion.tr>
            </thead>

            <tbody>
              {comparisonFeatures.map((item, index) => (
                <motion.tr
                  key={index}
                  variants={tableRowVariants}
                  custom={index + 1}
                  className={
                    index % 2 === 0
                      ? "bg-white dark:bg-gray-800"
                      : "bg-gray-50 dark:bg-gray-800/70"
                  }
                >
                  <td className="py-4 px-6 border-t border-gray-200 dark:border-gray-700 font-medium text-gray-900 dark:text-white">
                    {item.feature}
                  </td>
                  <td className="py-4 px-6 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      {item.app === "Not available" ? (
                        <span className="text-gray-400 dark:text-gray-500 flex items-center">
                          <X
                            size={16}
                            className="mr-2 text-red-500 dark:text-red-400"
                          />
                          {item.app}
                        </span>
                      ) : (
                        item.app
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <span className="text-green-600 dark:text-green-400">
                        {item.api.includes("Unlimited") ||
                        item.api.includes("Advanced") ||
                        item.api.includes("Seamless") ? (
                          <Check
                            size={16}
                            className="mr-2 inline text-green-500 dark:text-green-400"
                          />
                        ) : null}
                        {item.api}
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}

              <motion.tr
                variants={tableRowVariants}
                custom={comparisonFeatures.length + 1}
                className="bg-white dark:bg-gray-800"
              >
                <td colSpan={3} className="h-4">
                  <div className="h-4"></div>
                </td>
              </motion.tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.button
            className="inline-flex items-center bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Enterprise API Access
            <ChevronRight size={18} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default RegularTable;
