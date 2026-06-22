import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { pergunta: 'O método funciona mesmo sem ter base?', resposta: 'Sim. O processo começa com um diagnóstico completo. Se você está no início, o plano será construído do zero, com ritmo e materiais adaptados ao seu momento. Você não precisa chegar pronto — precisa chegar comprometido.' },
  { pergunta: 'Quanto tempo por dia preciso dedicar?', resposta: 'Depende do concurso e do seu prazo. O plano é personalizado para sua rotina real. Estudar 3h focadas com método é mais eficaz do que 8h dispersas sem direção. O importante é a consistência.' },
  { pergunta: 'Em quanto tempo posso ser aprovado?', resposta: 'Não existe prazo único. O resultado depende do concurso, da sua base atual e do comprometimento. O que o método garante é que você estará no caminho mais eficiente possível, sem desperdiçar tempo com o que não importa.' },
  { pergunta: 'Funciona para qualquer tipo de concurso?', resposta: 'O método é adaptado para o seu concurso-alvo. Fazemos a análise do edital, identificamos as matérias de maior peso e montamos um cronograma estratégico específico para o cargo que você quer.' },
  { pergunta: 'Qual a diferença para um cursinho comum?', resposta: 'Cursinhos entregam conteúdo para todos. O MariConcursos entrega um processo personalizado para você. Diagnóstico, estratégia, execução e acompanhamento semanal com ajuste de rota — tudo focado no seu edital.' },
  { pergunta: 'Preciso me comprometer por quanto tempo?', resposta: 'Não há contrato de longo prazo. Você se compromete com o processo enquanto ele faz sentido para você. A maioria dos alunos continua porque vê resultado, não por obrigação.' }
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#1E1E1E]">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-6 text-left gap-6 group">
        <span className={`text-sm md:text-base font-semibold leading-snug transition-colors duration-200 ${isOpen ? 'text-white' : 'text-[#A1A1AA] group-hover:text-white'}`}>
          {item.pergunta}
        </span>
        <div className="w-8 h-8 rounded-full border border-[#262626] flex items-center justify-center shrink-0 group-hover:border-[#4F46E5] transition-colors duration-200"
          style={{ background: isOpen ? 'rgba(79,70,229,0.1)' : 'transparent' }}>
          {isOpen ? <Minus className="w-3.5 h-3.5 text-[#4F46E5]" /> : <Plus className="w-3.5 h-3.5 text-[#52525B]" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <p className="text-[#A1A1AA] text-sm leading-[1.9] pb-6 pr-14">{item.resposta}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-40" style={{ background: '#0A0A0A' }}>
      <div className="max-w-3xl mx-auto px-5 md:px-6">
        <motion.div className="mb-10 md:mb-14" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-[#52525B] text-xs font-medium tracking-[0.2em] uppercase mb-5">Perguntas Frequentes</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-[-0.02em]">Tire suas dúvidas.</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="border-t border-[#1E1E1E]">
          {faqs.map((faq, i) => (
            <FAQItem key={i} item={faq} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
