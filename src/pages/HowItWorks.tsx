import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Search, Settings, Rocket, BarChart, CheckCircle, Clock, Users, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';

const HowItWorksPage: React.FC = () => {
  const { t } = useLanguage();
  const steps = [
    {
      icon: Search,
      step: '01',
      title: t('howItWorksPage.discoveryAnalysis'),
      description: t('howItWorksPage.discoveryDesc'),
      details: [
        'Business process audit and mapping',
        'Technology stack assessment',
        'ROI potential analysis',
        'Custom requirements gathering'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      duration: '1-2 weeks'
    },
    {
      icon: Settings,
      step: '02',
      title: t('howItWorksPage.customSolutionDesign'),
      description: t('howItWorksPage.customSolutionDesc'),
      details: [
        'Custom AI model configuration',
        'Workflow automation design',
        'Integration architecture planning',
        'User experience optimization'
      ],
      gradient: 'from-purple-500 to-pink-500',
      duration: '2-3 weeks'
    },
    {
      icon: Rocket,
      step: '03',
      title: t('howItWorksPage.implementationTraining'),
      description: t('howItWorksPage.implementationDesc'),
      details: [
        'System deployment and testing',
        'Third-party integrations',
        'Team training and onboarding',
        'Quality assurance and optimization'
      ],
      gradient: 'from-green-500 to-emerald-500',
      duration: '2-4 weeks'
    },
    {
      icon: BarChart,
      step: '04',
      title: t('howItWorksPage.optimizationGrowth'),
      description: t('howItWorksPage.optimizationDesc'),
      details: [
        'Performance monitoring and analytics',
        'Continuous optimization',
        'Scaling and expansion planning',
        'Ongoing support and maintenance'
      ],
      gradient: 'from-yellow-500 to-orange-500',
      duration: 'Ongoing'
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: t('howItWorksPage.provenProcess'),
      description: t('howItWorksPage.provenProcessDesc')
    },
    {
      icon: Users,
      title: t('howItWorksPage.expertTeam'),
      description: t('howItWorksPage.expertTeamDesc')
    },
    {
      icon: Target,
      title: t('howItWorksPage.measurableResults'),
      description: t('howItWorksPage.measurableResultsDesc')
    }
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
            <span className="text-white">How It Works</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven 4-step methodology ensures successful AI automation that delivers measurable results and transforms your business operations.
            </p>
          </div>

          {/* Benefits Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Process</h3>
              <p className="text-gray-300 text-sm">Refined through hundreds of successful implementations.</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300 text-sm">Dedicated AI specialists guide your project from start to finish.</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Measurable Results</h3>
              <p className="text-gray-300 text-sm">Average 300% increase in lead generation and 75% reduction in manual tasks.</p>
            </div>
          </div>

          {/* Detailed Steps */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 animate-fade-in-up">
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    01
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Discovery & Analysis</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">1–2 Weeks</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  We audit your business processes, identify bottlenecks, and uncover automation opportunities.
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Key Activities:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Business process mapping</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Technology stack assessment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">ROI potential analysis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Custom requirements gathering</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center">
                  <Search className="w-24 h-24 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    02
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Custom Solution Design</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">2–3 Weeks</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Tailored AI solutions designed for your workflows and business needs.
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Key Activities:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Custom AI model configuration</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Workflow automation design</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Integration architecture planning</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">User experience optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center">
                  <Settings className="w-24 h-24 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    03
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Implementation & Training</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">2–4 Weeks</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  We deploy AI systems, integrate with your tools, and train your team for maximum efficiency.
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Key Activities:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">System deployment and testing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Third-party integrations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Team onboarding</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Quality assurance and optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-64 h-64 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center">
                  <Rocket className="w-24 h-24 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    04
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Optimization & Growth</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">Ongoing</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Continuous monitoring and scaling to maximize ROI and drive sustainable growth.
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Key Activities:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Performance monitoring and analytics</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Continuous optimization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Scaling and expansion planning</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Ongoing support and maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-64 h-64 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center">
                  <BarChart className="w-24 h-24 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-20 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <h2 className="text-3xl font-bold text-white text-center mb-8">Implementation Timeline</h2>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                  01
                </div>
                <h4 className="text-white font-semibold mb-1">Discovery & Analysis</h4>
                <p className="text-gray-400 text-sm">1–2 Weeks</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                  02
                </div>
                <h4 className="text-white font-semibold mb-1">Custom Solution Design</h4>
                <p className="text-gray-400 text-sm">2–3 Weeks</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                  03
                </div>
                <h4 className="text-white font-semibold mb-1">Implementation & Training</h4>
                <p className="text-gray-400 text-sm">2–4 Weeks</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                  04
                </div>
                <h4 className="text-white font-semibold mb-1">Optimization & Growth</h4>
                <p className="text-gray-400 text-sm">Ongoing</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-green-900/30 rounded-2xl p-12 mt-16 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your automation needs and create a custom implementation plan for your business.
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

export default HowItWorksPage;