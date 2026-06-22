import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { whatsappLink } from './components/ui/WhatsAppButton';
import StickyMobileCTA from './components/StickyMobileCTA';

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: #262626; border-radius: 2px; }
        ::selection { background: #4F46E5; color: #fff; }
      `}</style>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#262626]' : 'bg-transparent'}`
      }>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-18 py-5">
            <Link to="/" className="flex items-center">
              <span className="text-lg font-bold tracking-widest uppercase" style={{
                background: 'linear-gradient(90deg, #fff 60%, #A1A1AA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Mari<span style={{ background: 'linear-gradient(90deg, #4F46E5, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Concursos</span>
              </span>
            </Link>

            <div className="hidden md:block">
              


              
            </div>

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen &&
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#111111] border-t border-[#262626]">
              <div className="px-6 py-6">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center text-white px-6 py-3 rounded-full font-semibold w-full text-sm tracking-wide"
              style={{ background: 'linear-gradient(135deg, #4F46E5, #22D3EE)' }}
              onClick={() => setMobileMenuOpen(false)}>
                  Falar com a equipe
                </a>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </header>

      <main>{children}</main>

      <StickyMobileCTA />

      <footer className="bg-[#0A0A0A] border-t border-[#262626] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="mb-3">
                <span className="text-base font-bold tracking-widest uppercase">
                  <span className="text-white">Mari</span>
                  <span style={{ background: 'linear-gradient(90deg, #4F46E5, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Concursos</span>
                </span>
              </div>
              <p className="text-[#A1A1AA] text-sm max-w-xs">Método de preparação estratégica para concursos públicos.</p>
            </div>
            <div className="text-right">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] text-sm hover:text-white transition-colors">Entrar em contato →</a>
              <p className="text-[#52525B] text-xs mt-2">Atendimento: Seg–Sex, 9h–18h</p>
            </div>
          </div>
          <div className="border-t border-[#1E1E1E] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#52525B] text-sm">© 2026 MARICONCURSOS. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-[#52525B] text-sm">
              <a href="#" className="hover:text-[#A1A1AA] transition-colors">Termos</a>
              <a href="#" className="hover:text-[#A1A1AA] transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>);

}
