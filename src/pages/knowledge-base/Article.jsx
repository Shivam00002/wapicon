import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Clock,
  ArrowRight,
  ArrowLeft,
  ThumbsUp,
  ThumbsDown,
  Home,
  Search,
  Share,
  Printer,
  ChevronDown,
} from "lucide-react";
import { Link, useParams, useLocation } from "react-router-dom";
import useArticleStore from "../../store/articleStore";

const ArticlePage = () => {
  const { articleSlug } = useParams();
  const location = useLocation();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [helpfulRating, setHelpfulRating] = useState(null);
  const [showTableOfContents, setShowTableOfContents] = useState(false);

  const { articles, updateArticleRating } = useArticleStore();

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const relatedRef = useRef(null);
  const feedbackRef = useRef(null);
  const tocRef = useRef(null);

  const titleInView = useInView(titleRef, { once: false, amount: 0.3 });
  const contentInView = useInView(contentRef, { once: false, amount: 0.1 });
  const relatedInView = useInView(relatedRef, { once: false, amount: 0.3 });
  const feedbackInView = useInView(feedbackRef, { once: false, amount: 0.3 });
  const tocInView = useInView(tocRef, { once: false, amount: 0.3 });

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (articles[articleSlug]) {
        setArticle(articles[articleSlug]);
      } else {
        console.error("Article not found");
      }
      setLoading(false);
    }, 300);
  }, [articleSlug, articles]);

  const generateTableOfContents = () => {
    if (!article) return [];

    return article.content
      .filter((section) => section.type === "heading" && section.level === 2)
      .map((heading, index) => ({
        id: `section-${index}`,
        title: heading.content,
      }));
  };

  const handleRating = (isHelpful) => {
    setHelpfulRating(isHelpful);

    updateArticleRating(articleSlug, isHelpful);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const ratingButtonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 py-6 sm:py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 xl:px-16 font-sans flex items-center justify-center">
        <div className="animate-pulse space-y-4 sm:space-y-6 w-full max-w-4xl">
          <div className="h-6 sm:h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-3 sm:h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          <div className="h-48 sm:h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 py-6 sm:py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 xl:px-16 font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Article Not Found
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/knowledge-base"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base"
          >
            Browse Knowledge Base
          </Link>
        </div>
      </div>
    );
  }

  const tableOfContents = generateTableOfContents();

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 py-6 sm:py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 xl:px-16 font-sans">
      <div className="max-w-4xl mx-auto pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="mb-4 sm:mb-6 flex flex-wrap items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <Link
            to="/"
            className="flex items-center hover:text-green-500 dark:hover:text-green-400 mb-1 sm:mb-0"
          >
            <Home size={14} className="mr-1 sm:mr-2" />
            Home
          </Link>
          <span className="mx-1 sm:mx-2 mb-1 sm:mb-0">›</span>
          <Link
            to="/knowledge-base"
            className="hover:text-green-500 dark:hover:text-green-400 mb-1 sm:mb-0"
          >
            WhatsApp Business API
          </Link>
          <span className="mx-1 sm:mx-2 mb-1 sm:mb-0">›</span>
          <span className="truncate max-w-[200px] sm:max-w-none">
            {article.title}
          </span>
        </div>

        <motion.div
          ref={titleRef}
          className="mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: titleInView ? 1 : 0.5,
            y: titleInView ? 0 : -10,
          }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <Clock size={14} className="mr-1" />
              <span>Posted on {article.publishDate}</span>
              {article.lastUpdated &&
                article.lastUpdated !== article.publishDate && (
                  <span className="ml-1 sm:ml-3">
                    (Updated: {article.lastUpdated})
                  </span>
                )}
            </div>

            <div className="flex space-x-3">
              <motion.button
                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share size={14} className="mr-1" />
                <span className="text-xs sm:text-sm">Share</span>
              </motion.button>

              <motion.button
                className="flex items-center text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Printer size={14} className="mr-1" />
                <span className="text-xs sm:text-sm">Print</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {tableOfContents.length > 0 && (
          <motion.div
            className="md:hidden mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.button
              className="w-full flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 sm:p-4 border border-gray-200 dark:border-gray-700"
              onClick={() => setShowTableOfContents(!showTableOfContents)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                Table of Contents
              </span>
              <motion.div
                animate={{ rotate: showTableOfContents ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {showTableOfContents && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 sm:p-4 border border-gray-200 dark:border-gray-700"
                >
                  <ul className="space-y-2">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            scrollToSection(item.id);
                            setShowTableOfContents(false);
                          }}
                          className="text-left text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 w-full text-sm"
                        >
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {tableOfContents.length > 0 && (
            <motion.div
              ref={tocRef}
              className="hidden md:block w-56 lg:w-64 flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: tocInView ? 1 : 0.7,
                x: tocInView ? 0 : -10,
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-5 border border-gray-100 dark:border-gray-700">
                <h3 className="text-base lg:text-lg font-medium text-gray-900 dark:text-white mb-3 sm:mb-4">
                  In This Article
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <motion.button
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 w-full text-sm"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {item.title}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          <div className="flex-1">
            <motion.div
              ref={contentRef}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 md:p-8 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: contentInView ? 1 : 0.7,
                y: contentInView ? 0 : 10,
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-end items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-6">
                <span className="mr-2">
                  {article.ratingCount.helpful} Out of{" "}
                  {article.ratingCount.total} Found Helpful
                </span>
                <div className="flex space-x-1">
                  <motion.button
                    variants={ratingButtonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    disabled={helpfulRating !== null}
                    className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      helpfulRating === true ? "text-green-500" : ""
                    }`}
                    aria-label="Mark as helpful"
                    onClick={() => handleRating(true)}
                  >
                    <ThumbsUp size={14} className="sm:w-4 sm:h-4" />
                  </motion.button>

                  <motion.button
                    variants={ratingButtonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    disabled={helpfulRating !== null}
                    className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      helpfulRating === false ? "text-red-500" : ""
                    }`}
                    aria-label="Mark as not helpful"
                    onClick={() => handleRating(false)}
                  >
                    <ThumbsDown size={14} className="sm:w-4 sm:h-4" />
                  </motion.button>
                </div>
              </div>

              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300">
                {article.content.map((section, index) => {
                  if (section.type === "paragraph") {
                    return (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                      >
                        {section.content}
                      </motion.p>
                    );
                  } else if (section.type === "heading") {
                    const HeadingTag = `h${section.level}`;
                    return (
                      <motion.div
                        key={index}
                        id={
                          section.level === 2
                            ? `section-${tableOfContents.findIndex(
                                (item) => item.title === section.content
                              )}`
                            : undefined
                        }
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                        className="scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24"
                      >
                        <HeadingTag>{section.content}</HeadingTag>
                      </motion.div>
                    );
                  } else if (section.type === "list") {
                    const ListTag = section.style === "ordered" ? "ol" : "ul";
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                      >
                        <ListTag>
                          {section.items.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.05 + itemIndex * 0.03,
                              }}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ListTag>
                      </motion.div>
                    );
                  }
                  return null;
                })}
              </div>
            </motion.div>

            <motion.div
              ref={relatedRef}
              className="mt-6 sm:mt-8 md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: relatedInView ? 1 : 0.5,
                y: relatedInView ? 0 : 10,
              }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Related Articles
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {article.relatedArticles.map((relatedArticle, index) => (
                  <motion.div key={relatedArticle.id}>
                    <Link
                      to={`/whatsapp-business-api/${relatedArticle.slug}`}
                      className="block bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 sm:p-4 border border-gray-100 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{
                        y: -3,
                        boxShadow:
                          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <h3 className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">
                        {relatedArticle.title}
                      </h3>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              ref={feedbackRef}
              className="mt-6 sm:mt-8 md:mt-10 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: feedbackInView ? 1 : 0,
                y: feedbackInView ? 0 : 20,
              }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Was this article helpful?
              </h2>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <motion.button
                  className={`flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm sm:text-base ${
                    helpfulRating === true ? "bg-green-600" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleRating(true)}
                  disabled={helpfulRating !== null}
                >
                  <ThumbsUp size={14} className="mr-2" />
                  Yes, it was helpful
                </motion.button>

                <motion.button
                  className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors text-sm sm:text-base ${
                    helpfulRating === false
                      ? "bg-gray-300 dark:bg-gray-600"
                      : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleRating(false)}
                  disabled={helpfulRating !== null}
                >
                  <ThumbsDown size={14} className="mr-2" />
                  No, I need more help
                </motion.button>
              </div>

              {helpfulRating === false && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className="mt-4"
                >
                  <Link
                    to="/submit-ticket"
                    className="text-green-500 hover:text-green-600 dark:hover:text-green-400 font-medium text-sm sm:text-base"
                  >
                    Submit a support ticket
                  </Link>
                  <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm sm:text-base">
                    and our team will help you directly.
                  </span>
                </motion.div>
              )}
            </motion.div>

            <div className="mt-6 sm:mt-8 md:mt-10 flex justify-between text-sm sm:text-base">
              {article.prev ? (
                <motion.div>
                  <Link
                    to={`/whatsapp-business-api/${article.prev.slug}`}
                    className="flex items-center text-green-500 hover:text-green-600 dark:hover:text-green-400 font-medium"
                    whileHover={{ x: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowLeft size={14} className="mr-1" />
                    <span className="truncate max-w-[120px] sm:max-w-[200px]">
                      Previous: {article.prev.title}
                    </span>
                  </Link>
                </motion.div>
              ) : (
                <div></div>
              )}

              {article.next ? (
                <motion.div>
                  <Link
                    to={`/whatsapp-business-api/${article.next.slug}`}
                    className="flex items-center text-green-500 hover:text-green-600 dark:hover:text-green-400 font-medium"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="truncate max-w-[120px] sm:max-w-[200px]">
                      {article.next.title}: Next
                    </span>
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </motion.div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <div>Copyright © 2025 All Rights Reserved.</div>

          <div className="mt-3 md:mt-0 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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
                  className="h-3 w-3 sm:h-4 sm:w-4"
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

export default ArticlePage;
