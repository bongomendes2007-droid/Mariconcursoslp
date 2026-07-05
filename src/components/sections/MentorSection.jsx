import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { whatsappLink } from '../ui/WhatsAppButton';
import assets from '../../data/assets';

// ─── "QUEM VAI TE GUIAR" — bio da Mari ─────────────────────────────────────

export function MentorIntroSection() {
  return (
    <section className="relative bg-background overflow-hidden pt-24 md:pt-28 px-5 md:px-6">
      <div className="relative z-10 max-w-6xl mx-auto min-h-[620px]">
        <div
          className="hidden md:block absolute right-[-120px] bottom-0 w-[470px] h-[540px] bg-primary z-[1]"
          style={{ borderRadius: '40px 0 0 0' }}
        />

        <div className="relative z-[2] max-w-xl pt-1 pb-16 md:pb-24 md:pl-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-heading font-medium text-lg text-ink-soft tracking-wide mb-0.5">
              OI, EU SOU A
            </div>
            <h2 className="font-heading font-extrabold text-5xl md:text-[62px] leading-[0.96] tracking-tight text-ink mb-5">
              Mariana
              <br />
              Lima
            </h2>

            <div className="font-heading font-bold text-[12.5px] tracking-[0.08em] uppercase text-secondary mb-4">
              Mentora de concursos · Aprovada em múltiplos certames
            </div>

            <p className="text-xl leading-[1.4] font-bold text-ink mb-4 max-w-md">
              Minha missão é te ajudar a{' '}
              <span className="underline decoration-accent decoration-[3px] underline-offset-4">
                parar de estudar no escuro
              </span>{' '}
              e conquistar a sua aprovação com método.
            </p>

            <p className="text-[15px] leading-[1.55] text-ink-soft mb-3.5 max-w-sm">
              Eu sei como é estudar sem direção, se cobrar demais e ainda assim sentir que não sai
              do lugar. Foi vivendo isso — e virando o jogo — que desenvolvi um método claro,
              humano e focado no que realmente faz passar. Hoje acompanho de perto cada aluno,
              adaptando o plano à realidade de cada um.
            </p>

            <p className="text-[15px] leading-[1.55] text-ink-soft mb-6 max-w-sm">
              Mais do que aprovar em um concurso, quero te ver constante, confiante e no controle
              total da sua preparação — do primeiro edital até a nomeação.
            </p>

            <ul className="flex flex-col gap-2.5 mb-8 max-w-md">
              {[
                'Auditora do Executivo Federal — São Luís, MA',
                '11 aprovações acumuladas',
                'Grandes aprovações com apenas 25 anos',
              ].map((fato) => (
                <li
                  key={fato}
                  className="flex items-center gap-3 rounded-2xl bg-white border border-[#ECE7DF] px-4 py-3"
                  style={{ boxShadow: '0 4px 16px rgba(17,29,68,0.05)' }}
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-secondary/10">
                    <Check className="w-[15px] h-[15px] text-secondary" strokeWidth={3} />
                  </span>
                  <span className="text-[14.5px] font-medium leading-snug text-ink">{fato}</span>
                </li>
              ))}
            </ul>

            {/* Foto da Mari — versão MOBILE, no fluxo, entre texto e botão */}
            <div className="sm:hidden relative mx-auto mb-8 w-[85%] max-w-[340px]">
              <div
                className="absolute inset-x-4 top-6 bottom-0 z-0"
                style={{ borderRadius: '32px 0 0 0', background: '#1A2B5E' }}
              />
              <motion.img
                src={assets.mari.sticker}
                alt="Mariana Lima"
                className="relative z-10 block w-full h-auto"
                style={{ filter: 'drop-shadow(0 18px 36px rgba(17,29,68,0.28))' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </div>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white font-heading font-semibold text-base px-8 py-4 rounded-pill"
              style={{ background: '#5D8BFF', boxShadow: '0 14px 34px rgba(93,139,255,0.35)' }}
              whileHover={{ scale: 1.03, background: '#1A2B5E' }}
              whileTap={{ scale: 0.97 }}
            >
              Conheça a minha história
              <ArrowRight className="w-[17px] h-[17px]" />
            </motion.a>
          </motion.div>
        </div>

        <motion.img
          src={assets.mari.sticker}
          alt="Mariana Lima"
          className="absolute right-0 md:right-[-30px] bottom-0 z-[3] w-[280px] md:w-[510px] h-auto hidden sm:block"
          style={{
            transform: 'rotate(-2deg)',
            transformOrigin: 'bottom right',
            filter: 'drop-shadow(0 22px 44px rgba(17,29,68,0.30))',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </section>
  );
}

// ─── "OUTROS MENTORES" — time de apoio ─────────────────────────────────────

const supporting = [
  {
    id: 'victor',
    name: 'Victor Carvalho',
    role: 'Técnico Judiciário Federal · JFSP/TRF3-SP',
    description:
      '+10 aprovações em tribunais (TRF5, TRT7, TRT6, TRT1, TRF1) e no MPPI. Nomeado Analista Previdenciário de Teresina (8º lugar).',
    image: assets.mentores.victorCarvalhoLocal,
    panel: '#76D7E3',
  },
  {
    id: 'vitor',
    name: 'Vitor Vilarinho',
    role: 'Oficial de Justiça · TJMA',
    description: 'Aprovado para Analista Judiciário do TRF3 e do TRT-10, e para Analista do MPPI.',
    image: assets.mentores.vitorLocal,
    panel: '#5D8BFF',
  },
  {
    id: 'petrus',
    name: 'Petrus Tabatinga',
    role: 'Auditor-Fiscal do Trabalho · CNU 2024',
    description: 'Também aprovado na Polícia Rodoviária Federal (2019) e como Perito Criminal da PCPI (2018).',
    image: assets.mentores.petrusLocal,
    panel: '#76D7E3',
  },
];

export default function MentorSection() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-28 px-5 md:px-6"
      style={{ background: 'radial-gradient(120% 100% at 30% 0%, #24356F 0%, #16224C 50%, #0F1A3E 100%)' }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-accent text-[13px] font-bold tracking-[0.09em] uppercase mb-4">
            O time por trás da sua aprovação
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-[38px] leading-[1.22] tracking-tight text-white">
            Você não vai estudar <span className="font-serif italic font-medium text-accent">sozinho</span>
          </h2>
          <p className="text-white/65 text-base leading-relaxed mt-4">
            Além da Mari, você conta com mentores especialistas que acompanham a sua evolução de
            perto em cada área da preparação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {supporting.map((mentor, i) => (
            <motion.div
              key={mentor.id}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative mb-6">
                <div
                  className="absolute inset-x-3.5 top-5 bottom-0 rounded-[22px] z-0"
                  style={{ background: mentor.panel }}
                />
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="relative z-10 block w-full h-[320px] object-cover rounded-[22px]"
                  style={{ objectPosition: '50% 22%' }}
                />
              </div>
              <div className="font-heading font-bold text-xl text-white">{mentor.name}</div>
              <div className="text-[13.5px] font-semibold tracking-wide text-accent mt-1">
                {mentor.role}
              </div>
              <p className="text-sm leading-[1.65] text-white/60 mt-3.5 max-w-[300px] mx-auto">
                {mentor.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
