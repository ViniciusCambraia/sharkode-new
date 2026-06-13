import React, { useEffect, useRef } from 'react';

export const DigitalDust: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spawnParticle = (isInitial = false) => {
      const dot = document.createElement('div');
      const size = Math.random() * 2.5 + 1; // 1px to 3.5px
      
      dot.style.position = 'absolute';
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.borderRadius = '50%';
      
      // Random brand colors: blue, cyan, deep blue, soft blue
      const colors = ['#1a80f8', '#00d2ff', '#0055ff', '#6eb0ff'];
      dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      const maxOpacity = Math.random() * 0.45 + 0.15;
      dot.style.setProperty('--max-opacity', maxOpacity.toString());
      
      // Spawn on a circle circumference
      const angle = Math.random() * Math.PI * 2;
      // Matches the radius of the layout design
      const radius = Math.min(window.innerHeight, window.innerWidth) * 0.41;
      const offsetX = Math.cos(angle) * radius;
      const offsetY = Math.sin(angle) * radius;
      
      dot.style.left = `calc(50% + ${offsetX}px)`;
      dot.style.top = `calc(50% + ${offsetY}px)`;
      
      // Falling drip distance
      const meltDistance = Math.random() * 250 + 250;
      const drift = (Math.random() - 0.5) * 40;
      
      dot.style.setProperty('--melt-distance', `${meltDistance}px`);
      dot.style.setProperty('--drift', `${drift}px`);
      dot.style.boxShadow = '0 0 4px rgba(26, 128, 248, 0.5)';
      
      const duration = Math.random() * 3.5 + 2.5; // 2.5s to 6.0s
      dot.style.animation = `melt-dust ${duration}s cubic-bezier(0.4, 0, 1, 1) forwards`;
      
      if (isInitial) {
        dot.style.animationDelay = `-${Math.random() * duration}s`;
      }
      
      container.appendChild(dot);
      
      // Clean up DOM
      setTimeout(() => {
        dot.remove();
      }, duration * 1000);
    };

    // Initial batch
    for (let i = 0; i < 60; i++) {
      spawnParticle(true);
    }

    // Continuous generation
    const interval = setInterval(() => {
      if (container.childElementCount < 130) {
        spawnParticle(false);
      }
    }, 45);

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="digital-dust"
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
};
