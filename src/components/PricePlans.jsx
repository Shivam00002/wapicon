import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Phone, Users, MessageSquare } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Startup Plan',
      originalPrice: '₹ 19999 p/y',
      currentPrice: '₹ 7999 p/y',
      promotion: '(Billed yearly) Get Additional 1 Months Free',
      accounts: 'Connect 1 WhatsApp Account only',
      features: [
        'Message Credit - 50K / Month',
        'Unlimited Chatbots',
        'Agents/Team Members - 3',
        'Unlimited Broadcasting',
        'Bulk Contact Import - Unlimited',
        'WhatsApp Catalog with Payment Integrations -1',
        'Sequence / Drip Campaign',
        'WhatsApp Flows',
        'WhatsApp - Carousel Template',
        'Shopify Integration',
        'WooCommerce Integration',
        'No Code Chatbot Builder',
        'Website Chat Widget',
        'Chat GPT Integration',
        'DeepSeek AI Integration',
        'AI Training (FAQs, URLs, Files)',
        'Webhook Workflow - 2',
        { feature: 'Advanced Message Template', available: false },
        'Google Sheet Integration',
        { feature: 'Instagram Comment Automation', available: false },
        { feature: 'Facebook Comment Automation', available: false },
        { feature: 'API Integration', available: false },
        { feature: 'Shared Team Inbox', available: false },
        { feature: 'HTTP API Flow Builder', available: false },
        { feature: 'Instagram & Facebook Chatbots', available: false },
        { feature: 'All Telegram Bot Automation', available: false }
      ],
      popular: false,
      platforms: []
    },
    {
      name: 'Growth Plan',
      originalPrice: '₹ 29999 p/y',
      currentPrice: '₹ 12999 p/y',
      promotion: '(Billed yearly) Get Additional 2 Months Free',
      accounts: 'Connect up to 4 Accounts',
      features: [
        'Message Credit - 100K / Month',
        'Unlimited Chatbots',
        'Agents/Team Members - 3',
        'Unlimited Broadcasting',
        'Bulk Contact Import - Unlimited',
        'WhatsApp Catalog with Payment Integrations -2',
        'Sequence / Drip Campaign',
        'WhatsApp Flows',
        'WhatsApp - Carousel Template',
        'Shopify Integration',
        'WooCommerce Integration',
        'No Code Chatbot Builder',
        'Website Chat Widget',
        'Chat GPT Integration',
        'DeepSeek AI Integration',
        'AI Training (FAQs, URLs, Files)',
        'Webhook Workflow - 5',
        'Advanced Message Template',
        'Google Sheet Integration',
        'Instagram Comment Automation',
        'Facebook Comment Automation',
        { feature: 'API Integration', available: false },
        'Shared Team Inbox',
        { feature: 'HTTP API Flow Builder', available: false },
        'Instagram & Facebook Chatbots',
        'All Telegram Bot Automation'
      ],
      popular: false,
      platforms: ['whatsapp', 'facebook', 'instagram', 'telegram']
    },
    {
      name: 'Enterprise',
      originalPrice: '₹ 49999 p/y',
      currentPrice: '₹ 24999 p/y',
      promotion: '(Billed yearly) Get Additional 2 Months Free',
      accounts: 'Connect up to 10 Accounts',
      features: [
        'Message Credit - Unlimited',
        'Unlimited Chatbots',
        'Agents/Team Members - 10',
        'Unlimited Broadcasting',
        'Bulk Contact Import - Unlimited',
        'WhatsApp Catalog with Payment Integrations -10',
        'Sequence / Drip Campaign',
        'WhatsApp Flows',
        'WhatsApp - Carousel Template',
        'Shopify Integration',
        'WooCommerce Integration',
        'No Code Chatbot Builder',
        'Website Chat Widget',
        'Chat GPT Integration',
        'DeepSeek AI Integration',
        'AI Training (FAQs, URLs, Files)',
        'Webhook Workflow - Unlimited',
        'Advanced Message Template',
        'Google Sheet Integration',
        'Instagram Comment Automation',
        'Facebook Comment Automation',
        'API Integration',
        'Shared Team Inbox',
        'HTTP API Flow Builder',
        'Instagram & Facebook Chatbots',
        'All Telegram Bot Automation'
      ],
      popular: true,
      platforms: ['whatsapp', 'facebook', 'instagram', 'telegram']
    }
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={`plan-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white py-1 px-4 rounded-bl-lg font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <p className="text-gray-500 dark:text-gray-400 line-through text-sm">
                    {plan.originalPrice}
                  </p>
                  <p className="text-3xl font-bold text-green-500">
                    {plan.currentPrice}
                  </p>
                </div>
                
                <div className="bg-red-100 dark:bg-red-900/20 rounded-full py-2 px-4 text-red-600 dark:text-red-300 text-sm mb-4">
                  {plan.promotion}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {plan.accounts}
                </p>
                
                {plan.platforms.length > 0 && (
                  <div className="flex space-x-2 mb-4">
                    {plan.platforms.includes('whatsapp') && (
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <Phone size={18} className="text-gray-700 dark:text-gray-300" />
                      </div>
                    )}
                    {plan.platforms.includes('facebook') && (
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 dark:text-gray-300">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </div>
                    )}
                    {plan.platforms.includes('instagram') && (
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 dark:text-gray-300">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                    )}
                    {plan.platforms.includes('telegram') && (
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 dark:text-gray-300">
                          <path d="M21.8 5C21.4 4.6 20.9 4.4 20.4 4.4C19.9 4.3 19.4 4.4 19 4.6L3 11C2.4 11.2 2 11.6 1.8 12.1C1.6 12.6 1.7 13.2 2 13.6C2.3 14 2.8 14.3 3.3 14.3L8.5 15.4L9.6 20.5C9.7 21 10 21.4 10.4 21.7C10.8 21.9 11.2 22 11.6 21.9C12 21.8 12.4 21.5 12.6 21.1L15.2 16.3L19.4 19.6C19.7 19.8 20 20 20.4 20C20.8 20 21.1 19.9 21.4 19.7C21.7 19.5 22 19.2 22.1 18.8C22.2 18.4 22.3 18 22.2 17.6L21.8 5Z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                )}
                
                <button className="w-full py-3 px-4 bg-white dark:bg-gray-800 text-green-500 border border-green-500 rounded-md font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors mb-6">
                  Signup Now
                </button>
                
                {/* Scrollable features list */}
                <div className="max-h-80 overflow-y-auto pr-2 space-y-3" style={{scrollbarWidth: 'thin'}}>
                  {plan.features.map((feature, featureIndex) => {
                    const isObject = typeof feature === 'object';
                    const featureText = isObject ? feature.feature : feature;
                    const isAvailable = isObject ? feature.available !== false : true;
                    
                    return (
                      <div key={`feature-${featureIndex}`} className="flex items-start">
                        {isAvailable ? (
                          <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        ) : (
                          <X size={18} className="text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                        )}
                        <span className={`${isAvailable ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}`}>
                          {featureText}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;