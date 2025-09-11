import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, Clock, Zap } from 'lucide-react';
import Header from '../../components/Header';

const AIAppointmentSetting: React.FC = () => {
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
            <span className="text-white">AI Appointment Setting</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl mb-8">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Appointment Setting
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Prospects book calls directly with AI chatbots with no phone calls and no delays. Every booking is confirmed automatically and synced to your calendar.
            </p>
          </div>

          {/* Description */}
          <div className="space-y-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Effortless Appointment Booking</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Booking calls shouldn't be complicated or leave you dependent on back-and-forth emails and missed opportunities. Our AI appointment bots let prospects book calls instantly, 24/7. They confirm the meeting immediately and sync everything to your calendar so no lead slips through the cracks.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Key Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">AI chatbot scheduling available 24/7</h3>
                    <p className="text-gray-400">Prospects can schedule at any time, even outside business hours.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Instant email confirmations</h3>
                    <p className="text-gray-400">Eliminates scheduling conflicts and reduces no-shows with automated reminders.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Smooth booking flow with no back-and-forth</h3>
                    <p className="text-gray-400">Saves your team countless hours on phone calls and emails.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-br from-indigo-900/30 via-blue-900/30 to-purple-900/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">The Power of AI Appointment Setting</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Imagine every interested prospect booking a call effortlessly without you lifting a finger. That is the power of AI appointment setting.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Make Scheduling Effortless</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Make scheduling effortless for your prospects and your team. Book a call now to implement AI appointment setting and never miss another opportunity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25"
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

export default AIAppointmentSetting;