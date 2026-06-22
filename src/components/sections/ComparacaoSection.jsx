import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const sem = [
'Estuda muito, progride pouco',
'Não sabe por onde começar',
'Sem métricas de desempenho',
'Dúvidas acumulam sem resposta',
'Cronograma genérico que não respeita sua rotina',
'Conteúdo desorganizado e sem foco',
'Desistência por falta de direção'];


const com = [
'Cada hora estudada gera resultado mensurável',
'Diagnóstico preciso do ponto de partida',
'Acompanhamento semanal com dados reais',
'Suporte direto e personalizado',
'Plano adaptado à sua realidade e edital',
'Material curado por prioridade e relevância',
'Motivação sustentada por progresso visível'];


export default function ComparacaoSection() {
  return (
    <section className="py-16 md:py-40" style={{ background: '#0A0A0A' }}>
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        <motion.div className="text-center mb-10 md:mb-20" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-[-0.02em]">Com ou sem método.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="border border-[#1E1E1E] rounded-2xl p-8" style={{ background: '#111111' }}>
            <p className="text-[#3F3F46] font-bold text-xs tracking-widest uppercase mb-7">Sem método estruturado</p>
            <div className="space-y-4">
              {sem.map((item, i) =>
              <motion.div key={i} className="flex items-start gap-3" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }}>
                  <div className="w-5 h-5 rounded-full border border-[#262626] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-2.5 h-2.5 text-[#3F3F46]" />
                  </div>
                  <span className="text-[#52525B] text-sm leading-snug">{item}</span>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="border rounded-2xl p-5 md:p-8" style={{ background: '#151515', borderColor: '#4F46E5', boxShadow: '0 0 40px rgba(79,70,229,0.1)' }}>
            <p className="font-bold text-xs tracking-widest uppercase mb-5 md:mb-7" style={{ background: 'linear-gradient(90deg, #4F46E5, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Com MariConcursos</p>
            <div className="space-y-4">
              {com.map((item, i) =>
              <motion.div key={i} className="flex items-start gap-3" initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }}>
                  <div className="w-5 h-5 rounded-full border border-[#4F46E5] flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(79,70,229,0.1)' }}>
                    <Check className="w-2.5 h-2.5 text-[#4F46E5]" />
                  </div>
                  <span className="text-[#A1A1AA] text-sm leading-snug">{item}</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
