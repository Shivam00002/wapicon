import React from "react";
import { motion } from "framer-motion";

const GetStart = () => {
  return (
    <section className="w-full bg-green-500 dark:bg-green-600 py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
            Ready to Transform Your Customer Communications?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-white/90 max-w-3xl mx-auto">
            Join thousands of businesses leveraging WhatsApp Business API to
            connect with their customers on their preferred messaging platform.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="pt-2 sm:pt-4"
          >
            <a
              href="#"
              className="inline-block bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-green-600 dark:text-green-400 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg transition-colors duration-200"
            >
              Get Started Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStart;
