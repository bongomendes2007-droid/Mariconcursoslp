import React from 'react';
import { motion } from 'framer-motion';
import { Check, BarChart3, Users } from 'lucide-react';

const pilares = [
  {
    icon: Check,
    titulo: 'Plano individual',
    descricao:
      'Seu edital, seu tempo, sua realidade. O plano é montado sob medida — não é um cronograma genérico de prateleira.',
  },
  {
    icon: BarChart3,
    titulo: 'Revisão inteligente',
    descricao:
      'Ciclos de revisão e simulados na plataforma própria, para fixar o que cai e cortar o que não rende.',
  },
  {
    icon: Users,
    titulo: 'Acompanhamento próximo',
    descricao:
      'Feedback constante da Mari e do time de mentores. Você nunca fica sozinho diante das dúvidas.',
  },
];

export default function ComoFuncionaSection() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-background py-28 px-5 md:px-6">
      {/* palavra gigante de fundo */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 -right-9 z-0 font-heading font-extrabold pointer-events-none select-none hidden md:block"
        style={{
          fontSize: '176px',
          lineHeight: 0.9,
          letterSpacing: '-6px',
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(93,139,255,0.09)',
        }}
      >
        método
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-[30px] h-0.5 bg-secondary" />
            <span className="text-secondary text-[12.5px] font-bold tracking-[0.2em] uppercase">
              Por que o método funciona
            </span>
            <span className="w-[30px] h-0.5 bg-secondary" />
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-[48px] leading-[1.06] tracking-[-0.02em] text-ink">
            Nada de fórmula mágica.
            <br />
            Só o que <span className="font-serif italic font-medium text-secondary">faz passar</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
          {pilares.map((p, i) => (
            <motion.div
              key={p.titulo}
              className="relative bg-white rounded-card p-9 overflow-hidden"
              style={{ boxShadow: '0 20px 50px rgba(17,29,68,0.08)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="absolute -top-3.5 -right-3.5 w-[84px] h-[84px] rounded-3xl z-0 pointer-events-none"
                style={{ background: '#76D7E3', opacity: 0.55 }}
              />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-[22px] text-accent">
                  <p.icon className="w-[26px] h-[26px]" strokeWidth={1.7} />
                </div>
                <h3 className="font-heading font-bold text-xl text-ink mb-2.5">{p.titulo}</h3>
                <p className="text-[14.5px] leading-[1.7] text-ink-soft">{p.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
