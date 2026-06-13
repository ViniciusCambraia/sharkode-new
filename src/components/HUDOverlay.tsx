import React, { useEffect, useState } from 'react';

export const HUDOverlay: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [sysTime, setSysTime] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateClock = () => {
      const now = new Date();
      const format = now.toTimeString().split(' ')[0];
      setSysTime(format);
    };

    updateClock();
    const clockInterval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden font-mono text-[9px] tracking-widest text-blue-500/40">
      {/* Laser Scanning Line */}
      <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.3)] animate-[scanline_12s_linear_infinite]" />

      {/* Top-Left Corner HUD */}
      <div className="absolute top-8 left-8 flex flex-col gap-1 items-start">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-blue-500/50 animate-pulse rounded-full"></span>
          <span className="text-blue-500/60 font-bold">SYS_ONLINE // V2.4</span>
        </div>
        <div>LOC_COORD: {mousePos.x}PX / {mousePos.y}PX</div>
        <div>NET_TICK: {sysTime}</div>
      </div>

      {/* Top-Right Corner HUD */}
      <div className="absolute top-8 right-8 flex flex-col gap-1 items-end text-right">
        <div className="text-blue-500/60 font-bold">DIAGNOSTIC_STREAM</div>
        <div>SYS_LOAD: 12.8%</div>
        <div>MEM_FREE: 84.1GB</div>
      </div>

      {/* Bottom-Left Corner HUD */}
      <div className="absolute bottom-8 left-8 flex flex-col gap-1 items-start">
        <div>CORE_TEMP: 39.4°C</div>
        <div>RESOLUTION: {window.innerWidth}X{window.innerHeight}</div>
        <div className="flex gap-0.5 mt-1">
          <span className="w-4 h-1 bg-blue-500/40"></span>
          <span className="w-6 h-1 bg-blue-500/30"></span>
          <span className="w-2 h-1 bg-blue-500/10"></span>
        </div>
      </div>

      {/* Bottom-Right Corner HUD */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-1 items-end text-right">
        <div>ENCRYPTION: SHIELD_AES</div>
        <div>SECTOR_STATE: SECURE</div>
        <div className="text-[7px] text-blue-500/20 uppercase mt-0.5">Engine powered by Sharkode</div>
      </div>

      {/* Technical Corner Brackets */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-blue-500/20" />
      <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-blue-500/20" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-blue-500/20" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-blue-500/20" />
    </div>
  );
};
