import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Globe, Database, Cookie, UserCheck, ChevronRight, Info, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  { id: 'introduction', title: 'Introduction', icon: <FileText className="w-5 h-5 text-primary" /> },
  { id: 'data-we-collect', title: 'Data We Collect', icon: <Database className="w-5 h-5 text-primary" /> },
  { id: 'how-we-use-data', title: 'How We Use Your Data', icon: <Eye className="w-5 h-5 text-primary" /> },
  { id: 'how-we-share', title: 'How We Share Information', icon: <Globe className="w-5 h-5 text-primary" /> },
  { id: 'cookie-policy', title: 'Cookie Policy', icon: <Cookie className="w-5 h-5 text-primary" /> },
  { id: 'data-retention', title: 'Data Retention', icon: <Database className="w-5 h-5 text-primary" /> },
  { id: 'security', title: 'Security', icon: <Lock className="w-5 h-5 text-primary" /> },
  { id: 'your-rights', title: 'Your Rights', icon: <UserCheck className="w-5 h-5 text-primary" /> },
  { id: 'other-info', title: 'Other Important Information', icon: <Shield className="w-5 h-5 text-primary" /> },
  { id: 'contact', title: 'Contact Us', icon: <Info className="w-5 h-5 text-primary" /> },
];

const Divider = () => <div className="my-8 h-0.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent rounded-full" />;

const PrivacyPolicyPage: React.FC = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleBackToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-light to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-lg md:text-xl mb-2">Your privacy is important to us at UI Mitra.</p>
        <p className="text-sm md:text-base">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
        {/* Table of Contents */}
        <aside className="md:w-1/3 mb-8 md:mb-0">
          <div className="bg-white rounded-xl shadow p-6 sticky top-24 border border-primary/10">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Table of Contents</h2>
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id} className="flex items-center gap-2">
                  {section.icon}
                  <a href={`#${section.id}`} className="text-primary hover:underline text-base">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:w-2/3 space-y-12">
          {/* Introduction */}
          <section id="introduction">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Introduction</h2>
            </div>
            <p className="text-gray-700 mb-2">
              At UI Mitra, we are committed to protecting your privacy and ensuring transparency about how your data is used. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you use our website and services.
            </p>
            <p className="text-gray-700">
              By using our services, you agree to the terms of this Privacy Policy. If you have any questions, please contact us at <a href="mailto:info@uimitra.com" className="text-primary underline">info@uimitra.com</a>.
            </p>
          </section>

          <Divider />

          {/* Data We Collect */}
          <section id="data-we-collect">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Data We Collect</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Personal information (name, email, phone, company, etc.) you provide via forms or sign-up.</li>
              <li>Payment and billing information (if you purchase services).</li>
              <li>Usage data (pages visited, actions taken, device/browser info).</li>
              <li>Cookies and similar tracking technologies for analytics and personalization.</li>
              <li>Communications and feedback you send to us.</li>
              <li>Data from third-party integrations (e.g., Google, LinkedIn sign-in) if you use them.</li>
            </ul>
          </section>

          <Divider />

          {/* How We Use Your Data */}
          <section id="how-we-use-data">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">How We Use Your Data</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To provide, maintain, and improve our services and website.</li>
              <li>To communicate with you about your account, projects, or inquiries.</li>
              <li>To personalize your experience and deliver relevant content.</li>
              <li>To analyze usage and improve our offerings.</li>
              <li>To comply with legal obligations and protect our rights.</li>
              <li>For marketing, research, and product improvement (with your consent where required).</li>
              <li>To prevent fraud, abuse, or security issues.</li>
            </ul>
          </section>

          <Divider />

          {/* How We Share Information */}
          <section id="how-we-share">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">How We Share Information</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>With trusted service providers who help us operate our business (e.g., hosting, analytics, payment processors).</li>
              <li>With your consent or at your direction.</li>
              <li>When required by law or to protect our rights and safety.</li>
              <li>In connection with a business transfer (e.g., merger, acquisition).</li>
              <li>With business partners for joint offerings (with notice and consent where required).</li>
              <li>We do not sell your personal data to third parties.</li>
            </ul>
          </section>

          <Divider />

          {/* Cookie Policy */}
          <section id="cookie-policy">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Cookie Policy</h2>
            </div>
            <p className="text-gray-700 mb-2">
              We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Essential cookies: Required for basic site functionality.</li>
              <li>Analytics cookies: Help us understand site usage and improve our services.</li>
              <li>Marketing cookies: Used to deliver relevant ads and measure campaign effectiveness.</li>
            </ul>
            <p className="text-gray-700 mt-2">
              You can manage or disable cookies through your browser settings. For more details, see our <Link to="/cookie-policy" className="text-primary underline">Cookie Policy</Link> (if available).
            </p>
          </section>

          <Divider />

          {/* Data Retention */}
          <section id="data-retention">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Data Retention</h2>
            </div>
            <p className="text-gray-700 mb-2">
              We retain your personal data only as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Account data is retained while your account is active and for a reasonable period afterward.</li>
              <li>Data related to transactions is kept for tax and legal compliance.</li>
              <li>We regularly review and securely delete or anonymize data that is no longer needed.</li>
            </ul>
          </section>

          <Divider />

          {/* Security */}
          <section id="security">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Security</h2>
            </div>
            <p className="text-gray-700 mb-2">
              We implement appropriate technical and organizational measures to protect your data, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Encryption of data in transit and at rest where possible.</li>
              <li>Access controls and authentication for staff and systems.</li>
              <li>Regular security assessments and monitoring.</li>
              <li>Incident response procedures in case of a breach.</li>
            </ul>
            <p className="text-gray-700 mt-2">
              While we strive to protect your data, no method of transmission or storage is 100% secure. If you have security concerns, please contact us.
            </p>
          </section>

          <Divider />

          {/* Your Rights */}
          <section id="your-rights">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Your Rights</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You can access, update, or delete your personal information by contacting us.</li>
              <li>You can opt out of marketing emails at any time using the unsubscribe link.</li>
              <li>You can manage cookies through your browser settings.</li>
              <li>You have the right to object to or restrict certain processing of your data.</li>
              <li>You may request data portability (a copy of your data in a machine-readable format).</li>
              <li>If you are in the EU/EEA, you have rights under the GDPR. If you are in California, you have rights under the CCPA.</li>
              <li>To exercise your rights, contact us at <a href="mailto:info@uimitra.com" className="text-primary underline">info@uimitra.com</a>.</li>
            </ul>
          </section>

          <Divider />

          {/* Other Important Information */}
          <section id="other-info">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Other Important Information</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>We may update this Privacy Policy from time to time. Changes will be posted on this page.</li>
              <li>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</li>
              <li>For more details, contact us at <a href="mailto:info@uimitra.com" className="text-primary underline">info@uimitra.com</a>.</li>
              <li>International transfers: Your data may be processed outside your country. We ensure appropriate safeguards are in place for such transfers.</li>
            </ul>
          </section>

          <Divider />

          {/* Contact Us */}
          <section id="contact">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
            </div>
            <p className="text-gray-700 mb-2">
              If you have any questions or concerns about this Privacy Policy or your data, please contact us:
            </p>
            <ul className="text-gray-700">
              <li><span className="font-semibold">Email:</span> info@uimitra.com</li>
              <li><span className="font-semibold">Address:</span> E10, Green Glen Layout, Outer Ring Road, Bellandur, Bengaluru, Karnataka, India - 560103</li>
            </ul>
          </section>
        </main>
      </div>
      {showTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default PrivacyPolicyPage;

