import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, BarChart2, BookOpen, Target, TrendingUp } from 'lucide-react';
import { whatsappLink } from '../ui/WhatsAppButton';

const progressItems = [
{ label: 'Direito Constitucional', value: 92 },
{ label: 'Direito Administrativo', value: 78 },
{ label: 'Português', value: 87 },
{ label: 'Raciocínio Lógico', value: 95 }];


const stats = [
{ value: '47', label: 'Simulados' },
{ value: '91%', label: 'Acertos' },
{ value: '6h', label: 'Hoje' }];


function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="relative w-full max-w-lg mx-auto lg:max-w-none cursor-default">

      {/* Outer glow */}
      <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #4F46E5 0%, transparent 70%)' }} />

      <div className="relative rounded-2xl overflow-hidden border border-[#262626]"
        style={{ background: '#111111', boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(79,70,229,0.08)' }}>

        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E1E1E]" style={{ background: '#0D0D0D' }}>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#262626]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#262626]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#262626]" />
          </div>
          <span className="text-[#52525B] text-[10px] font-semibold tracking-widest uppercase">Painel de Desempenho</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
            <span className="text-[#3F3F46] text-[10px] font-mono">ao vivo</span>
          </div>
        </div>

        <div className="p-5 space-y-4">
          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-2">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                className="rounded-xl border border-[#262626] p-3 flex flex-col items-center text-center" style={{ background: '#151515' }}>
                <span className="text-white text-xl font-black leading-none">{s.value}</span>
                <span className="text-[#52525B] text-[9px] font-medium tracking-wider uppercase mt-1">{s.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Active plan status */}
          <div className="flex items-center gap-2.5 py-2.5 px-3 rounded-xl border border-[#262626]" style={{ background: 'rgba(79,70,229,0.06)' }}>
            <Target className="w-3 h-3 text-[#4F46E5] shrink-0" />
            <span className="text-[#A1A1AA] text-[10px] font-semibold tracking-[0.12em] uppercase flex-1">Plano de estudo ativo</span>
            <span className="text-[#22D3EE] text-[10px] font-mono">Semana 12</span>
          </div>

          {/* Progress by subject */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3 h-3 text-[#52525B]" />
                <span className="text-[#52525B] text-[10px] font-semibold uppercase tracking-widest">Progresso por disciplina</span>
              </div>
            </div>
            <div className="space-y-2.5">
              {progressItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="text-[#3F3F46] text-[9px] w-28 truncate shrink-0">{item.label}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-[#1E1E1E] overflow-hidden">
                    <motion.div className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #4F46E5, #22D3EE)' }}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1.2, delay: 1.0 + i * 0.15, ease: 'easeOut' }} />
                  </div>
                  <span className="text-[#52525B] text-[9px] font-mono w-7 text-right shrink-0">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly distribution */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-1.5">
                <BarChart2 className="w-3 h-3 text-[#52525B]" />
                <span className="text-[#52525B] text-[10px] font-semibold uppercase tracking-widest">Distribuição semanal</span>
              </div>
              <span className="text-[#22D3EE] text-[10px] font-mono">↑ 14%</span>
            </div>
            <div className="flex items-end gap-1.5 h-12">
              {[5, 7, 6, 8, 7, 4].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <motion.div className="w-full rounded-sm"
                    style={{ transformOrigin: 'bottom', background: i === 3 ? 'linear-gradient(180deg, #4F46E5, #22D3EE)' : '#1E1E1E' }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.7, delay: 1.0 + i * 0.08, ease: 'easeOut' }}>
                    <div style={{ height: `${val / 8 * 48}px` }} />
                  </motion.div>
                  <span className="text-[#3F3F46] text-[8px]">{['S', 'T', 'Q', 'Q', 'S', 'S'][i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Insights footer */}
          <div className="flex items-start gap-3 pt-2 border-t border-[#1E1E1E]">
            <div className="w-7 h-7 rounded-lg border border-[#262626] flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#1E1E1E' }}>
              <TrendingUp className="w-3.5 h-3.5 text-[#4F46E5]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-[10px] font-semibold mb-0.5">Desempenho em alta</p>
              <p className="text-[#52525B] text-[9px] leading-relaxed">Raciocínio Lógico subiu 8pts esta semana. Continue focando nessa disciplina.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroBannerSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      {/* Radial glow bg */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 15% 40%, rgba(79,70,229,0.08) 0%, transparent 60%)'
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 85% 60%, rgba(34,211,238,0.05) 0%, transparent 60%)'
      }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 pt-20 pb-12 md:px-6 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-[#262626]"
              style={{ background: 'rgba(79,70,229,0.08)' }}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
              
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              <span className="text-[#A1A1AA] text-[10px] sm:text-xs font-medium tracking-[0.12em] uppercase">
                11 Aprovações · 25 Anos
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-[-0.02em] mb-4 text-white"
              initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              
              Domine o edital
              <br />
              <span style={{ background: 'linear-gradient(90deg, #4F46E5, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                conquiste sua vaga.
              </span>
            </motion.h1>

            <motion.p className="text-[#A1A1AA] text-sm md:text-base lg:text-lg leading-relaxed max-w-sm md:max-w-md mb-7"
            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.32, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              Planejamento, disciplina e método comprovado para sua aprovação nos concursos públicos.
            </motion.p>

            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.46, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-3 w-full sm:w-auto">
              <motion.a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 text-white w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #4F46E5, #22D3EE)', boxShadow: '0 0 24px rgba(79,70,229,0.3)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 36px rgba(79,70,229,0.5)' }}
              whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                <span>Quero minha aprovação</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>

              





              
            </motion.div>

            <motion.div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[#52525B] text-xs"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
              <span>Dezenas de alunos</span>
              <span className="w-px h-3 bg-[#262626]" />
              <span>Sem compromisso</span>
              <span className="w-px h-3 bg-[#262626]" />
              <span>Vagas limitadas</span>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:pl-4">
            <DashboardMockup />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1E1E1E]" />
    </section>);

}
