import React from 'react';

interface RollTextProps {
  text: string;
  className?: string;
}

export const RollText: React.FC<RollTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`group inline-flex flex-wrap justify-center select-none cursor-pointer ${className}`}>
      {text.split('').map((char, index) => {
        if (char === ' ') {
          return <span key={index} className="w-[0.25em]">&nbsp;</span>;
        }
        return (
          <span
            key={index}
            className="relative inline-block overflow-hidden h-[1.15em] leading-[1] pr-[0.15em] -mr-[0.15em]"
          >
            {/* Default letter */}
            <span
              className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 pr-[0.15em]"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {char}
            </span>
            {/* Hovered letter */}
            <span
              className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-blue-400 font-bold pr-[0.15em]"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {char}
            </span>
          </span>
        );
      })}
    </span>
  );
};
