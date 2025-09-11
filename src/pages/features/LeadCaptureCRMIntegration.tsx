import React from 'react';
import { Link } from 'react-router-dom';
import { Database, CheckCircle, Target, Zap } from 'lucide-react';
import Header from '../../components/Header';

const LeadCaptureCRMIntegration: React.FC = () => {
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
            <span className="text-white">Lead Capture & CRM Integration</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-8">
              <Database className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lead Capture & CRM Integration
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              AI chatbots instantly capture leads from your website, ads, or landing pages and push them into your CRM so no lead ever slips through the cracks.
            </p>
          </div>

          {/* Description */}
          <div className="space-y-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Never Miss Another Lead</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Every business struggles with missed leads. Someone visits your site, asks a question, and disappears before your team can follow up. Our AI chatbots ensure that never happens. They engage visitors instantly, capture their information, and automatically organize it in your CRM. No more lost opportunities, messy spreadsheets, or manual data entry.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Key Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Real-time lead syncing to your CRM</h3>
                    <p className="text-gray-400">Every captured lead is instantly synchronized with your CRM system, ensuring no data is lost.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Smart tagging & lead scoring</h3>
                    <p className="text-gray-400">Always know who your hottest leads are with intelligent tagging and automated scoring systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Works seamlessly with HubSpot, Pipedrive, Salesforce</h3>
                    <p className="text-gray-400">Save hours of manual work by syncing everything directly to your existing CRM platform.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-br from-blue-900/30 via-cyan-900/30 to-green-900/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Transform Your Lead Management</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                With this system in place, your sales team focuses on selling, not chasing missed leads, turning potential clients into paying customers faster.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Stop Losing Leads</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop losing leads and start turning visitors into loyal customers. Book a call today and see how AI can capture every opportunity while your team focuses on closing deals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
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
      </main>
    </div>
  );
};

export default LeadCaptureCRMIntegration;