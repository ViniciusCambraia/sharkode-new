import React, { useEffect, useRef } from 'react';
import { DigitalDust } from './DigitalDust';

export const HologramBackground: React.FC = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const tryInit = () => {
      const unicorn = (window as any).UnicornStudio;
      if (unicorn && typeof unicorn.init === 'function') {
        try {
          unicorn.init();
          initialized.current = true;
        } catch (err) {
          console.warn('[HologramBackground] Unicorn Studio init error:', err);
        }
      }
    };

    // Try immediately (script already loaded)
    tryInit();

    // Fallback: wait for load event
    if (!initialized.current) {
      window.addEventListener('load', tryInit, { once: true });
    }

    return () => {
      window.removeEventListener('load', tryInit);
      // Destroy WebGL scene on unmount to avoid memory leaks
      const unicorn = (window as any).UnicornStudio;
      if (unicorn && typeof unicorn.destroy === 'function') {
        try { unicorn.destroy(); } catch (_) {}
      }
      initialized.current = false;
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      {/* Unicorn Studio WebGL Scene — full coverage */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-80"
        style={{ isolation: 'isolate' }}
      >
        <div
          id="unicorn-scene"
          data-us-project-src="/assets/5224c16c9fd00d6b_bKN5upvoulAmWvInmHza.json"
          data-us-scale="1"
          data-us-dpi="1.5"
          data-us-fps="60"
          data-us-lazyload="true"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
      </div>

      {/* Floating Glowing Shark Logo — centered, pixelated mask effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative w-[900px] h-[900px] opacity-75 mix-blend-screen scale-90 md:scale-110 pixelated-dots"
          style={{ flexShrink: 0 }}
        >
          <div className="absolute inset-0 flex items-center justify-center animate-[float-shark_8s_ease-in-out_infinite]">
            <img
              src="/4_3312asd_transparent.png"
              className="w-80 h-80 object-contain shark-glow -translate-x-6"
              alt="Sharkode Logo Background"
            />
          </div>
        </div>
      </div>

      {/* Digital Dust Particles */}
      <DigitalDust />
    </div>
  );
};
