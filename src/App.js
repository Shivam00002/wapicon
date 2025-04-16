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
import CatalogsPayments from './components/CatalogsPayments';
import WhatsAppApiUI from './components/Enterprise';
import GreenTick from './components/GreenTick';

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
      <CatalogsPayments />
      <WhatsAppApiUI />
      <GreenTick />
    </>
  );
}

export default App;
