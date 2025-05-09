import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FlowsCTA = () => {
  return (
    <div className="py-16 md:py-24 bg-green-500 dark:bg-green-600 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Experience?
          </h2>

          <p className="text-lg text-white mb-10 opacity-90">
            Start building interactive WhatsApp Flows today and see the
            difference in engagement, conversion, and customer satisfaction.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-green-600 font-medium rounded-md shadow-lg hover:shadow-xl transition-all flex items-center justify-center mx-auto"
          >
            Get Started Now
            <ArrowRight size={18} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FlowsCTA;
