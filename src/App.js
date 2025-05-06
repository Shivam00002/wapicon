import React from 'react';
import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BusinessHero from './components/BusinessHero';
import IntegrationsGrid from './components/Integrations';
import MessagingHub from './components/MessagingHub';
import ChatbotBuilder from './components/ChatbotBuild';
import AIChatbotWhatsApp from './components/AIChatbot';
import CRMChatbox from './components/ClientSupport';
import ECommerceWhatsApp from './components/ECommerce';
import FlowsForms from './components/FormsWtsp';
import WhatsAppAds from './components/WhatsAppAds';
import CatalogsPayments from './components/CatalogsPayments';
import WhatsAppApiUI from './components/Enterprise';
import GreenTick from './components/GreenTick';
import DashboardImg from './components/WhatsDashboard';
import FeatureCards from './components/FeatureCards';
import GetStart from './components/GetStart';
import FeatureGrid from './components/Feachers';
import PricingHeader from './components/Simple';
import PricingPlans from './components/PricePlans';
import Footer from './components/Footer';
import Pricing from './pages/Pricing';
import ContactPage from './pages/contact/ContactPage';
import KnowledgeBase from './pages/knowledge-base/Knowledge';
import ArticlePage from './pages/knowledge-base/Article';



function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <BusinessHero />
              <IntegrationsGrid />
              <MessagingHub />
              <ChatbotBuilder />
              <AIChatbotWhatsApp />
              <CRMChatbox />
              <ECommerceWhatsApp />
              <FlowsForms />
              <WhatsAppAds />
              <CatalogsPayments />
              <WhatsAppApiUI />
              <GreenTick />
              <DashboardImg />
              <FeatureCards />
              <GetStart />
              <FeatureGrid />
              <PricingHeader />
              <PricingPlans />
            </>
          } />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/whatsapp-business-api/:articleSlug" element={<ArticlePage/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;