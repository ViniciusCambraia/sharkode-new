import React from 'react';
import { Icon } from '@iconify/react';
import { TextScramble } from './TextScramble';
import { LogoMarquee } from './LogoMarquee';
import { RollText } from './RollText';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* 7-Column Split Grid Background */}
      <div className="absolute inset-0 grid grid-cols-7 gap-0 opacity-20 pointer-events-none z-0">
        <div className="border-r border-white/5 relative"><div className="absolute bottom-0 inset-x-0 h-[60%] bg-zinc-950/40 border-t border-white/5"></div></div>
        <div className="border-r border-white/5 relative"><div className="absolute bottom-0 inset-x-0 h-[45%] bg-zinc-950/40 border-t border-white/5"></div></div>
        <div className="border-r border-white/5 relative"><div className="absolute bottom-0 inset-x-0 h-[30%] bg-zinc-950/40 border-t border-white/5"></div></div>
        <div className="border-r border-white/5 relative"><div className="absolute bottom-0 inset-x-0 h-[20%] bg-zinc-950/40 border-t border-white/5"></div></div>
        <div className="border-r border-white/5 relative"><div className="absolute bottom-0 inset-x-0 h-[30%] bg-zinc-950/40 border-t border-white/5"></div></div>
        <div className="border-r border-white/5 relative"><div className="absolute bottom-0 inset-x-0 h-[45%] bg-zinc-950/40 border-t border-white/5"></div></div>
        <div className="relative"><div className="absolute bottom-0 inset-x-0 h-[60%] bg-zinc-950/40 border-t border-white/5"></div></div>
      </div>

      {/* Grid dots overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 animate-[dots-move_15s_linear_infinite]" style={{
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />

      {/* Radial Gradient Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0" />


      {/* Hero Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center z-20 flex flex-col items-center mt-20">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#3b82f6]"></span>
          <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-semibold">
            <TextScramble text="ESTÚDIO DE DESIGN & WEBSITES" triggerOnHover={false} />
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-8xl font-medium font-manrope tracking-tighter leading-[1.1] uppercase mb-6 max-w-5xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 opacity-90">
            Nós criamos sites
          </span>
          <br />
          <RollText text="que mordem." className="italic font-bold" />
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-12 font-sans">
          Desenvolvemos sistemas com IA, automações inteligentes e soluções de marketing para escalar negócios de forma personalizada e automatizada.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 z-20">
          <a
            href="https://wa.link/rs0buz"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex overflow-hidden uppercase focus:outline-none text-xs font-semibold tracking-widest rounded-full pt-4 pr-10 pb-4 pl-10 relative items-center justify-center transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(26,128,248,0.5)] shimmer-button"
          >
            <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#1a80f8_360deg)] animate-[beam-spin_3s_linear_infinite]"></div>
              <div className="absolute inset-[1px] rounded-full bg-black"></div>
            </div>
            <div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>
              <div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0 animate-[dots-move_8s_linear_infinite]" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-blue-500/30"></div>
            </div>
            <span className="relative z-10 text-white/90 transition-colors group-hover:text-white font-sans">Iniciar Projeto</span>
            <Icon icon="solar:round-arrow-down-bold-duotone" className="relative z-10 ml-2 -rotate-90 group-hover:translate-x-1 transition-transform" width="14" height="14" />
          </a>

          <a
            href="#portfolio"
            className="group inline-flex overflow-hidden rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          >
            <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="flex items-center justify-center gap-2 uppercase text-[10px] font-medium text-white tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full pt-3 px-8 pb-3 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] overflow-hidden shimmer-button">
              <span className="relative z-10">Ver Portfólio</span>
              <Icon icon="lucide:arrow-right" className="relative z-10 transition-transform group-hover:translate-x-0.5" width="14" height="14" />
            </span>
          </a>
        </div>
      </div>

      {/* Shark Fin Scroll Indicator */}
      <button 
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-blue-400 transition-colors pointer-events-auto z-20 group"
      >
        <span className="text-[9px] font-mono tracking-widest uppercase opacity-65 group-hover:opacity-100 transition-opacity">Mergulhar</span>
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="w-6 h-6 shark-fin-animate"
        >
          {/* Minimal shark fin SVG path */}
          <path d="M4 20C4 20 8 18 10 14C12 10 11 5 11 5C11 5 13 9 16 12C19 15 20 16 20 20" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 20H20" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Trusted Partner Logo Marquee */}
      <LogoMarquee />
    </section>
  );
};
