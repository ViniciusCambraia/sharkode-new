import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  const [sheenStyle, setSheenStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 8; // Max 8 degrees tilt
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setSheenStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(59, 130, 246, 0.15), rgba(255, 255, 255, 0.05) 25%, transparent 60%)`,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    setSheenStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`relative group overflow-hidden bg-gradient-to-br from-white/10 to-white/0 rounded-[2rem] p-10 border border-white/5 shadow-2xl backdrop-blur-xl cursor-pointer select-none bite-hover ${className}`}
      style={{
        transform: transformStyle,
        transition: 'transform 0.15s ease-out, border-color 0.3s ease, background-color 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow sheen overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={sheenStyle}
      />
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  );
};
