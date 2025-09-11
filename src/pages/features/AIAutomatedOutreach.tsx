import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Send, Target, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import Header from '../../components/Header';

const AIAutomatedOutreach: React.FC = () => {
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
            <span className="text-white">AI Automated Outreach</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl mb-8">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Outreach Campaigns
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Run personalized email, SMS, and LinkedIn campaigns that feel human, follow up automatically, and convert cold contacts into warm leads.
            </p>
          </div>

          {/* Description */}
          <div className="space-y-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Turn Cold Contacts Into Warm Leads</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Cold emails, DMs, and social campaigns are time-consuming, and most go ignored. Our AI outreach tool crafts personalized messages that feel human, sends them automatically, and follows up until you get a response. You reach your audience where they spend time, turning cold contacts into warm, qualified leads.
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Key Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">AI-written, human-like messaging</h3>
                    <p className="text-gray-400">Build relationships at scale without losing the personal touch.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Smart follow-up sequences</h3>
                    <p className="text-gray-400">Automated follow-ups increase reply rates without extra work.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Boosted open & reply rates</h3>
                    <p className="text-gray-400">Engage prospects across email, Instagram, and X effortlessly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-br from-cyan-900/30 via-teal-900/30 to-blue-900/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Stop Wasting Time on Ineffective Outreach</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Stop wasting hours on outreach that does not convert. With AI campaigns, you get more conversations, more appointments, and more revenue.
              </p>
            </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Stop Wasting Hours on Cold Outreach</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop wasting hours on cold outreach that doesn't convert. Book a call today and discover how AI can engage your audience, nurture leads, and fill your calendar with qualified prospects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-full font-semibold text-lg hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/"
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white rounded-full font-semibold text-lg hover:bg-gray-700/50 hover:border-gray-500 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default AIAutomatedOutreach;