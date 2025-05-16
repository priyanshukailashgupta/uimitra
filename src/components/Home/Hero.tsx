import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ParallaxText from './ParallaxText';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';
import AnimatedSection from '../AnimatedSection';

const Hero: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Ensure the hero section is visible when the component mounts
    const heroSection = document.getElementById('hero');
    if (heroSection && location.pathname === '/') {
      const yOffset = -100;
      const y = heroSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [location.pathname]);

  const handleBookNow = () => {
    window.open('https://outlook.office.com/owa/calendar/MeetwithTeamUimitra@yatricloud.com/bookings/', '_blank');
  };

  return (
    <div id="hero" className="relative overflow-hidden bg-gradient-to-b from-white to-light">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center">
        {/* Background Elements */}
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl -z-10"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div 
          className="absolute bottom-0 left-0 w-72 h-72 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-r from-secondary/10 to-primary/5 blur-3xl -z-10"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 min-h-[85vh] flex flex-col justify-center -mt-4 sm:mt-0 sm:min-h-[80vh] pt-0 pb-0">
          <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2 sm:mb-3"
          >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm sm:text-lg font-medium">
                Innovate • Design • Transform
              </span>
          </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 leading-tight"
            >
              Design that
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Drives Growth
              </span>
              <br />
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 max-w-md sm:max-w-3xl mx-auto mb-6 sm:mb-12"
            >
              We're a creative tech studio crafting standout digital experiences through smart design and modern development for bold, ambitious brands.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full max-w-xs sm:max-w-none mx-auto"
            >
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-primary text-white px-8 py-3 sm:px-10 sm:py-5 rounded-full font-medium text-base sm:text-xl flex items-center justify-center gap-2 sm:gap-3"
                onClick={handleBookNow}
              >
                Book Now
                <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white text-primary border-2 border-primary px-8 py-3 sm:px-10 sm:py-5 rounded-full font-medium text-base sm:text-xl flex items-center justify-center gap-2 sm:gap-3"
                >
                  Contact Us
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Parallax Section */}
      <div className="bg-white">
        <AnimatedSection className="py-4 sm:py-12 md:py-20 lg:py-28">
          <ParallaxText baseVelocity={3} className="py-4 sm:py-8 md:py-12" delay={300}>
            <span className="text-6xl md:text-7xl font-bold tracking-wider text-gradient">
              DESIGN • DEVELOP • DELIVER • &nbsp;
            </span>
          </ParallaxText>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Hero;