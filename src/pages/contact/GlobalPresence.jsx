import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const GlobalPresence = () => {
  const titleRef = useRef(null);
  const uaeCardRef = useRef(null);
  const indiaCardRef = useRef(null);
  const usaCardRef = useRef(null);
  const ctaRef = useRef(null);

  const titleInView = useInView(titleRef, { once: false, amount: 0.3 });
  const uaeCardInView = useInView(uaeCardRef, { once: false, amount: 0.3 });
  const indiaCardInView = useInView(indiaCardRef, { once: false, amount: 0.3 });
  const usaCardInView = useInView(usaCardRef, { once: false, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.5,
      },
    },
  };

  const locations = [
    {
      country: "UAE",
      city: "Ajman",
      mapImage:
        "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/F4FA/production/_128841726_bbcm_uae_country_profile_map_240223.jpg",
      flagImage:
        "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/F4FA/production/_128841726_bbcm_uae_country_profile_map_240223.jpg",
      companyName: "Kredmaxx Technologies Fze.",
      address1: "Ajman Free Zone",
      address2: "Ajman, United Arab Emirates",
      phone: "+971 503877199",
      ref: uaeCardRef,
      inView: uaeCardInView,
    },
    {
      country: "India",
      city: "Nagpur",
      mapImage:
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/05/290736.jpg",
      flagImage:
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/05/290736.jpg",
      companyName: "Kredmaxx Technologies Pvt. Ltd.",
      address1: "IT Park, Parsodi",
      address2: "Nagpur, Maharashtra, India",
      phone: "+91 8069277038",
      ref: indiaCardRef,
      inView: indiaCardInView,
    },
    {
      country: "USA",
      city: "New York",
      mapImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1200px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
      flagImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1200px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
      companyName: "Wapikon",
      address1: "1230 Avenue of the Americas",
      address2: "New York, NY 10020, USA",
      phone: "+1 917-540-1702",
      ref: usaCardRef,
      inView: usaCardInView,
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: titleInView ? 1 : 0.5,
            y: titleInView ? 0 : -10,
          }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
            whileInView={{
              textShadow: [
                "0px 0px 0px rgba(0,0,0,0)",
                "0px 0px 10px rgba(72,187,120,0.3)",
                "0px 0px 0px rgba(0,0,0,0)",
              ],
              transition: { duration: 2.5, repeat: Infinity, repeatDelay: 1 },
            }}
          >
            Our Global Presence
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.country}
              ref={location.ref}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate={location.inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={location.mapImage}
                  alt={`Map of ${location.city}, ${location.country}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40"></div>
                <div className="absolute top-4 right-4 h-10 shadow-md rounded overflow-hidden">
                  <img
                    src={location.flagImage}
                    alt={`Flag of ${location.country}`}
                    className="h-full w-auto"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {location.city}, {location.country}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="flex-shrink-0 mt-1 text-green-500 w-5 h-5" />
                    <div className="ml-3">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {location.companyName}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {location.address1}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {location.address2}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="flex-shrink-0 text-green-500 w-5 h-5" />
                    <div className="ml-3">
                      <p className="text-gray-600 dark:text-gray-400">Phone:</p>
                      <p className="text-green-500 font-medium">
                        {location.phone}
                      </p>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="#"
                  className="inline-flex items-center text-green-500 hover:text-green-600 font-medium mt-5"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Get Directions
                  <ArrowRight className="ml-1 w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={ctaRef}
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: ctaInView ? 1 : 0,
            y: ctaInView ? 0 : 20,
          }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: ctaInView ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ready to transform your customer communications?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: ctaInView ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Join thousands of businesses leveraging WhatsApp Business API to
            connect with their customers on their preferred messaging platform.
          </motion.p>

          <motion.a
            href="#"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: ctaInView ? 1 : 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Get Started Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalPresence;
