import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Target, Database, Zap, Phone, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Database,
      title: t('features.leadCapture.title'),
      description: t('features.leadCapture.description'),
      bullets: t('features.leadCapture.bullets'),
      gradient: 'from-blue-500 to-cyan-500',
      link: '/features/lead-capture-crm-integration',
    },
    {
      icon: Target,
      title: t('features.aiAppointment.title'),
      description: t('features.aiAppointment.description'),
      bullets: t('features.aiAppointment.bullets'),
      gradient: 'from-indigo-500 to-blue-500',
      link: '/features/ai-appointment-setting',
    },
    {
      icon: Send,
      title: t('features.aiOutreach.title'),
      description: t('features.aiOutreach.description'),
      bullets: t('features.aiOutreach.bullets'),
      gradient: 'from-cyan-500 to-teal-500',
      link: '/features/ai-outreach-campaigns',
    },
    {
      icon: Phone,
      title: t('features.aiPhone.title'),
      description: t('features.aiPhone.description'),
      bullets: t('features.aiPhone.bullets'),
      gradient: 'from-purple-500 to-pink-500',
      link: '/features/ai-phone-callers',
    },
    {
      icon: MessageCircle,
      title: t('features.aiChat.title'),
      description: t('features.aiChat.description'),
      bullets: t('features.aiChat.bullets'),
      gradient: 'from-green-500 to-emerald-500',
      link: '/features/ai-chat-agent',
    },
    {
      icon: Zap,
      title: t('features.workflow.title'),
      description: t('features.workflow.description'),
      bullets: t('features.workflow.bullets'),
      gradient: 'from-yellow-500 to-orange-500',
      link: '/features/workflow-social-automation',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {t('features.title')}
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t('features.titleHighlight')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Link
                to={feature.link}
                key={feature.title}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up block"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <div className="text-gray-300 leading-relaxed">
                    <p className="mb-4">{feature.description}</p>
                    {feature.bullets && (
                      <ul className="space-y-2">
                        {feature.bullets.map((bullet, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10`}></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;