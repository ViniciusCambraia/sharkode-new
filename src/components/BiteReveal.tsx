import React from 'react';

interface BiteRevealProps {
  text: string;
  className?: string;
}

export const BiteReveal: React.FC<BiteRevealProps> = ({ text, className = '' }) => {
  return (
    <span className={`group relative inline-block cursor-default select-none ${className}`}>
      {/* Default text (Perfectly aligned and visible when NOT hovered) */}
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 font-bold italic transition-opacity duration-300 group-hover:opacity-0">
        {text}
      </span>

      {/* Cyber Glow Core (Revealed on hover) */}
      <span
        className="absolute inset-0 block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-extrabold tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-105 pointer-events-none text-center"
        style={{
          filter: 'drop-shadow(0 0 12px rgba(6, 182, 212, 0.85)) drop-shadow(0 0 25px rgba(59, 130, 246, 0.45))',
        }}
      >
        {text}
      </span>

      {/* Top Half (Overlay, visible and slides up on hover) */}
      <span
        className="absolute inset-0 block opacity-0 group-hover:opacity-100 transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) group-hover:-translate-y-3 text-center"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 font-bold italic">
          {text}
        </span>
      </span>

      {/* Bottom Half (Overlay, visible and slides down on hover) */}
      <span
        className="absolute inset-0 block opacity-0 group-hover:opacity-100 transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) group-hover:translate-y-3 text-center"
        style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 font-bold italic">
          {text}
        </span>
      </span>
    </span>
  );
};
