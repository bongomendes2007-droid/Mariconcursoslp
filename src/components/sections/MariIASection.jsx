import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, MessageSquare, BarChart2, Calendar } from 'lucide-react';
import { whatsappLink } from '../ui/WhatsAppButton';

const features = [
{ icon: Calendar, titulo: 'Cronograma Inteligente', descricao: 'Seu plano de estudos é montado automaticamente com base no edital e na sua disponibilidade real.' },
{ icon: BarChart2, titulo: 'Desempenho em Tempo Real', descricao: 'Dashboards que mostram onde você está evoluindo e onde precisa de reforço — sem achismo.' },
{ icon: MessageSquare, titulo: 'Suporte 24h', descricao: 'A Mari IA responde suas dúvidas a qualquer hora. Nunca fique preso em um conteúdo sozinho.' },
{ icon: Cpu, titulo: 'Ajuste Automático', descricao: 'O plano se adapta conforme seu desempenho. Quanto mais você usa, mais preciso ele fica.' }];


const barData = [
{ label: 'Dir. Constitucional', pct: 92 },
{ label: 'Dir. Administrativo', pct: 78 },
{ label: 'Português', pct: 87 },
{ label: 'Raciocínio Lógico', pct: 95 },
{ label: 'Informática', pct: 71 }];


function MiniDashboard() {
  return (
    <div className="relative rounded-2xl border border-[#262626] overflow-hidden"
    style={{ background: '#111111', boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(79,70,229,0.08)' }}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E1E1E]" style={{ background: '#0D0D0D' }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#262626]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#262626]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#262626]" />
        </div>
        <span className="text-[#52525B] text-[10px] tracking-widest">MARI IA · Dashboard</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
          <span className="text-[#3F3F46] text-[10px] font-mono">ao vivo</span>
        </div>
      </div>

      <div className="p-5 space-y-5">
        <div className="flex items-center gap-3 p-3 rounded-xl border border-[#262626]" style={{ background: '#151515' }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #4F46E5, #22D3EE)' }}>
            <span className="text-white text-[9px] font-black">IA</span>
          </div>
          <div>
            <p className="text-white text-[11px] font-semibold">Mari IA</p>
            <p className="text-[#52525B] text-[10px]">Seu cronograma da semana está pronto. 4 matérias prioritárias.</p>
          </div>
          <div className="ml-auto flex gap-0.5 items-end h-4 shrink-0">
            {[...Array(4)].map((_, i) =>
            <motion.div key={i} className="w-0.5 rounded-full"
            style={{ background: 'linear-gradient(180deg, #4F46E5, #22D3EE)' }}
            animate={{ height: ['3px', '12px', '3px'] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} />
            )}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-[#52525B] text-[10px] uppercase tracking-widest">Cobertura do Edital</span>
            <span className="text-[#3F3F46] text-[10px] font-mono">Semana 12</span>
          </div>
          <div className="space-y-2.5">
            {barData.map((b, i) =>
            <div key={i} className="flex items-center gap-2">
                <span className="text-[#3F3F46] text-[9px] w-28 shrink-0 truncate">{b.label}</span>
                <div className="flex-1 h-1.5 rounded-full bg-[#1E1E1E] overflow-hidden">
                  <motion.div className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #4F46E5, #22D3EE)' }}
                initial={{ width: 0 }} whileInView={{ width: `${b.pct}%` }} viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.12, ease: 'easeOut' }} />
                </div>
                <span className="text-[#52525B] text-[9px] font-mono w-6 text-right shrink-0">{b.pct}%</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[{ v: '6h', l: 'hoje' }, { v: '↑14%', l: 'semana' }, { v: '94%', l: 'foco' }].map((s, i) =>
          <div key={i} className="border border-[#262626] rounded-xl p-3 text-center" style={{ background: '#151515' }}>
              <p className="text-white font-black text-base leading-none">{s.v}</p>
              <p className="text-[#52525B] text-[9px] uppercase tracking-wider mt-1">{s.l}</p>
            </div>
          )}
        </div>
      </div>
    </div>);

}

export default function MariIASection() {
  return (
    <section className="py-16 md:py-40" style={{ background: '#111111' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} whileHover={{ scale: 1.02 }} className="lg:sticky lg:top-32">
            <MiniDashboard />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-[-0.02em] mb-3">
              Mari IA:{' '}
              <span style={{ background: 'linear-gradient(90deg, #4F46E5, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                sua parceira de estudos.
              </span>
            </h2>
            <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-7">
              Uma inteligência artificial treinada no método MariConcursos que organiza, acompanha e ajusta sua preparação em tempo real.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((f, i) =>
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(79,70,229,0.1), 0 0 0 1px rgba(79,70,229,0.2)' }}
              className="group flex items-start gap-3 p-4 md:p-5 border border-[#262626] hover:border-[#4F46E5] rounded-2xl transition-all duration-300"
              style={{ background: '#151515' }}>
                  <div className="w-9 h-9 rounded-xl border border-[#262626] flex items-center justify-center shrink-0 group-hover:border-[#4F46E5] transition-colors"
                style={{ background: '#1E1E1E' }}>
                    <f.icon className="w-4 h-4 text-[#52525B] group-hover:text-[#4F46E5] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{f.titulo}</h3>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">{f.descricao}</p>
                  </div>
                </motion.div>
              )}
            </div>

            <motion.a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide"
            style={{ background: 'linear-gradient(135deg, #4F46E5, #22D3EE)', boxShadow: '0 0 24px rgba(79,70,229,0.3)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 36px rgba(79,70,229,0.5)' }} whileTap={{ scale: 0.97 }}>
              Quero acesso à Mari IA
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>);

}
