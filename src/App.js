import './App.css';
import './index.css';
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

function App() {
  return (
    <>
      <Navbar />
      <BusinessHero />
      <IntegrationsGrid />
      <MessagingHub />
      <ChatbotBuilder />
      <AIChatbotWhatsApp />
      <CRMChatbox />
      <ECommerceWhatsApp />
      <FlowsForms />
      <WhatsAppAds />
    </>
  );
}

export default App;
