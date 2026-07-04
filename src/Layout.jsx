import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Instagram, Youtube } from 'lucide-react';
import { whatsappLink } from './components/ui/WhatsAppButton';
import StickyMobileCTA from './components/StickyMobileCTA';
import assets from './data/assets';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Como funciona', href: '#metodo' },
  { label: 'Aprovações', href: '#aprovacoes' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

const footerNav = [
  { label: 'Sobre a Mari', href: '#sobre' },
  { label: 'Como funciona', href: '#metodo' },
  { label: 'Mentores', href: '#aprovacoes' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

const footerAjuda = [
  { label: 'Perguntas frequentes', href: '#faq' },
  { label: 'Falar com a Mari', href: whatsappLink },
  { label: 'Plataforma', href: '#' },
];

const socialLinks = [
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'YouTube', href: '#', Icon: Youtube },
];

function Logo({ className = 'h-10' }) {
  return (
    <img
      src={assets.logo.horizontalWhite}
      alt="MariConcursos"
      className={`${className} w-auto block`}
    />
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
        ::-webkit-scrollbar-track { background: #1A2B5E; }
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
                  className="text-white/80 hover:text-accent text-[15px] font-medium transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-pill font-semibold text-sm shadow-md transition-colors hover:bg-accent hover:text-primary"
                style={{ background: '#5D8BFF' }}
              >
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

      <footer style={{ background: '#0D1636' }} className="pt-16 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-white/10">
            <div>
              <Logo className="h-12 mb-5" />
              <p className="text-white/55 text-[14.5px] leading-relaxed max-w-xs">
                Mentoria de concursos públicos com método, acompanhamento próximo e um time que já
                levou centenas de alunos à aprovação.
              </p>
            </div>

            <div>
              <div className="font-heading font-bold text-sm text-white mb-4">Navegação</div>
              <div className="flex flex-col gap-3 text-[14.5px]">
                {footerNav.map((l) => (
                  <a key={l.label} href={l.href} className="text-white/60 hover:text-accent transition-colors">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="font-heading font-bold text-sm text-white mb-4">Ajuda</div>
              <div className="flex flex-col gap-3 text-[14.5px]">
                {footerAjuda.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="font-heading font-bold text-sm text-white mb-4">Redes sociais</div>
              <div className="flex gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-[42px] h-[42px] rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-white/75 hover:bg-secondary hover:text-white transition-colors"
                  >
                    <Icon className="w-[19px] h-[19px]" strokeWidth={1.8} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-7">
            <p className="text-white/45 text-[13.5px]">
              © 2026 MariConcursos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-[13.5px]">
              <a href="#" className="text-white/45 hover:text-accent transition-colors">Política de privacidade</a>
              <a href="#" className="text-white/45 hover:text-accent transition-colors">Termos de uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
