import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

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
      className="relative overflow-hidden py-24 px-5 md:px-6"
      style={{ background: 'radial-gradient(120% 100% at 30% 0%, #24356F 0%, #16224C 52%, #0F1A3E 100%)' }}
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-[30px] h-0.5 bg-accent" />
            <span className="text-accent text-[12.5px] font-bold tracking-[0.2em] uppercase">
              A diferença é o método
            </span>
            <span className="w-[30px] h-0.5 bg-accent" />
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-[50px] leading-[1.05] tracking-[-0.02em] text-white">
            O que muda com um{' '}
            <span className="font-serif italic font-medium text-accent">método</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px]">
          <motion.div
            className="rounded-card p-9"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading font-bold text-xl text-white/85 mb-[26px]">Estudando por conta própria</p>
            <div className="flex flex-col gap-[18px]">
              {sem.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3.5"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-white/10 flex items-center justify-center text-white/55">
                    <X className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span className="text-[14.5px] leading-[1.6] text-white/60">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-card p-9"
            style={{
              background: 'linear-gradient(160deg, #2E4A9E 0%, #1D2B63 100%)',
              boxShadow: '0 30px 70px rgba(0,0,0,0.35), 0 0 60px rgba(118,215,227,0.20)',
              border: '1px solid rgba(118,215,227,0.45)',
            }}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="absolute -top-3 right-6 bg-accent text-primary font-heading font-bold text-[11px] tracking-wider uppercase px-3.5 py-1.5 rounded-pill"
              style={{ color: '#12224a' }}
            >
              Recomendado
            </span>
            <p className="font-heading font-bold text-[21px] text-white mb-[26px]">Com o método MariConcursos</p>
            <div className="flex flex-col gap-[18px]">
              {com.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3.5"
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <span className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-accent flex items-center justify-center text-primary">
                    <Check className="w-3 h-3" strokeWidth={3.5} />
                  </span>
                  <span className="text-[14.5px] leading-[1.6] text-white/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
