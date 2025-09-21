import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CallToAction: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-green-900/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait. Join hundreds of businesses already growing with AI automation. Book your free consultation now and see how fast your business can scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/consultation"
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              <span className="flex items-center">
                <Calendar className="mr-3 w-5 h-5" />
                {t('cta.button')}
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
            </Link>

            <div className="text-center sm:text-left">
              <div className="text-sm text-gray-400">{t('cta.feature1')}</div>
              <div className="text-sm text-gray-400">{t('cta.feature2')}</div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-400 mb-2">15 min</div>
              <div className="text-gray-300">{t('cta.stat1')}</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-purple-400 mb-2">Custom</div>
              <div className="text-gray-300">{t('cta.stat2')}</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-green-400 mb-2">ROI</div>
              <div className="text-gray-300">{t('cta.stat3')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;