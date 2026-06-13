import React, { useRef, useState } from 'react';

interface BorderBeamCardProps {
  children: React.ReactNode;
  className?: string;
  beamColor?: string; // e.g. '#1a80f8' or '#10b981'
}

export const BorderBeamCard: React.FC<BorderBeamCardProps> = ({
  children,
  className = '',
  beamColor = '#1a80f8'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [sheenStyle, setSheenStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // Use a glow matching the beam color
    setSheenStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${xPercent}% ${yPercent}%, ${beamColor}26, rgba(255, 255, 255, 0.03) 25%, transparent 60%)`,
    });
  };

  const handleMouseLeave = () => {
    setSheenStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group overflow-hidden rounded-[2rem] p-[1px] relative shadow-2xl cursor-pointer transition-all duration-300 ${className}`}
    >
      {/* Spinning Conic Beam Border, visible on hover */}
      <div
        className="absolute inset-[-150%] animate-[beam-spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundImage: `conic-gradient(from 0deg, transparent 0 300deg, ${beamColor} 360deg)`
        }}
      />
      {/* Inner masked panel */}
      <div className="bg-zinc-950/95 hover:bg-zinc-950/85 rounded-[calc(2rem-1px)] p-10 h-full relative backdrop-blur-xl transition-all duration-300 overflow-hidden">
        {/* Glow sheen overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={sheenStyle}
        />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};
