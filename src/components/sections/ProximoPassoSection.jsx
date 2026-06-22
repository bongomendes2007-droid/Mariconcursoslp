import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { whatsappLink } from '../ui/WhatsAppButton';

export default function ProximoPassoSection() {
  return (
    <section className="py-16 md:py-48 border-t border-[#262626] relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(79,70,229,0.12) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 40% 30% at 50% 50%, rgba(34,211,238,0.04) 0%, transparent 60%)' }} />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-[#52525B] text-xs font-medium tracking-[0.2em] uppercase mb-7">Comece Agora</p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black leading-[1.08] tracking-[-0.02em] mb-6 text-white">
            Sua aprovação começa com{' '}
            <span style={{ background: 'linear-gradient(90deg, #4F46E5, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              o método certo.
            </span>
          </h2>

          <p className="text-[#A1A1AA] text-sm md:text-lg max-w-sm md:max-w-md mx-auto mb-8 leading-relaxed">
            Converse com a equipe. <strong className="text-white font-semibold">Sem compromisso, sem pressão.</strong> Apenas uma conversa para entender seu momento.
          </p>

          <motion.a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 text-white w-full md:w-auto min-h-[60px] px-14 py-5 rounded-full font-black text-base tracking-wide"
            style={{ background: 'linear-gradient(135deg, #4F46E5, #22D3EE)', boxShadow: '0 0 40px rgba(79,70,229,0.4)' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(79,70,229,0.6)' }}
            whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
            Quero começar agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-[#52525B] text-xs">
            <span>Sem compromisso</span>
            <span className="w-px h-3 bg-[#262626]" />
            <span>Resposta em até 24h</span>
            <span className="w-px h-3 bg-[#262626]" />
            <span>Vagas limitadas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
