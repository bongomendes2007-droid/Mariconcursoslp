import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { whatsappLink } from './ui/WhatsAppButton';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-5 pb-6 pt-4"
          style={{ background: 'linear-gradient(to top, #0A0A0A 60%, transparent)' }}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full min-h-[52px] text-white rounded-full font-bold text-sm tracking-wide active:scale-[0.98] transition-transform"
            style={{ background: 'linear-gradient(135deg, #4F46E5, #22D3EE)' }}>
            Quero minha vaga
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </a>
          <p className="text-center text-[#52525B] text-[10px] mt-2.5">Sem compromisso · Vagas limitadas</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
