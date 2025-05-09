import React from "react";
import { motion } from "framer-motion";

const ProductsDisplay = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const products = [
    {
      image:
        "https://image3.nihaojewelry.com/fit-in/800x800/filters:format(webp)/product/2022/9/24/1573507631484637184/Women-s-Large-All-Seasons-Pu-Leather-Fashion-Handbag.jpg",
      title: "Leather Crossbody Bag",
      description:
        "Handcrafted genuine leather bag with adjustable strap and multiple compartments.",
      price: "$89.99",
    },
    {
      image:
        "https://coffeeza.in/cdn/shop/files/6_45435d25-8729-4576-8ae6-88ea5f2ef091.webp?v=1740130640",
      title: "Premium Coffee Blend",
      description:
        "Organic, fair-trade coffee beans with notes of chocolate and caramel. 12oz bag.",
      price: "$18.50",
    },
    {
      image:
        "https://www.kimirica.shop/cdn/shop/files/LOVESTORYEXPERIENCESET_Website_Listing_New-01.jpg?v=1740471818&width=1000",
      title: "Skincare Gift Set",
      description:
        "Complete set with cleanser, toner, serum, and moisturizer in a beautiful gift box.",
      price: "$49.95",
    },
    {
      image:
        "https://www.gonoise.com/cdn/shop/files/1_3941f406-f4ff-4692-8ef4-6719497a0f56.webp?v=1720759157",
      title: "Wireless Headphones",
      description:
        "Noise-cancelling with 30-hour battery life and premium sound quality.",
      price: "$129.99",
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Products, Beautifully Displayed
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See how your products will appear in the WhatsApp Catalog
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex flex-col gap-3">
                  <p className="text-green-500 dark:text-green-400 text-xl font-semibold">
                    {product.price}
                  </p>
                  <button className="w-full py-2 px-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-medium rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors text-center">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
