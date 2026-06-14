import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TiltCard } from './components/TiltCard';
import { BorderBeamCard } from './components/BorderBeamCard';
import { TextScramble } from './components/TextScramble';
import { showTerminalToast, TerminalToastContainer } from './components/TerminalToast';
import { Footer } from './components/Footer';
import { HologramBackground } from './components/HologramBackground';
import { ROISimulator } from './components/ROISimulator';
import { Testimonials } from './components/Testimonials';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active', 'active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal, .text-reveal-wrapper');
    elementsToReveal.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showTerminalToast('SYS_ERROR', 'Por favor, preencha todos os campos do formulário.', 'warning');
      return;
    }

    showTerminalToast('SYS_SENDING', 'Enviando sua mensagem...', 'info');

    setTimeout(() => {
      showTerminalToast(
        'TRANSMISSION_SUCCESS',
        `Olá ${formData.name}, recebemos seu contato! Responderemos em breve.`,
        'success'
      );
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="text-white min-h-screen relative z-0 font-sans selection:bg-blue-500/30 selection:text-orange-200">
      {/* Full-screen WebGL Hologram Background */}
      <HologramBackground />

      {/* HUD Toast Container */}
      <TerminalToastContainer />

      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6 max-w-7xl mx-auto z-20">
        <div className="flex items-center gap-2 mb-6 opacity-60">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">01 / Nossos Serviços</span>
        </div>
        <h2 className="leading-[1.1] uppercase md:text-5xl text-3xl font-normal text-white tracking-tight font-manrope mb-8 text-reveal-wrapper">
          <span className="text-reveal-content">
            <TextScramble text="Soluções que" /> <span className="text-gray-500"><TextScramble text="impulsionam seu negócio" /></span>
          </span>
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-16 max-w-3xl font-sans">
          Projetamos e desenvolvemos experiências digitais exclusivas e automações inteligentes com foco em escala, performance e resultados comerciais reais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TiltCard>
            <div className="mb-6 w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Icon icon="solar:box-minimalistic-bold-duotone" className="text-blue-500 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-white font-manrope mb-1">Landing Pages Estratégicas</h3>
            <span className="text-xs font-mono text-blue-400 block mb-3">Prazo: 2 a 3 semanas</span>
            <p className="text-sm text-gray-400 leading-relaxed">
              Páginas otimizadas para vendas, anúncios e captação de leads. Rápidas, leves e pensadas estrategicamente para entregar os melhores resultados.
            </p>
          </TiltCard>

          <TiltCard>
            <div className="mb-6 w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Icon icon="solar:code-bold-duotone" className="text-indigo-400 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-white font-manrope mb-1">Automação com Agentes de IA</h3>
            <span className="text-xs font-mono text-indigo-400 block mb-3">Prazo: 3 a 4 semanas</span>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fluxos inteligentes integrando n8n e Inteligência Artificial para otimizar, automatizar tarefas operacionais e escalar suas operações digitais.
            </p>
          </TiltCard>

          <TiltCard>
            <div className="mb-6 w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Icon icon="solar:file-send-bold-duotone" className="text-emerald-400 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-white font-manrope mb-1">Desenvolvimento Full Stack</h3>
            <span className="text-xs font-mono text-emerald-400 block mb-3">Prazo: 4 a 6 semanas</span>
            <p className="text-sm text-gray-400 leading-relaxed">
              Soluções tecnológicas robustas com frontend e backend integrados sob medida. Desde sites institucionais até sistemas complexos e inovadores.
            </p>
          </TiltCard>
        </div>
      </section>

      {/* Interactive AI ROI Simulator */}
      <ROISimulator />

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-32 border-t border-white/5 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto px-6 z-20 relative">
          <div className="flex items-center gap-2 mb-6 opacity-60">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">02 / Nosso Portfólio</span>
          </div>
          <h2 className="leading-[1.1] uppercase md:text-5xl text-3xl font-normal text-white tracking-tight font-manrope mb-8 text-reveal-wrapper">
            <span className="text-reveal-content">
              <TextScramble text="Casos reais que" /> <span className="text-gray-500"><TextScramble text="geram crescimento" /></span>
            </span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-16 max-w-3xl font-sans">
            Explore projetos reais criados e publicados que geraram valor palpável e resultados de alto impacto para nossos clientes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BorderBeamCard beamColor="#1a80f8">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2 block">E-Commerce + CRM (+15% Vendas)</span>
              <h3 className="text-2xl font-semibold text-white mb-4 font-manrope">LUZ DE CRISTO</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Desenvolvemos o e-commerce completo, focado em performance extrema e facilidade de uso, impactando diretamente no aumento de vendas digitais da marca.
              </p>
              <a href="https://wa.link/rs0buz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors">
                <span>Quero um projeto assim</span>
                <Icon icon="lucide:arrow-right" />
              </a>
            </BorderBeamCard>

            <BorderBeamCard beamColor="#10b981">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-2 block">Design & Presença Digital (+20% Fluxo)</span>
              <h3 className="text-2xl font-semibold text-white mb-4 font-manrope">PORTALNOTE</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Criação de identidade visual moderna e fachada de destaque na web, fortalecendo a autoridade da marca e impulsionando o fluxo de clientes na loja física.
              </p>
              <a href="https://wa.link/rs0buz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-350 transition-colors">
                <span>Quero um projeto assim</span>
                <Icon icon="lucide:arrow-right" />
              </a>
            </BorderBeamCard>

            <BorderBeamCard beamColor="#8b5cf6">
              <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest mb-2 block">Automação de Vendas (+200 Alunos)</span>
              <h3 className="text-2xl font-semibold text-white mb-4 font-manrope">ESCOLA DO X1</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Estruturação do site e automações completas com atendimento por IA para gerenciar leads, fechar vendas e fazer a entrega automatizada do curso.
              </p>
              <a href="https://wa.link/rs0buz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors">
                <span>Quero um projeto assim</span>
                <Icon icon="lucide:arrow-right" />
              </a>
            </BorderBeamCard>

            <BorderBeamCard beamColor="#f59e0b">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest mb-2 block">Landing Page & Conversão</span>
              <h3 className="text-2xl font-semibold text-white mb-4 font-manrope">FEIRA VOCACIONAL</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Desenvolvimento de landing page moderna e persuasiva, aumentando exponencialmente a autoridade digital e a facilidade de conversão de leads do evento.
              </p>
              <a href="https://wa.link/rs0buz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors">
                <span>Quero um projeto assim</span>
                <Icon icon="lucide:arrow-right" />
              </a>
            </BorderBeamCard>
          </div>
        </div>
      </section>

      {/* Process Section - The Attack Plan */}
      <section id="process" className="relative py-32 border-t border-white/5 max-w-4xl mx-auto px-6 z-20">
        <div className="flex items-center gap-2 mb-6 opacity-60">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">03 / Nosso Plano de Ataque</span>
        </div>
        <h2 className="leading-[1.1] uppercase md:text-5xl text-3xl font-normal text-white tracking-tight font-manrope mb-20 text-reveal-wrapper">
          <span className="text-reveal-content">
            <TextScramble text="Como traçamos" /> <span className="text-gray-500"><TextScramble text="a rota para o sucesso" /></span>
          </span>
        </h2>

        {/* Vertical Timeline container */}
        <div className="relative border-l border-blue-500/20 ml-4 md:ml-6 space-y-16 py-2">
          
          {/* Step 1 */}
          <div className="relative pl-8 md:pl-12 group">
            {/* Sonar Indicator node */}
            <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black border border-blue-500/30">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            
            <div className="border border-white/5 bg-zinc-950/60 rounded-[2rem] p-8 hover:bg-zinc-900/20 hover:border-blue-500/20 transition-all duration-300 backdrop-blur-xl">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1.5 block">01 / Rastreamento (Kickoff)</span>
              <h4 className="text-lg font-semibold text-white mb-3 font-manrope">Mapeamento e Estratégia</h4>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Analisamos o seu nicho de mercado, mapeamos as fraquezas dos concorrentes e traçamos o plano de ataque ideal para garantir que seu site ou automação converta muito mais.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative pl-8 md:pl-12 group">
            {/* Sonar Indicator node */}
            <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black border border-blue-500/30">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            
            <div className="border border-white/5 bg-zinc-950/60 rounded-[2rem] p-8 hover:bg-zinc-900/20 hover:border-blue-500/20 transition-all duration-300 backdrop-blur-xl">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1.5 block">02 / O Ataque (Execução)</span>
              <h4 className="text-lg font-semibold text-white mb-3 font-manrope">Desenvolvimento Agressivo</h4>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Criamos o design premium e desenvolvemos o seu site com foco em velocidade máxima de carregamento. Se contratado, integramos agentes de inteligência artificial com n8n para rodar nos bastidores da sua empresa.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative pl-8 md:pl-12 group">
            {/* Sonar Indicator node */}
            <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black border border-blue-500/30">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            
            <div className="border border-white/5 bg-zinc-950/60 rounded-[2rem] p-8 hover:bg-zinc-900/20 hover:border-blue-500/20 transition-all duration-300 backdrop-blur-xl">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1.5 block">03 / Domínio (Handoff & Lançamento)</span>
              <h4 className="text-lg font-semibold text-white mb-3 font-manrope">Dominação e Autonomia</h4>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Seu site vai ao ar indexado e otimizado no Google. Entregamos documentação operacional completa para você e seu time, garantindo controle e independência total sobre o seu produto digital.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <section id="contact" className="relative py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 z-20 relative text-center">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-60">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">04 / Fale Conosco</span>
          </div>
          <h2 className="leading-[1.1] uppercase md:text-5xl text-3xl font-normal text-white tracking-tight font-manrope mb-8 text-reveal-wrapper">
            <span className="text-reveal-content">
              <TextScramble text="Vamos iniciar" /> <span className="text-gray-500"><TextScramble text="o seu projeto?" /></span>
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-12 font-sans">
            Preencha o formulário abaixo e entraremos em contato para transformar a presença digital da sua empresa.
          </p>

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="bg-zinc-950/40 border border-white/5 rounded-[2rem] p-8 md:p-12 text-left backdrop-blur-xl glass-panel">
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Seu Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="DIGITE SEU NOME..."
                  className="w-full bg-zinc-900/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 font-mono focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Seu E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="EXEMPLO@EMAIL.COM..."
                  className="w-full bg-zinc-900/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 font-mono focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Mensagem / Projeto</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="DESCREVA O QUE VOCÊ PRECISA NO SEU SITE..."
                  className="w-full bg-zinc-900/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-700 font-mono focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-mono uppercase tracking-widest transition-all duration-300 font-bold"
              >
                <span>Enviar Mensagem</span>
                <Icon icon="solar:letter-bold-duotone" className="text-sm group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
