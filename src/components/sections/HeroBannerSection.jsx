import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, GraduationCap, CalendarClock, UserCheck } from 'lucide-react';
import { whatsappLink } from '../ui/WhatsAppButton';
import Blob from '../ui/Blob';
import assets from '../../data/assets';

const stats = [
  { Icon: Users, value: '+50', label: 'Alunos mentorados\npor todo o Brasil' },
  { Icon: GraduationCap, value: '+11', label: 'Aprovações em\nconcursos públicos' },
  { Icon: CalendarClock, value: '+4 anos', label: 'Dedicados a\nconcursos públicos' },
  { Icon: UserCheck, value: '100%', label: 'Acompanhamento\nindividual' },
];

export default function HeroBannerSection() {
  return (
    <section id="sobre" className="relative bg-background">
      <div
        className="relative overflow-hidden pt-24 md:pt-28"
        style={{
          background: 'radial-gradient(125% 95% at 68% 20%, #27397B 0%, #1A2B5E 52%, #101C42 100%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)',
        }}
      >
        <Blob color="#5D8BFF" size={560} opacity={0.22} blur={110} className="-top-10 -left-40" float={false} />
        <Blob color="#76D7E3" size={600} opacity={0.16} blur={130} className="top-40 -right-10" />
        <Blob color="#214C8F" size={480} opacity={0.5} blur={120} className="bottom-0 left-1/3" float={false} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-stretch">
            {/* ESQUERDA — texto */}
            <div className="flex flex-col justify-start items-start text-left">
              <motion.h1
                className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight text-white mb-6"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                Domine o edital
                <br />
                conquiste sua <span className="text-accent">vaga</span>.
              </motion.h1>

              <motion.p
                className="text-white/70 text-lg leading-[1.7] max-w-md mb-9"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Mentoria estratégica com a Mariana Lima para quem quer parar de estudar no escuro
                e passar de verdade. Plano de estudos, acompanhamento próximo e um método que já
                aprovou centenas de concurseiros.
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
                  className="group inline-flex items-center justify-center gap-2.5 text-white min-h-[54px] px-9 py-3.5 rounded-pill font-heading font-semibold text-[17px] shadow-lg"
                  style={{ background: '#5D8BFF', boxShadow: '0 14px 34px rgba(93,139,255,0.4)' }}
                  whileHover={{ scale: 1.04, background: '#76D7E3' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <span>Falar com a Mari</span>
                  <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform duration-200" />
                </motion.a>
              </motion.div>
            </div>

            {/* DIREITA — foto da Mari sobre formas decorativas */}
            <motion.div
              className="relative flex items-end justify-center lg:justify-end"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[500px] h-[480px] sm:h-[540px] lg:h-[660px]">
                <div
                  className="absolute top-[9%] -left-[6%] w-[70%] h-[65%] z-0"
                  style={{
                    borderRadius: '70px 150px 70px 150px',
                    background: 'linear-gradient(155deg, #3A57A6 0%, #26397A 100%)',
                  }}
                />
                <div
                  className="absolute bottom-[14%] -right-[4%] w-[28%] h-[30%] z-0"
                  style={{ borderRadius: '110px 26px 110px 26px', background: '#76D7E3' }}
                />
                <div
                  className="absolute inset-x-2 top-4 bottom-8 z-0"
                  style={{
                    background: 'radial-gradient(55% 55% at 50% 42%, rgba(118,215,227,0.30), transparent 72%)',
                    filter: 'blur(34px)',
                  }}
                />
                <img
                  src={assets.mari.hero}
                  alt="Mariana Lima, mentora da MariConcursos"
                  className="absolute inset-0 z-10 w-full h-full object-contain object-bottom drop-shadow-2xl"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Estatísticas — card flutuante sobre a diagonal */}
      <div className="relative z-20 -mt-14 md:-mt-[70px] w-full max-w-6xl mx-auto px-5 md:px-10">
        <motion.div
          className="bg-white rounded-card grid grid-cols-2 md:grid-cols-4"
          style={{ boxShadow: '0 30px 70px rgba(17,29,68,0.18)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map(({ Icon, value, label }, i) => (
            <div
              key={value}
              className={`px-6 py-8 md:px-8 md:py-10 text-center ${
                i !== stats.length - 1 ? 'border-r border-[#ECE7DF]' : ''
              } ${i < 2 ? 'border-b md:border-b-0 border-[#ECE7DF]' : ''}`}
            >
              <Icon className="w-[30px] h-[30px] mx-auto mb-3 text-secondary" strokeWidth={1.7} />
              <div className="font-heading font-extrabold text-[34px] md:text-[40px] leading-none text-ink">
                {value}
              </div>
              <div className="text-[14px] text-ink-soft mt-2 leading-snug whitespace-pre-line">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
