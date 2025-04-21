import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
  shape: 'circle' | 'square' | 'triangle';
  animation: 'float-1' | 'float-2' | 'float-3';
}

const generateParticles = (count: number): Particle[] => {
  const shapes = ['circle', 'square', 'triangle'] as const;
  const animations = ['float-1', 'float-2', 'float-3'] as const;
  
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2, // Smaller size range: 2-6px
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 5,
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    animation: animations[Math.floor(Math.random() * animations.length)]
  }));
};

const FloatingParticles: React.FC = () => {
  const particles = useRef<Particle[]>(generateParticles(30)); // Increased number of particles

  const renderParticle = (particle: Particle) => {
    const baseStyle = {
      left: particle.x,
      top: particle.y,
      width: particle.size,
      height: particle.size,
      opacity: 0.05,
      animation: `${particle.animation} ${particle.duration}s infinite ease-in-out`,
      animationDelay: `${particle.delay}s`,
    };

    const shapeClass = `floating-shape ${particle.shape}`;

    return (
      <motion.div
        key={particle.id}
        className={shapeClass}
        style={baseStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      />
    );
  };

  return (
    <>
      <div className="animated-grid-pattern" />
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.current.map(renderParticle)}
      </div>
    </>
  );
};

export default FloatingParticles;