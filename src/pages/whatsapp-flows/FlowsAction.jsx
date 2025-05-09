import React from "react";
import { motion } from "framer-motion";

const FlowsAction = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const useCase = [
    {
      image:
        "https://www.interakt.shop/wp-content/uploads/2024/07/Workflow.png",
      title: "Customer Support Automation",
      description:
        "Automate responses to common questions, troubleshoot issues, and escalate complex problems to human agents only when necessary.",
      stats: [
        { value: "65%", label: "Reduction in Tickets" },
        { value: "24/7", label: "Availability" },
      ],
    },
    {
      image:
        "https://images.ctfassets.net/tu2uwzoyozk8/39ZfJFJoCE1WT1KnIsoaOS/dcf88b33d63bdd37de13424937e00652/how-to-qualify-leads-auto-messages-whatsapp.png",
      title: "Lead Generation & Qualification",
      description:
        "Capture and qualify leads through interactive conversations that gather key information and score prospects based on their responses.",
      stats: [
        { value: "40%", label: "More Qualified Leads" },
        { value: "3x", label: "Conversion Rate" },
      ],
    },
    {
      image:
        "https://cdn.prod.website-files.com/5ef788f07804fb7d78a4127a/674fe2d9b37ed2d93f3956fe_674fe149845aed08067ec46f_Appointment%2520booking.webp",
      title: "Appointment Scheduling",
      description:
        "Allow customers to book, reschedule, or cancel appointments through a guided conversation with reminders and follow-ups.",
      stats: [
        { value: "80%", label: "Fewer No-Shows" },
        { value: "50%", label: "Less Staff Time" },
      ],
    },
  ];

  return (
    <div className="py-16 md:py-10 bg-[#f7fbf8] dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            WhatsApp Flows in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Discover how businesses are achieving results with interactive
            WhatsApp experiences
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {useCase.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {item.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md text-center"
                    >
                      <div className="text-green-600 dark:text-green-400 text-2xl font-bold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FlowsAction;
