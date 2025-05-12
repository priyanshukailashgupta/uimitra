import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FloatingParticles from './components/FloatingParticles';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import UIUXSection from './components/UIUXSection';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import TeamPage from './components/TeamPage';
import SuccessStoriesPage from './components/SuccessStoriesPage';
import WebDesignPage from './components/WebDesignPage';
import LogoDesignPage from './components/LogoDesignPage';
import AppDesignPage from './components/AppDesignPage';
import GraphicsDesignPage from './components/GraphicsDesignPage';
import BrandStrategyPage from './components/BrandStrategyPage';
import BrandGuidelinesPage from './components/BrandGuidelinesPage';
import BrandIdentityPage from './components/BrandIdentityPage';
import BrandDevelopmentPage from './components/BrandDevelopmentPage';
import BrandDesignBuildPage from './components/BrandDesignBuildPage';
import DigitalMarketingPage from './components/DigitalMarketingPage';
import SEOServicesPage from './components/SEOServicesPage';
import SocialMediaMarketingPage from './components/SocialMediaMarketingPage';
import EmailMarketingPage from './components/EmailMarketingPage';
import AnalyticsReportingPage from './components/AnalyticsReportingPage';
import YouTubeMarketingPage from './components/YouTubeMarketingPage';
import LinkedInMarketingPage from './components/LinkedInMarketingPage';
import TwitterMarketingPage from './components/TwitterMarketingPage';
import InstagramMarketingPage from './components/InstagramMarketingPage';
import OtherPlatformsPage from './components/OtherPlatformsPage';
import TechnologiesPage from './components/TechnologiesPage';
import AIEnhancedDesignPage from './components/AIEnhancedDesignPage';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import ParallaxText from './components/ParallaxText';
import UIUXGraphicDesignPage from './components/UIUXGraphicDesignPage';
import DigitalMarketing from './components/DigitalMarketing';
import SocialMedia from './components/SocialMedia';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import LetsConnectPage from './components/LetsConnectPage';
import CookiePolicyPage from './components/CookiePolicyPage';
import TermsPage from './components/TermsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <Router>
      <ScrollToTop />
      <FloatingParticles />
      <Routes>
        <Route path="/success-stories" element={
          <>
            <Navbar />
            <SuccessStoriesPage />
            <Footer />
          </>
        } />
        <Route path="/team" element={
          <>
            <Navbar />
            <TeamPage />
            <Footer />
          </>
        } />
        <Route path="/services" element={
          <>
            <Navbar />
            <ServicesPage />
            <Footer />
          </>
        } />
        <Route path="/services/web-design" element={
          <>
            <Navbar />
            <WebDesignPage />
            <Footer />
          </>
        } />
        <Route path="/services/logo-design" element={
          <>
            <Navbar />
            <LogoDesignPage />
            <Footer />
          </>
        } />
        <Route path="/services/app-design" element={
          <>
            <Navbar />
            <AppDesignPage />
            <Footer />
          </>
        } />
        <Route path="/services/graphics-design" element={
          <>
            <Navbar />
            <GraphicsDesignPage />
            <Footer />
          </>
        } />
        <Route path="/services/ai-design" element={
          <>
            <Navbar />
            <AIEnhancedDesignPage />
            <Footer />
          </>
        } />
        <Route path="/services/ui-ux-design" element={
          <>
            <Navbar />
            <UIUXSection />
            <Footer />
          </>
        } />
        <Route path="/services/ui-ux-graphic-design" element={
          <>
            <Navbar />
            <UIUXGraphicDesignPage />
            <Footer />
          </>
        } />
        <Route path="/services/brand-design-build" element={
          <>
            <Navbar />
            <BrandDesignBuildPage />
            <Footer />
          </>
        } />        
         <Route path="/services/digital-marketing" element={
          <>
            <Navbar />
            <DigitalMarketing />
            <Footer />
          </>
        } /> 
        <Route path="/services/social-media" element={
          <>
            <Navbar />
            <SocialMedia />
            <Footer />
          </>
        } />
        <Route path="/services/brand-strategy" element={
          <>
            <Navbar />
            <BrandStrategyPage />
            <Footer />
          </>
        } />
        <Route path="/services/brand-guidelines" element={
          <>
            <Navbar />
            <BrandGuidelinesPage />
            <Footer />
          </>
        } />
        <Route path="/services/brand-identity" element={
          <>
            <Navbar />
            <BrandIdentityPage />
            <Footer />
          </>
        } />
        <Route path="/services/brand-development" element={
          <>
            <Navbar />
            <BrandDevelopmentPage />
            <Footer />
          </>
        } />
        <Route path="/services/digital-marketing-page" element={
          <>
            <Navbar />
            <DigitalMarketingPage />
            <Footer />
          </>
        } />
        <Route path="/services/seo" element={
          <>
            <Navbar />
            <SEOServicesPage />
            <Footer />
          </>
        } />
        <Route path="/services/social-media-page" element={
          <>
            <Navbar />
            <SocialMediaMarketingPage />
            <Footer />
          </>
        } />
        <Route path="/services/youtube-marketing" element={
          <>
            <Navbar />
            <YouTubeMarketingPage />
            <Footer />
          </>
        } />
        <Route path="/services/linkedin-marketing" element={
          <>
            <Navbar />
            <LinkedInMarketingPage />
            <Footer />
          </>
        } />
        <Route path="/services/twitter-marketing" element={
          <>
            <Navbar />
            <TwitterMarketingPage />
            <Footer />
          </>
        } />
        <Route path="/services/instagram-marketing" element={
          <>
            <Navbar />
            <InstagramMarketingPage />
            <Footer />
          </>
        } />
        <Route path="/services/other-platforms" element={
          <>
            <Navbar />
            <OtherPlatformsPage />
            <Footer />
          </>
        } />
        <Route path="/services/email-marketing" element={
          <>
            <Navbar />
            <EmailMarketingPage />
            <Footer />
          </>
        } />
        <Route path="/services/analytics" element={
          <>
            <Navbar />
            <AnalyticsReportingPage />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <AboutPage />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Navbar />
            <ContactPage />
            <Footer />
          </>
        } />
        <Route path="/technology" element={
          <>
            <Navbar />
            <TechnologiesPage />
            <Footer />
          </>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/lets-connect" element={
          <>
            <Navbar />
            <LetsConnectPage />
            <Footer />
          </>
        } />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/" element={
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            <Navbar />
            <Hero />
            <Footer />
          </motion.div>
        } />
      </Routes>
    </Router>
  );
}

export default App;