import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
  delay?: number;
}

const ParallaxText: React.FC<ParallaxTextProps> = ({ 
  children, 
  baseVelocity = 3,
  className = "",
  delay = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Reset scroll progress when section comes into view
  useEffect(() => {
    if (isInView) {
      setScrollProgress(0);
      // Add delay before starting animation
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView, delay]);

  // Enhanced spring config for smoother animation
  const springConfig = { 
    mass: 1,
    stiffness: 50,
    damping: 20
  };

  // Start from 0% (left edge) and move to the left as user scrolls
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${baseVelocity * 100}%`]
  );

  const smoothX = useSpring(x, springConfig);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <div 
      ref={containerRef} 
      className={`overflow-hidden py-12 ${className}`}
    >
      <motion.div
        style={{ 
          x: shouldAnimate ? smoothX : 0,
          opacity
        }}
        className="flex whitespace-nowrap gap-12"
        initial={{ x: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 50, 
          damping: 20,
          mass: 1
        }}
      >
        <span className="text-gradient">{children}</span>
        <span className="text-gradient">{children}</span>
        <span className="text-gradient">{children}</span>
      </motion.div>
    </div>
  );
};

export default ParallaxText;