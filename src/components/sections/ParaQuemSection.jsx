import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const paraQuemE = [
'Quer aprovação e está disposto a seguir um processo',
'Sente que estuda muito mas não evolui como deveria',
'Precisa de um plano claro e alguém para te guiar',
'Valoriza acompanhamento real, não só material',
'Entende que aprovação é construção, não sorte'];


const paraQuemNao = [
'Busca fórmulas mágicas ou garantia instantânea',
'Não está disposto a se comprometer com o processo',
'Prefere estudar totalmente sozinho sem suporte',
'Quer apenas mais material genérico sem direção',
'Não tem tempo mínimo para se dedicar à jornada'];


export default function ParaQuemSection() {
  return (
    <section className="py-16 md:py-40" style={{ background: '#0A0A0A' }}>
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        <motion.div className="mb-10 md:mb-20" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-[#52525B] text-xs font-medium tracking-[0.2em] uppercase mb-5">Alinhamento</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-[-0.02em]">Esse método é para você?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div className="border rounded-2xl p-5 md:p-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ background: '#151515', borderColor: '#4F46E5', boxShadow: '0 0 40px rgba(79,70,229,0.08)' }}>
            <p className="font-bold text-xs tracking-widest uppercase mb-5 md:mb-7" style={{ background: 'linear-gradient(90deg, #4F46E5, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>É para você se você</p>
            <div className="space-y-4">
              {paraQuemE.map((item, i) =>
              <motion.div key={i} className="flex items-start gap-3" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}>
                  <div className="w-5 h-5 rounded-full border border-[#4F46E5] flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(79,70,229,0.1)' }}>
                    <Check className="w-2.5 h-2.5 text-[#4F46E5]" />
                  </div>
                  <span className="text-[#A1A1AA] text-sm leading-snug">{item}</span>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div className="border border-[#1E1E1E] rounded-2xl p-5 md:p-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ background: '#111111' }}>
            <p className="text-[#3F3F46] mb-5 md:mb-7 text-xs font-bold uppercase tracking-widest">Não é para você se você</p>
            <div className="space-y-4">
              {paraQuemNao.map((item, i) =>
              <motion.div key={i} className="flex items-start gap-3" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}>
                  <div className="w-5 h-5 rounded-full border border-[#262626] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-2.5 h-2.5 text-[#3F3F46]" />
                  </div>
                  <span className="text-[#3F3F46] text-sm leading-snug">{item}</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
