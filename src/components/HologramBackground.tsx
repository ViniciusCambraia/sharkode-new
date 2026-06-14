import React from 'react';

export const HologramBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-black">
      {/* Native WebM Loop - Super lightweight, 100% browser compatible */}
      <video
        src="/bg-gradient.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};



