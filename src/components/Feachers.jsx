import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Megaphone, 
  ShoppingCart, 
  Mail, 
  FileText, 
  DollarSign, 
  Users,
  Smartphone,
  Code,
  BarChart2,
  Globe,
  Shield,
  Bot,
  Layers
} from 'lucide-react';

const FeatureGrid = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const featureRows = [

    [
      {
        icon: <MessageSquare className="text-green-500" size={24} />,
        title: "Messaging Features",
        features: [
          "Unlimited Bulk Messaging",
          "No-code Chatbot for Automation",
          "AI-Powered Chatbot Integration",
          "Template Message Management",
          "Scheduled Messaging"
        ]
      },
      {
        icon: <Megaphone className="text-green-500" size={24} />,
        title: "Campaign Management",
        features: [
          "Bulk Broadcasting and Campaigns",
          "Campaign Analytics for Delivery and Engagement Rates",
          "A/B Testing for Campaigns",
          "Segmentation and Targeted Messaging"
        ]
      },
      {
        icon: <ShoppingCart className="text-green-500" size={24} />,
        title: "Ecommerce Integration",
        features: [
          "Shopify and WooCommerce Integration",
          "Real-Time Order Notifications",
          "Abandoned Cart Notifications",
          "WhatsApp Catalog for Products",
          "WhatsApp Shop for Direct Purchases"
        ]
      }
    ],

    [
      {
        icon: <Mail className="text-green-500" size={24} />,
        title: "Contact Management",
        features: [
          "Phonebook Management",
          "Contact Segmentation and Tags",
          "Import and Export Contacts",
          "Custom Fields for Contact Details"
        ]
      },
      {
        icon: <Layers className="text-green-500" size={24} />,
        title: "Native Flows",
        features: [
          "WhatsApp Forms for Seamless Data Collection",
          "Automated Flows for Customer Journeys",
          "Customizable Native Workflows"
        ]
      },
      {
        icon: <DollarSign className="text-green-500" size={24} />,
        title: "Payment Integrations",
        features: [
          "Razorpay and Stripe Integration",
          "In-Chat Payments",
          "Integration with Regional Payment Gateways",
          "On line Collection requests"
        ]
      }
    ],
  
    [
      {
        icon: <FileText className="text-green-500" size={24} />,
        title: "Advertising Features",
        features: [
          "Click-to-WhatsApp Ads for Lead Generation",
          "Ad Performance Analytics",
          "Direct Integration with Meta Ads Manager",
          "Real-time ad tracking"
        ]
      },
      {
        icon: <FileText className="text-green-500" size={24} />,
        title: "Automation",
        features: [
          "Workflow Automation",
          "Google Sheets Add-On for Automated Messaging",
          "Webhook Support for Real-Time Updates",
          "Zapier/Pabbly Integration for over 5k+ Apps"
        ]
      },
      {
        icon: <Bot className="text-green-500" size={24} />,
        title: "Chatbot Features",
        features: [
          "Drag-and-Drop Chatbot Builder",
          "Unlimited Chatbot Creation",
          "Chatbot Templates for Common Use Cases",
          "Live Chat Handoff for Human Intervention"
        ]
      }
    ],

    [
      {
        icon: <Users className="text-green-500" size={24} />,
        title: "User and Agent Management",
        features: [
          "Unlimited Agents and Departments",
          "Role-Based Access Control",
          "Shared Team Inbox for Collaboration",
          "Agent Assignment Rules"
        ]
      },
      {
        icon: <Smartphone className="text-green-500" size={24} />,
        title: "Mobile App for Chat",
        features: [
          "Native Mobile App for iOS and Android",
          "Chat with Push Notifications",
          "Shared Team Inbox on Mobile",
          "Chat Assignment and Escalation",
          "Real-Time Chat Sync"
        ]
      },
      {
        icon: <Code className="text-green-500" size={24} />,
        title: "Developer API",
        features: [
          "API Access for Custom Integrations",
          "Outbound Webhook Management",
          "REST API Documentation",
          "Multi-Platform Integration Support"
        ]
      }
    ],

    [
      {
        icon: <BarChart2 className="text-green-500" size={24} />,
        title: "Analytics and Reporting",
        features: [
          "Real-Time Analytics",
          "Engagement Reports",
          "Exportable Insights (PDF/Excel)"
        ]
      },
      {
        icon: <Globe className="text-green-500" size={24} />,
        title: "Website Integration",
        features: [
          "Chat Widgets for Websites",
          "Web Form Integration",
          "Real-time Auto-Responses for Queries"
        ]
      },
      {
        icon: <Shield className="text-green-500" size={24} />,
        title: "Security and Compliance",
        features: [
          "Data Encryption for Security",
          "Business Verification Support for WhatsApp API",
          "Two-Factor Authentication"
        ]
      }
    ]
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {featureRows.map((row, rowIndex) => (
            <div 
              key={`row-${rowIndex}`} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {row.map((feature, columnIndex) => (
                <motion.div
                  key={`feature-${rowIndex}-${columnIndex}`}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="bg-green-50 dark:bg-green-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    {feature.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, index) => (
                      <li key={`item-${index}`} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1.5">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureGrid;