import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Zap, LineChart } from 'lucide-react';

const passos = [
{ icon: Search, numero: '01', titulo: 'Diagnóstico', descricao: 'Mapeamos seu ponto de partida, concurso-alvo e lacunas de conhecimento para montar um plano preciso.' },
{ icon: Map, numero: '02', titulo: 'Estratégia', descricao: 'Criamos um plano personalizado com prioridades claras, metas semanais e cronograma realista.' },
{ icon: Zap, numero: '03', titulo: 'Execução', descricao: 'Materiais curados, simulados estratégicos e rotinas de estudo para que você avance com consistência.' },
{ icon: LineChart, numero: '04', titulo: 'Acompanhamento', descricao: 'Monitoramento semanal com ajustes de rota e feedback direto para manter a evolução constante.' }];


export default function ComoFuncionaSection() {
  return (
    <section className="py-16 md:py-40" style={{ background: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <motion.div className="text-center mb-10 md:mb-20" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-[-0.02em] mb-4">Da estratégia à aprovação.</h2>
          <p className="text-[#A1A1AA] text-sm md:text-lg max-w-lg mx-auto leading-relaxed">Um processo estruturado em quatro etapas que transformam dedicação em resultado.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {passos.map((p, i) =>
          <motion.div key={i}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(79,70,229,0.12), 0 0 0 1px rgba(79,70,229,0.2)' }}
          className="group border border-[#262626] rounded-2xl p-5 md:p-7 flex flex-col gap-4 cursor-default transition-all duration-300"
          style={{ background: '#151515' }}>
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl border border-[#262626] flex items-center justify-center group-hover:border-[#4F46E5] transition-colors duration-300"
              style={{ background: '#1E1E1E' }}>
                  <p.icon className="w-5 h-5 text-[#52525B] group-hover:text-[#4F46E5] transition-colors duration-300" />
                </div>
                <span className="text-[#262626] font-mono text-xs font-bold">{p.numero}</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">{p.titulo}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">{p.descricao}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
