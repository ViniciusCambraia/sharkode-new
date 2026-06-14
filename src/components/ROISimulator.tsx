import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { showTerminalToast } from './TerminalToast';

export const ROISimulator: React.FC = () => {
  const [hours, setHours] = useState(15);
  const [teamSize, setTeamSize] = useState(3);

  // Constants
  const HOURLY_RATE = 75; // R$ 75 por hora média de colaborador

  // Calculations
  const hoursSavedPerMonth = hours * teamSize * 4.33; // 4.33 semanas por mês em média
  const monthlySavings = hoursSavedPerMonth * HOURLY_RATE;
  const annualSavings = monthlySavings * 12;

  const handleApply = () => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Populate message
    const messageInput = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
    if (messageInput) {
      messageInput.value = `Gostaria de falar sobre automações com Agentes de IA. Nosso time de ${teamSize} pessoa(s) gasta cerca de ${hours} horas semanais por pessoa em tarefas manuais, e queremos economizar até R$ ${annualSavings.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} por ano!`;
      // Dispatch input event to update state in App.tsx
      messageInput.dispatchEvent(new Event('input', { bubbles: true }));
    }

    showTerminalToast(
      'ROI_CALCULATED',
      'Dados de simulação aplicados ao formulário de contato!',
      'success'
    );
  };

  return (
    <section className="relative py-24 px-6 max-w-5xl mx-auto z-20">
      <div className="border border-white/5 bg-zinc-950/40 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl glass-panel relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Decorative Grid Light */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="flex items-center gap-2 mb-6 opacity-60">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Simulador de ROI com IA</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-manrope font-semibold text-white mb-2 uppercase tracking-tight">
                Calcule o impacto dos Agentes de IA
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                Descubra quanto tempo e dinheiro sua equipe pode economizar mensalmente substituindo processos repetitivos por automações inteligentes.
              </p>
            </div>

            <div className="space-y-6">
              {/* Slider 1: Hours */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-400 uppercase tracking-wider">Horas manuais / Colaborador por semana</span>
                  <span className="text-blue-400 font-bold text-sm bg-blue-500/10 px-2 py-0.5 rounded">{hours}h</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>5h (Mínimo)</span>
                  <span>40h (Tempo integral)</span>
                </div>
              </div>

              {/* Slider 2: Team Size */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-400 uppercase tracking-wider">Tamanho da equipe</span>
                  <span className="text-blue-400 font-bold text-sm bg-blue-500/10 px-2 py-0.5 rounded">{teamSize} {teamSize === 1 ? 'pessoa' : 'pessoas'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>1 pessoa</span>
                  <span>20 pessoas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 bg-zinc-900/40 border border-white/5 rounded-3xl p-8 space-y-6 relative flex flex-col justify-between h-full min-h-[300px]">
            <div className="space-y-4">
              <div className="text-center pb-4 border-b border-white/5">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Tempo Recuperado p/ Mês</span>
                <span className="text-3xl font-manrope font-bold text-white tracking-tight">
                  {Math.round(hoursSavedPerMonth)} horas
                </span>
              </div>

              <div className="text-center">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Economia Estimada por Ano</span>
                <span className="text-4xl md:text-5xl font-manrope font-extrabold text-emerald-400 tracking-tight block drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  R$ {annualSavings.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                </span>
                <span className="text-[9px] font-mono text-zinc-500 block mt-2">
                  *Custo médio estimado de R$ {HOURLY_RATE}/h por colaborador.
                </span>
              </div>
            </div>

            <button
              onClick={handleApply}
              className="w-full py-4 px-6 bg-white text-black hover:bg-zinc-200 font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg"
            >
              <span>Otimizar Minha Operação</span>
              <Icon icon="solar:round-double-alt-arrow-right-bold-duotone" className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
