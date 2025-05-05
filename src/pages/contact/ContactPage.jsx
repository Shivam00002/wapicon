import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Bell,
  Info,
  ChevronDown,
  ArrowUp,
} from "lucide-react";
import GlobalPresence from "./GlobalPresence";

const ContactPage = () => {
  const { scrollY } = useScroll();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const headerRef = useRef(null);
  const formRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const officesRef = useRef(null);

  const headerInView = useInView(headerRef, { once: false, amount: 0.3 });
  const formInView = useInView(formRef, { once: false, amount: 0.3 });
  const phoneInView = useInView(phoneRef, { once: false, amount: 0.3 });
  const emailInView = useInView(emailRef, { once: false, amount: 0.3 });
  const officesInView = useInView(officesRef, { once: false, amount: 0.3 });

  const headerY = useTransform(scrollY, [0, 200], [0, -20]);
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const formY = useTransform(scrollY, [100, 300], [50, 0]);
  const cardScale = useTransform(scrollY, [200, 400], [0.98, 1]);

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    alert("Message sent! We'll get back to you soon.");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen mt-10  w-full bg-white dark:bg-gray-900 py-8 md:py-16 px-4 md:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          className="text-center mb-12"
          style={{ y: headerY, opacity: headerOpacity }}
          initial={{ opacity: 0, y: -30 }}
          animate={{
            opacity: headerInView ? 1 : 0.5,
            y: headerInView ? 0 : -20,
          }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            whileInView={{
              textShadow: [
                "0px 0px 0px rgba(0,0,0,0)",
                "0px 0px 10px rgba(72,187,120,0.3)",
                "0px 0px 0px rgba(0,0,0,0)",
              ],
              transition: { duration: 2.5, repeat: Infinity, repeatDelay: 1 },
            }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: headerInView ? 1 : 0.7,
              y: headerInView ? 0 : 10,
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions about our WhatsApp Business API solution? We're here
            to help. Reach out to our team for personalized assistance.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <motion.div
              ref={phoneRef}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
              style={{ scale: cardScale }}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: phoneInView ? 1 : 0.6,
                x: phoneInView ? 0 : -20,
              }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className="flex-shrink-0 w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-4"
                  whileInView={{
                    backgroundColor: [
                      "rgba(240, 253, 244, 1)",
                      "rgba(220, 252, 231, 1)",
                      "rgba(240, 253, 244, 1)",
                    ],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                    },
                  }}
                >
                  <Phone className="text-green-500" size={20} />
                </motion.div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Phone Numbers
                </h2>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      UAE:
                    </p>
                    <p className="text-green-500 font-medium">+971 503877199</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      India:
                    </p>
                    <p className="text-green-500 font-medium">+91 8069277038</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      USA:
                    </p>
                    <p className="text-green-500 font-medium">
                      +1 917-540-1702
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              ref={emailRef}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
              style={{ scale: cardScale }}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: emailInView ? 1 : 0.6,
                x: emailInView ? 0 : -20,
              }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className="flex-shrink-0 w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-4"
                  whileInView={{
                    backgroundColor: [
                      "rgba(240, 253, 244, 1)",
                      "rgba(220, 252, 231, 1)",
                      "rgba(240, 253, 244, 1)",
                    ],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                    },
                  }}
                >
                  <Mail className="text-green-500" size={20} />
                </motion.div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Email Addresses
                </h2>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mr-3">
                    <Bell className="text-green-500" size={14} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Support:
                    </p>
                    <p className="text-green-500 font-medium">
                      Support@wapikon.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mr-3">
                    <Info className="text-green-500" size={14} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Sales:
                    </p>
                    <p className="text-green-500 font-medium">
                      sales@wapikon.com
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              ref={officesRef}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
              style={{ scale: cardScale }}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: officesInView ? 1 : 0.6,
                x: officesInView ? 0 : -20,
              }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className="flex-shrink-0 w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-4"
                  whileInView={{
                    backgroundColor: [
                      "rgba(240, 253, 244, 1)",
                      "rgba(220, 252, 231, 1)",
                      "rgba(240, 253, 244, 1)",
                    ],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                    },
                  }}
                >
                  <MapPin className="text-green-500" size={20} />
                </motion.div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Global Offices
                </h2>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                    UAE Office:
                  </p>
                  <div className="ml-4 space-y-1">
                    <p className="text-gray-600 dark:text-gray-400">
                      Kredmaxx Technologies Fze.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ajman, UAE
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                    India Office:
                  </p>
                  <div className="ml-4 space-y-1">
                    <p className="text-gray-600 dark:text-gray-400">
                      Kredmaxx Technologies Pvt. Ltd.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nagpur, India
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={formRef}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8"
            style={{ y: formY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: formInView ? 1 : 0.7,
              y: formInView ? 0 : 30,
            }}
            transition={{ duration: 0.8 }}
            whileHover={{ boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)" }}
          >
            <div className="mb-8">
              <motion.div
                className="inline-flex items-center bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full mb-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileInView={{
                  x: [0, 5, 0],
                  transition: { duration: 2, repeat: Infinity, repeatDelay: 3 },
                }}
              >
                <div className="h-2.5 w-2.5 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                  We're responsive!
                </span>
              </motion.div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Our team typically responds within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full appearance-none px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales</option>
                    <option value="partnership">Partnership</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="text-gray-400" size={18} />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} className="mr-2" />
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: showBackToTop ? 1 : 0,
            scale: showBackToTop ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
      <GlobalPresence />
    </div>
  );
};

export default ContactPage;
