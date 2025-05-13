import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { ArrowRight, Layers, Lightbulb, Palette, Rocket, Zap } from 'lucide-react';

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ icon, title, description, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      className="relative p-6 md:p-8 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-primary/10 rounded-xl z-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-br opacity-20 rounded-xl z-0"
        style={{
          background: `linear-gradient(135deg, rgba(237,24,79,0.2), rgba(240,90,40,0.1))`
        }}
        animate={{
          background: [
            "linear-gradient(135deg, rgba(237,24,79,0.2), rgba(240,90,40,0.1))",
            "linear-gradient(135deg, rgba(240,90,40,0.2), rgba(244,122,82,0.1))",
            "linear-gradient(135deg, rgba(244,122,82,0.2), rgba(240,77,117,0.1))",
            "linear-gradient(135deg, rgba(237,24,79,0.2), rgba(240,90,40,0.1))"
          ]
        }}
        transition={{
          duration: 8,
          delay: index * 0.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="relative z-10">
        <motion.div 
          className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-dark/70 mb-4">{description}</p>
        
        <motion.div 
          className="flex items-center text-primary font-medium text-sm"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 4,
          delay: index * 0.3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const processSteps = [
    {
      icon: <Lightbulb size={24} />,
      title: "Discovery",
      description: "We dive deep into your business goals, target audience, and market positioning to understand your unique challenges."
    },
    {
      icon: <Palette size={24} />,
      title: "Design",
      description: "Our creative team crafts visually stunning interfaces that align with your brand identity and user expectations."
    },
    {
      icon: <Layers size={24} />,
      title: "Development",
      description: "We transform designs into functional, responsive, and performant digital experiences using cutting-edge technologies."
    },
    {
      icon: <Zap size={24} />,
      title: "Testing",
      description: "Rigorous quality assurance ensures your product works flawlessly across all devices and platforms."
    },
    {
      icon: <Rocket size={24} />,
      title: "Launch",
      description: "We handle the deployment process and provide ongoing support to ensure a successful product launch."
    }
  ];
  
  return (
    <section className="relative py-20 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          style={{ y, opacity }}
        >
          <motion.p 
            className="text-primary font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            OUR APPROACH
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <AnimatedText text="Our Design" type="highlight" /> <span className="text-dark">Process</span>
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-dark/70"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We follow a structured yet flexible approach to deliver exceptional digital experiences
            that drive business growth and user engagement.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {processSteps.map((step, index) => (
            <ProcessCard 
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 mx-auto"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(237, 24, 79, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Start Your Project
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-secondary/5 blur-3xl -z-10"
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
        className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/10 to-primary/5 blur-3xl -z-10"
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

export default ProcessSection;