import React, { useId, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Article, { Em } from '../ui/Article';

const faqs = [
  {
    pergunta: 'Preciso já estar estudando para entrar?',
    resposta:
      'Não. A mentoria atende desde quem está começando do zero até quem já estuda há anos. O plano é montado a partir do seu ponto de partida.',
  },
  {
    pergunta: 'Serve para qualquer concurso?',
    resposta:
      'Sim. O método é aplicável a TRF, tribunais, carreiras policiais, TRT e demais carreiras. O plano se adapta ao edital que você escolher focar.',
  },
  {
    pergunta: 'Tenho pouco tempo para estudar. Funciona?',
    resposta:
      'Funciona, e foi pensado para isso. O plano é dimensionado para a sua disponibilidade real, priorizando o que mais rende dentro do tempo que você tem.',
  },
  {
    pergunta: 'Como funciona o acompanhamento?',
    resposta:
      'Você tem acesso à plataforma própria com metas, revisões e simulados, além do acompanhamento próximo da Mari e do time de mentores, com feedback constante.',
  },
  {
    pergunta: 'Como faço para começar?',
    resposta:
      'É só falar com a Mari pelo botão abaixo. Vocês conversam sobre o seu momento e ela indica o melhor caminho para a sua preparação.',
  },
];

// Abre em 260ms, fecha em 200ms (saída mais rápida que a entrada).
const EASE = [0.23, 1, 0.32, 1];

function FAQItem({ item, index, isOpen, onToggle }) {
  const id = useId();
  const reduce = useReducedMotion();
  return (
    <li className="border-b rule">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={id}
          className="faq-q w-full flex items-baseline gap-5 md:gap-8 py-6 md:py-7 text-left"
        >
          <span className="font-mono text-[12px] text-ink-faint w-8 shrink-0 tabular">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="flex-1 font-display font-[460] text-[21px] md:text-[25px] leading-[1.25] tracking-[-0.015em] text-ink">
            {item.pergunta}
          </span>
          <span
            aria-hidden="true"
            className="faq-icon relative w-4 h-4 shrink-0 self-center text-secondary"
            data-open={isOpen}
          >
            <span className="absolute left-0 top-1/2 w-4 h-[1.5px] -mt-px bg-current" />
            <span className="faq-icon-v absolute left-1/2 top-0 h-4 w-[1.5px] -ml-px bg-current" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, transition: { duration: reduce ? 0 : 0.26, ease: EASE } }}
            exit={{ height: 0, opacity: 0, transition: { duration: reduce ? 0 : 0.2, ease: EASE } }}
            className="overflow-hidden"
          >
            <p className="pl-[52px] md:pl-[64px] pr-10 pb-7 max-w-[62ch] text-[16px] leading-[1.7] text-ink-soft">
              {item.resposta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="paper-grain py-24 md:py-32">
      <div className="max-w-page mx-auto px-5 md:px-8">
        <Article
          n={9}
          label="Das disposições finais"
          title={
            <>
              Perguntas <Em>frequentes</Em>
            </>
          }
        />

        <div className="mt-12 md:mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
          <ul className="lg:col-start-4 lg:col-span-9 border-t rule">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.pergunta}
                item={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .faq-icon-v { transition: transform 200ms var(--ease-out); }
        .faq-icon[data-open="true"] .faq-icon-v { transform: scaleY(0); }
        .faq-q { -webkit-tap-highlight-color: transparent; }
        @media (hover: hover) and (pointer: fine) {
          .faq-q > span:nth-child(2) { transition: color 200ms ease; }
          .faq-q:hover > span:nth-child(2) { color: #4F7BF0; }
        }
      `}</style>
    </section>
  );
}
