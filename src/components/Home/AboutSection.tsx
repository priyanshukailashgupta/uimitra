import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Users, Rocket, Target, Sparkles, Circle, Square, Triangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '../AnimatedText';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const stats = [
    { number: "100+", label: "Successful Projects Delivered", icon: <Target size={24} /> },
    { number: "10k+", label: "Engaged Community Members", icon: <Users size={24} /> },
    { number: "50%", label: "Annual Growth", icon: <Rocket size={24} /> }
  ];

  const features = [
    {
      title: "Learn by Doing",
      description: "Get hands-on with real client projects, sharpen your skills, and build a portfolio that speaks volumes.",
      icon: <Sparkles size={24} />,
      gradient: "from-[#ED184F]/90 to-[#893168]/95"
    },
    {
      title: "Grow with Community",
      description: "Experience an environment where knowledge-sharing and teamwork are at the core of everything we do.",
      icon: <Users size={24} />,
      gradient: "from-[#4158D0]/90 to-[#2D3A8C]/95"
    },
    {
      title: "Exclusive Networking",
      description: "Connect with top designers, developers, and industry leaders ready to collaborate and elevate your journey.",
      icon: <Rocket size={24} />,
      gradient: "from-[#F05A28]/90 to-[#BE3A1D]/95"
    },
    {
      title: "Mentorship & Growth",
      description: "Accelerate your career with guidance from experienced mentors and tailored growth paths.",
      icon: <Target size={24} />,
      gradient: "from-[#F47A52]/90 to-[#B54F2E]/95"
    }
  ];

  return (
    <section 
      id="about"
      ref={sectionRef} 
      className="relative w-full min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 sm:mb-32 md:mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AnimatedText text="Uimitra" type="highlight" /> 
            </motion.h1>

            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
               <AnimatedText text="UI" type="highlight" /> {' '}Meets <AnimatedText text="Trust" type="highlight" />,{' '}
              <AnimatedText text="UX" type="highlight" delay={0.2} /> {' '}Meets <AnimatedText text="Mitra" type="highlight" /> 
            </motion.h2>

            <motion.p 
              className="text-base sm:text-lg text-dark/70"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
             At Uimitra, we believe powerful experiences are built on trust and connection. We are a fast-growing community where UI/UX designers, developers, and creative thinkers unite to create, collaborate, and thrive — all rooted in mutual respect, innovation, and shared success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-4"
            >
              <Link to="/join">
                <motion.button
                  className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg relative overflow-hidden group w-full sm:w-auto"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(237, 24, 79, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Join Uimitra Today</span>
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

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 gap-4 sm:gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-primary/10 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                    <p className="text-sm sm:text-base text-dark/70">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          className="space-y-12 sm:space-y-16 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Section Heading */}
          <motion.div
            className="text-center mb-12 sm:mb-16 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              What Makes <AnimatedText text="Uimitra" type="highlight" /> Different?
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-dark/70 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We're not just another platform. We're a community-driven ecosystem where creativity meets opportunity.
            </motion.p>
          </motion.div>

          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 sm:gap-8 items-center relative`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl blur-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
              
              <div className="w-full md:w-1/2 relative z-10">
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-primary/10"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 30px rgba(237, 24, 79, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 sm:mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                    whileHover={{ color: "var(--primary)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-base sm:text-lg text-dark/70"
                    whileHover={{ color: "var(--dark)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </div>
              
              <div className="w-full md:w-1/2 h-48 sm:h-64 flex items-center justify-center relative z-10">
                {index === 0 && (
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Animated Learning Process */}
                    <motion.path 
                      d="M50 100L100 50L150 100L100 150L50 100Z" 
                      stroke="var(--primary)" 
                      strokeWidth="3" 
                      fill="none"
                      animate={{ 
                        pathLength: [0, 1],
                        opacity: [0, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut" 
                      }}
                    />
                    <motion.path 
                      d="M70 100L100 70L130 100" 
                      stroke="var(--primary)" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      animate={{ 
                        pathLength: [0, 1],
                        opacity: [0, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />
                    <motion.circle 
                      cx="100" 
                      cy="100" 
                      r="10" 
                      fill="var(--primary)"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    />
                    <motion.path 
                      d="M85 85L115 115M115 85L85 115" 
                      stroke="var(--primary)" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      animate={{ 
                        pathLength: [0, 1],
                        opacity: [0, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.7
                      }}
                    />
                    <motion.path 
                      d="M100 50L100 150M50 100L150 100" 
                      stroke="var(--primary)" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      animate={{ 
                        pathLength: [0, 1],
                        opacity: [0, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.3
                      }}
                    />
                  </svg>
                )}
                {index === 1 && (
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Animated Users Icon */}
                    <motion.path 
                      d="M70 120C70 100 85 90 100 90C115 90 130 100 130 120" 
                      stroke="var(--primary)" 
                      strokeWidth="3" 
                      fill="none"
                      animate={{ 
                        pathLength: [0, 1],
                        opacity: [0, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut" 
                      }}
                    />
                    <motion.circle 
                      cx="100" 
                      cy="70" 
                      r="20" 
                      fill="var(--primary)"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    />
                    <motion.path 
                      d="M50 120C50 100 65 90 80 90C95 90 110 100 110 120" 
                      stroke="var(--primary)" 
                      strokeWidth="3" 
                      fill="none"
                      animate={{ 
                        pathLength: [0, 1],
                        opacity: [0, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.3
                      }}
                    />
                    <motion.circle 
                      cx="80" 
                      cy="70" 
                      r="15" 
                      fill="var(--primary)"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3
                      }}
                    />
                  </svg>
                )}
                {index === 2 && (
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Animated Rocket Icon */}
                    <motion.path 
                      d="M100 50L120 80L100 110L80 80L100 50Z" 
                      stroke="var(--primary)" 
                      strokeWidth="3" 
                      fill="var(--primary)"
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    />
                    <motion.path 
                      d="M100 110L70 140M100 110L130 140" 
                      stroke="var(--primary)" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      animate={{ 
                        pathLength: [0, 1],
                        opacity: [0, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.3
                      }}
                    />
                    <motion.circle 
                      cx="100" 
                      cy="80" 
                      r="5" 
                      fill="var(--primary)"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />
                  </svg>
                )}
                {index === 3 && (
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Animated Target Icon */}
                    <motion.circle 
                      cx="100" 
                      cy="100" 
                      r="40" 
                      stroke="var(--primary)" 
                      strokeWidth="3" 
                      fill="none"
                      animate={{ 
                        pathLength: [0, 1],
                        opacity: [0, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut" 
                      }}
                    />
                    <motion.circle 
                      cx="100" 
                      cy="100" 
                      r="25" 
                      stroke="var(--primary)" 
                      strokeWidth="3" 
                      fill="none"
                      animate={{ 
                        pathLength: [0, 1],
                        opacity: [0, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.3
                      }}
                    />
                    <motion.circle 
                      cx="100" 
                      cy="100" 
                      r="10" 
                      fill="var(--primary)"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6
                      }}
                    />
                    <motion.path 
                      d="M100 50L100 150M50 100L150 100" 
                      stroke="var(--primary)" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      animate={{ 
                        pathLength: [0, 1],
                        opacity: [0, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 0.9
                      }}
                    />
                  </svg>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;