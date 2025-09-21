import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const PrivacyPolicy: React.FC = () => {
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
            <span className="text-white">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last updated: January 2025</p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  request a consultation, or contact us for support.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal information (name, email address, phone number)</li>
                  <li>Company information (company name, industry, size)</li>
                  <li>Communication preferences</li>
                  <li>Technical information about your business needs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Communicate with you about products, services, and events</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
                <p>
                  We may share your information with trusted third parties who assist us in operating 
                  our website, conducting our business, or servicing you, as long as those parties 
                  agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
                  <p>Email: official@vareonflow.com</p>
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

export default PrivacyPolicy;