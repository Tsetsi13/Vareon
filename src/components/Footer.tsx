import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bot className="w-8 h-8 text-blue-500" />
                <div className="absolute inset-0 bg-blue-500 blur-lg opacity-30 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Vareon
              </span>
            </div>
            <p className="text-gray-400 max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/features/ai-chat-agent" className="hover:text-blue-400 transition-colors duration-300">AI Chat Support</Link></li>
              <li><Link to="/features/ai-phone-callers" className="hover:text-blue-400 transition-colors duration-300">AI Phone Agents</Link></li>
              <li><Link to="/features/ai-appointment-setting" className="hover:text-blue-400 transition-colors duration-300">AI Appointment Setting</Link></li>
              <li><Link to="/features/ai-outreach-campaigns" className="hover:text-blue-400 transition-colors duration-300">AI Outreach Campaigns</Link></li>
              <li><Link to="/features/lead-capture-crm-integration" className="hover:text-blue-400 transition-colors duration-300">Lead Capture & CRM Integration</Link></li>
              <li><Link to="/features/workflow-social-automation" className="hover:text-blue-400 transition-colors duration-300">Workflow & Social Automation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>support@vareonflow.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+30 6989498995</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>Greece, Thessaloniki</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about-us" className="hover:text-blue-400 transition-colors duration-300">{t('nav.aboutUs')}</Link></li>
              <li><Link to="/consultation" className="hover:text-blue-400 transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Vareon. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
              {t('footer.cookies')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;