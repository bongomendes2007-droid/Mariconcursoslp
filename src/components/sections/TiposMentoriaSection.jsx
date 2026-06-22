import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Lock } from 'lucide-react';

const exclusivaLink = "https://wa.me/5586994927605?text=Oi%21%20Vim%20pela%20p%C3%A1gina%20e%20fiquei%20muito%20interessado%20na%20mentoria%20exclusiva.%20Voc%C3%AA%20pode%20me%20explicar%20melhor%20como%20funciona%20e%20como%20posso%20come%C3%A7ar%3F";

const beneficios = [
  'Sessões individuais semanais',
  'Plano 100% personalizado',
  'Acesso direto à mentora',
  'Acompanhamento de ponta a ponta',
  'Vagas extremamente limitadas',
];

export default function TiposMentoriaSection() {
  return (
    <section className="py-16 md:py-40" style={{ background: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-[-0.02em] mb-4">
            A forma mais rápida de sair do zero
            <br className="hidden sm:block" />
            {' '}e chegar à aprovação.
          </h2>
          <p className="text-[#A1A1AA] text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Uma experiência completamente personalizada, com acompanhamento real de quem já percorreu esse caminho.
          </p>
        </motion.div>

        {/* Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6, boxShadow: '0 32px 80px rgba(79,70,229,0.25)' }}
            className="w-full max-w-xl flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 cursor-default"
            style={{
              background: '#151515',
              borderColor: '#4F46E5',
              boxShadow: '0 0 48px rgba(79,70,229,0.15), 0 0 0 1px rgba(79,70,229,0.3)',
            }}>

            {/* Image */}
            <div className="relative h-48 md:h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop"
                alt="Mentoria Exclusiva"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(40%) brightness(0.35)' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 20%, #151515)' }} />

              {/* Badges */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#A1A1AA] border border-[#262626] px-3 py-1 rounded-full" style={{ background: 'rgba(0,0,0,0.7)' }}>
                  Personalizada
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-white px-3 py-1 rounded-full flex items-center gap-1.5"
                  style={{ background: 'linear-gradient(135deg, #4F46E5, #22D3EE)' }}>
                  <Lock className="w-2.5 h-2.5" /> Vagas Limitadas
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 md:p-8 gap-6">

              {/* Title */}
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-1">Mentoria Exclusiva</h3>
                <p className="text-[#52525B] text-sm">Acompanhamento 1:1 com Mariana</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#1E1E1E]" />

              {/* Features */}
              <ul className="space-y-3">
                {beneficios.map((b, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}>
                    <div className="w-5 h-5 rounded-full border border-[#4F46E5] flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(79,70,229,0.12)' }}>
                      <Check className="w-2.5 h-2.5 text-[#4F46E5]" />
                    </div>
                    <span className="text-[#A1A1AA] text-sm leading-snug">{b}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Divider */}
              <div className="h-px bg-[#1E1E1E]" />

              {/* Scarcity note */}
              <p className="text-center text-[#52525B] text-xs tracking-wide">
                Pouquíssimas vagas disponíveis · Atendimento individual
              </p>

              {/* CTA */}
              <motion.a
                href={exclusivaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-4 rounded-full font-bold text-sm text-white tracking-wide"
                style={{ background: 'linear-gradient(135deg, #4F46E5, #22D3EE)', boxShadow: '0 0 24px rgba(79,70,229,0.35)' }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(79,70,229,0.55)' }}
                whileTap={{ scale: 0.97 }}>
                Quero garantir minha vaga
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
