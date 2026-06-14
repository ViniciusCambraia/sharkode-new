import React from 'react';

export const HologramBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Spline Background Iframe - Pure Gradient Animation */}
      <iframe
        src="https://my.spline.design/animatedbackgroundgradientforweb-jvJDeBWjMvShkjPKxPRUswLq"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
        style={{ pointerEvents: 'none' }}
        title="Spline Background"
      />
    </div>
  );
};

