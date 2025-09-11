import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, Settings, Users } from 'lucide-react';
import Header from '../../components/Header';

const WorkflowSocialAutomation: React.FC = () => {
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
            <span className="text-white">Workflow & Social Automation</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mb-8">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Workflow & Social Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Automate repetitive tasks and engage prospects where they spend time on social platforms and messaging apps.
            </p>
          </div>

          {/* Description */}
          <div className="space-y-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Focus on What Matters Most</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Repetitive tasks and inconsistent follow-ups slow your business down. Our AI automates workflows, reminders, and social engagement, ensuring every prospect is nurtured along their journey. You can focus on closing deals while AI handles the busy work.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Key Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Automated task flows & reminders</h3>
                    <p className="text-gray-400">Automate follow-ups, tasks, and social messaging for consistency.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">AI-powered DM & social engagement</h3>
                    <p className="text-gray-400">Engage prospects where they spend time without extra effort.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Streamlined customer journeys</h3>
                    <p className="text-gray-400">Streamline customer journeys for faster conversions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-br from-yellow-900/30 via-orange-900/30 to-red-900/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Work Smarter, Not Harder</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Stop letting small tasks drain your time. With workflow and social automation, your business runs smoothly, your team works smarter, and your leads get the attention they deserve.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Stop Wasting Time on Repetitive Tasks</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop wasting time on repetitive tasks and inconsistent follow-ups. Book a call now and let AI automate your workflows, social messaging, and customer journeys for maximum efficiency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/25"
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

export default WorkflowSocialAutomation;