import React from 'react';

/**
 * Cabeçalho de seção no formato de "artigo de edital".
 * É o sistema estrutural da página: cada capítulo é um Art. numerado,
 * com filete no topo, coluna de índice à esquerda e título à direita.
 *
 * Props:
 *  - n:      número do artigo (1, 2, 3…) → "Art. 1º"
 *  - label:  rubrica curta do artigo ("Dos resultados")
 *  - title:  título (node)
 *  - intro:  parágrafo opcional sob o título
 *  - tone:   'light' (papel) | 'dark' (azul-marinho)
 *  - aside:  conteúdo opcional na coluna do índice, abaixo da rubrica
 */
export function ordinal(n) {
  return `${n}º`;
}

export default function Article({ n, label, title, intro, tone = 'light', aside, className = '' }) {
  const dark = tone === 'dark';
  return (
    <header
      className={`grid grid-cols-1 lg:grid-cols-12 gap-y-6 gap-x-8 border-t pt-6 md:pt-8 ${
        dark ? 'rule-inverse' : 'rule'
      } ${className}`}
    >
      <div className="lg:col-span-3 flex lg:flex-col gap-x-4 gap-y-2 items-baseline">
        <span
          className={`font-mono text-[12.5px] tracking-[0.04em] ${dark ? 'text-accent' : 'text-secondary'}`}
        >
          Art. {ordinal(n)}
        </span>
        <span
          className={`font-mono text-[12.5px] uppercase tracking-[0.12em] ${
            dark ? 'text-white/55' : 'text-ink-faint'
          }`}
        >
          {label}
        </span>
        {aside}
      </div>
      <div className="lg:col-span-9">
        <h2
          className={`font-display font-[480] text-[40px] sm:text-[52px] lg:text-[64px] ${
            dark ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`mt-6 max-w-[56ch] text-[17px] leading-[1.7] ${
              dark ? 'text-white/70' : 'text-ink-soft'
            }`}
          >
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}

/** Palavra de destaque no título: itálico da Fraunces, mais leve. */
export function Em({ children, tone = 'light' }) {
  return (
    <em
      className={`font-display italic font-[380] ${tone === 'dark' ? 'text-accent' : 'text-secondary'}`}
    >
      {children}
    </em>
  );
}
