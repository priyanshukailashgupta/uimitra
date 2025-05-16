import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Info, Settings, Shield, ArrowUp } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleBackToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-light to-white">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center gap-2">
          Cookie Policy
        </h1>
        <p className="text-lg md:text-xl mb-2">How UI Mitra uses cookies and your choices</p>
        <p className="text-sm md:text-base">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* What are cookies? */}
        <section>
          <div className="flex items-center gap-3 mb-4">
          <Cookie className="w-6 h-6 text-primary" /> 
            <h2 className="text-2xl font-bold text-primary">What are cookies?</h2>
          </div>
          <p className="text-gray-700">
            Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work, improve user experience, and provide information to site owners.
          </p>
        </section>
        <div className="my-8 h-0.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent rounded-full" />
        {/* How we use cookies */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-primary">How We Use Cookies</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To enable essential site functionality (e.g., navigation, forms, security).</li>
            <li>To remember your preferences and settings.</li>
            <li>To analyze site usage and improve our services.</li>
            <li>To deliver personalized content and marketing (with your consent where required).</li>
          </ul>
        </section>
        <div className="my-8 h-0.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent rounded-full" />
        {/* Types of cookies */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-primary">Types of Cookies We Use</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><span className="font-semibold">Essential cookies:</span> Required for the website to function properly.</li>
            <li><span className="font-semibold">Analytics cookies:</span> Help us understand how visitors interact with our site.</li>
            <li><span className="font-semibold">Preference cookies:</span> Remember your choices and settings.</li>
            <li><span className="font-semibold">Marketing cookies:</span> Used to deliver relevant ads and track campaign effectiveness.</li>
          </ul>
        </section>
        <div className="my-8 h-0.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent rounded-full" />
        {/* Managing cookies */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-primary">Managing Cookies</h2>
          </div>
          <p className="text-gray-700 mb-2">
            You can manage or disable cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of our website.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>For more information, visit your browser's help section.</li>
            <li>To opt out of analytics cookies, you may use browser add-ons or privacy settings.</li>
          </ul>
        </section>
        <div className="my-8 h-0.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent rounded-full" />
        {/* Contact */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-primary">Contact</h2>
          </div>
          <p className="text-gray-700">
            If you have any questions about our Cookie Policy, please contact us at <a href="mailto:info@uimitra.com" className="text-primary underline">info@uimitra.com</a>.
          </p>
        </section>
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

export default CookiePolicyPage; 