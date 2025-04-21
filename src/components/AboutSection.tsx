import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Circle, Square, Triangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section 
      id="about"
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Circle */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Circle className="w-full h-full text-primary/20" />
        </motion.div>

        {/* Square */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-48 h-48"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Square className="w-full h-full text-secondary/20" />
        </motion.div>

        {/* Triangle */}
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-56 h-56"
          animate={{
            rotate: [-45, 315],
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Triangle className="w-full h-full text-accent/20" />
        </motion.div>

        {/* Additional decorative elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-tr from-secondary/10 to-accent/10 rounded-full blur-3xl"
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
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedText text="UI Mitra" type="gradient" />
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where <AnimatedText text="Friendship" type="highlight" /> Meets <AnimatedText text="Growth" type="highlight" delay={0.2} />
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-dark/70 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A brand that represents friendship and growth in the UI development community. 
            Help us create a logo that truly reflects our friendly and supportive nature.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/uiux">
              <motion.button
                className="bg-primary text-white px-8 py-4 rounded-full font-medium text-lg relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(237, 24, 79, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Learn More About UI/UX</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats or additional content can be added here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "10k+", label: "Community Members" },
            { number: "50%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-dark/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;