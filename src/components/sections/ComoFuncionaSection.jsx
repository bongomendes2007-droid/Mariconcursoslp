import React from 'react';
import Article, { Em } from '../ui/Article';

const paragrafos = [
  {
    titulo: 'Plano individual',
    descricao:
      'Seu edital, seu tempo, sua realidade. O plano é montado sob medida, não é um cronograma genérico de prateleira.',
  },
  {
    titulo: 'Revisão inteligente',
    descricao:
      'Ciclos de revisão e simulados na plataforma própria, para fixar o que cai e cortar o que não rende.',
  },
  {
    titulo: 'Acompanhamento próximo',
    descricao:
      'Feedback constante da Mari e do time de mentores. Você nunca fica sozinho diante das dúvidas.',
  },
];

export default function ComoFuncionaSection() {
  return (
    <section id="metodo" className="paper-grain py-24 md:py-32">
      <div className="max-w-page mx-auto px-5 md:px-8">
        <Article
          n={7}
          label="Do método"
          title={
            <>
              Nada de fórmula mágica. Só o que <Em>faz passar</Em>.
            </>
          }
        />

        <div className="mt-14 md:mt-20 lg:grid lg:grid-cols-12 lg:gap-8">
          <ol className="lg:col-start-4 lg:col-span-9 grid grid-cols-1 md:grid-cols-3 border-t rule">
            {paragrafos.map((p, i) => (
              <li
                key={p.titulo}
                className={`py-8 md:pt-10 md:pb-4 border-b md:border-b-0 rule ${
                  i > 0 ? 'md:pl-8 md:border-l' : ''
                } ${i < paragrafos.length - 1 ? 'md:pr-8' : ''}`}
              >
                <span className="block font-display italic font-[380] text-[36px] md:text-[52px] leading-none tracking-[-0.03em] text-secondary mb-4 md:mb-10">
                  § {i + 1}º
                </span>
                <h3 className="font-display font-[480] text-[28px] leading-[1.1] tracking-[-0.02em] text-ink mb-3">
                  {p.titulo}
                </h3>
                <p className="text-[15.5px] leading-[1.7] text-ink-soft">{p.descricao}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
