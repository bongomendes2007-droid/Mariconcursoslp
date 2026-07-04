import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    pergunta: 'Preciso já estar estudando para entrar?',
    resposta:
      'Não. A mentoria atende desde quem está começando do zero até quem já estuda há anos. O plano é montado a partir do seu ponto de partida.',
  },
  {
    pergunta: 'Serve para qualquer concurso?',
    resposta:
      'Sim. O método é aplicável a tribunais, prefeituras, bancos, área fiscal e demais carreiras. O plano se adapta ao edital que você escolher focar.',
  },
  {
    pergunta: 'Tenho pouco tempo para estudar. Funciona?',
    resposta:
      'Funciona — e foi pensado para isso. O plano é dimensionado para a sua disponibilidade real, priorizando o que mais rende dentro do tempo que você tem.',
  },
  {
    pergunta: 'Como funciona o acompanhamento?',
    resposta:
      'Você tem acesso à plataforma própria com metas, revisões e simulados, além do acompanhamento próximo da Mari e do time de mentores, com feedback constante.',
  },
  {
    pergunta: 'Como faço para começar?',
    resposta:
      'É só falar com a Mari pelo botão abaixo. Vocês conversam sobre o seu momento e ela indica o melhor caminho para a sua preparação.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="bg-white rounded-[18px] overflow-hidden transition-shadow duration-300"
      style={{ boxShadow: isOpen ? '0 18px 44px rgba(17,29,68,0.10)' : '0 10px 30px rgba(17,29,68,0.05)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-7 py-[22px] text-left gap-5"
      >
        <span className="font-heading font-semibold text-[17.5px] text-ink">{item.pergunta}</span>
        <motion.span
          className="flex-shrink-0 w-[30px] h-[30px] rounded-full border flex items-center justify-center text-secondary"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{
            borderColor: isOpen ? '#5D8BFF' : '#E1E4EA',
            background: isOpen ? 'rgba(93,139,255,0.10)' : 'transparent',
          }}
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[15px] leading-[1.7] text-ink-soft px-7 pb-6">{item.resposta}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-background py-28 px-5 md:px-6">
      {/* palavra gigante de fundo */}
      <div
        aria-hidden="true"
        className="absolute top-14 -right-7 z-0 font-heading font-extrabold pointer-events-none select-none hidden md:block"
        style={{
          fontSize: '168px',
          lineHeight: 0.9,
          letterSpacing: '-6px',
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(93,139,255,0.10)',
        }}
      >
        dúvidas
      </div>

      <div className="relative z-10 max-w-[820px] mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-[30px] h-0.5 bg-secondary" />
            <span className="text-secondary text-[12.5px] font-bold tracking-[0.2em] uppercase">
              Tire suas dúvidas
            </span>
            <span className="w-[30px] h-0.5 bg-secondary" />
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-[50px] leading-[1.05] tracking-[-0.02em] text-ink">
            Perguntas <span className="font-serif italic font-medium text-secondary">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={faq.pergunta} item={faq} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
