import React from 'react';
import { Minus, Check } from 'lucide-react';
import Article, { Em } from '../ui/Article';

const sem = [
  'Material genérico, sem prioridade do que mais cai',
  'Cronograma de prateleira, igual para todo mundo',
  'Revisão solta, sem ciclo nem controle',
  'Sozinho quando bate a dúvida ou a desmotivação',
];

const com = [
  'Direção clara: sabe o que estudar e por quê',
  'Plano individual que cabe na sua rotina real',
  'Revisão inteligente que fixa o que mais cai',
  'Acompanhamento próximo do começo à nomeação',
];

export default function ComparacaoSection() {
  return (
    <section
      className="relative py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #16224C 0%, #101C42 100%)' }}
    >
      <div className="max-w-page mx-auto px-5 md:px-8">
        <Article
          n={8}
          tone="dark"
          label="Do que muda"
          title={
            <>
              O que muda com um <Em tone="dark">método</Em>
            </>
          }
        />

        <div className="mt-14 md:mt-20 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-start-4 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Sem método — recua: sem fundo, texto apagado */}
            <div className="md:pr-6 py-2">
              <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-white/45 mb-6">
                Estudando por conta própria
              </p>
              <ul className="border-t rule-inverse">
                {sem.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-4 border-b rule-inverse">
                    <Minus className="w-4 h-4 mt-1 shrink-0 text-white/35" strokeWidth={2} />
                    <span className="text-[15.5px] leading-[1.6] text-white/50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Com método — avança: superfície, filete ciano, carimbo */}
            <div
              className="relative rounded-card p-7 md:p-9"
              style={{
                background: 'linear-gradient(160deg, #2C4596 0%, #1C2A62 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(118,215,227,0.35), 0 30px 60px -30px rgba(0,0,0,0.6)',
              }}
            >
              <span
                aria-hidden="true"
                className="absolute -top-4 right-6 rotate-[-4deg] font-mono text-[11px] uppercase tracking-[0.14em] text-accent px-3 py-1.5 rounded-[6px] bg-[#101C42]"
                style={{ boxShadow: 'inset 0 0 0 1.5px #76D7E3' }}
              >
                Recomendado
              </span>
              <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent mb-6">
                Com o método MariConcursos
              </p>
              <ul className="border-t border-white/15">
                {com.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-4 border-b border-white/15">
                    <Check className="w-4 h-4 mt-1 shrink-0 text-accent" strokeWidth={2.5} />
                    <span className="text-[15.5px] leading-[1.6] text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
