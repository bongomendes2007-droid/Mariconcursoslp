import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { whatsappLink } from './ui/WhatsAppButton';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();
  const hiddenY = reduce ? 0 : 80;

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
          style={{
            background: 'linear-gradient(to top, #101C42 60%, transparent)',
            paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
          }}
          initial={{ y: hiddenY, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: hiddenY, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary w-full min-h-[52px] text-[15px]">
            Falar com a Mari
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </a>
          <p className="text-center font-mono uppercase tracking-[0.1em] text-white/50 text-[10px] mt-2.5">Sem compromisso · Vagas limitadas</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
