import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Header from '../../components/Header';

const AIChatAgent: React.FC = () => {
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
            <span className="text-white">AI Chat Agent</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-8">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('aiChatAgent.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('aiChatAgent.subtitle')}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Instant Support That Never Sleeps</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Customers expect instant answers. Slow responses or unanswered questions can cost you sales. Our AI chat support is trained on your website, knowledge base, and internal documents, giving accurate answers instantly while qualifying leads. When needed, it escalates complex questions to human agents, ensuring nothing falls through the cracks.
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Key Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Trained on your site & docs</h3>
                    <p className="text-gray-400">Provide instant, 24/7 support without hiring extra staff.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Lead qualification in chat</h3>
                    <p className="text-gray-400">Qualify leads automatically, turning curious visitors into prospects.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Escalation to live agents</h3>
                    <p className="text-gray-400">Ensure accurate, consistent answers every time.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-cyan-900/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Enhanced Customer Experience</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Enhance your customer experience and never lose a lead due to slow responses. AI chat support keeps your business efficient and your clients happy.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Deliver Instant Answers 24/7</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Deliver instant answers, qualify leads automatically, and provide 24/7 support without extra staff. Book a call today to see how AI chat support can boost your sales and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
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

export default AIChatAgent;