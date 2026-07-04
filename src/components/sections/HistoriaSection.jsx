import React from 'react';
import { motion } from 'framer-motion';

const momentos = [
  { ano: '2022', evento: 'Primeiro concurso tentado, sem método, sem direção.' },
  { ano: '2023', evento: 'Descoberta do poder do planejamento estratégico de estudos.' },
  { ano: '2024', evento: 'Aprovação como Auditora do Executivo Federal.' },
  { ano: '2025', evento: 'Início da mentoria. Primeiros alunos aprovados.' },
  { ano: 'Hoje', evento: 'Dezenas de alunos, 11 aprovações, método validado.' },
];

export default function HistoriaSection() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-32 px-5 md:px-6"
      style={{ background: 'radial-gradient(120% 100% at 70% 0%, #24356F 0%, #16224C 52%, #0F1A3E 100%)' }}
    >
      {/* palavra gigante de fundo */}
      <div
        aria-hidden="true"
        className="absolute bottom-11 -left-9 z-0 font-heading font-extrabold pointer-events-none select-none hidden md:block"
        style={{
          fontSize: '190px',
          lineHeight: 0.9,
          letterSpacing: '-6px',
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(118,215,227,0.09)',
        }}
      >
        história
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="max-w-3xl mb-16 md:mb-[74px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-[34px] h-0.5 bg-accent" />
            <span className="text-accent text-[12.5px] font-bold tracking-[0.2em] uppercase">
              A trajetória da Mari
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-[58px] leading-[1.03] tracking-[-0.02em] text-white">
            Uma história construída
            <br className="hidden md:block" /> com{' '}
            <span className="font-serif italic font-medium text-accent">esforço real</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.84fr_1.16fr] gap-14 lg:gap-[84px] items-start">
          <div className="relative pl-0.5">
            <div
              className="absolute top-4 bottom-[18px] left-[17px] w-0.5"
              style={{
                background:
                  'linear-gradient(180deg, rgba(118,215,227,0.15), rgba(118,215,227,0.55) 12%, rgba(118,215,227,0.55) 88%, rgba(118,215,227,0.12))',
              }}
            />
            <div className="flex flex-col">
              {momentos.map((m, i) => {
                const isLast = i === momentos.length - 1;
                return (
                  <motion.div
                    key={m.ano}
                    className="relative flex gap-[26px] pb-[34px] last:pb-0"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <span
                      className="relative z-10 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                      style={{
                        background: '#16224C',
                        border: isLast ? '2px solid #76D7E3' : '2px solid rgba(118,215,227,0.45)',
                        boxShadow: isLast ? '0 0 0 5px rgba(118,215,227,0.16)' : 'none',
                      }}
                    >
                      <span
                        className="rounded-full"
                        style={{
                          width: isLast ? 13 : 11,
                          height: isLast ? 13 : 11,
                          background: isLast ? '#76D7E3' : 'rgba(118,215,227,0.75)',
                        }}
                      />
                    </span>
                    <div className="pt-px">
                      <div
                        className="font-heading font-extrabold text-2xl leading-none mb-[7px]"
                        style={{ letterSpacing: '0.3px', color: isLast ? '#FFFFFF' : '#76D7E3' }}
                      >
                        {m.ano.toUpperCase()}
                      </div>
                      <p
                        className={`text-base leading-[1.65] ${
                          isLast ? 'text-white font-semibold' : 'text-[#E2E8F0]'
                        }`}
                      >
                        {m.evento}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[19px] leading-[1.75] font-medium text-white/90 tracking-[-0.01em] mb-6">
              Eu sei o que é sentar para estudar com vontade, mas sem saber por onde começar. Eu
              sei o que é passar anos tentando e não ver resultado.
            </p>
            <p className="text-[16.5px] leading-[1.9] text-white/[0.74] mb-[22px]">
              Não foi um caminho fácil. Foram anos de tentativas, frustração, recomeços. E foi
              nessa jornada que entendi:{' '}
              <strong className="text-white font-bold">
                o problema raramente é falta de esforço. É falta de método.
              </strong>
            </p>
            <p className="text-[16.5px] leading-[1.9] text-white/[0.74] mb-10">
              Quando finalmente entendi como funcionava a construção de uma aprovação, com
              diagnóstico, estratégia e acompanhamento, o resultado veio. E com ele, a vontade de
              ajudar outros a encurtar esse caminho.
            </p>

            {/* citação em destaque, com formas de encaixe atrás */}
            <div className="relative mb-10">
              <div
                className="absolute -top-4 -left-4 w-32 h-32 rounded-[32px] z-0 pointer-events-none"
                style={{ background: 'linear-gradient(150deg, #3A57A6 0%, #25397A 100%)' }}
              />
              <div
                className="absolute -bottom-3.5 right-6 w-12 h-12 rounded-[15px] z-0 pointer-events-none"
                style={{ background: '#76D7E3', opacity: 0.92 }}
              />
              <blockquote
                className="relative z-10 m-0 rounded-[26px] px-9 py-[34px]"
                style={{
                  background: 'linear-gradient(160deg, rgba(46,74,158,0.55) 0%, rgba(21,34,76,0.78) 100%)',
                  border: '1px solid rgba(118,215,227,0.30)',
                  boxShadow: '0 26px 64px rgba(0,0,0,0.36)',
                }}
              >
                <div
                  className="font-serif italic font-semibold text-accent"
                  style={{ fontSize: '70px', lineHeight: 0, height: '26px' }}
                >
                  &ldquo;
                </div>
                <p className="font-serif italic font-medium text-[28px] leading-[1.42] tracking-[-0.01em] text-white">
                  Aprovação não é sorte. É processo. E processo pode ser ensinado.
                </p>
              </blockquote>
            </div>

            <p className="text-[16.5px] leading-[1.9] text-white/[0.74]">
              O MariConcursos nasceu disso. De uma trajetória vivida na pele, transformada em
              método para que você não precise percorrer o mesmo caminho sozinho.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
