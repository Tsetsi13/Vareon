import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const TermsOfService: React.FC = () => {
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
            <span className="text-white">Terms of Service</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
            <p className="text-gray-400 mb-8">Last updated: January 2025</p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using VareonFlow's services, you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the 
                  above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                <p className="mb-4">
                  VareonFlow provides AI automation services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI chat agents and customer support automation</li>
                  <li>Lead generation and CRM integration</li>
                  <li>Automated outreach campaigns</li>
                  <li>Workflow and social media automation</li>
                  <li>AI phone calling services</li>
                  <li>Appointment scheduling automation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                <p className="mb-4">You agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not use our services for illegal or unauthorized purposes</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                <p>
                  Payment terms will be specified in your service agreement. All fees are 
                  non-refundable unless otherwise stated. We reserve the right to change 
                  our pricing with 30 days notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Service Availability</h2>
                <p>
                  We strive to maintain high service availability but cannot guarantee 
                  uninterrupted service. We may perform maintenance that temporarily 
                  affects service availability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p>
                  VareonFlow shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including without limitation, loss 
                  of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
                <p>
                  Either party may terminate the service agreement with appropriate notice 
                  as specified in the individual service contract. Upon termination, 
                  access to services will be discontinued.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the 
                  laws of Greece, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
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

export default TermsOfService;