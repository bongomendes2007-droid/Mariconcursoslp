import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import Article, { Em } from '../ui/Article';

const momentos = [
  { ano: '2022', evento: 'Primeiro concurso tentado, sem método, sem direção.' },
  { ano: '2023', evento: 'Descoberta do poder do planejamento estratégico de estudos.' },
  { ano: '2024', evento: 'Aprovação como Auditora do Executivo Federal.' },
  { ano: '2025', evento: 'Início da mentoria. Primeiros alunos aprovados.' },
  { ano: 'Hoje', evento: 'Dezenas de alunos, 11 aprovações, método validado.' },
];

/*
 * Linha do tempo ligada à rolagem (propósito: explicação — a trajetória vira percurso).
 * A linha se preenche com scaleY (só transform), e cada marco "acende" quando a linha
 * passa por ele. O estado só muda quando cruza um marco (≤5 renders no total),
 * nunca por frame. Com reduced-motion: linha cheia e todos os marcos acesos.
 */
function Timeline() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const [active, setActive] = useState(reduce ? momentos.length - 1 : -1);
  const last = momentos.length - 1;

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (reduce) return;
    // marco i acende quando o progresso alcança sua posição relativa na linha
    let idx = -1;
    for (let i = 0; i <= last; i++) if (v >= i / last - 0.015) idx = i;
    setActive(idx);
  });

  return (
    <div ref={ref} className="relative">
      {/* trilho + preenchimento */}
      <div aria-hidden="true" className="absolute top-3 bottom-3 left-[7px] w-px bg-white/15" />
      <motion.div
        aria-hidden="true"
        className="absolute top-3 bottom-3 left-[7px] w-px bg-accent origin-top"
        style={{ scaleY: reduce ? 1 : scrollYProgress }}
      />
      <ol className="flex flex-col gap-9">
        {momentos.map((m, i) => {
          const on = i <= active;
          const isLast = i === last;
          return (
            <li key={m.ano} className="relative pl-10" data-on={on}>
              <span
                aria-hidden="true"
                className="timeline-dot absolute left-0 top-[7px] w-[15px] h-[15px] rounded-full border"
              />
              <div className="timeline-year font-mono text-[13px] tracking-[0.08em] uppercase mb-1.5">
                {m.ano}
              </div>
              <p
                className={`timeline-text font-display text-[21px] md:text-[23px] leading-[1.3] tracking-[-0.01em] ${
                  isLast ? 'font-[520]' : ''
                }`}
              >
                {m.evento}
              </p>
            </li>
          );
        })}
      </ol>
      <style>{`
        .timeline-dot { background:#101C42; border-color: rgba(255,255,255,0.25);
          transition: background-color 250ms ease, border-color 250ms ease, box-shadow 250ms ease; }
        .timeline-year { color: rgba(255,255,255,0.4); transition: color 250ms ease; }
        .timeline-text { color: rgba(255,255,255,0.45); transition: color 250ms ease; }
        [data-on="true"] .timeline-dot { background:#76D7E3; border-color:#76D7E3; box-shadow: 0 0 0 5px rgba(118,215,227,0.15); }
        [data-on="true"] .timeline-year { color:#76D7E3; }
        [data-on="true"] .timeline-text { color:#fff; }
      `}</style>
    </div>
  );
}

export default function HistoriaSection() {
  return (
    <section
      id="historia"
      className="relative py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #13205A 0%, #101C42 100%)' }}
    >
      <div className="max-w-page mx-auto px-5 md:px-8">
        <Article
          n={6}
          tone="dark"
          label="Da trajetória"
          title={
            <>
              Uma história construída com <Em tone="dark">esforço real</Em>
            </>
          }
        />

        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8">
          <div className="lg:col-start-4 lg:col-span-4">
            <Timeline />
          </div>

          <div className="lg:col-start-8 lg:col-span-5 text-[16.5px] leading-[1.8] text-white/70 space-y-6">
            <p className="font-display text-[22px] leading-[1.45] text-white/90 tracking-[-0.01em]">
              Eu sei o que é sentar para estudar com vontade, mas sem saber por onde começar. Eu sei
              o que é passar anos tentando e não ver resultado.
            </p>
            <p>
              Não foi um caminho fácil. Foram anos de tentativas, frustração, recomeços. E foi nessa
              jornada que entendi:{' '}
              <strong className="text-white font-semibold">
                o problema raramente é falta de esforço. É falta de método.
              </strong>
            </p>
            <p>
              Quando finalmente entendi como funcionava a construção de uma aprovação, com
              diagnóstico, estratégia e acompanhamento, o resultado veio. E com ele, a vontade de
              ajudar outros a encurtar esse caminho.
            </p>

            <blockquote className="border-l-2 border-accent pl-6 my-10">
              <p className="font-display italic font-[380] text-[30px] md:text-[34px] leading-[1.2] tracking-[-0.02em] text-white">
                “Aprovação não é sorte. É processo. E processo pode ser ensinado.”
              </p>
            </blockquote>

            <p>
              O MariConcursos nasceu disso. De uma trajetória vivida na pele, transformada em
              método para que você não precise percorrer o mesmo caminho sozinho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
