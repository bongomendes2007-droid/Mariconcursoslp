import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { whatsappLink } from '../ui/WhatsAppButton';
import Blob from '../ui/Blob';

export default function CTABandSection() {
  return (
    <section
      className="relative overflow-hidden py-28 px-5 md:px-6 text-center"
      style={{ background: 'radial-gradient(120% 130% at 50% 0%, #2A3F86 0%, #1A2B5E 55%, #101C42 100%)' }}
    >
      <Blob color="#76D7E3" size={320} opacity={0.2} blur={150} className="-top-10 left-[12%]" float={false} />
      <Blob color="#5D8BFF" size={340} opacity={0.28} blur={150} className="-bottom-16 right-[12%]" float={false} />

      {/* palavra gigante de fundo */}
      <div
        aria-hidden="true"
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-0 font-heading font-extrabold pointer-events-none select-none whitespace-nowrap hidden md:block"
        style={{
          fontSize: '210px',
          lineHeight: 0.9,
          letterSpacing: '-6px',
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(118,215,227,0.08)',
        }}
      >
        vaga
      </div>

      <motion.div
        className="relative z-10 max-w-[760px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-[30px] h-0.5 bg-accent" />
          <span className="text-accent text-[12.5px] font-bold tracking-[0.2em] uppercase">
            Comece agora
          </span>
          <span className="w-[30px] h-0.5 bg-accent" />
        </div>
        <h2 className="font-heading font-extrabold text-4xl md:text-[62px] leading-[1.02] tracking-[-0.03em] text-white mb-[22px]">
          A sua aprovação começa{' '}
          <span className="font-serif italic font-medium text-accent">hoje</span>
        </h2>
        <p className="text-[18.5px] leading-[1.7] text-white/[0.74] mb-10 max-w-xl mx-auto">
          Pare de estudar no escuro. Fale com a Mari, entenda o que te separa da vaga e comece com
          um plano feito para você.
        </p>
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-white font-heading font-semibold text-lg px-[46px] py-5 rounded-pill"
          style={{
            background: '#5D8BFF',
            boxShadow:
              '0 16px 40px rgba(93,139,255,0.45), 0 0 0 1px rgba(118,215,227,0.20), 0 0 60px rgba(118,215,227,0.28)',
          }}
          whileHover={{ scale: 1.04, background: '#76D7E3' }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          Falar com a Mari
          <ArrowRight className="w-[19px] h-[19px]" />
        </motion.a>
      </motion.div>
    </section>
  );
}
