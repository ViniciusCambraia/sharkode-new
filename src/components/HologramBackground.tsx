import React, { useEffect, useRef } from 'react';

export const HologramBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const updateOpacity = () => {
      if (video.duration) {
        const duration = video.duration;
        const currentTime = video.currentTime;
        const fadeTime = 0.6; // Duração do fade (600 milissegundos)

        if (currentTime < fadeTime) {
          // Fade in (entrada suave)
          const progress = currentTime / fadeTime;
          video.style.opacity = (progress * 0.8).toString();
        } else if (currentTime > duration - fadeTime) {
          // Fade out (saída suave antes de resetar)
          const progress = (duration - currentTime) / fadeTime;
          video.style.opacity = (Math.max(0, progress) * 0.8).toString();
        } else {
          // Opacidade normal no meio do vídeo
          video.style.opacity = '0.8';
        }
      }
      rafId = requestAnimationFrame(updateOpacity);
    };

    rafId = requestAnimationFrame(updateOpacity);
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-black">
      {/* Native WebM Loop with timeline-synchronized fade transition */}
      <video
        ref={videoRef}
        src="/bg-gradient.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ease-out"
        style={{ pointerEvents: 'none', opacity: 0 }}
      />
    </div>
  );
};





