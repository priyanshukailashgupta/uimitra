import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 15 + 10,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="animated-gradient-bg">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.initialX}%`,
            top: `${shape.initialY}%`,
            background: 'linear-gradient(135deg, rgba(237,24,79,0.1), rgba(240,90,40,0.1))',
            filter: 'blur(5px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
            delay: shape.delay,
          }}
        />
      ))}

      {/* Subtle grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundSize: '30px 30px',
          backgroundImage: `
            linear-gradient(to right, rgba(237, 24, 79, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(240, 90, 40, 0.5) 1px, transparent 1px)
          `,
        }}
        animate={{
          backgroundSize: ['30px 30px', '35px 35px', '30px 30px'],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;