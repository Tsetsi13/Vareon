import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const CookiePolicy: React.FC = () => {
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
            <span className="text-white">Cookie Policy</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Cookie Policy</h1>
            <p className="text-gray-400 mb-8">Last updated: January 2025</p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device 
                  when you visit a website. They are widely used to make websites work more 
                  efficiently and provide information to website owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
                <p className="mb-4">We use cookies for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Essential Cookies</h3>
                    <p className="mb-2">These cookies are necessary for the website to function and cannot be switched off.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Session management</li>
                      <li>Security features</li>
                      <li>Load balancing</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Analytics Cookies</h3>
                    <p className="mb-2">These cookies help us understand how visitors use our website.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Google Analytics</li>
                      <li>Page view tracking</li>
                      <li>User behavior analysis</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Functional Cookies</h3>
                    <p className="mb-2">These cookies remember your preferences and provide enhanced features.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Language preferences</li>
                      <li>Form data retention</li>
                      <li>User interface customization</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Marketing Cookies</h3>
                    <p className="mb-2">These cookies are used to deliver relevant advertisements.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Ad targeting</li>
                      <li>Conversion tracking</li>
                      <li>Retargeting campaigns</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Managing Cookies</h2>
                <p className="mb-4">
                  You can control and manage cookies in various ways. Please note that removing 
                  or blocking cookies can impact your user experience and parts of our website 
                  may no longer be fully accessible.
                </p>
                <p className="mb-4">Most browsers allow you to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete cookies individually or all at once</li>
                  <li>Block third-party cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block all cookies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Cookies</h2>
                <p>
                  Some cookies on our website are set by third-party services. We have no control 
                  over these cookies and they are governed by the privacy policies of the 
                  respective third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. Any changes will be posted 
                  on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
                  <p>Email: support@vareonflow.com</p>
                  <p>Phone: +30 6989498995</p>
                  <p>Address: Thessaloniki, Greece</p>
                </div>
              </section>
            </div>

            <div className="mt-12 text-center">
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

export default CookiePolicy;