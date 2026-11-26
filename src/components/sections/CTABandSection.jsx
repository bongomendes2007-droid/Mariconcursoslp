import React from 'react';
import { ArrowRight } from 'lucide-react';
import { whatsappLink } from '../ui/WhatsAppButton';
import Article, { Em } from '../ui/Article';

export default function CTABandSection() {
  return (
    <section
      className="relative overflow-hidden pt-24 md:pt-32 pb-0"
      style={{
        background:
          'radial-gradient(70% 60% at 85% 10%, #2A3F86 0%, rgba(26,43,94,0) 70%), linear-gradient(180deg, #13205A 0%, #101C42 100%)',
      }}
    >
      <div className="relative z-10 max-w-page mx-auto px-5 md:px-8">
        <Article
          n={10}
          tone="dark"
          label="Da inscrição"
          title={
            <>
              A sua aprovação começa <Em tone="dark">hoje</Em>
            </>
          }
          intro="Pare de estudar no escuro. Fale com a Mari, entenda o que te separa da vaga e comece com um plano feito para você."
        />

        <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-10">
          <div className="lg:col-start-4 lg:col-span-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light min-h-[58px] px-9 text-[17px]"
            >
              Falar com a Mari
              <ArrowRight className="btn-arrow w-[19px] h-[19px]" />
            </a>
            <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-white/50">
              Sem compromisso · resposta pelo WhatsApp
            </span>
          </div>
        </div>
      </div>

      {/* A única palavra gigante da página — o objetivo do leitor, assinando o fim do edital */}
      <div
        aria-hidden="true"
        className="relative mt-6 md:mt-4 font-display italic font-[340] text-white/[0.06] leading-[0.75] tracking-[-0.05em] whitespace-nowrap select-none pointer-events-none text-center"
        style={{ fontSize: 'clamp(160px, 34vw, 480px)', marginBottom: '-0.08em' }}
      >
        vaga.
      </div>
    </section>
  );
}
