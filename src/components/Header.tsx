import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
          >
            <div className="relative">
              <Bot className="w-8 h-8 text-blue-500" />
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-30 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Vareon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about-us"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              {t('nav.aboutUs')}
            </Link>
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById('features');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              {t('nav.features')}
            </Link>
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              {t('nav.howItWorks')}
            </Link>
            <Link
              to="/consultation"
              className="relative px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {t('nav.bookCall')}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm border-t border-gray-700 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/about-us"
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.aboutUs')}
              </Link>
              <Link
                to="/"
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    const element = document.getElementById('features');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {t('nav.features')}
              </Link>
              <Link
                to="/"
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    const element = document.getElementById('how-it-works');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {t('nav.howItWorks')}
              </Link>
              <div className="flex justify-center px-3 py-4">
                <Link
                  to="/consultation"
                  className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.bookCall')}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-30 hover:opacity-50 transition-opacity duration-300 -z-10"></div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;