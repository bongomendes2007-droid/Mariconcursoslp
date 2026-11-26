import React from 'react';
import { ArrowDown } from 'lucide-react';
import Article, { Em, ordinal } from '../ui/Article';
import assets from '../../data/assets';

// ─── Art. 3º — Da mentora ──────────────────────────────────────────────────

const fatos = [
  'Auditora do Executivo Federal — São Luís, MA',
  '11 aprovações acumuladas',
  'Grandes aprovações com apenas 25 anos',
];

export function MentorIntroSection() {
  return (
    <section id="mari" className="relative paper-grain overflow-hidden pt-24 md:pt-32">
      <div className="relative max-w-page mx-auto px-5 md:px-8">
        <div className="flex items-baseline gap-4 border-t rule pt-6 md:pt-8 font-mono text-[12.5px]">
          <span className="text-secondary tracking-[0.04em]">Art. {ordinal(3)}</span>
          <span className="uppercase tracking-[0.12em] text-ink-faint">Da mentora</span>
        </div>

        <div className="relative min-h-[640px] lg:grid lg:grid-cols-12 lg:gap-8">
          {/* bloco azul de encaixe da foto (desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute right-[-160px] bottom-0 w-[520px] h-[520px] bg-primary"
            style={{ borderRadius: '44px 0 0 0' }}
          />

          <div className="relative z-[2] md:max-w-[54%] lg:max-w-none lg:col-start-3 lg:col-span-5 pt-10 md:pt-14 pb-16 md:pb-28">
            <p className="font-mono text-[12.5px] uppercase tracking-[0.12em] text-ink-soft mb-3">
              Oi, eu sou a
            </p>
            <h2 className="font-display font-[460] text-[64px] md:text-[96px] leading-[0.9] tracking-[-0.04em] text-ink mb-8">
              Mariana
              <br />
              <em className="italic font-[360] text-secondary">Lima</em>
            </h2>

            <p className="font-display text-[24px] md:text-[28px] leading-[1.25] tracking-[-0.015em] text-ink mb-6 max-w-[24ch]">
              Minha missão é te ajudar a parar de estudar no escuro e conquistar a sua aprovação
              com método.
            </p>

            <div className="space-y-4 text-[16px] leading-[1.7] text-ink-soft max-w-[52ch] mb-10">
              <p>
                Eu sei como é estudar sem direção, se cobrar demais e ainda assim sentir que não sai
                do lugar. Foi vivendo isso — e virando o jogo — que desenvolvi um método claro,
                humano e focado no que realmente faz passar. Hoje acompanho de perto cada aluno,
                adaptando o plano à realidade de cada um.
              </p>
              <p>
                Mais do que aprovar em um concurso, quero te ver constante, confiante e no controle
                total da sua preparação — do primeiro edital até a nomeação.
              </p>
            </div>

            <ul className="border-t rule mb-10 max-w-[52ch]">
              {fatos.map((fato, i) => (
                <li key={fato} className="flex items-baseline gap-5 border-b rule py-3.5">
                  <span className="font-mono text-[12px] text-secondary w-6 shrink-0">0{i + 1}</span>
                  <span className="text-[15.5px] font-medium text-ink">{fato}</span>
                </li>
              ))}
            </ul>

            {/* Foto — mobile, no fluxo */}
            <div className="md:hidden relative mx-auto mb-10 w-[88%] max-w-[340px]">
              <div
                aria-hidden="true"
                className="absolute right-0 bottom-0 w-[72%] h-[60%] bg-primary"
                style={{ borderRadius: '36px 0 0 0' }}
              />
              <img
                src={assets.mari.sticker}
                alt="Mariana Lima"
                className="relative z-10 block w-full h-auto"
                style={{ filter: 'drop-shadow(0 18px 36px rgba(17,29,68,0.28))' }}
                loading="lazy"
              />
            </div>

            <a href="#historia" className="btn btn-primary min-h-[52px] px-7 text-[15.5px]">
              Conheça a minha história
              <ArrowDown className="w-[17px] h-[17px]" />
            </a>
          </div>
        </div>

        <img
          src={assets.mari.sticker}
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute right-0 lg:right-[-20px] bottom-0 z-[3] w-[380px] lg:w-[500px] h-auto"
          style={{
            transform: 'rotate(-2deg)',
            transformOrigin: 'bottom right',
            filter: 'drop-shadow(0 22px 44px rgba(17,29,68,0.30))',
          }}
          loading="lazy"
        />
      </div>
    </section>
  );
}

// ─── Art. 4º — Do time de mentores ─────────────────────────────────────────

const supporting = [
  {
    id: 'vitor',
    name: 'Vitor Vilarinho',
    role: 'Oficial de Justiça · TJMA',
    description: 'Aprovado para Analista Judiciário do TRF3 e do TRT-10, e para Analista do MPPI.',
    image: assets.mentores.vitorLocal,
  },
  {
    id: 'petrus',
    name: 'Petrus Tabatinga',
    role: 'Auditor-Fiscal do Trabalho · CNU 2024',
    description: 'Também aprovado na Polícia Rodoviária Federal (2019) e como Perito Criminal da PCPI (2018).',
    image: assets.mentores.petrusLocal,
  },
];

export default function MentorSection() {
  return (
    <section
      id="mentores"
      className="relative py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #16224C 0%, #101C42 100%)' }}
    >
      <div className="max-w-page mx-auto px-5 md:px-8">
        <Article
          n={4}
          tone="dark"
          label="Do time de mentores"
          title={
            <>
              Você não vai estudar <Em tone="dark">sozinho</Em>
            </>
          }
          intro="Além da Mari, você conta com mentores aprovados que acompanham a sua evolução de perto em cada área da preparação."
        />

        <div className="mt-14 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-start-4 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8">
            {supporting.map((m) => (
              <figure key={m.id}>
                <div className="aspect-[4/5] rounded-media overflow-hidden bg-primary">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 22%' }}
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-5 border-t rule-inverse pt-4">
                  <div className="font-display text-[28px] leading-tight tracking-[-0.02em] text-white">
                    {m.name}
                  </div>
                  <div className="font-mono text-[12px] uppercase tracking-[0.08em] text-accent mt-2">
                    {m.role}
                  </div>
                  <p className="text-[15px] leading-[1.65] text-white/60 mt-3 max-w-[40ch]">
                    {m.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
