import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { Search, Layout, Brain } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  gradient: string;
  icon: React.ReactNode;
  index: number;
  height?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  gradient,
  icon,
  index,
  height = "h-full"
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-xl overflow-hidden ${height} group`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Base white background */}
      <div className="absolute inset-0 bg-white rounded-xl transition-all duration-300 ease-in-out group-hover:bg-primary" />
      
      {/* Image with gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`} />
      
      {/* Content */}
      <div className="relative h-full flex flex-col p-6 z-[2]">
        <motion.div 
          className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 text-white"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-base text-white/90 mb-4 transition-colors duration-300">
          {description}
        </p>

        <div className="mt-auto flex items-center">
          <span className="text-white font-medium flex items-center gap-2 group/link">
            Learn More
            <svg 
              className="w-5 h-5 transform transition-transform duration-300 group-hover/link:translate-x-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Hover effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1]">
        <div className="absolute inset-0 bg-primary rounded-xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary opacity-80" />
      </div>
      
      {/* Border effect */}
      <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-colors duration-300 group-hover:border-white/20 z-[3]" />
    </motion.div>
  );
};

const ServicesGridSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const services = [
    {
      title: "UI/UX Design",
      description: "User experience makes all the difference between good products and great ones.",
      gradient: "from-[#FF3366] to-[#FF6B6B]",
      icon: <Search />
    },
    {
      title: "Landing Page Design",
      description: "Your landing page is the first thing your customers, investors and partners see.",
      gradient: "from-[#4158D0] to-[#C850C0]",
      icon: <Layout />
    },
    {
      title: "Design for AI, LLMs, NLP",
      description: "AI, LLMs, NLP: Unlocking the Future of Intelligent Interaction and Language Processing.",
      gradient: "from-[#0093E9] to-[#80D0C7]",
      icon: <Brain />
    }
  ];
  
  return (
    <section className="relative py-12 md:py-16 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            OUR EXPERTISE
          </motion.p>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-dark">Services We</span> <AnimatedText text="Provide" type="highlight" />
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-dark/70 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We specialize in creating exceptional digital experiences that help businesses 
            connect with their audience and achieve their goals.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
              icon={service.icon}
              index={index}
              height="h-full"
            />
          ))}
        </div>
      </div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-40 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl -z-10"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/10 to-primary/5 blur-3xl -z-10"
        animate={{ 
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default ServicesGridSection;