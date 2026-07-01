import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { whatsappLink } from './components/ui/WhatsAppButton';
import StickyMobileCTA from './components/StickyMobileCTA';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Método', href: '#metodo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

function Logo() {
  return (
    <span className="font-heading text-lg font-extrabold tracking-widest uppercase text-white">
      Mari<span className="text-accent">Concursos</span>
    </span>
  );
}

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary">
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #1D2B63; }
        ::-webkit-scrollbar-thumb { background: #214C8F; border-radius: 3px; }
        ::selection { background: #5D8BFF; color: #fff; }
        :focus-visible { outline: 2px solid #76D7E3; outline-offset: 3px; border-radius: 4px; }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-primary/90 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center" aria-label="MariConcursos — início">
              <Logo />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-pill font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
                style={{ background: 'linear-gradient(135deg, #5D8BFF, #76D7E3)' }}
              >
                <MessageCircle className="w-4 h-4" />
                Falar com a Mari
              </a>
            </nav>

            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-primary-light/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-white/80 hover:text-white py-3 text-base font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-pill font-semibold w-full text-sm"
                  style={{ background: 'linear-gradient(135deg, #5D8BFF, #76D7E3)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar com a Mari
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>{children}</main>

      <StickyMobileCTA />

      <footer className="bg-primary border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="mb-3">
                <Logo />
              </div>
              <p className="text-white/50 text-sm max-w-xs">
                Mentoria estratégica para sua aprovação em concursos públicos.
              </p>
            </div>
            <div className="text-left md:text-right">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm hover:text-white transition-colors"
              >
                Falar com a Mari no WhatsApp →
              </a>
              <p className="text-white/40 text-xs mt-2">Atendimento: Seg–Sex, 9h–18h</p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2026 MARICONCURSOS. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-white/40 text-sm">
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
