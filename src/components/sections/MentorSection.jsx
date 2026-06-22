import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { whatsappLink } from '../ui/WhatsAppButton';

// ─── DATA ────────────────────────────────────────────────────────────────────

const lead = {
  name: 'Mariana Lima',
  role: 'Auditora do Executivo Federal',
  description:
    'Mentora que transformou sua própria trajetória de aprovação em um método estruturado para guiar outros concurseiros com estratégia, diagnóstico e acompanhamento real.',
  quote: 'Esforço sem método também cansa — e adoece.',
  approvals: [
    'Auditora do Executivo Federal — São Luís, MA',
    '11 Aprovações acumuladas',
    'Grandes aprovações com apenas 25 anos',
  ],
  image:
    'https://media.base44.com/images/public/696d6f18010ba26b7b4dc801/0cc1981f2_28801041-8394-46d0-a58b-14530dfcf72f-removebg-preview.png',
};

const supporting = [
  {
    id: 'petrus',
    name: 'Petrus Tabatinga',
    role: 'Auditor-Fiscal do Trabalho',
    approvals: [
      'Auditor-Fiscal do Trabalho (CNU 2024)',
      'Polícia Rodoviária Federal (2019)',
      'Perito Criminal PCPI (2018)',
    ],
    image:
      'https://media.base44.com/images/public/696d6f18010ba26b7b4dc801/662290298_IMG_2267JPG.jpeg',
  },
  {
    id: 'vitor',
    name: 'Vitor Vilarinho',
    role: 'Oficial de Justiça do TJMA',
    approvals: [
      'Aprovado para Analista Judiciário do TRF3',
      'Aprovado para Analista Judiciário do TRT-10',
      'Aprovado para Analista do MPPI',
    ],
    image:
      'https://media.base44.com/images/public/696d6f18010ba26b7b4dc801/e8b444b29_a36de429-25e3-4233-a208-610255130e0e.jpg',
  },
  {
    id: 'victor',
    name: 'Victor Carvalho',
    role: 'Técnico Judiciário Federal da JFSP/TRF3 SP',
    approvals: [
      '+10 aprovações em tribunais',
      '36º TJAA TRT7 CE',
      '52º TJAA TRT6 PE',
      '40° AJAJ TRF5 CE',
    ],
    image:
      'https://media.base44.com/images/public/696d6f18010ba26b7b4dc801/79b22b673_6258886a-2282-45aa-9a27-b2523e2db860.jpg',
  },
];

// ─── LEAD CARD ────────────────────────────────────────────────────────────────

function LeadMentorCard({ mentor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-[28px] overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 0 100px rgba(77,124,254,0.08), 0 32px 80px rgba(0,0,0,0.7)',
      }}
    >
      {/* Top shimmer */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(77,124,254,0.6), transparent)' }}
      />

      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
        {/* Portrait — expanded */}
        <div className="flex-shrink-0 flex items-center justify-center
                        px-4 sm:px-6 py-8
                        lg:px-0 lg:py-0
                        lg:w-[48%] xl:w-[50%]">
          <div
            className="relative rounded-3xl overflow-hidden w-full max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-none"
            style={{ aspectRatio: '3/4', background: '#0d0d0d' }}
          >
            <div
              className="absolute -inset-16 opacity-35 blur-3xl pointer-events-none z-0"
              style={{ background: 'radial-gradient(ellipse at center, #4D7CFE 0%, transparent 70%)' }}
            />
            <img
              src={mentor.image}
              alt={mentor.name}
              className="relative z-10 w-full h-full object-contain object-center"
            />
            <div
              className="absolute inset-0 z-20 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.4) 0%, transparent 50%)' }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center
                        px-6 py-8
                        lg:py-0 lg:pr-12 lg:pl-0 xl:pr-16
                        lg:w-[52%] xl:w-[50%]">

          {/* Name */}
          <h3
            className="font-black text-white leading-none tracking-[-0.03em] mb-2"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
          >
            {mentor.name}
          </h3>

          {/* Role */}
          <p className="text-[#A1A1AA] text-sm font-medium tracking-wide mb-6">
            {mentor.role}
          </p>

          {/* Description */}
          <p className="text-[#8A8A8A] text-base leading-[1.85] mb-8 max-w-xl">
            {mentor.description}
          </p>

          {/* Quote */}
          <div className="mb-8 pl-5 py-1" style={{ borderLeft: '2px solid #4D7CFE' }}>
            <p className="text-white text-base font-medium italic leading-relaxed opacity-90">
              "{mentor.quote}"
            </p>
          </div>

          {/* Badges — responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 mb-10">
            {mentor.approvals.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-3 rounded-xl px-4 py-3.5"
                style={{
                  background: 'rgba(77,124,254,0.06)',
                  border: '1px solid rgba(77,124,254,0.14)',
                  minHeight: '52px',
                }}
              >
                <CheckCircle2 className="flex-shrink-0 w-4 h-4" style={{ color: '#4D7CFE' }} />
                <span className="text-[#D4D4D8] text-sm font-medium leading-snug">{badge}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 self-start px-8 py-4 rounded-full font-semibold text-sm text-white transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #4D7CFE, #22D3EE)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(77,124,254,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            Conhecer a mentora
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── SUPPORTING CARD ─────────────────────────────────────────────────────────

function SupportingMentorCard({ mentor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 12px 48px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Portrait — top centered */}
      <div className="flex items-center justify-center p-6">
        <div
          className="relative rounded-2xl overflow-hidden flex-shrink-0"
          style={{ width: '130px', height: '130px', background: '#111' }}
        >
          <div
            className="absolute -inset-8 opacity-30 blur-2xl pointer-events-none z-0"
            style={{ background: 'radial-gradient(ellipse, #4D7CFE 0%, transparent 70%)' }}
          />
          <img
            src={mentor.image}
            alt={mentor.name}
            className="relative z-10 w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{ 
              background: 'linear-gradient(135deg, transparent 45%, rgba(0,0,0,0.1))',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 flex flex-col flex-1">
        <div>
          <h4 className="font-bold text-white text-lg text-center leading-tight mb-2">
            {mentor.name}
          </h4>
          <p className="text-[#A1A1AA] text-sm font-semibold tracking-wide text-center mb-6">
            {mentor.role}
          </p>

          {/* Badges — grid 2 columns */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {mentor.approvals.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl px-3 py-3"
                style={{
                  background: 'rgba(77,124,254,0.08)',
                  border: '1px solid rgba(77,124,254,0.15)',
                  minHeight: '52px',
                }}
              >
                <CheckCircle2
                  className="flex-shrink-0 w-3.5 h-3.5"
                  style={{ color: '#4D7CFE' }}
                />
                <span className="text-[#D4D4D8] text-xs font-medium leading-snug">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 mt-auto"
          style={{
            background: 'rgba(77,124,254,0.1)',
            border: '1px solid rgba(77,124,254,0.25)',
            color: '#4D7CFE',
          }}
          whileHover={{ 
            background: 'rgba(77,124,254,0.15)',
            borderColor: 'rgba(77,124,254,0.4)'
          }}
          whileTap={{ scale: 0.97 }}
        >
          Conhecer o mentor
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────

export default function MentorSection() {
  return (
    <section className="py-20 md:py-40" style={{ background: '#050505' }}>
      <div className="mx-auto px-5 md:px-6" style={{ maxWidth: '1400px' }}>

        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#52525B] text-xs font-medium tracking-[0.2em] uppercase mb-5">Equipe</p>
          <h2
            className="font-black text-white leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            Quem vai te guiar.
          </h2>
        </motion.div>

        {/* Lead mentor */}
        <div className="mb-20 md:mb-28">
          <LeadMentorCard mentor={lead} />
        </div>

        {/* Supporting mentors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
            <p className="text-[#3F3F46] text-xs font-medium tracking-[0.2em] uppercase">
              Outros mentores
            </p>
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.05)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            {supporting.map((mentor, i) => (
              <SupportingMentorCard key={mentor.id} mentor={mentor} index={i} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
