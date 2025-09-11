import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Settings, Rocket, BarChart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      step: '01',
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Settings,
      step: '02',
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      step: '03',
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: BarChart,
      step: '04',
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description'),
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our 4-step process makes AI automation easy, fast, and results-driven.
          </p>
          <Link
            to="/how-it-works"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Our Process
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center animate-fade-in-up">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                01
              </div>
            </div>
            
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-4 mt-4">
              <Search className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              Discovery & Analysis
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              We uncover opportunities in your processes so AI can save time and boost revenue.
            </p>
          </div>

          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                02
              </div>
            </div>
            
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4 mt-4">
              <Settings className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              Custom Solution Design
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Tailored AI solutions designed for your business, not a generic system.
            </p>
          </div>

          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                03
              </div>
            </div>
            
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-4 mt-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              Implementation & Training
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Seamless deployment and team training so you start seeing results immediately.
            </p>
          </div>

          <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center animate-fade-in-up" style={{ animationDelay: '450ms' }}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                04
              </div>
            </div>
            
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl mb-4 mt-4">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              Optimization & Growth
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Continuous monitoring and scaling to maximize ROI and drive business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;