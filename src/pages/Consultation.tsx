import React, { useState } from 'react';
import { Calendar, Mail, Phone, Building, Bot, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import { supabase, type ConsultationData } from '../lib/supabase';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'AI Automated Outreach',
    'AI Chat Agent',
    'AI Phone Callers',
    'CRM Integration',
    'Lead Generation',
    'Workflow Automation'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const consultationId = crypto.randomUUID();
    
    // Prepare data for webhook and Supabase
    const webhookData = {
      id: consultationId,
      name: formData.name,
      email: formData.email,
      selectedService: formData.selectedService,
      companyName: formData.companyName,
      problems: formData.problems,
      additionalInfo: formData.additionalInfo,
      timestamp: new Date().toISOString(),
      source: 'VareonFlow Website - Consultation Form'
    };
    
    const supabaseData: ConsultationData = {
      id: consultationId,
      name: formData.name,
      email: formData.email,
      selected_service: formData.selectedService,
      company_name: formData.companyName || null,
      problems: formData.problems || null,
      additional_info: formData.additionalInfo || null
    };
    
    try {
      // Save to Supabase first
      const { error: supabaseError } = await supabase
        .from('consultations')
        .insert([supabaseData]);
      
      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        throw new Error('Failed to save to database');
      }
      
      // Then send to Make.com webhook
      const webhookResponse = await fetch('https://hook.eu2.make.com/5nolgsek2mjn6fhf5ohvq5ii1ij8r7k7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });
      
      if (!webhookResponse.ok) {
        console.error('Webhook error:', webhookResponse.statusText);
        // Don't throw error here as Supabase save was successful
      }
      
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        selectedService: '',
        companyName: '',
        problems: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error('Webhook error:', error);
      alert('There was an error submitting the form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">{t('consultation.thankYou')}</h1>
          <p className="text-xl text-gray-300 mb-4">{t('consultation.received')}</p>
          <p className="text-gray-400 mb-8">{t('consultation.contactSoon')}</p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Main Content */}
      <main className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {t('consultation.title')}
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t('consultation.titleHighlight')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Tell us about your business needs, and we'll create a custom AI automation solution designed to solve your challenges and accelerate growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 animate-fade-in-up max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">{t('consultation.scheduleCall')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('consultation.fullName')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('consultation.email')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('consultation.selectedService')} *
                  </label>
                  <select
                    name="selectedService"
                    value={formData.selectedService}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  >
                    <option value="">{t('consultation.selectService')}</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('consultation.companyName')}
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('consultation.tellUsNeeds')}
                  </label>
                  <textarea
                    name="problems"
                    value={formData.problems}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                    placeholder={t('consultation.needsPlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : t('consultation.scheduleConsultation')}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  {t('consultation.disclaimer')}
                </p>
              </form>
              </div>
            </div>
          </div>

          {/* Benefits - Now under the form */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{t('consultation.whatYouGet')}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{t('consultation.customStrategy')}</h3>
                <p className="text-gray-400 text-sm">{t('consultation.customStrategyDesc')}</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{t('consultation.roiAnalysis')}</h3>
                <p className="text-gray-400 text-sm">{t('consultation.roiAnalysisDesc')}</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">{t('consultation.implementationRoadmap')}</h3>
                <p className="text-gray-400 text-sm">{t('consultation.implementationRoadmapDesc')}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">15 min</div>
                  <div className="text-gray-300">Quick call</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">Free</div>
                  <div className="text-gray-300">No cost</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">24h</div>
                  <div className="text-gray-300">Response time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Consultation;