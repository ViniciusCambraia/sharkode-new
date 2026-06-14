import React from 'react';

export const HologramBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-black">
      <style>{`
        @keyframes bg-fade-loop {
          0% { opacity: 0; }
          4% { opacity: 0.8; }
          96% { opacity: 0.8; }
          100% { opacity: 0; }
        }
        .animate-bg-fade {
          animation: bg-fade-loop 10s infinite linear;
        }
      `}</style>
      {/* Native WebM Loop with CSS crossfade to black at loop points */}
      <video
        src="/bg-gradient.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover animate-bg-fade"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};




