import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface Project {
  id: string;
  category: string;
  categoryColor: string;
  accentColor: string;
  accentRgb: string;
  company: string;
  description: string;
  services: string[];
  metrics: { value: string; label: string; prefix?: string; suffix?: string }[];
  beamColor: string;
}

const projects: Project[] = [
  {
    id: 'luz-de-cristo',
    category: 'E-Commerce + CRM',
    categoryColor: 'text-blue-400',
    accentColor: '#1a80f8',
    accentRgb: '26, 128, 248',
    company: 'LUZ DE CRISTO',
    description: 'E-commerce completo com foco em performance extrema e facilidade de uso. Integração direta com CRM para rastreamento de leads e pedidos em tempo real.',
    services: ['E-Commerce', 'CRM', 'UX Design', 'Performance'],
    metrics: [
      { value: '15', label: 'Aumento em Vendas', suffix: '%', prefix: '+' },
      { value: '3.2', label: 'Velocidade de Carga', suffix: 's' },
      { value: '92', label: 'Score Lighthouse', suffix: '/100' },
    ],
    beamColor: '#1a80f8',
  },
  {
    id: 'portalnote',
    category: 'Design & Presença Digital',
    categoryColor: 'text-emerald-400',
    accentColor: '#10b981',
    accentRgb: '16, 185, 129',
    company: 'PORTALNOTE',
    description: 'Identidade visual moderna e fachada de destaque na web, fortalecendo a autoridade da marca e impulsionando o fluxo de clientes na loja física.',
    services: ['Identidade Visual', 'Website', 'SEO Local', 'Conversão'],
    metrics: [
      { value: '20', label: 'Aumento no Fluxo', suffix: '%', prefix: '+' },
      { value: '4.8', label: 'Avaliação Google', suffix: '★' },
      { value: '60', label: 'Redução em Bounce Rate', suffix: '%', prefix: '-' },
    ],
    beamColor: '#10b981',
  },
  {
    id: 'escola-do-x1',
    category: 'Automação de Vendas com IA',
    categoryColor: 'text-violet-400',
    accentColor: '#8b5cf6',
    accentRgb: '139, 92, 246',
    company: 'ESCOLA DO X1',
    description: 'Estruturação do site e automações completas com atendimento por IA para gerenciar leads, fechar vendas e entregar automaticamente o curso.',
    services: ['Agentes de IA', 'n8n', 'Landing Page', 'Automação'],
    metrics: [
      { value: '200', label: 'Novos Alunos', suffix: '+' },
      { value: '80', label: 'Redução de Custo Operacional', suffix: '%', prefix: '-' },
      { value: '24', label: 'Atendimento Automatizado', suffix: 'h/7' },
    ],
    beamColor: '#8b5cf6',
  },
  {
    id: 'feira-vocacional',
    category: 'Landing Page & Conversão',
    categoryColor: 'text-amber-400',
    accentColor: '#f59e0b',
    accentRgb: '245, 158, 11',
    company: 'FEIRA VOCACIONAL',
    description: 'Landing page moderna e persuasiva desenvolvida para aumentar exponencialmente a autoridade digital e a taxa de conversão de leads do evento.',
    services: ['Landing Page', 'Copywriting', 'Design', 'Analytics'],
    metrics: [
      { value: '3x', label: 'Crescimento em Leads', suffix: '' },
      { value: '94', label: 'Score de Qualidade', suffix: '/100' },
      { value: '2', label: 'Prazo de Entrega', suffix: ' sem.' },
    ],
    beamColor: '#f59e0b',
  },
];

function AnimatedMetric({ value, prefix = '', suffix = '' }: { value: string; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState('0');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const numericVal = parseFloat(value);
  const isNumeric = !isNaN(numericVal);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || !isNumeric) { setDisplay(value); return; }
    const duration = 1400;
    const start = performance.now();
    const run = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const cur = numericVal * ease;
      setDisplay(Number.isInteger(numericVal) ? String(Math.round(cur)) : cur.toFixed(1));
      if (progress < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }, [started, isNumeric, numericVal, value]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export const PortfolioCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const project = projects[activeIndex];

  const goTo = useCallback((index: number) => {
    setActiveIndex(Math.max(0, Math.min(projects.length - 1, index)));
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = dragStart - e.clientX;
    if (Math.abs(delta) > 50) goTo(activeIndex + (delta > 0 ? 1 : -1));
    setIsDragging(false);
  };
  const handleTouchStart = (e: React.TouchEvent) => setDragStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = dragStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) goTo(activeIndex + (delta > 0 ? 1 : -1));
  };

  return (
    <section id="resultados" className="relative py-32 border-t border-white/5 overflow-hidden">
      {/* Ambient glow blob that follows active color */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 80%, rgba(${project.accentRgb}, 0.06) 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-6 opacity-60">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">02 / Resultados Reais</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="leading-[1.1] uppercase text-3xl md:text-5xl font-normal text-white tracking-tight font-manrope max-w-xl">
            Projetos que{' '}
            <span
              className="transition-all duration-500"
              style={{ color: project.accentColor }}
            >
              geram números
            </span>
          </h2>
          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="w-12 h-12 rounded-full border border-white/10 bg-zinc-950/60 backdrop-blur-xl flex items-center justify-center text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              aria-label="Projeto anterior"
            >
              <Icon icon="lucide:arrow-left" className="text-lg" />
            </button>
            <span className="text-xs font-mono text-zinc-500 tabular-nums">
              {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === projects.length - 1}
              className="w-12 h-12 rounded-full border border-white/10 bg-zinc-950/60 backdrop-blur-xl flex items-center justify-center text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              aria-label="Próximo projeto"
            >
              <Icon icon="lucide:arrow-right" className="text-lg" />
            </button>
          </div>
        </div>

        {/* Dot pills navigation */}
        <div className="flex gap-2 mb-10">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === activeIndex ? 'w-8' : 'w-4 opacity-30'
              }`}
              style={{ background: i === activeIndex ? project.accentColor : '#52525b' }}
              aria-label={`Ver projeto ${p.company}`}
            />
          ))}
        </div>

        {/* Main Card */}
        <div
          ref={trackRef}
          className="relative select-none cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-white/5 bg-zinc-950/60 backdrop-blur-xl"
            style={{
              boxShadow: `0 0 0 1px rgba(${project.accentRgb}, 0.1), 0 40px 80px -20px rgba(0,0,0,0.6)`,
              animation: 'portfolio-card-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            {/* Left: Info panel */}
            <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-between gap-10">
              <div>
                {/* Category pill */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 text-xs font-mono tracking-widest uppercase"
                  style={{
                    borderColor: `rgba(${project.accentRgb}, 0.25)`,
                    background: `rgba(${project.accentRgb}, 0.06)`,
                    color: project.accentColor,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: project.accentColor }}
                  />
                  {project.category}
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white font-manrope tracking-tight mb-4 uppercase">
                  {project.company}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-lg font-sans">
                  {project.description}
                </p>
              </div>

              {/* Services tags */}
              <div className="flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.03] text-zinc-400"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div>
                <a
                  href="https://wa.link/rs0buz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 hover:gap-4 hover:scale-[1.02]"
                  style={{
                    background: project.accentColor,
                    color: '#000',
                  }}
                >
                  <span>Quero um projeto assim</span>
                  <Icon icon="lucide:arrow-right" />
                </a>
              </div>
            </div>

            {/* Right: Metrics panel */}
            <div
              className="lg:col-span-2 flex flex-col justify-center gap-0 border-t lg:border-t-0 lg:border-l border-white/5"
              style={{
                background: `linear-gradient(135deg, rgba(${project.accentRgb}, 0.04) 0%, rgba(0,0,0,0) 70%)`,
              }}
            >
              {project.metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  className={`flex flex-col justify-center p-8 md:p-10 gap-1.5 relative ${
                    i < project.metrics.length - 1 ? 'border-b border-white/5' : ''
                  }`}
                >
                  {/* Subtle scan line */}
                  <div
                    className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, rgba(${project.accentRgb},0.4), transparent)` }}
                  />
                  <div
                    className="text-4xl md:text-5xl font-bold tracking-tight font-manrope tabular-nums"
                    style={{ color: project.accentColor }}
                  >
                    <AnimatedMetric
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-4 mt-8 overflow-x-auto pb-2 scrollbar-hide">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              className={`shrink-0 flex flex-col justify-end rounded-2xl border px-5 py-4 min-w-[160px] text-left transition-all duration-400 ${
                i === activeIndex
                  ? 'border-opacity-40 bg-zinc-900/60'
                  : 'border-white/5 bg-zinc-950/40 opacity-50 hover:opacity-80'
              }`}
              style={{
                borderColor: i === activeIndex ? p.accentColor : undefined,
                boxShadow: i === activeIndex ? `0 0 20px -8px ${p.accentColor}` : undefined,
              }}
            >
              <span
                className="text-[9px] font-mono uppercase tracking-widest mb-1.5 block"
                style={{ color: p.accentColor }}
              >
                {p.category.split(' ')[0]}
              </span>
              <span className="text-xs font-bold text-white font-manrope">{p.company}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
