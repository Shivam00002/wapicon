import React from "react";
import { motion } from "framer-motion";

const SuccessStories = () => {
  const successStories = [
    {
      image:
        "https://www.wati.io/wp-content/uploads/2023/12/WhatsApp-Business-for-Restaurants-A-Complete-Guide-for-Food-Merchants-%E2%80%93-2-1024x512.webp",
      title: "Restaurant Chain",
      description:
        "A family restaurant created an interactive menu catalog with food categories, mouth-watering images, and detailed descriptions, enabling direct ordering via WhatsApp.",
      stats: [
        { value: "45%", label: "Order Increase" },
        { value: "28%", label: "Larger Orders" },
      ],
    },
    {
      image:
        "https://www.interakt.shop/wp-content/uploads/2023/02/1-3-1024x807.webp",
      title: "Beauty Salon",
      description:
        "A salon organized their services into a comprehensive catalog with prices, duration information, and before/after photos, allowing clients to book appointments via WhatsApp.",
      stats: [
        { value: "60%", label: "Booking Rate" },
        { value: "90%", label: "Client Satisfaction" },
      ],
    },
    {
      image:
        "https://blog.peppercloud.com/content/images/2023/12/Catalog--2-.jpg",
      title: "Fashion Retailer",
      description:
        "A boutique clothing store created a visual catalog of their latest collection, allowing customers to browse styles, check sizes, and purchase directly through WhatsApp.",
      stats: [
        { value: "75%", label: "Faster Checkout" },
        { value: "3x", label: "More Inquiries" },
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
            WhatsApp Catalog Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            See how businesses are transforming their sales with WhatsApp
            Catalog
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {story.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {story.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {story.stats.map((stat, statIndex) => (
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
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
