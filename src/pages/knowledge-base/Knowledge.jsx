import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  Home,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import useArticleStore from "../../store/articleStore";

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const titleRef = useRef(null);
  const searchRef = useRef(null);
  const helpSectionRef = useRef(null);

  const { articleList, updateArticleRating } = useArticleStore();

  const titleInView = useInView(titleRef, { once: false, amount: 0.3 });
  const searchInView = useInView(searchRef, { once: false, amount: 0.3 });
  const helpSectionInView = useInView(helpSectionRef, {
    once: false,
    amount: 0.3,
  });

  const filteredArticles = searchQuery
    ? articleList.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : articleList;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRating = (slug, isHelpful) => {
    updateArticleRating(slug, isHelpful);
  };

  const ratingButtonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen w-full mt-10 bg-gray-50 dark:bg-gray-900 py-8 md:py-16 px-4 md:px-8 lg:px-16 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Link
            to="/"
            className="flex items-center hover:text-green-500 dark:hover:text-green-400"
          >
            <Home size={16} className="mr-2" />
            Home
          </Link>
          <span className="mx-2">›</span>
          <span>WhatsApp Business API</span>
        </div>

        <motion.div
          ref={titleRef}
          className="mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: titleInView ? 1 : 0.5,
            y: titleInView ? 0 : -10,
          }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            WhatsApp Business API Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Learn how to set up and make the most of WhatsApp Business API with
            Wapikon
          </p>
        </motion.div>

        <motion.div
          ref={searchRef}
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: searchInView ? 1 : 0.5,
            y: searchInView ? 0 : 10,
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        </motion.div>

        <div className="space-y-6">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -3,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                <Link
                  to={`/whatsapp-business-api/${article.slug}`}
                  className="hover:text-green-500 dark:hover:text-green-400"
                >
                  {article.title}
                </Link>
              </h2>

              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <Clock size={14} className="mr-1" />
                <span>Posted on {article.date}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <Link
                  to={`/whatsapp-business-api/${article.slug}`}
                  className="inline-flex items-center text-green-500 hover:text-green-600 dark:hover:text-green-400 font-medium"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </Link>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="mr-2">
                    {article.rating.helpful} Out of {article.rating.total} Found
                    Helpful
                  </span>

                  <div className="flex space-x-1">
                    <motion.button
                      variants={ratingButtonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                      aria-label="Mark as helpful"
                      onClick={() => handleRating(article.slug, true)}
                    >
                      <ThumbsUp size={16} />
                    </motion.button>

                    <motion.button
                      variants={ratingButtonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                      aria-label="Mark as not helpful"
                      onClick={() => handleRating(article.slug, false)}
                    >
                      <ThumbsDown size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={helpSectionRef}
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: helpSectionInView ? 1 : 0,
            y: helpSectionInView ? 0 : 20,
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-48 h-48 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <img
                src="/api/placeholder/200/200"
                alt="Help illustration"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Still no luck? We can help!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Submit a ticket and we'll get back to you as soon as possible.
              </p>

              <Link to="/submit-ticket">
                <motion.button
                  className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit a Ticket
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <div>Copyright © 2025 All Rights Reserved.</div>

          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <Link
              to="/privacy-policy"
              className="hover:text-green-500 dark:hover:text-green-400"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-use"
              className="hover:text-green-500 dark:hover:text-green-400"
            >
              Terms of Use
            </Link>
            <div className="flex items-center">
              <span className="mr-2">English</span>
              <motion.button whileHover={{ y: -2 }} className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
