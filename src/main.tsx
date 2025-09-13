import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import App from './App.tsx';
import Consultation from './pages/Consultation.tsx';
import HowItWorksPage from './pages/HowItWorks.tsx';
import AIChatAgent from './pages/features/AIChatAgent.tsx';
import AIPhoneCallers from './pages/features/AIPhoneCallers.tsx';
import AIAutomatedOutreach from './pages/features/AIAutomatedOutreach.tsx';
import LeadCaptureCRMIntegration from './pages/features/LeadCaptureCRMIntegration.tsx';
import AIAppointmentSetting from './pages/features/AIAppointmentSetting.tsx';
import WorkflowAutomation from './pages/features/WorkflowAutomation.tsx';
import WorkflowSocialAutomation from './pages/features/WorkflowSocialAutomation.tsx';
import Contact from './pages/Contact.tsx';
import AboutUs from './pages/AboutUs.tsx';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features/ai-chat-agent" element={<AIChatAgent />} />
          <Route path="/features/ai-phone-callers" element={<AIPhoneCallers />} />
          <Route path="/features/ai-outreach-campaigns" element={<AIAutomatedOutreach />} />
          <Route path="/features/lead-capture-crm-integration" element={<LeadCaptureCRMIntegration />} />
          <Route path="/features/ai-appointment-setting" element={<AIAppointmentSetting />} />
          <Route path="/features/workflow-social-automation" element={<WorkflowSocialAutomation />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </StrictMode>
);
