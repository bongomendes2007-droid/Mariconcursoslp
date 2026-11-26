import React from 'react';
import Article, { Em } from '../ui/Article';
import assets from '../../data/assets';

const depoimentos = [
  {
    nome: 'Andressa',
    tag: 'Aluna da Mentoria MC',
    foto: assets.aprovados.andressa,
    pos: '50% 30%',
    texto:
      'Mari, que benção ter te encontrado. Você não me deixa desistir, me fez criar constância e até sentir falta de estudar. Meu crescimento é nítido e devo isso a você. Confio de olhos fechados.',
  },
  {
    nome: 'Hannah Miranda',
    tag: 'Aluna da Mentoria MC',
    foto: assets.aprovados.hannah,
    pos: '50% 25%',
    texto:
      'A Mari me fez acreditar que posso mais do que eu imaginava. Com a plataforma fica fácil administrar metas e horários, e ela está sempre disponível, adaptando os estudos à realidade de cada aluno.',
  },
  {
    nome: 'Maria Beatriz',
    tag: 'Aluna da Mentoria MC',
    foto: assets.aprovados.mariaBeatriz,
    pos: '50% 62%',
    texto:
      'A mentoria foi um divisor de águas. Aprendi o que é estudar com organização e excelência. Antes eu não tinha direção; hoje sigo um método estruturado e eficiente. Recomendo fortemente a Mentoria MC.',
  },
  {
    nome: 'Ricardo',
    tag: 'Aluno da Mentoria MC',
    foto: assets.aprovados.ricardo,
    pos: '50% 22%',
    texto:
      'A mentoria da Mari foi como uma luz no fim do túnel. Eu me via perdido, sem saber por onde começar. Com paciência e profissionalismo ela me guiou até o meu objetivo. Me senti muito acolhido.',
  },
];

export default function DepoimentosReaisSection() {
  return (
    <section id="depoimentos" className="paper-grain pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="max-w-page mx-auto px-5 md:px-8">
        <Article
          n={1}
          label="Dos resultados"
          title={
            <>
              Relatos de quem <Em>viveu</Em> o método
            </>
          }
        />
      </div>

      {/* Mobile: trilho horizontal com snap. Desktop: grade de 4. Sem animação de entrada:
          é conteúdo para ler, não para assistir. */}
      <ul
        className="mt-12 md:mt-16 flex lg:grid lg:grid-cols-4 gap-5 lg:gap-7 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-px-5 md:scroll-px-8 px-5 md:px-8 lg:max-w-page lg:mx-auto pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Depoimentos de alunos"
      >
        {depoimentos.map((d) => (
          <li key={d.nome} className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-auto flex flex-col">
            <figure className="flex flex-col h-full">
              <div className="relative aspect-[4/5] rounded-media overflow-hidden bg-primary">
                <img
                  src={d.foto}
                  alt={d.nome}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: d.pos }}
                  loading="lazy"
                />
              </div>
              <blockquote className="mt-5 flex-1 border-t rule pt-4">
                <span aria-hidden="true" className="block font-display italic text-[44px] leading-[0.6] text-secondary h-5">
                  &ldquo;
                </span>
                <p className="text-[15px] leading-[1.65] text-ink-soft">{d.texto}</p>
              </blockquote>
              <figcaption className="mt-5 flex flex-col gap-1">
                <span className="font-heading font-semibold text-[15.5px] text-ink">{d.nome}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">{d.tag}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
