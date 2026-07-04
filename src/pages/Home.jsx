import React from 'react';
import HeroBannerSection from '../components/sections/HeroBannerSection';
import DepoimentosReaisSection from '../components/sections/DepoimentosReaisSection';
import VSLSection from '../components/sections/VSLSection';
import MentorSection, { MentorIntroSection } from '../components/sections/MentorSection';
import ParaQuemSection from '../components/sections/ParaQuemSection';
import HistoriaSection from '../components/sections/HistoriaSection';
import ComoFuncionaSection from '../components/sections/ComoFuncionaSection';
import ComparacaoSection from '../components/sections/ComparacaoSection';
import FAQSection from '../components/sections/FAQSection';
import CTABandSection from '../components/sections/CTABandSection';

export default function Home() {
  return (
    <>
      {/* 1. Impacto inicial + estatísticas */}
      <HeroBannerSection />

      {/* 2. Prova — resultados reais */}
      <DepoimentosReaisSection />

      {/* 3. VSL + aprovações */}
      <VSLSection />

      {/* 4. Quem vai te guiar — a Mari */}
      <MentorIntroSection />

      {/* 5. Outros mentores */}
      <MentorSection />

      {/* 6. Para quem é */}
      <ParaQuemSection />

      {/* 7. História pessoal */}
      <HistoriaSection />

      {/* 8. Por que o método funciona */}
      <ComoFuncionaSection />

      {/* 9. Comparação — com/sem método */}
      <ComparacaoSection />

      {/* 10. FAQ */}
      <FAQSection />

      {/* 11. CTA Final */}
      <CTABandSection />
    </>
  );
}
