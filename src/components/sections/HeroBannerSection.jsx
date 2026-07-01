import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { whatsappLink } from '../ui/WhatsAppButton';
import Blob from '../ui/Blob';
import assets from '../../data/assets';

export default function HeroBannerSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Gradiente de profundidade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 20% 30%, rgba(33,76,143,0.55) 0%, transparent 60%)',
        }}
      />
      {/* Blobs de assinatura */}
      <Blob color="#214C8F" size={620} opacity={0.5} blur={100} className="-top-40 -left-40" />
      <Blob color="#5D8BFF" size={420} opacity={0.22} blur={90} className="bottom-0 right-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 pt-32 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ESQUERDA — texto */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill mb-6 border border-white/15 bg-white/5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-white/80 text-xs font-medium tracking-[0.12em] uppercase">
                Mentoria de aprovação em concursos
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white mb-5"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Domine o edital,
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #5D8BFF, #76D7E3)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                conquiste sua vaga.
              </span>
            </motion.h1>

            <motion.p
              className="text-white/70 text-base md:text-lg leading-relaxed max-w-md mb-8"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.32, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Planejamento, disciplina e método comprovado. A mentoria da Mari te guia
              passo a passo — do diagnóstico à aprovação.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.46, duration: 0.6 }}
            >
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 text-white min-h-[54px] px-8 py-3.5 rounded-pill font-bold text-base shadow-lg"
                style={{ background: 'linear-gradient(135deg, #5D8BFF, #76D7E3)' }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <span>Falar com a Mari</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-white/50 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <span>Dezenas de aprovados</span>
              <span className="w-px h-3 bg-white/20" />
              <span>Método próprio</span>
              <span className="w-px h-3 bg-white/20" />
              <span>Acompanhamento real</span>
            </motion.div>
          </div>

          {/* DIREITA — foto da Mari */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-md">
              {/* Disco/halo atrás da foto */}
              <div
                className="absolute inset-x-0 bottom-0 mx-auto aspect-square w-[92%] rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 50% 55%, rgba(118,215,227,0.35) 0%, rgba(93,139,255,0.15) 45%, transparent 70%)',
                }}
              />
              <img
                src={assets.mari.foto}
                alt="Mariana Lima, mentora da MariConcursos"
                className="relative w-full h-auto object-contain drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
