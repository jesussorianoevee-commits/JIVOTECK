import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ArrowUpRight, Mail } from 'lucide-react';
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
      isScrolled ? 'bg-[#080C15]/90 backdrop-blur-md border-b border-brand-border py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan/20 via-brand-blue/30 to-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-brand-cyan shadow-sm shadow-cyan-500/20">
            <Cpu className="w-5 h-5 text-brand-cyan transition-colors group-hover:text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider text-white font-mono flex items-center gap-1.5">
              {siteConfig.name}
              <span className="inline-block w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Tech & Automation</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                link.isHighlight
                  ? 'text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/30 hover:bg-brand-cyan/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.name}
              {link.isHighlight && (
                <span className="ml-1.5 px-1.5 py-0.5 text-[9px] uppercase tracking-wider font-bold bg-brand-cyan/30 text-brand-cyan rounded">
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
            className="flex items-center gap-2 text-xs text-slate-300 hover:text-brand-cyan font-mono transition-colors px-2 py-1"
            title={siteConfig.contact.primaryEmail}
          >
            <Mail className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="hidden xl:inline">{siteConfig.contact.primaryEmail}</span>
          </a>
          <a
            href="#contacto"
            className="px-4 py-2 text-sm font-medium text-black bg-gradient-to-r from-brand-cyan to-sky-400 rounded-lg font-mono hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Cotizar</span>
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
        <div className="md:hidden bg-[#0B1220]/95 backdrop-blur-xl border-b border-brand-border px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                link.isHighlight
                  ? 'text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{link.name}</span>
                {link.isHighlight && (
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-brand-cyan/20 text-brand-cyan rounded">
                    Próximamente
                  </span>
                )}
              </div>
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`mailto:${siteConfig.contact.primaryEmail}`}
              className="flex items-center justify-center gap-2 py-2 text-sm text-slate-300 bg-slate-900/60 rounded-lg border border-slate-800"
            >
              <Mail className="w-4 h-4 text-brand-cyan" />
              <span>{siteConfig.contact.primaryEmail}</span>
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-black bg-brand-cyan rounded-lg shadow-md font-mono"
            >
              Hablemos de tu Proyecto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
