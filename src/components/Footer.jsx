import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import dayLogo from "./logo/dayLogo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, delay: 0.2 },
    },
  };

  const linkHoverVariants = {
    hover: {
      x: 5,
      color: "#86efac",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 0, -5],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="bg-green-900 dark:bg-green-950 text-white dark:text-gray-100 py-12 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          <motion.div variants={containerVariants} className="lg:col-span-1">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center">
                <motion.div
                  className="flex-shrink-0"
                  variants={logoVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <img
                    src={dayLogo}
                    alt="wap!kon logo"
                    className="h-8 w-auto"
                  />
                </motion.div>
              </div>

              <motion.div
                variants={logoVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-3 rounded-md inline-block max-w-[200px]"
              >
                <img
                  src="https://wapikon.com/wp-content/uploads/2022/04/MBP-Badge-Dark-backgrounds@1x.png"
                  alt="Meta Business Partner"
                  className="h-auto w-full"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="flex space-x-2"
              >
                <img
                  src="https://wapikon.com/wp-content/uploads/2022/04/payment-icons.png"
                  alt="Payment Methods"
                  className="h-10 object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="lg:col-span-1">
            <motion.h3
              variants={itemVariants}
              className="text-xl font-bold mb-6"
            >
              Contact Us
            </motion.h3>
            <ul className="space-y-4">
              <motion.li variants={itemVariants}>
                India : +91 8069277038
              </motion.li>
              <motion.li variants={itemVariants}>
                UAE : +971 503877199
              </motion.li>
              <motion.li variants={itemVariants}>Support@wapikon.com</motion.li>
              <motion.li variants={itemVariants}>sales@wapikon.com</motion.li>
            </ul>
          </motion.div>

          <motion.div variants={containerVariants} className="lg:col-span-1">
            <motion.h3
              variants={itemVariants}
              className="text-xl font-bold mb-6"
            >
              Product
            </motion.h3>
            <ul className="space-y-4">
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#"
                  whileHover="hover"
                  variants={linkHoverVariants}
                  className="hover:text-green-300 dark:hover:text-green-200 transition-colors inline-block"
                >
                  Pricing
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#"
                  whileHover="hover"
                  variants={linkHoverVariants}
                  className="hover:text-green-300 transition-colors inline-block"
                >
                  No Code Chatbots
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#"
                  whileHover="hover"
                  variants={linkHoverVariants}
                  className="hover:text-green-300 transition-colors inline-block"
                >
                  Shopify & WooCommerce
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#"
                  whileHover="hover"
                  variants={linkHoverVariants}
                  className="hover:text-green-300 transition-colors inline-block"
                >
                  WhatsApp Business API
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={containerVariants} className="lg:col-span-1">
            <motion.h3
              variants={itemVariants}
              className="text-xl font-bold mb-6"
            >
              Company/Legal
            </motion.h3>
            <ul className="space-y-4">
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#"
                  whileHover="hover"
                  variants={linkHoverVariants}
                  className="hover:text-green-300 transition-colors inline-block"
                >
                  Contact Us
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#"
                  whileHover="hover"
                  variants={linkHoverVariants}
                  className="hover:text-green-300 transition-colors inline-block"
                >
                  Privacy Policy
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#"
                  whileHover="hover"
                  variants={linkHoverVariants}
                  className="hover:text-green-300 transition-colors inline-block"
                >
                  Terms & Conditions
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#"
                  whileHover="hover"
                  variants={linkHoverVariants}
                  className="hover:text-green-300 transition-colors inline-block"
                >
                  Refund Policy
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={containerVariants} className="lg:col-span-1">
            <motion.h3
              variants={itemVariants}
              className="text-xl font-bold mb-6"
            >
              Follow Us
            </motion.h3>
            <ul className="space-y-4">
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#"
                  whileHover="hover"
                  variants={linkHoverVariants}
                  className="hover:text-green-300 transition-colors inline-block"
                >
                  Facebook
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#"
                  whileHover="hover"
                  variants={linkHoverVariants}
                  className="hover:text-green-300 transition-colors inline-block"
                >
                  LinkedIn
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#"
                  whileHover="hover"
                  variants={linkHoverVariants}
                  className="hover:text-green-300 transition-colors inline-block"
                >
                  Instagram
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#"
                  whileHover="hover"
                  variants={linkHoverVariants}
                  className="hover:text-green-300 transition-colors inline-block"
                >
                  Youtube
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-green-800 dark:border-green-700 my-6"
        ></motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center text-sm mb-8"
        >
          <p className="mb-4">
            Globally Served: India | Singapore | Indonesia | Brazil | UAE |
            Philippines | Africa | USA | Australia
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center text-sm text-gray-300 dark:text-gray-400 mb-8"
        >
          <p>
            All third-party logos and trademarks, including Meta, Google Sheets,
            Shopify, WooCommerce, and Google Play, belong to their respective
            legal owners. Their usage does not imply any association,
            endorsement, or claim.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="border-t border-green-800 dark:border-green-800 my-6"
        ></motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            variants={itemVariants}
            className="text-sm dark:text-gray-300"
          >
            © 2025 Wapikon by{" "}
            <span className="text-green-400 dark:text-green-300">
              Kredmaxx Technologies Fze.
            </span>{" "}
            All Rights Reserved.
          </motion.div>

          <motion.button
            initial="initial"
            animate="animate"
            variants={floatVariants}
            whileHover={{ scale: 1.1 }}
            onClick={scrollToTop}
            className="bg-white dark:bg-gray-700 text-green-900 dark:text-green-400 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors mt-4 md:mt-0"
          >
            <ChevronUp size={20} />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
