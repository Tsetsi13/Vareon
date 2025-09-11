import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Phone, Clock, Target, Mic, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Header from '../../components/Header';

const AIPhoneCallers: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link to="/#features" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Features
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">AI Phone Callers</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl mb-8">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('aiPhoneCallers.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('aiPhoneCallers.subtitle')}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Never Miss an Opportunity</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Incoming calls from leads are opportunities that should never be missed. Our AI phone agents answer calls instantly, handle common questions, qualify prospects, and even book appointments automatically. Important calls are transferred to your team when needed, and every interaction is recorded and synced with your CRM, so your sales team is always informed.
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Key Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Human-like voice calls</h3>
                    <p className="text-gray-400">Provide instant, professional responses to incoming calls.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Lead qualification & booking</h3>
                    <p className="text-gray-400">Qualify leads and book appointments automatically.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Call recordings & CRM transcripts</h3>
                    <p className="text-gray-400">Transfer high-value calls to your team when necessary. Call recordings and transcripts are saved in your CRM.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-br from-indigo-900/30 via-blue-900/30 to-purple-900/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Capture Every Opportunity</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Never let an incoming call go unanswered. With AI phone agents, your business captures every opportunity, schedules meetings, and delivers a consistent experience.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Every Call is an Opportunity</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Every incoming call is a chance to convert a lead into a customer. Book a call now and let AI phone agents answer, qualify, and even book appointments automatically.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25"
              >
                {t('featurePage.getStartedToday')}
              </Link>
              <Link
                to="/"
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white rounded-full font-semibold text-lg hover:bg-gray-700/50 hover:border-gray-500 transition-all duration-300"
              >
                {t('featurePage.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIPhoneCallers;