import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { ArrowRight, Sparkles, Target, Users, Code, Layout, Smartphone, Zap, Globe, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const springConfig = { mass: 0.5, stiffness: 100, damping: 30 };
  const scaleSpring = useSpring(scale, springConfig);
  const ySpring = useSpring(y, springConfig);
  const opacitySpring = useSpring(opacity, springConfig);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const scrollPosition = window.scrollY;
        const speed = 0.5;
        textRef.current.style.transform = `translateY(${scrollPosition * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden grid-pattern"
    >
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center">
          {/* Animated Label */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-primary">Innovate • Design • Transform</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"/>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            ref={textRef}
            className="text-center mb-12"
            style={{ 
              scale: scaleSpring,
              y: ySpring,
              opacity: opacitySpring
            }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AnimatedText text="Design that" type="highlight" />
              <br />
              <AnimatedText text="Drives Growth" className="text-gradient" delay={0.2} />
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-dark/80 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're a creative tech studio crafting standout digital experiences through smart design and modern development for bold, ambitious brands.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact">
                <motion.button
                  className="bg-primary text-white px-8 py-4 rounded-full font-medium text-lg relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(237, 24, 79, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </Link>

              <Link to="/services">
                <motion.button
                  className="px-8 py-4 rounded-full font-medium text-lg border-2 border-dark/10 hover:border-primary/20 transition-colors relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Our Work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-primary/20 to-secondary/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div 
        className="absolute bottom-1/4 -left-20 w-60 h-60 rounded-full bg-gradient-to-r from-secondary/20 to-primary/10 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Hero;