import React from 'react';
import { motion } from 'framer-motion';

const momentos = [
{ ano: '2022', evento: 'Primeiro concurso tentado, sem método, sem direção.' },
{ ano: '2023', evento: 'Descoberta do poder do planejamento estratégico de estudos.' },
{ ano: '2024', evento: 'Aprovação como Auditora do Executivo Federal.' },
{ ano: '2025', evento: 'Início da mentoria. Primeiros alunos aprovados.' },
{ ano: 'Hoje', evento: 'Mais de DEZENAS de alunos, 11 aprovações, método validado.' }];


export default function HistoriaSection() {
  return (
    <section className="py-16 md:py-40" style={{ background: '#111111' }}>
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        <motion.div className="text-center mb-12 md:mb-20" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-[#52525B] text-xs font-medium tracking-[0.2em] uppercase mb-5">A Jornada</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-[-0.02em]">
            Uma história construída com{' '}
            <span style={{ background: 'linear-gradient(90deg, #4F46E5, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              esforço real.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#1E1E1E]" />
            <div className="space-y-8">
              {momentos.map((m, i) =>
              <motion.div key={i} className="flex items-start gap-5" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                  <div className="w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 z-10"
                style={{ background: '#111111', borderColor: i === momentos.length - 1 ? '#4F46E5' : '#262626', boxShadow: i === momentos.length - 1 ? '0 0 12px rgba(79,70,229,0.4)' : 'none' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: i === momentos.length - 1 ? 'linear-gradient(135deg, #4F46E5, #22D3EE)' : '#262626' }} />
                  </div>
                  <div>
                    <span className="text-[#52525B] text-[10px] font-mono font-bold tracking-widest uppercase block mb-1">{m.ano}</span>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">{m.evento}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 text-[#A1A1AA] text-sm leading-[1.75]">
            <p>Eu sei o que é sentar para estudar com vontade, mas sem saber por onde começar. Eu sei o que é passar anos tentando e não ver resultado.</p>
            <p>Não foi um caminho fácil. Foram anos de tentativas, frustração, recomeços. E foi nessa jornada que entendi: <strong className="text-white font-semibold">o problema raramente é falta de esforço. É falta de método.</strong></p>
            <p>Quando finalmente entendi como funcionava a construção de uma aprovação, com diagnóstico, estratégia e acompanhamento, o resultado veio. E com ele, a vontade de ajudar outros a encurtar esse caminho.</p>
            <p className="border-l-2 pl-5 text-white italic font-medium" style={{ borderColor: '#4F46E5' }}>"Aprovação não é sorte. É processo. E processo pode ser ensinado."</p>
            <p>O MariConcursos nasceu disso. De uma trajetória vivida na pele, transformada em método para que você não precise percorrer o mesmo caminho sozinho.</p>
          </motion.div>
        </div>
      </div>
    </section>);

}
