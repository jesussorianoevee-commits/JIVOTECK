import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Industrialpedia', href: '#industrialpedia', isHighlight: true },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0A0D14]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-xl shadow-black/30' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 via-blue-500/20 to-purple-500/10 border border-indigo-500/30 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-indigo-400 group-hover:shadow-lg group-hover:shadow-indigo-500/20">
            <Layers className="w-5 h-5 text-indigo-400 transition-colors group-hover:text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-sans">
              {siteConfig.name}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
              Software & Automation
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/50 p-1.5 rounded-xl border border-white/[0.06] backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 ${
                link.isHighlight
                  ? 'text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <span>{link.name}</span>
              {link.isHighlight && (
                <span className="ml-1.5 px-1.5 py-0.5 text-[9px] uppercase tracking-wider font-semibold bg-indigo-500/20 text-indigo-300 rounded">
                  Próx
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`mailto:${siteConfig.contact.primaryEmail}`}
            className="flex items-center gap-2 text-xs text-slate-300 hover:text-indigo-400 font-mono transition-colors px-2 py-1"
            title={siteConfig.contact.primaryEmail}
          >
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden xl:inline">{siteConfig.contact.primaryEmail}</span>
          </a>
          
          <a
            href="#contacto"
            className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 hover:from-indigo-400 hover:to-blue-500 rounded-lg shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Iniciar Consulta</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0D14]/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                link.isHighlight
                  ? 'text-indigo-300 bg-indigo-500/10 border border-indigo-500/20'
                  : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{link.name}</span>
                {link.isHighlight && (
                  <span className="px-2 py-0.5 text-[10px] font-semibold uppercase bg-indigo-500/20 text-indigo-300 rounded">
                    Próximamente
                  </span>
                )}
              </div>
            </a>
          ))}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2">
            <a
              href={`mailto:${siteConfig.contact.primaryEmail}`}
              className="flex items-center justify-center gap-2 py-2 text-xs text-slate-300 bg-slate-900/60 rounded-lg border border-white/[0.08]"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>{siteConfig.contact.primaryEmail}</span>
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md font-sans"
            >
              Hablemos de tu Proyecto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
