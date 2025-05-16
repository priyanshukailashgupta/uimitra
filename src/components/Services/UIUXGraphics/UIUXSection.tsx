import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Layout, Layers, Lightbulb, Zap, MonitorSmartphone, Database, 
  MousePointer, Code, Smartphone, Search, FileSearch, Users, 
  Workflow, PenTool, TestTube, FileCheck, Rocket, Brain,
  Target, TrendingUp, Sparkles, CheckCircle, ArrowRight
} from 'lucide-react';
import AnimatedText from '../../AnimatedText';

const UIUXSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const benefits = [
    {
      icon: <Target />,
      title: "First Impressions Matter",
      description: "Users decide in seconds whether they trust your product—make that moment count."
    },
    {
      icon: <TrendingUp />,
      title: "Better Experiences = Better Results",
      description: "Great design improves engagement, reduces churn, and drives conversions."
    },
    {
      icon: <Brain />,
      title: "Good UX Solves Real Problems",
      description: "Design is not just about looking good—it's about understanding user needs and removing friction."
    },
    {
      icon: <Sparkles />,
      title: "Stand Out from Competition",
      description: "In a crowded market, exceptional UI/UX gives you the competitive edge."
    }
  ];

  const services = [
    {
      title: "UI/UX Design",
      description: "Transform your digital presence with our expert UI/UX design services. We create intuitive, user-friendly interfaces that not only look stunning but also deliver exceptional user experiences. From wireframing to final design, we ensure every interaction is meaningful and every pixel is purposeful.",
      gradient: "from-[#6366F1]/90 to-[#4F46E5]/95",
      icon: <Search />
    },
    {
      title: "Landing Page Design",
      description: "Make a powerful first impression with our conversion-focused landing page designs. We combine compelling visuals, persuasive copy, and strategic CTAs to create landing pages that drive results. Whether it's for a product launch, service promotion, or lead generation, we craft pages that convert visitors into customers.",
      gradient: "from-[#EC4899]/90 to-[#DB2777]/95",
      icon: <Layout />
    },
    {
      title: "Design for AI, LLMs, NLP",
      description: "Stay ahead of the curve with our specialized AI interface designs. We create intuitive interfaces for AI-powered applications, LLM integrations, and NLP systems. Our designs make complex AI interactions feel natural and accessible, helping users harness the power of artificial intelligence with ease.",
      gradient: "from-[#10B981]/90 to-[#059669]/95",
      icon: <Brain />
    },
    {
      title: "Mobile App Design",
      description: "Bring your mobile app vision to life with our expert mobile design services. We create beautiful, functional mobile interfaces that users love to interact with. From iOS to Android, we ensure your app not only looks great but also provides a seamless, engaging experience across all devices.",
      gradient: "from-[#8B5CF6]/90 to-[#7C3AED]/95",
      icon: <Smartphone />
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understanding your product goals, defining user personas, analyzing market and competitors",
      icon: <FileSearch className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Define & Plan",
      description: "Creating user flows and journeys, mapping key actions and screens",
      icon: <Layers className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Wireframing",
      description: "Sketching screen layouts, focusing on structure and usability",
      icon: <Layout className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Visual Design",
      description: "Applying branding and visual elements, defining UI components",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      step: "05",
      title: "Prototyping & Testing",
      description: "Creating interactive prototypes, conducting user testing",
      icon: <TestTube className="w-6 h-6" />
    },
    {
      step: "06",
      title: "Final Handoff",
      description: "Preparing assets and documentation for development",
      icon: <FileCheck className="w-6 h-6" />
    }
  ];

  const features = [
    "Collaborative and transparent",
    "Focused on both function and feel",
    "Responsive, scalable, and modern",
    "Human-centered and data-informed",
    "Quick turnarounds without compromising quality",
    "Dedicated support and continuous improvement"
  ];

  return (
    <div className="min-h-screen pb-20 relative overflow-hidden" ref={sectionRef}>
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #ED184F 0%, #D1002E 100%)',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-white/10 backdrop-blur-sm"
        />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4 px-6 py-2 rounded-full bg-white/20 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              UI/UX Design Services
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Designing <AnimatedText text="Experiences" type="gradient" />{' '}
              That Users <AnimatedText text="Love" type="gradient" delay={0.2} />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At Uimitra, we believe great design is more than just aesthetics—it's about how it feels, 
              how it works, and how it connects with users. We craft intuitive, beautiful, and meaningful 
              digital experiences.
            </motion.p>

            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#D10000] px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Why UI/UX Design <AnimatedText text="Matters" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                  borderColor: "rgba(237, 24, 79, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-dark/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="py-20 bg-gradient-to-b from-white to-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              What We <AnimatedText text="Offer" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="flex flex-col space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-full md:w-1/2">
                  <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-dark/70 text-lg">{service.description}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-64">
                  {index === 0 && (
                    <motion.div 
                      className="w-full h-full flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Main Interface Frame */}
                        <motion.rect 
                          x="40" y="40" width="120" height="120" rx="8" fill="var(--primary)" fillOpacity="0.2"
                          animate={{ 
                            scale: [1, 1.02, 1],
                            opacity: [0.2, 0.25, 0.2]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        
                        {/* Darker Background Overlay */}
                        <motion.rect 
                          x="40" y="40" width="120" height="120" rx="8" fill="var(--primary)" fillOpacity="0.1"
                          animate={{ 
                            opacity: [0.1, 0.15, 0.1]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        
                        {/* Navigation Bar */}
                        <motion.rect 
                          x="50" y="50" width="100" height="15" rx="2" fill="var(--primary)"
                          animate={{ 
                            width: ["100", "90", "100"],
                            x: ["50", "55", "50"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        {/* Search Bar */}
                        <motion.rect 
                          x="50" y="75" width="80" height="10" rx="2" fill="var(--primary)" fillOpacity="0.7"
                          animate={{ 
                            width: ["80", "70", "80"],
                            x: ["50", "55", "50"]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        
                        {/* User Profile Icon */}
                        <motion.circle 
                          cx="140" cy="80" r="5" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.7, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        {/* Content Cards */}
                        <motion.rect 
                          x="50" y="95" width="40" height="30" rx="4" fill="var(--primary)" fillOpacity="0.5"
                          animate={{ 
                            scale: [1, 1.05, 1],
                            opacity: [0.5, 0.7, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.rect 
                          x="95" y="95" width="40" height="30" rx="4" fill="var(--primary)" fillOpacity="0.5"
                          animate={{ 
                            scale: [1, 1.05, 1],
                            opacity: [0.5, 0.7, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        
                        {/* Bottom Navigation */}
                        <motion.rect 
                          x="50" y="135" width="100" height="10" rx="2" fill="var(--primary)" fillOpacity="0.7"
                          animate={{ 
                            width: ["100", "90", "100"],
                            x: ["50", "55", "50"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        {/* Navigation Icons */}
                        <motion.circle 
                          cx="60" cy="140" r="3" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.circle 
                          cx="80" cy="140" r="3" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                        />
                        <motion.circle 
                          cx="100" cy="140" r="3" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                        />
                        <motion.circle 
                          cx="120" cy="140" r="3" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                        />
                        <motion.circle 
                          cx="140" cy="140" r="3" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                        />
                        
                        {/* User Flow Lines */}
                        <motion.path 
                          d="M60 140 L80 95" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4"
                          animate={{ 
                            strokeDashoffset: [0, 8, 0],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.path 
                          d="M100 140 L95 95" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4"
                          animate={{ 
                            strokeDashoffset: [0, 8, 0],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.path 
                          d="M140 140 L140 95" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4"
                          animate={{ 
                            strokeDashoffset: [0, 8, 0],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                      </svg>
                    </motion.div>
                  )}
                  
                  {index === 1 && (
                    <motion.div 
                      className="w-full h-full flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Landing Page Design - Modern Layout */}
                        <rect x="30" y="30" width="140" height="140" rx="8" fill="var(--primary)" fillOpacity="0.2" />
                        
                        {/* Navigation Bar */}
                        <motion.rect 
                          x="40" y="40" width="120" height="15" rx="2" fill="var(--primary)"
                          animate={{ 
                            width: ["120", "100", "120"],
                            x: ["40", "50", "40"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.circle 
                          cx="50" cy="47.5" r="5" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.rect 
                          x="100" y="45" width="20" height="5" rx="1" fill="var(--primary)"
                          animate={{ 
                            width: ["20", "10", "20"],
                            x: ["100", "105", "100"]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.rect 
                          x="130" y="45" width="20" height="5" rx="1" fill="var(--primary)"
                          animate={{ 
                            width: ["20", "10", "20"],
                            x: ["130", "135", "130"]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                        
                        {/* Hero Section */}
                        <motion.rect 
                          x="40" y="65" width="80" height="10" rx="2" fill="var(--primary)"
                          animate={{ 
                            width: ["80", "60", "80"],
                            x: ["40", "50", "40"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.rect 
                          x="40" y="80" width="120" height="5" rx="1" fill="var(--primary)"
                          animate={{ 
                            width: ["120", "100", "120"],
                            x: ["40", "50", "40"]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.rect 
                          x="40" y="90" width="100" height="5" rx="1" fill="var(--primary)"
                          animate={{ 
                            width: ["100", "80", "100"],
                            x: ["40", "50", "40"]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                        
                        {/* CTA Button */}
                        <motion.rect 
                          x="40" y="105" width="60" height="15" rx="3" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [1, 0.8, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        {/* Feature Section */}
                        <motion.rect 
                          x="40" y="130" width="30" height="30" rx="2" fill="var(--primary)" fillOpacity="0.5"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.rect 
                          x="80" y="130" width="30" height="30" rx="2" fill="var(--primary)" fillOpacity="0.5"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.rect 
                          x="120" y="130" width="30" height="30" rx="2" fill="var(--primary)" fillOpacity="0.5"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                      </svg>
                    </motion.div>
                  )}
                  
                  {index === 2 && (
                    <motion.div 
                      className="w-full h-full flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* AI/ML Interface - Neural Network */}
                        <motion.circle 
                          cx="100" cy="100" r="70" fill="var(--primary)" fillOpacity="0.2"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.3, 0.2]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.circle 
                          cx="70" cy="70" r="10" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.circle 
                          cx="130" cy="70" r="10" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.circle 
                          cx="70" cy="130" r="10" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                        <motion.circle 
                          cx="130" cy="130" r="10" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                        />
                        <motion.circle 
                          cx="100" cy="100" r="10" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.7, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.path 
                          d="M70 70L100 100" stroke="var(--primary)" strokeWidth="2"
                          animate={{ 
                            strokeWidth: [2, 3, 2],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.path 
                          d="M130 70L100 100" stroke="var(--primary)" strokeWidth="2"
                          animate={{ 
                            strokeWidth: [2, 3, 2],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.path 
                          d="M70 130L100 100" stroke="var(--primary)" strokeWidth="2"
                          animate={{ 
                            strokeWidth: [2, 3, 2],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                        <motion.path 
                          d="M130 130L100 100" stroke="var(--primary)" strokeWidth="2"
                          animate={{ 
                            strokeWidth: [2, 3, 2],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                        />
                        <motion.path 
                          d="M70 70L130 130" stroke="var(--primary)" strokeWidth="2"
                          animate={{ 
                            strokeWidth: [2, 3, 2],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.path 
                          d="M130 70L70 130" stroke="var(--primary)" strokeWidth="2"
                          animate={{ 
                            strokeWidth: [2, 3, 2],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                      </svg>
                    </motion.div>
                  )}
                  
                  {index === 3 && (
                  <motion.div 
                      className="w-full h-full flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Mobile App Design - App Interface */}
                        <motion.rect 
                          x="60" y="40" width="80" height="120" rx="10" fill="var(--primary)" fillOpacity="0.2"
                          animate={{ 
                            scale: [1, 1.02, 1],
                            opacity: [0.2, 0.3, 0.2]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.rect 
                          x="70" y="50" width="60" height="10" rx="2" fill="var(--primary)"
                          animate={{ 
                            width: ["60", "40", "60"],
                            x: ["70", "80", "70"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.circle 
                          cx="100" cy="90" r="20" fill="var(--primary)" fillOpacity="0.3"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.rect 
                          x="70" y="120" width="60" height="10" rx="2" fill="var(--primary)"
                          animate={{ 
                            width: ["60", "40", "60"],
                            x: ["70", "80", "70"]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.rect 
                          x="70" y="140" width="40" height="10" rx="2" fill="var(--primary)"
                          animate={{ 
                            width: ["40", "60", "40"],
                            x: ["70", "60", "70"]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                        <motion.circle 
                          cx="40" cy="100" r="5" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.circle 
                          cx="160" cy="100" r="5" fill="var(--primary)"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                      </svg>
                  </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our UI/UX Design <AnimatedText text="Process" type="highlight" />
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-white rounded-xl shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                  borderColor: "rgba(237, 24, 79, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-dark/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Why Choose <AnimatedText text="Uimitra" type="highlight" />?
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 25px 50px rgba(237, 24, 79, 0.25)",
                  borderColor: "rgba(237, 24, 79, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <CheckCircle className="w-6 h-6" />
                </motion.div>
                <span className="text-lg text-dark">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center p-12 rounded-2xl shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, var(--gradient-1) 0%, var(--gradient-2) 50%, var(--gradient-3) 100%)',
              backgroundSize: '200% 200%'
            }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 bg-white/10 backdrop-blur-sm"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-white">
              Ready to Create Something Amazing ?
            </h2>
            <p className="text-xl text-white/90 mb-8 relative z-10">
              Let's design something meaningful together.<br/>
              Your vision, our expertise.
            </p>
            <a
              href="https://outlook.office.com/book/MeetwithTeamUimitra@yatricloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 relative z-10"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div 
        className="absolute top-40 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl -z-10"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/10 to-primary/5 blur-3xl -z-10"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default UIUXSection;