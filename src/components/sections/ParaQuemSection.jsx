import React from 'react';
import Article, { Em } from '../ui/Article';

// Incisos (I, II, III, IV) — são dores, não benefícios: por isso não usam ícone de ✓.
const incisos = [
  {
    titulo: 'Estuda muito e não vê resultado',
    texto: 'Você se dedica, mas sente que corre em círculos e não sai do lugar.',
  },
  {
    titulo: 'Se perde sem um plano claro',
    texto: 'Tem muito conteúdo, muito edital, e falta uma direção do que fazer primeiro.',
  },
  {
    titulo: 'Já reprovou e quer virar o jogo',
    texto: 'Passou perto, travou na reta final e precisa ajustar a estratégia.',
  },
  {
    titulo: 'Concilia estudo com trabalho',
    texto: 'Tem pouco tempo e precisa render de verdade com cada hora disponível.',
  },
];

const romanos = ['I', 'II', 'III', 'IV'];

export default function ParaQuemSection() {
  return (
    <section className="paper-grain py-24 md:py-32">
      <div className="max-w-page mx-auto px-5 md:px-8">
        <Article
          n={5}
          label="Do público"
          title={
            <>
              Se um desses é o seu <Em>momento hoje</Em>
            </>
          }
          intro="Antes de falar de método, veja onde dói. Se você se reconhece em pelo menos um destes incisos, a mentoria foi desenhada exatamente para o seu momento."
        />

        <div className="mt-14 lg:grid lg:grid-cols-12 lg:gap-8">
          <ol className="lg:col-start-4 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 border-t rule">
            {incisos.map((p, i) => (
              <li
                key={p.titulo}
                className={`flex gap-6 py-7 md:py-9 border-b rule ${
                  i % 2 === 0 ? 'md:pr-10 md:border-r' : 'md:pl-10'
                }`}
              >
                <span className="font-display italic text-[30px] leading-none text-secondary w-12 shrink-0 tabular">
                  {romanos[i]}
                </span>
                <div>
                  <h3 className="font-display font-[480] text-[23px] md:text-[26px] leading-[1.15] tracking-[-0.02em] text-ink mb-2">
                    {p.titulo}
                  </h3>
                  <p className="text-[15.5px] leading-[1.65] text-ink-soft">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
