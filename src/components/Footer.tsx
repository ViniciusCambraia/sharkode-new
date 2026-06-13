import React from 'react';
import { Icon } from '@iconify/react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 w-full border-t border-white/5 bg-black/40 backdrop-blur-2xl mt-24 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-[1px]">
                <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                  <Icon icon="solar:code-bold-duotone" className="text-blue-500" width="16" height="16" />
                </div>
              </div>
              <span className="text-xl font-semibold tracking-wider text-white font-manrope uppercase">SHARK<span className="text-blue-500">ODE</span></span>
            </div>
            <p className="text-sm text-gray-400 font-sans leading-relaxed max-w-sm mb-8">
              Estúdio premium especializado em websites modernos, rápidos e interativos. Do planejamento à publicação final, nós criamos sites que mordem.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Icon icon="simple-icons:x" width="16" height="16" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Icon icon="simple-icons:github" width="18" height="18" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Icon icon="simple-icons:discord" width="18" height="18" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-medium tracking-wide mb-2 font-sans">Serviços</h4>
              <a className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-sans" href="#services">Landing Pages</a>
              <a className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-sans" href="#services">Agentes de IA</a>
              <a className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-sans" href="#services">Desenvolvimento Full Stack</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-medium tracking-wide mb-2 font-sans">Projetos</h4>
              <a className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-sans" href="#portfolio">Cases</a>
              <a className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-sans" href="#portfolio">Templates</a>
              <a className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-sans" href="#portfolio">Portfólio</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-medium tracking-wide mb-2 font-sans">Empresa</h4>
              <a className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-sans" href="#process">Sobre Nós</a>
              <a className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-sans" href="#process">Método</a>
              <a className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-sans" href="#process">Blog</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-medium tracking-wide mb-2 font-sans">Legal</h4>
              <a className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-sans" href="#">Termos de Uso</a>
              <a className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-sans" href="#">Privacidade</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-sans">© 2026 Sharkode. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            <span className="text-xs text-gray-400 font-sans">Servidor online e ativo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
