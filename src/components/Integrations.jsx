import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const IntegrationsGrid = () => {
  const integrations = [
    {
      name: "Instamojo",
      imgUrl:
        "https://www.instamojo.com/blog/wp-content/uploads/2023/10/instamojo-logo-1.webp",
      bgColor: "bg-indigo-600",
      textColor: "text-white",
    },
    {
      name: "WhatsApp Workflow",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",
      bgColor: "bg-green-500",
      textColor: "text-white",
    },
    {
      name: "Telegram",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png",
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
    {
      name: "Africas Talking",
      imgUrl: "https://africas-talking.com/assets/img/AT%20Logo.svg",
      bgColor: "bg-yellow-600",
      textColor: "text-white",
    },
    {
      name: "Mautic",
      imgUrl: "https://www.mautic.org/media/logos/Mautic_Logo_RGB_LB.png",
      bgColor: "bg-blue-600",
      textColor: "text-white",
    },
    {
      name: "Instagram",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png",
      bgColor: "bg-pink-500",
      textColor: "text-white",
    },
    {
      name: "Mollie",
      imgUrl: "https://www.mollie.com/images/mollie/og/mollie-og.png",
      bgColor: "bg-gray-800",
      textColor: "text-white",
    },
    {
      name: "Mercado Pago",
      imgUrl:
        "https://logospng.org/download/mercado-pago/logo-mercado-pago-1024.png",
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
    {
      name: "PayPal",
      imgUrl:
        "https://cdn.icon-icons.com/icons2/2699/PNG/512/paypal_logo_icon_170865.png",
      bgColor: "bg-blue-700",
      textColor: "text-white",
    },
    {
      name: "Google Map",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png",
      bgColor: "bg-red-500",
      textColor: "text-white",
    },
    {
      name: "Woo Commerce",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/1200px-WooCommerce_logo.svg.png",
      bgColor: "bg-purple-700",
      textColor: "text-white",
    },

    {
      name: "Open AI",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1200px-OpenAI_Logo.svg.png",
      bgColor: "bg-gray-700",
      textColor: "text-white",
    },
    {
      name: "WhatsApp",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",
      bgColor: "bg-green-500",
      textColor: "text-white",
    },
    {
      name: "AWS",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
      bgColor: "bg-orange-500",
      textColor: "text-white",
    },
    {
      name: "Mailgun",
      imgUrl:
        "https://static-00.iconduck.com/assets.00/mailgun-icon-512x484-c8m3rhdh.png",
      bgColor: "bg-red-600",
      textColor: "text-white",
    },
    {
      name: "MyFatooraH",
      imgUrl: "https://www.myfatoorah.com/assets/images/logo-fatoora.png",
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
    {
      name: "AWS SES",
      imgUrl:
        "https://d2908q01vomqb2.cloudfront.net/1b6453892473a467d07372d45eb05abc2031647a/2020/06/24/SES_banner.png",
      bgColor: "bg-orange-500",
      textColor: "text-white",
    },
    {
      name: "WP Form",
      imgUrl: "https://ps.w.org/wp-forms/assets/icon-256x256.png",
      bgColor: "bg-orange-600",
      textColor: "text-white",
    },
    {
      name: "PayPro",
      imgUrl:
        "https://play-lh.googleusercontent.com/kniILZLY-n4CAHxgKAEjZ3-QLGoOWjVZZw7e6vYNP16ff_DTLsmwDg5IKyRIgW9fRA",
      bgColor: "bg-blue-600",
      textColor: "text-white",
    },
    {
      name: "Maya (Paymaya)",
      imgUrl: "https://www.maya.ph/hubfs/Raw_Images/Maya-Meta-Image.jpg",
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
    {
      name: "Mandrill",
      imgUrl:
        "https://marketplace-cdn.atlassian.com/files/images/58c12084-e1d3-4ef9-95ec-1810759a93ff.png",
      bgColor: "bg-blue-600",
      textColor: "text-white",
    },
    {
      name: "WhatsApp Catalogue",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",
      bgColor: "bg-green-500",
      textColor: "text-white",
    },

    {
      name: "toyyibPay",
      imgUrl: "https://toyyibpay.com/assets/img/logo/toyyibpay-logo.png",
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
    {
      name: "HTTP API",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/8297/8297374.png",
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
    {
      name: "API",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/2164/2164832.png",
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
    {
      name: "Google Sheet",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1200px-Google_Sheets_logo_%282014-2020%29.svg.png",
      bgColor: "bg-green-600",
      textColor: "text-white",
    },
    {
      name: "Elementor",
      imgUrl:
        "https://elementor.com/marketing/wp-content/uploads/sites/9/2021/04/elementor-logo-square.svg",
      bgColor: "bg-red-700",
      textColor: "text-white",
    },
    {
      name: "Webhook",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/2602/2602486.png",
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
    {
      name: "Zapier",
      imgUrl: "https://cdn.zapier.com/zappy/images/zapier-logo.png",
      bgColor: "bg-orange-500",
      textColor: "text-white",
    },
    {
      name: "WhatsApp Flows",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",
      bgColor: "bg-green-500",
      textColor: "text-white",
    },
    {
      name: "MailChimp",
      imgUrl:
        "https://cdn-images-1.medium.com/v2/resize:fit:1200/1*2FrV8q6rPdUvnNcYThJ3vw.png",
      bgColor: "bg-yellow-500",
      textColor: "text-white",
    },
    {
      name: "DeepSeek AI",
      imgUrl: "https://avatars.githubusercontent.com/u/151177466?s=200&v=4",
      bgColor: "bg-blue-600",
      textColor: "text-white",
    },
    {
      name: "Shopify",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png",
      bgColor: "bg-green-600",
      textColor: "text-white",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(12);
  const [imageLoadStatus, setImageLoadStatus] = useState({});
  const [gridCols, setGridCols] = useState("grid-cols-3");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setGridCols("grid-cols-3");
      } else if (window.innerWidth < 768) {
        setGridCols("grid-cols-4");
      } else if (window.innerWidth < 1024) {
        setGridCols("grid-cols-6");
      } else {
        setGridCols("grid-cols-6 xl:grid-cols-8");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageLoad = (index) => {
    setImageLoadStatus((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleImageError = (index) => {
    setImageLoadStatus((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -5,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const getInitials = (name) => {
    if (!name) return "";
    const words = name.split(" ");
    if (words.length === 1) {
      return name.substring(0, 2).toUpperCase();
    }
    return words
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, integrations.length));
  };

  const visibleIntegrations = integrations.slice(0, visibleCount);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-10 text-gray-800 dark:text-white">
        Wapikon's Top Integrations
      </h2>

      <motion.div
        className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-3`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {visibleIntegrations.map((integration, index) => (
          <motion.div
            key={index}
            className="relative bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-lg shadow-sm flex flex-col items-center justify-center cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-colors"
            variants={itemVariants}
            whileHover="hover"
            animate="visible"
            whileTap={{ scale: 0.97 }}
            initial="hidden"
          >
            <motion.div
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center mb-1 sm:mb-2 overflow-hidden bg-gray-100 dark:bg-gray-700"
              variants={hoverVariants}
            >
              {imageLoadStatus[index] !== false ? (
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center">
                  <img
                    src={integration.imgUrl}
                    alt={integration.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                    style={{
                      display:
                        imageLoadStatus[index] === true ? "block" : "none",
                    }}
                  />
                  {imageLoadStatus[index] !== true && (
                    <div
                      className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full ${integration.bgColor} flex items-center justify-center`}
                    >
                      <span
                        className={`text-xs font-bold ${integration.textColor}`}
                      >
                        {getInitials(integration.name)}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full ${integration.bgColor} flex items-center justify-center`}
                >
                  <span
                    className={`text-[10px] sm:text-xs font-bold ${integration.textColor}`}
                  >
                    {getInitials(integration.name)}
                  </span>
                </div>
              )}
            </motion.div>
            <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-center text-gray-800 dark:text-gray-200 line-clamp-1">
              {integration.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {visibleCount < integrations.length && (
        <div className="flex justify-center mt-6 sm:mt-8">
          <motion.button
            onClick={loadMore}
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 transition-colors font-medium text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default IntegrationsGrid;
