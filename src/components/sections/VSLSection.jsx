import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Landmark } from 'lucide-react';
import assets from '../../data/assets';

const orgaos = ['TRF', 'Tribunais', 'Carreiras Policiais', 'TRT'];

export default function VSLSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => {
      if (videoRef.current) videoRef.current.play();
    }, 100);
  };

  return (
    <section
      id="aprovacoes"
      className="relative overflow-hidden py-24 md:py-36 px-5 md:px-6"
      style={{
        background: 'radial-gradient(120% 90% at 50% 0%, #26397A 0%, #16204B 55%, #101C42 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute top-10 -left-5 font-heading font-extrabold pointer-events-none select-none hidden md:block"
        style={{
          fontSize: '130px',
          lineHeight: 1,
          letterSpacing: '-2px',
          color: 'transparent',
          WebkitTextStroke: '2px rgba(255,255,255,0.32)',
        }}
      >
        método
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-32 -right-4 font-heading font-extrabold pointer-events-none select-none hidden md:block"
        style={{
          fontSize: '120px',
          lineHeight: 1,
          letterSpacing: '-2px',
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(93,139,255,0.18)',
          transform: 'rotate(90deg)',
          transformOrigin: 'right bottom',
        }}
      >
        aprovação
      </div>

      {/* palavra gigante "mentora" — presa à base da seção escura; a metade
          inferior sangra abaixo da divisa azul→claro e é recortada pelo
          overflow-hidden, então só o topo (sobre o azul) aparece */}
      <div
        aria-hidden="true"
        className="absolute left-5 md:left-10 bottom-0 z-[1] font-heading font-extrabold text-white pointer-events-none select-none hidden md:block"
        style={{
          fontSize: '128px',
          lineHeight: 1,
          letterSpacing: '-3px',
          transform: 'translateY(46%)',
        }}
      >
        mentora
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          className="relative rounded-card overflow-hidden bg-black"
          style={{ boxShadow: '0 40px 90px rgba(0,0,0,0.45)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <video
            ref={videoRef}
            src={assets.mari.video}
            playsInline
            preload="metadata"
            controls={playing}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="block w-full h-[300px] md:h-[480px] object-cover bg-black"
          />
          {!playing && (
            <div className="absolute inset-0 cursor-pointer" onClick={handlePlay}>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(16,28,66,0.15) 0%, rgba(16,28,66,0.35) 55%, rgba(16,28,66,0.82) 100%)',
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88px] h-[88px] rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.92)', boxShadow: '0 12px 40px rgba(0,0,0,0.35)' }}
                whileHover={{ scale: 1.08, background: '#76D7E3' }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <Play className="w-[26px] h-[26px] text-primary ml-1" fill="#1A2B5E" strokeWidth={0} />
              </motion.div>
              <div className="absolute left-6 md:left-10 bottom-7 md:bottom-9 max-w-[80%]">
                <div className="font-heading font-extrabold text-2xl md:text-4xl leading-[1.12] text-white tracking-tight">
                  Toda aprovação
                  <br />
                  começa com <span className="text-accent">método</span>
                </div>
                <div className="text-white/80 text-sm md:text-base mt-3">
                  Veja como funciona a mentoria da Mari, dê o play!
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <div className="text-center mt-16">
          <div className="text-white/55 text-[12.5px] font-bold tracking-[0.11em] uppercase mb-6">
            Alunos aprovados em órgãos de todo o Brasil, incluindo:
          </div>
          <div className="flex flex-wrap justify-center gap-3.5">
            {orgaos.map((o) => (
              <span
                key={o}
                className="inline-flex items-center gap-2 text-white font-heading font-semibold text-[15px] px-5 py-3 rounded-pill"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <Landmark className="w-[17px] h-[17px] text-accent" strokeWidth={1.8} />
                {o}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
