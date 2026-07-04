import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pontos = [
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

export default function ParaQuemSection() {
  return (
    <section className="relative bg-background overflow-hidden py-24 px-5 md:px-6">
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-[30px] h-0.5 bg-secondary" />
            <span className="text-secondary text-[12.5px] font-bold tracking-[0.2em] uppercase">
              Você se identifica?
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-[48px] leading-[1.06] tracking-[-0.02em] text-ink mb-[22px]">
            Se um desses é o seu{' '}
            <span className="font-serif italic font-medium text-secondary">momento hoje</span>
          </h2>
          <p className="text-[16.5px] leading-[1.75] text-ink-soft max-w-sm">
            Antes de falar de método, veja onde dói. Se você marca pelo menos um desses pontos, a
            mentoria foi desenhada exatamente para o seu momento.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {pontos.map((p, i) => (
            <motion.div
              key={p.titulo}
              className="flex items-start gap-4 bg-white rounded-[18px] px-6 py-5"
              style={{ boxShadow: '0 12px 34px rgba(17,29,68,0.06)' }}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <span className="flex-shrink-0 w-[30px] h-[30px] rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Check className="w-4 h-4" strokeWidth={3} />
              </span>
              <div>
                <div className="font-heading font-bold text-base text-ink mb-0.5">{p.titulo}</div>
                <div className="text-sm leading-[1.6] text-ink-soft">{p.texto}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
