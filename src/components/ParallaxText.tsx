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

  // Animate marquee effect on scroll
  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setOffset(prev => {
        let next = prev + (scrollDirection === 'down' ? baseVelocity : -baseVelocity);
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
  }, [scrollDirection, baseVelocity, contentWidth]);

  return (
    <div ref={containerRef} className={`overflow-hidden py-12 mt-12 ${className}`}>
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