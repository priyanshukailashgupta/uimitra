import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Home/Hero';
import AboutSection from './components/Home/AboutSection';
import FloatingParticles from './components/FloatingParticles';
import ServicesSection from './components/Home/ServicesSection';
import ContactSection from './components/Home/ContactSection';
import UIUXSection from './components/Services/UIUXGraphics/UIUXSection';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/Company/AboutPage';
import ContactPage from './components/Contact/ContactPage';
import TeamPage from './components/Company/TeamPage';
import SuccessStoriesPage from './components/Company/SuccessStoriesPage';
import WebDesignPage from './components/Services/UIUXGraphics/WebDesignPage';
import LogoDesignPage from './components/Services/Brand/LogoDesignPage';
import AppDesignPage from './components/Services/UIUXGraphics/AppDesignPage';
import GraphicsDesignPage from './components/Services/UIUXGraphics/GraphicsDesignPage';
import BrandStrategyPage from './components/Services/Brand/BrandStrategyPage';
import BrandGuidelinesPage from './components/Services/Brand/BrandGuidelinesPage';
import BrandIdentityPage from './components/Services/Brand/BrandIdentityPage';
import BrandDevelopmentPage from './components/Services/Brand/BrandDevelopmentPage';
import DigitalMarketingPage from './components/Services/DigitalMarketing/DigitalMarketingPage';
import SEOServicesPage from './components/Services/DigitalMarketing/SEOServicesPage';
import SocialMediaMarketingPage from './components/Services/DigitalMarketing/SocialMediaMarketingPage';
import EmailMarketingPage from './components/Services/DigitalMarketing/EmailMarketingPage';
import AnalyticsReportingPage from './components/Services/DigitalMarketing/AnalyticsReportingPage';
import YouTubeMarketingPage from './components/Services/SocialMedia/YouTubeMarketingPage';
import LinkedInMarketingPage from './components/Services/SocialMedia/LinkedInMarketingPage';
import TwitterMarketingPage from './components/Services/SocialMedia/TwitterMarketingPage';
import InstagramMarketingPage from './components/Services/SocialMedia/InstagramMarketingPage';
import OtherPlatformsPage from './components/Services/SocialMedia/OtherPlatformsPage';
import TechnologiesPage from './components/Technology/TechnologiesPage';
import AIEnhancedDesignPage from './components/Services/UIUXGraphics/AIEnhancedDesignPage';
import Footer from './components/Footer/Footer';
import AnimatedSection from './components/AnimatedSection';
import ParallaxText from './components/Home/ParallaxText';
import PrivacyPolicyPage from './components/Footer/policies/PrivacyPolicyPage';
import LetsConnectPage from './components/Footer/LetsConnectPage';
import CookiePolicyPage from './components/Footer/policies/CookiePolicyPage';
import TermsPage from './components/Footer/policies/TermsPage';
import UIUXGraphicDesignPage from './components/mainservice/UIUXGraphicDesignPage';
import BrandDesignBuildPage from './components/mainservice/BrandDesignBuildPage';
import DigitalMarketing from './components/mainservice/DigitalMarketing';
import SocialMedia from './components/mainservice/SocialMedia';

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
          <>
            <Navbar />
            <Hero />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;