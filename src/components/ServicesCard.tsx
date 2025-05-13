import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ServicesCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  index: number;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, description, icon, image, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-dark/40 to-dark/90 z-10"
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.8 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
        <motion.div 
          className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          className="text-2xl font-bold text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-white/80 mb-4 max-w-md"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
          initial={{ x: -10, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          whileHover={{ 
            x: 5, 
            backgroundColor: "rgba(255, 255, 255, 0.3)" 
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
      
      {/* Animated border */}
      <motion.div 
        className="absolute inset-0 rounded-xl z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="absolute inset-0 rounded-xl border-2 border-primary/50"
          animate={{
            borderColor: [
              "rgba(237, 24, 79, 0.5)",
              "rgba(240, 90, 40, 0.5)",
              "rgba(244, 122, 82, 0.5)",
              "rgba(240, 77, 117, 0.5)",
              "rgba(237, 24, 79, 0.5)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ServicesCard;