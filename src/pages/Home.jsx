import React from 'react';
import HeroBannerSection from '../components/sections/HeroBannerSection';
import VSLSection from '../components/sections/VSLSection';
import CTABandSection from '../components/sections/CTABandSection';
import DepoimentosReaisSection from '../components/sections/DepoimentosReaisSection';
import MentorSection from '../components/sections/MentorSection';
import ComoFuncionaSection from '../components/sections/ComoFuncionaSection';
import ComparacaoSection from '../components/sections/ComparacaoSection';
import MariIASection from '../components/sections/MariIASection';
import ArgumentoSection from '../components/sections/ArgumentoSection';
import TiposMentoriaSection from '../components/sections/TiposMentoriaSection';
import ParaQuemSection from '../components/sections/ParaQuemSection';
import FAQSection from '../components/sections/FAQSection';
import HistoriaSection from '../components/sections/HistoriaSection';
import ProximoPassoSection from '../components/sections/ProximoPassoSection';

export default function Home() {
  return (
    <>
      {/* 1. Impacto inicial */}
      <HeroBannerSection />

      {/* 2. VSL — gerar curiosidade */}
      <VSLSection />

      {/* 3. Primeira CTA */}
      <CTABandSection variant="primary" />

      {/* 4. Prova — resultados reais */}
      <DepoimentosReaisSection />

      {/* 5. Autoridade — quem é a mentora */}
      <MentorSection />

      {/* 6. Método — como funciona */}
      <ComoFuncionaSection />

      {/* 7. Comparação — com/sem método */}
      <ComparacaoSection />

      {/* 8. Demonstração — Mari IA */}
      <MariIASection />

      {/* 9. Argumento lógico */}
      <ArgumentoSection />

      {/* 10. Modalidades */}
      <TiposMentoriaSection />

      {/* 11. Para quem é */}
      <ParaQuemSection />

      {/* 12. FAQ */}
      <FAQSection />

      {/* 13. História pessoal */}
      <HistoriaSection />

      {/* 14. CTA Final */}
      <CTABandSection variant="secondary" />
      <ProximoPassoSection />
    </>
  );
}
