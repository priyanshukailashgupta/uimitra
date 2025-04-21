import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  position, 
  company, 
  image, 
  index 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      className="relative p-8 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      {/* Card background with gradient */}
      <motion.div 
        className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-xl z-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-xl z-0"
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
      
      {/* Quote icon */}
      <motion.div 
        className="absolute top-6 right-6 text-primary/20 z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V15C10 16.0609 9.57857 17.0783 8.82843 17.8284C8.07828 18.5786 7.06087 19 6 19H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V15C20 16.0609 19.5786 17.0783 18.8284 17.8284C18.0783 18.5786 17.0609 19 16 19H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10">
        <motion.p 
          className="text-dark/80 mb-6 italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          "{quote}"
        </motion.p>
        
        <div className="flex items-center">
          <motion.img 
            src={image} 
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            whileHover={{ scale: 1.1, borderColor: "rgba(237,24,79,0.5)" }}
          />
          
          <div>
            <motion.h4 
              className="font-bold text-dark"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
              {author}
            </motion.h4>
            
            <motion.p 
              className="text-sm text-dark/60"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            >
              {position}, {company}
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Animated glow */}
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

export default TestimonialCard;