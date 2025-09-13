import React, { useState } from 'react';
import { Calendar, Mail, Phone, Building, Bot, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';

const Consultation: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedService: '',
    companyName: '',
    problems: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'AI Automated Outreach',
    'AI Chat Agent',
    'AI Phone Callers',
    'CRM Integration',
    'Lead Generation',
    'Workflow Automation'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData object for Netlify
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Submit to Netlify
    fetch('/', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      body: new URLSearchParams(formData as any).toString()
    })
    .then(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', selectedService: '', companyName: '', problems: '', additionalInfo: '' });
      }, 3000);
    })
    .catch((error) => {
      console.error('Form submission error:', error);
      // Fallback: try submitting to the Netlify default domain
      const fallbackUrl = 'https://famous-pavlova-92c331.netlify.app/';
      fetch(fallbackUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        },
        body: new URLSearchParams(formData as any).toString()
      })
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', selectedService: '', companyName: '', problems: '', additionalInfo: '' });
        }, 3000);
      })
      .catch(() => {
        alert('There was an error submitting the form. Please try again or contact us directly.');
      });
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Main Content */}
      <main className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('consultation.title')}
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t('consultation.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tell us about your business needs, and we'll create a custom AI automation solution designed to solve your challenges and accelerate growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">{t('consultation.whatYouGet')}</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{t('consultation.customStrategy')}</h3>
                      <p className="text-gray-400">{t('consultation.customStrategyDesc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{t('consultation.roiAnalysis')}</h3>
                      <p className="text-gray-400">{t('consultation.roiAnalysisDesc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{t('consultation.implementationRoadmap')}</h3>
                      <p className="text-gray-400">{t('consultation.implementationRoadmapDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400 mb-1">15 min</div>
                    <div className="text-gray-300 text-sm">Quick call</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-1">Free</div>
                    <div className="text-gray-300 text-sm">No cost</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-1">24h</div>
                    <div className="text-gray-300 text-sm">Response time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
              
              <div className="relative">
                <div className="flex items-center space-x-3 mb-8">
                  <Calendar className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">{t('consultation.scheduleCall')}</h3>
                </div>

                {!isSubmitted ? (
                  <form 
                    name="consultation"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div style={{ display: 'none' }}>
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('consultation.fullName')} *
                      </label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                        placeholder={t('consultation.fullName')}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('consultation.email')} *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('consultation.selectedService')} *
                      </label>
                      <div className="relative">
                        <select
                          required
                          name="selectedService"
                          value={formData.selectedService}
                          onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 appearance-none"
                        >
                          <option value="">{t('consultation.selectService')}</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('consultation.companyName')}
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                          placeholder={t('consultation.companyName')}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('consultation.tellUsNeeds')}
                      </label>
                      <textarea
                        name="problems"
                        value={formData.problems}
                        onChange={(e) => setFormData({ ...formData, problems: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                        placeholder={t('consultation.needsPlaceholder')}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25"
                    >
                      {t('consultation.scheduleConsultation')}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      {t('consultation.disclaimer')}
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">{t('consultation.thankYou')}</h4>
                    <p className="text-gray-300 mb-2">
                      {t('consultation.received')}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {t('consultation.contactSoon')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Consultation;