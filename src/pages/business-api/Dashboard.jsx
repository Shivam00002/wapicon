import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  Users,
  FileText,
  Download,
  CheckCircle,
} from "lucide-react";

const DashboardUi = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const features = [
    {
      title: "Real-Time Reporting",
      description:
        "Monitor message delivery, read rates, response times, and conversation volumes in real-time through intuitive dashboards.",
      icon: <Activity size={22} />,
    },
    {
      title: "Agent Performance Metrics",
      description:
        "Track individual agent performance with metrics on response time, resolution rate, customer satisfaction, and conversation handling.",
      icon: <Users size={22} />,
    },
    {
      title: "Template Performance Analysis",
      description:
        "Optimize your message templates with data on delivery rates, open rates, click-through rates, and conversion metrics.",
      icon: <BarChart3 size={22} />,
    },
    {
      title: "Custom Reports & Exports",
      description:
        "Generate customized reports for specific time periods, campaigns, or agents, and export data in multiple formats for further analysis.",
      icon: <FileText size={22} />,
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-xl"
              variants={imageVariants}
              whileHover="hover"
            >
              <img
                src="https://wapikon.com/wp-content/uploads/2025/03/Untitled-design-3.png"
                alt="WhatsApp Business API Analytics Dashboard"
                className="w-full h-auto"
              />

              <motion.div
                className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 bg-gradient-to-t from-green-500/30 to-transparent transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="absolute bottom-4 right-4">
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                  >
                    <LineChart size={24} className="text-green-500" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Powerful Dashboard &<br />
              Analytics
            </motion.h2>

            <motion.div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="flex-shrink-0 mr-4">
                    <motion.div
                      className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                    >
                      <CheckCircle
                        className="text-green-500 dark:text-green-400"
                        size={20}
                      />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <button className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center">
                Explore Dashboard
                <Download size={18} className="ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUi;
