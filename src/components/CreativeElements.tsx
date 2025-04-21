import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const CreativeElements: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Smooth spring physics for cursor movement
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Create floating elements that react to scroll position
  const floatingY2 = useTransform(() => scrollY, [0, 1000], [0, -80]);
  const floatingY3 = useTransform(() => scrollY, [0, 1000], [0, -200]);
  const floatingRotate2 = useTransform(() => scrollY, [0, 1000], [0, -30]);
  const floatingRotate1 = useTransform(() => scrollY, [0, 1000], [0, 45]);
  const floatingScale = useTransform(() => scrollY, [0, 500], [1, 1.2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating square */}
        <motion.div
          className="absolute w-48 h-48 border border-secondary/20 top-1/3 right-1/4"
          style={{ 
            y: floatingY2, 
            rotate: floatingRotate2,
            scale: useTransform(() => floatingScale.get() * 0.9)
          }}
          animate={{
            borderColor: [
              "rgba(240,90,40,0.2)",
              "rgba(244,122,82,0.3)",
              "rgba(240,90,40,0.2)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating triangle */}
        <motion.div
          className="absolute w-0 h-0 bottom-1/4 right-1/3"
          style={{
            y: floatingY3,
            rotate: useTransform(() => floatingRotate1.get() * -1.2),
            borderLeft: "40px solid transparent",
            borderRight: "40px solid transparent",
            borderBottom: "80px solid rgba(237,24,79,0.1)",
          }}
          animate={{
            borderBottomColor: [
              "rgba(237,24,79,0.1)",
              "rgba(240,90,40,0.2)",
              "rgba(237,24,79,0.1)"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid lines that react to scroll */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundSize: useTransform(() => scrollY, [0, 500], ['50px 50px', '60px 60px']),
            backgroundImage: `
              linear-gradient(to right, rgba(237,24,79,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(240,90,40,0.3) 1px, transparent 1px)
            `,
          }}
        />
      </div>
    </>
  );
};

export default CreativeElements;