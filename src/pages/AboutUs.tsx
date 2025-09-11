import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Users, Target, Award, CheckCircle, Zap, Heart, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';

const AboutUs: React.FC = () => {
  const { t } = useLanguage();
  const values = [
    {
      icon: Target,
      title: t('aboutUs.innovationFirst'),
      description: t('aboutUs.innovationDesc'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: t('aboutUs.clientSuccess'),
      description: t('aboutUs.clientSuccessDesc'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: t('aboutUs.excellence'),
      description: t('aboutUs.excellenceDesc'),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: t('aboutUs.accessibility'),
      description: t('aboutUs.accessibilityDesc'),
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { number: '1-4 weeks', label: 'Implementation Time' },
    { number: '300%', label: 'Average Lead Increase' },
    { number: '75%', label: 'Task Automation Rate' },
    { number: '24/7', label: 'AI Support Availability' }
  ];

  const achievements = [
    'Leading AI automation platform with 99.9% uptime',
    'Trusted by Fortune 500 companies and growing startups',
    'Award-winning customer support and implementation team',
    'Proven ROI with average 6-month payback period',
    'Industry-leading security and compliance standards',
    'Continuous innovation with monthly feature releases'
  ];

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
            <span className="text-white">About Us</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Vareon
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help businesses harness the power of AI to automate processes, generate leads, and scale operations—all without the complexity.
            </p>
          </div>

          {/* Mission Statement */}

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Our Story */}
          <div className="mb-16">
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As AI technology advances rapidly, many businesses struggle to implement it effectively. That's why we create practical, user-friendly AI solutions that deliver real results.
                </p>
                <p>
                  While others promise AI, we deliver measurable outcomes. Our team combines deep technical expertise with real-world business experience, resulting in an average 300% increase in lead generation and 75% reduction in manual tasks within the first quarter.
                </p>
                <p>
                  What sets us apart? We don't just implement technology; we become your strategic partner. From the initial consultation to ongoing optimization, we are committed to your success.
                </p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                     <h3 className="text-white font-semibold mb-2">1. Discovery & Analysis</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">Assessing your unique needs and identifying AI integration opportunities.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                     <h3 className="text-white font-semibold mb-2">3. Implementation & Training</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">Seamlessly integrating technology and training your team.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                     <h3 className="text-white font-semibold mb-2">2. Custom Solution Design</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">Tailoring solutions to align with your business goals.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                     <h3 className="text-white font-semibold mb-2">4. Optimization & Growth</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">Continuously refining solutions for sustained efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose GROW.AI */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Vareon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Hands-on, personalized support for your business</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">AI automation that drives measurable growth</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Focus on efficiency, lead generation, and business scaling</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Continuous innovation to keep your business ahead</span>
              </div>
            </div>
          </div>


          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that trust Vareon to automate their operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                Book a Call
              </Link>
              <Link
                to="/"
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white rounded-full font-semibold text-lg hover:bg-gray-700/50 hover:border-gray-500 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;