import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary mix-blend-multiply pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: [1, 1.2, 1],
      }}
      transition={{
        x: { duration: 0.2, ease: "easeOut" },
        y: { duration: 0.2, ease: "easeOut" },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
    />
  );
};

export default MouseFollower;