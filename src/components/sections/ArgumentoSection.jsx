import React from 'react';
import { motion } from 'framer-motion';

const argumentos = [
{ numero: '01', titulo: 'Diagnóstico real gera plano real', texto: 'A maioria estuda com material genérico. O método começa mapeando exatamente onde você está, o que o edital exige e qual a lacuna entre os dois. Esse diagnóstico é o que torna o plano eficaz.' },
{ numero: '02', titulo: 'Consistência bate intensidade', texto: 'Estudar 4 horas focadas por dia supera 10 horas dispersas. O método cria rotinas sustentáveis, não maratonas que levam ao esgotamento. Aprovação é construída com constância, não sacrifício.' },
{ numero: '03', titulo: 'Ajuste de rota é o diferencial', texto: 'O plano que funciona na semana 1 pode não ser o ideal na semana 8. O acompanhamento semanal garante que você nunca fique parado em algo que não está evoluindo; ele acelera o que já funciona.' },
{ numero: '04', titulo: 'Método sem suporte é manual sem professor', texto: 'Você pode ter o melhor material do mundo. Sem alguém para interpretar seus resultados, responder dúvidas e te manter na direção certa, o material é apenas informação, não transformação.' }];


export default function ArgumentoSection() {
  return (
    <section className="py-16 md:py-40" style={{ background: '#111111' }}>
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        <motion.div className="mb-10 md:mb-20" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-[-0.02em] max-w-2xl">Por que o método funciona.</h2>
        </motion.div>

        <div className="space-y-3">
          {argumentos.map((a, i) =>
          <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(79,70,229,0.08), 0 0 0 1px rgba(79,70,229,0.15)' }}
          className="group grid grid-cols-[auto_1fr] gap-4 md:gap-6 p-5 md:p-9 border border-[#262626] hover:border-[#4F46E5] rounded-2xl transition-all duration-300 cursor-default"
          style={{ background: '#151515' }}>
              <span className="text-slate-100 pt-1 text-xs font-mono group-hover:text-[#4F46E5] transition-colors">{a.numero}</span>
              <div>
                <h3 className="text-white mb-2 text-sm md:text-base font-bold">{a.titulo}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">{a.texto}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
