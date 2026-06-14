import React from 'react';
import { Icon } from '@iconify/react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  delay: string;
}

const track1: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "Líder de Growth Marketing",
    content: "Desde que lançamos nossa nova landing page com a Sharkode, nossa taxa de conversão dobrou e o site carrega de forma instantânea em qualquer celular.",
    avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25df7579-09f7-4c8c-bb39-18a974a980d0_320w.webp",
    delay: "0s"
  },
  {
    name: "Priya Patel",
    role: "Fundadora & CEO",
    content: "A automação de agentes de IA integrada ao n8n economizou dezenas de horas manuais do nosso time comercial. A entrega foi impecável e ágil.",
    avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9f2a6f7-f473-484f-9db4-504cae45afd1_320w.webp",
    delay: "1.2s"
  },
  {
    name: "Marcus Johnson",
    role: "Diretor de Operações",
    content: "O design moderno e a velocidade de carregamento do nosso e-commerce superaram todas as expectativas. A Sharkode realmente entrega alta performance.",
    avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b202409f-816e-4451-8ac9-bd0b04439d1b_320w.webp",
    delay: "2.4s"
  },
  {
    name: "Sarah Chen",
    role: "Diretora de Tecnologia",
    content: "Eles dominam do frontend ao backend. A infraestrutura em nuvem integrada garantiu estabilidade e segurança máxima para nosso sistema de vendas.",
    avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8322831-e2ba-4007-9960-8e7e82b00480_320w.webp",
    delay: "3.6s"
  },
  {
    name: "David Kim",
    role: "Gerente de Produto",
    content: "O handoff foi extremamente organizado, com documentação clara. Hoje temos autonomia total sobre nossa plataforma, sem travas técnicas.",
    avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd0dc97c-a094-49ac-8265-f47f1efa3939_320w.webp",
    delay: "4.8s"
  }
];

const track2: Testimonial[] = [
  {
    name: "Elena Rodriguez",
    role: "Diretora Comercial",
    content: "A automação com agentes de IA gerencia leads e faz a entrega imediata dos cursos sem falhas. Reduzimos nosso custo de aquisição significativamente.",
    avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23c92345-65be-44d2-b48a-3073db88554d_320w.webp",
    delay: "0.5s"
  },
  {
    name: "James Wilson",
    role: "Empreendedor Digital",
    content: "Minha landing page estratégica foi ao ar em duas semanas. Excelente design, código limpo e o suporte pós-lançamento da equipe é excelente.",
    avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4ee565a-2084-483b-8358-9fc06da5ee99_320w.jpg",
    delay: "1.7s"
  },
  {
    name: "Maya Thompson",
    role: "Head de Marketing",
    content: "O simulador de ROI de IA no site deles nos deu clareza do valor da automação. O projeto superou todas as metas traçadas no plano de ataque.",
    avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b9d8c98-705c-47b5-b1e4-c379f48796be_320w.webp",
    delay: "2.9s"
  },
  {
    name: "Thomas Weber",
    role: "Líder Técnico",
    content: "A otimização SEO e a performance extrema garantiram que nossa startup alcançasse as primeiras posições do Google rapidamente. Excelente parceria.",
    avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce35a1f3-3bf2-436d-a76f-d9e534612f5e_320w.jpg",
    delay: "4.1s"
  },
  {
    name: "Nina Desai",
    role: "Diretora de Operações",
    content: "Um estúdio que realmente entende as dores comerciais do cliente. Projetos fluidos, eficientes e escaláveis. Altamente recomendados.",
    avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fac4589-f18c-4e9a-b68d-c56fb2ab4a91_320w.webp",
    delay: "5.3s"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="z-10 w-full max-w-6xl mb-24 relative mx-auto" id="testimonials">
      <div className="text-center mb-16 relative z-10 px-6">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/[0.02] mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            Depoimentos
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4 uppercase font-manrope">
          Quem Confia na Sharkode
        </h2>

        <p className="text-sm md:text-base font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed font-sans">
          Marcas e líderes de tecnologia que escalaram seus resultados comerciais e eficiência operacional com nossas landing pages, sistemas e automações de IA.
        </p>
      </div>

      <div className="relative w-full overflow-hidden scroll-group py-4"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}>
        {/* Track 1 */}
        <div className="flex gap-6 mb-6 w-max animate-scroll">
          {[...track1, ...track1].map((item, index) => (
            <div
              key={`t1-${index}`}
              className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-blue-900/10 bg-zinc-950/40 backdrop-blur-xl p-8 transition-all duration-500 rounded-3xl relative flex flex-col justify-between group/card glass-panel"
              style={{ '--delay': item.delay } as React.CSSProperties}>
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none">
              </div>
              <div className="relative z-10 flex-grow">
                <div className="mb-6 flex gap-1 opacity-80">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="solar:star-bold" className="text-blue-400 text-sm" />
                  ))}
                </div>
                <p className="text-sm font-light text-zinc-300 leading-relaxed mb-8 font-sans">
                  "{item.content}"
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full border border-blue-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500"
                />
                <div>
                  <h4 className="text-sm font-semibold tracking-tight text-white font-manrope">
                    {item.name}
                  </h4>
                  <p className="text-xs font-mono text-zinc-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Track 2 */}
        <div className="flex gap-6 w-max animate-scroll-reverse" style={{ marginLeft: '-200px' }}>
          {[...track2, ...track2].map((item, index) => (
            <div
              key={`t2-${index}`}
              className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-blue-900/10 bg-zinc-950/40 backdrop-blur-xl p-8 transition-all duration-500 rounded-3xl relative flex flex-col justify-between group/card glass-panel"
              style={{ '--delay': item.delay } as React.CSSProperties}>
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none">
              </div>
              <div className="relative z-10 flex-grow">
                <div className="mb-6 flex gap-1 opacity-80">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="solar:star-bold" className="text-blue-400 text-sm" />
                  ))}
                </div>
                <p className="text-sm font-light text-zinc-300 leading-relaxed mb-8 font-sans">
                  "{item.content}"
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full border border-blue-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500"
                />
                <div>
                  <h4 className="text-sm font-semibold tracking-tight text-white font-manrope">
                    {item.name}
                  </h4>
                  <p className="text-xs font-mono text-zinc-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
