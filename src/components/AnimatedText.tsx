import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  type?: 'gradient' | 'highlight';
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  type = "gradient",
  delay = 0 
}) => {
  const controls = useAnimationControls();
  
  React.useEffect(() => {
    controls.start(i => ({
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: type === 'gradient' ? 8 : 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay + i * 0.2
      }
    }));
  }, [controls, delay, type]);

  return (
    <motion.span 
      className={`${type === 'gradient' ? 'text-gradient/10' : 'highlight-gradient'} ${className}`}
      animate={controls}
      custom={0}
    >
      {text}
    </motion.span>
  );
};

export default AnimatedText;