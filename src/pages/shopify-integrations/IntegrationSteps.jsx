import React from "react";
import { motion } from "framer-motion";

const IntegrationSteps = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const iconAnimation = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Integration Made Simple
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Connect your e-commerce store to WhatsApp in three easy steps
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-x-8 lg:gap-x-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <motion.div
              className="flex items-center mb-6"
              variants={iconAnimation}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                1
              </motion.div>
            </motion.div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Connect Your Store
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-10">
              Install our plugin for WooCommerce or connect your Shopify store
              with just a few clicks. No technical skills required.
            </p>

            <motion.div
              className="h-[400px] flex items-center justify-center"
              variants={imageAnimation}
            >
              <motion.img
                src="https://www.mysmsmantra.com/blog/img/53.jpg"
                alt="WhatsApp order tracking interface"
                className="max-w-full max-h-full object-contain"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <motion.div
              className="flex items-center mb-6"
              variants={iconAnimation}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                2
              </motion.div>
            </motion.div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Set Up Automations
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-10">
              Configure automated messages for order confirmations, shipping
              updates, abandoned carts, and more using our intuitive templates.
            </p>

            <motion.div
              className="h-[400px] flex items-center justify-center"
              variants={imageAnimation}
            >
              <motion.img
                src="https://bizmagnets.ai/wp-content/uploads/2024/08/api-01-768x1024.png"
                alt="Woman with laptop and WhatsApp business features"
                className="max-w-full max-h-full object-contain"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <motion.div
              className="flex items-center mb-6"
              variants={iconAnimation}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                3
              </motion.div>
            </motion.div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Launch & Monitor
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-10">
              Activate your integration and monitor performance through our
              comprehensive analytics dashboard to optimize customer engagement.
            </p>

            <motion.div
              className="h-[400px] flex flex-col items-center justify-center"
              variants={imageAnimation}
            >
              <motion.div
                className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                WhatsApp Cloud API
              </motion.div>
              <motion.img
                src="https://cdn.botpenguin.com/assets/website/Whats_App_Cloud_API_3d24ae6184.webp"
                alt="WhatsApp Cloud API diagram"
                className="max-w-full max-h-[350px] object-contain"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationSteps;
