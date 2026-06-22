import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const whatsappLink = "https://wa.me/5586994927605?text=Oi%21%20Vim%20pela%20p%C3%A1gina%20e%20queria%20entender%20melhor%20como%20funciona%20a%20mentoria.%20Voc%C3%AA%20pode%20me%20explicar%20como%20come%C3%A7ar%3F";

// Nova paleta - Azul profundo moderno
export const colors = {
  primary: '#0F172A',      // Azul escuro quase preto (backgrounds)
  secondary: '#1E293B',    // Azul escuro médio
  accent: '#3B82F6',       // Azul vibrante (CTAs)
  accentHover: '#2563EB',  // Azul vibrante hover
  light: '#94A3B8',        // Cinza azulado claro
  card: '#1E293B',         // Cards
  border: '#334155',       // Bordas
};

export default function WhatsAppButton({ floating = false }) {
  if (floating) {
    return (
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#3B82F6] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow md:hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    );
  }

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#3B82F6] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2563EB] transition-colors shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <MessageCircle className="w-5 h-5" />
      Quero fazer parte da mentoria
    </motion.a>
  );
}
