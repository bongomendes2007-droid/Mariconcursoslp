import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { whatsappLink } from '../ui/WhatsAppButton';
import CountUp from '../ui/CountUp';
import assets from '../../data/assets';

const stats = [
  { value: '+50', label: 'Alunos mentorados por todo o Brasil' },
  { value: '+11', label: 'Aprovações em concursos públicos' },
  { value: '+4 anos', label: 'Dedicados a concursos públicos' },
  { value: '100%', label: 'Acompanhamento individual' },
];

/*
 * Coreografia da entrada (uma vez por visita):
 *   Lead       título, linha a linha (máscara)        0 / 90ms
 *   Support    foto da Mari (settle)                   150ms
 *              parágrafo                               300ms
 *              CTAs                                    380ms
 *   Decoração  rubrica do edital, formas              fade apenas
 *   Estático   fundo, header, card de números (conta ao entrar na tela)
 */
export default function HeroBannerSection() {
  return (
    <section id="inicio" className="relative paper-grain">
      <div
        className="relative overflow-hidden pt-24 md:pt-32"
        style={{
          background:
            'radial-gradient(90% 70% at 78% 30%, #2A3F86 0%, rgba(26,43,94,0) 70%), linear-gradient(180deg, #13205A 0%, #101C42 100%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 93%, 0 100%)',
        }}
      >
        <div className="relative z-10 w-full max-w-page mx-auto px-5 md:px-8">
          {/* Rubrica do edital */}
          <div
            className="enter-fade flex items-center gap-4 border-t rule-inverse pt-4 mb-7 md:mb-14 font-mono text-[12px] tracking-[0.08em] uppercase text-white/50"
            style={{ '--d': '0ms' }}
          >
            <span className="text-accent">Edital nº 01/2026</span>
            <span className="hidden sm:inline">Mentoria para concursos públicos</span>
            <span className="ml-auto hidden md:inline">Vagas limitadas</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
            {/* ESQUERDA — texto */}
            <div className="lg:col-span-7 pb-2 lg:pb-32">
              <h1 className="font-display font-[460] text-white text-[42px] leading-[0.98] sm:text-[64px] lg:text-[84px] tracking-[-0.03em] mb-6 md:mb-8">
                <span className="reveal-line">
                  <span style={{ '--d': '0ms' }}>Domine o edital,</span>
                </span>
                <span className="reveal-line">
                  <span style={{ '--d': '90ms' }}>
                    conquiste sua{' '}
                    <em className="italic font-[360] text-accent">vaga.</em>
                  </span>
                </span>
              </h1>

              <p
                className="enter-rise text-white/70 text-[16px] md:text-lg leading-[1.65] max-w-[46ch] mb-8 md:mb-10"
                style={{ '--d': '300ms' }}
              >
                Mentoria estratégica com a Mariana Lima para quem quer parar de estudar no escuro e
                passar de verdade. Plano de estudos sob medida, acompanhamento próximo e um método
                testado na prática.
              </p>

              <div
                className="enter-rise flex flex-wrap items-center gap-x-7 gap-y-4"
                style={{ '--d': '380ms' }}
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary min-h-[54px] px-8 text-[16px]"
                >
                  Falar com a Mari
                  <ArrowRight className="btn-arrow w-[18px] h-[18px]" />
                </a>
                <a
                  href="#metodo"
                  className="link-underline inline-flex items-center gap-2 text-white/80 text-[15px] font-medium py-2"
                >
                  Como funciona o método
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* DIREITA — foto da Mari */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] h-[380px] sm:h-[520px] lg:h-[620px]">
                <div
                  aria-hidden="true"
                  className="enter-fade absolute top-[10%] left-[2%] w-[72%] h-[66%]"
                  style={{
                    '--d': '250ms',
                    borderRadius: '64px 160px 64px 160px',
                    background: 'linear-gradient(155deg, #3A57A6 0%, #22357A 100%)',
                  }}
                />
                <div
                  aria-hidden="true"
                  className="enter-fade absolute bottom-[16%] -right-[2%] w-[26%] h-[28%]"
                  style={{ '--d': '350ms', borderRadius: '110px 24px 110px 24px', background: '#76D7E3' }}
                />
                <img
                  src={assets.mari.hero}
                  alt="Mariana Lima, mentora da MariConcursos"
                  className="enter-settle absolute inset-0 z-10 w-full h-full object-contain object-bottom"
                  style={{ '--d': '150ms', filter: 'drop-shadow(0 30px 40px rgba(5,10,30,0.45))' }}
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quadro de números — sobre a diagonal */}
      <div className="relative z-20 -mt-12 md:-mt-16 w-full max-w-page mx-auto px-5 md:px-8">
        <dl
          className="bg-white rounded-card grid grid-cols-2 md:grid-cols-4 overflow-hidden"
          style={{ boxShadow: '0 1px 0 rgba(20,33,77,0.06), 0 30px 60px -20px rgba(17,29,68,0.25)' }}
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={value}
              className={`flex flex-col px-6 py-7 md:px-8 md:py-9 rule ${i % 2 === 0 ? 'border-r' : ''} ${
                i < 2 ? 'border-b md:border-b-0' : ''
              } ${i === 1 ? 'md:border-r' : ''}`}
            >
              <dt className="order-2 text-[14px] text-ink-soft mt-3 leading-snug max-w-[22ch]">
                {label}
              </dt>
              <dd className="font-display font-[460] text-[40px] md:text-[52px] leading-none tracking-[-0.03em] text-ink -order-1">
                <CountUp value={value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
