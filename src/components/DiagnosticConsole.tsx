import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { showTerminalToast } from './TerminalToast';

export const DiagnosticConsole: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [step, setStep] = useState<'idle' | 'scanning' | 'done'>('idle');
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const runDiagnostic = async (targetUrl: string) => {
    if (!targetUrl) return;
    setIsScanning(true);
    setStep('scanning');
    setLogs([]);

    const logList = [
      `guest@sharkode:~ $ ./shark-scanner --target ${targetUrl}`,
      `[VERIFICANDO] Iniciando testes no seu site...`,
      `[OK] Conexão com o servidor estabelecida com sucesso.`,
      `[DESIGN] Analisando o visual e a experiência de leitura...`,
      `[ATENÇÃO] O visual atual pode não reter a atenção dos visitantes.`,
      `[ATENÇÃO] Ausência de elementos modernos e transições fluidas (Nota visual: 38/100).`,
      `[VELOCIDADE] Medindo o tempo de carregamento das páginas...`,
      `[ATENÇÃO] O site demora 3.4 segundos para carregar (O ideal é menos de 1 segundo).`,
      `[ESTRUTURA] Identificados pontos de lentidão que prejudicam o posicionamento no Google.`,
      `[ANÁLISE] Gerando avaliação final...`,
      `==================================================`,
      `AVALIAÇÃO GERAL: PRECISA DE MELHORIAS`,
      `RECOMENDAÇÃO: Atualizar para um site exclusivo de alto impacto.`,
      `==================================================`,
      `[PRONTO] Relatório concluído. Clique abaixo para ver como resolver.`
    ];

    for (let i = 0; i < logList.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, i === 0 ? 400 : 700));
      setLogs((prev) => [...prev, logList[i]]);
    }

    setIsScanning(false);
    setStep('done');
    showTerminalToast('SCAN_COMPLETE', 'Relatório gerado com sucesso.', 'success');
  };

  const handleActionClick = () => {
    // Close terminal
    setIsOpen(false);
    // Find contact form message textarea
    const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
    if (textarea) {
      textarea.value = `Gostaria de solicitar um diagnóstico completo e orçamento para otimização da URL: ${urlInput}. O scanner apontou que o site precisa de melhorias de visual e velocidade.`;
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
    }
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full bg-zinc-950/90 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-wider hover:bg-zinc-900 hover:border-blue-500/60 shadow-[0_0_20px_rgba(26,128,248,0.2)] hover:shadow-[0_0_30px_rgba(26,128,248,0.45)] transition-all duration-300 pointer-events-auto"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>[ ANALISAR_SITE ]</span>
        </button>
      )}

      {/* Console Overlay Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[360px] md:w-[450px] h-[480px] bg-zinc-950/95 border border-blue-500/20 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] z-50 flex flex-col overflow-hidden backdrop-blur-2xl glass-panel pointer-events-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-900/40">
            <div className="flex items-center gap-2">
              <Icon icon="solar:code-scan-bold-duotone" className="text-blue-500 text-lg" />
              <span className="font-mono text-xs text-white tracking-widest uppercase">AVALIAÇÃO DE DESIGN E VELOCIDADE</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Icon icon="lucide:x" className="text-lg" />
            </button>
          </div>

          {/* Terminal Screen */}
          <div className="flex-1 p-6 overflow-y-auto font-mono text-[10px] text-zinc-400 space-y-2 select-text">
            {/* Scanlines overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />

            {step === 'idle' && (
              <div className="h-full flex flex-col justify-center items-center text-center px-4 space-y-6 select-none">
                <Icon icon="solar:shield-warning-bold-duotone" className="text-blue-500/40 text-5xl animate-pulse" />
                <div className="space-y-2">
                  <h4 className="text-white text-xs font-semibold uppercase tracking-wider">Verifique o Status do seu Site</h4>
                  <p className="text-[10px] text-zinc-500 leading-relaxed">
                    Insira o endereço do seu site para analisar o visual, a velocidade de carregamento e a experiência do usuário.
                  </p>
                </div>

                <div className="w-full flex gap-2">
                  <input
                    type="text"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="SEUSITE.COM.BR..."
                    className="flex-1 bg-zinc-900/60 border border-white/5 rounded-xl px-4 py-2 text-white placeholder-zinc-700 font-mono text-[10px] focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                  <button
                    onClick={() => runDiagnostic(urlInput)}
                    disabled={!urlInput}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-xl font-bold uppercase transition-colors"
                  >
                    Analisar
                  </button>
                </div>
              </div>
            )}

            {(step === 'scanning' || step === 'done') && (
              <div className="space-y-1.5">
                {logs.map((log, index) => {
                  let textColor = 'text-zinc-400';
                  if (log.startsWith('[ATENÇÃO]')) textColor = 'text-amber-400/90';
                  if (log.startsWith('[OK]')) textColor = 'text-emerald-400/90';
                  if (log.startsWith('[VERIFICANDO]') || log.startsWith('[ANÁLISE]') || log.startsWith('[DESIGN]') || log.startsWith('[VELOCIDADE]') || log.startsWith('[ESTRUTURA]')) textColor = 'text-blue-400/90';
                  if (log.startsWith('AVALIAÇÃO') || log.startsWith('RECOMENDAÇÃO')) textColor = 'text-white font-bold';

                  return (
                    <div key={index} className={`${textColor} leading-normal`}>
                      {log}
                    </div>
                  );
                })}
                {isScanning && (
                  <div className="text-blue-500 animate-pulse flex items-center gap-1 mt-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></span>
                    <span>CONECTANDO E ANALISANDO...</span>
                  </div>
                )}
                <div ref={terminalEndRef} />
              </div>
            )}
          </div>

          {/* Action Bar Footer */}
          {step === 'done' && (
            <div className="p-4 border-t border-white/5 bg-zinc-900/20 flex gap-2">
              <button
                onClick={() => setStep('idle')}
                className="flex-1 py-3 border border-white/5 hover:border-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                Voltar
              </button>
              <button
                onClick={handleActionClick}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
              >
                Otimizar Agora
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
