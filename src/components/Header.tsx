import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-6 transition-all duration-500`}
    >
      <nav
        className={`w-full max-w-6xl flex items-center justify-between px-6 h-[60px] rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'bg-black/40 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
          <img
            src="/4_3312asd_transparent.png"
            alt="Sharkode Logo"
            className="h-8 w-auto object-contain shark-glow-nav transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-base font-semibold tracking-wider text-white font-manrope uppercase">
            SHARK<span className="text-blue-500">ODE</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {['#services', '#portfolio', '#process', '#contact'].map((href, i) => (
            <a
              key={href}
              href={href}
              className="text-zinc-400 hover:text-white text-[11px] font-mono tracking-widest uppercase transition-colors duration-200 hover:text-blue-300"
            >
              {['Serviços', 'Portfólio', 'Processo', 'Contato'][i]}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.link/rs0buz"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center"
          >
            <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <span className="transition-opacity duration-300 group-hover:opacity-0 bg-zinc-800 rounded-full absolute top-0 right-0 bottom-0 left-0"></span>
            <span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-[10px] font-medium text-zinc-400 tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full pt-2 px-4 pb-2 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
              <span className="relative z-10">Orçamento</span>
              <Icon icon="lucide:arrow-right" className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" width="12" height="12" />
            </span>
          </a>

          <a
            href="#contact"
            className="group inline-flex overflow-hidden rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center hover:scale-105 transition-transform duration-200"
          >
            <span className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#1a80f8_360deg)] animate-[beam-spin_4s_linear_infinite]" />
            <span className="flex items-center justify-center gap-2 uppercase text-[10px] font-medium text-white tracking-widest bg-zinc-950 w-full h-full rounded-full pt-2 px-4 pb-2 relative">
              Falar Conosco
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};
