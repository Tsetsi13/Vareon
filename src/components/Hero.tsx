import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/40">
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-px h-32 bg-gradient-to-b from-blue-400 to-transparent animate-pulse"></div>
          <div className="absolute top-40 left-40 w-32 h-px bg-gradient-to-r from-purple-400 to-transparent animate-pulse delay-500"></div>
          <div className="absolute top-60 right-40 w-px h-24 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-60 w-24 h-px bg-gradient-to-r from-green-400 to-transparent animate-pulse delay-1500"></div>
          <div className="absolute top-32 right-60 w-px h-20 bg-gradient-to-b from-pink-400 to-transparent animate-pulse delay-2000"></div>
        </div>
        
        {/* AI Circuit Nodes */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50">
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
        </div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-700 shadow-lg shadow-purple-500/50">
          <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75 delay-700"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-1400 shadow-lg shadow-cyan-500/50">
          <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-75 delay-1400"></div>
        </div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-2100 shadow-lg shadow-green-500/50">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75 delay-2100"></div>
        </div>
        <div className="absolute top-3/4 left-1/2 w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-2800 shadow-lg shadow-pink-500/50">
          <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping opacity-75 delay-2800"></div>
        </div>
        
        {/* Floating Data Streams */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse delay-2000"></div>
        </div>
        
        {/* Hexagonal Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                <polygon points="25,0 43.3,12.5 43.3,37.5 25,50 6.7,37.5 6.7,12.5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" className="text-blue-400"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">{t('hero.badge')}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Scale Faster with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-gradient-x">
              AI Automation
            </span>
          </h1>

          {/* Subtext */}
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed">
            Let intelligent AI chat agents and automated workflows handle leads, bookings, and customer support so your business grows effortlessly around the clock.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              <span className="flex items-center">
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                1-4 weeks
              </div>
              <div className="text-gray-400 mt-2">Implementation Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                300%
              </div>
              <div className="text-gray-400 mt-2">{t('hero.stat2')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-gray-400 mt-2">{t('hero.stat3')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;