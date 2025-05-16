import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity?: number; // pixels per scroll event
  className?: string;
}

const REPEAT_COUNT = 20;

const ParallaxText: React.FC<ParallaxTextProps> = ({ 
  children, 
  baseVelocity = 3,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Measure the width of the content
  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth / REPEAT_COUNT);
    }
  }, [children]);

  // Track scroll direction
  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastY ? 'down' : 'up');
      lastY = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to check if in view
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Animate marquee effect on scroll, only if in view
  useEffect(() => {
    if (!isInView) return;
    let animationFrame: number;
    const animate = () => {
      setOffset(prev => {
        let velocity = baseVelocity * (isHovered ? 4 : 1);
        let next = prev + (scrollDirection === 'down' ? velocity : -velocity);
        // Wrap for seamless effect
        if (contentWidth > 0) {
          next = ((next % (contentWidth * REPEAT_COUNT)) + (contentWidth * REPEAT_COUNT)) % (contentWidth * REPEAT_COUNT);
        }
        return next;
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollDirection, baseVelocity, contentWidth, isInView, isHovered]);

  return (
    <div 
      ref={containerRef} 
      className={`overflow-hidden py-12 mt-12 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={contentRef}
        style={{ 
          display: 'flex',
          whiteSpace: 'nowrap',
          gap: '3rem',
          transform: `translateX(-${offset}px)`,
          willChange: 'transform',
        }}
      >
        {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
          <span className="text-gradient" key={i}>{children}</span>
        ))}
      </div>
    </div>
  );
};

export default ParallaxText;