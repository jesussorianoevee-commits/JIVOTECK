import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ExternalLink, Globe, Search } from 'lucide-react';
import { JivoteckLogo } from './JivoteckLogo';
import { siteConfig } from '../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'ES' ? 'Inicio' : 'Home', href: '#inicio' },
    { name: lang === 'ES' ? 'Servicios' : 'Services', href: '#servicios' },
    { 
      name: 'Industrialpedia', 
      href: siteConfig.industrialpedia.websiteUrl, 
      isHighlight: true,
      isExternal: true 
    },
    { name: lang === 'ES' ? 'Nosotros' : 'About', href: '#nosotros' },
    { name: 'FAQ', href: '#faq' },
    { name: lang === 'ES' ? 'Contacto' : 'Contact', href: '#contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-2.5' 
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo with modern light styling */}
        <a href="#inicio" className="group flex items-center shrink-0">
          <JivoteckLogo size="md" darkText={true} />
        </a>

        {/* Clean Quick Search pill (visible on desktop) */}
        <div className="hidden lg:flex items-center flex-1 max-w-sm mx-4">
          <div className="relative w-full flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'ES' ? 'Buscar servicio o desarrollo...' : 'Search service or project...'}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 hover:bg-slate-100/70 focus:bg-white rounded-full border border-slate-200 focus:border-[#0284C7] focus:outline-none focus:ring-1 focus:ring-[#0284C7] transition-all text-slate-700 placeholder-slate-400"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                link.isHighlight
                  ? 'text-[#0284C7] bg-sky-50 hover:bg-sky-100/70 font-bold border border-sky-200/70'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <span>{link.name}</span>
              {link.isHighlight && (
                <>
                  <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold bg-[#00D4FF]/20 text-[#0284C7] rounded">
                    BETA
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#0284C7]" />
                </>
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          
          {/* Status pill in light sky tones */}
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-sky-50 text-[#0284C7] border border-sky-200/70">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse"></span>
            <span>Aguascalientes, MX</span>
          </div>

          {/* Interactive Language Selector */}
          <button
            onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
            title="Cambiar idioma / Switch language"
          >
            <Globe className="w-3 h-3 text-[#0284C7]" />
            <span>{lang}</span>
          </button>

          {/* CTA Contact button */}
          <a
            href="#contacto"
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0284C7] to-[#00D4FF] hover:from-[#0369A1] hover:to-[#38BDF8] rounded-lg transition-all flex items-center gap-1.5 shadow-md shadow-sky-500/20 hover:shadow-lg"
          >
            <span>{lang === 'ES' ? 'Cotizar' : 'Contact'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="mb-3 flex items-center gap-2 px-2 py-1.5 bg-sky-50 border border-sky-200/70 rounded-lg text-xs font-mono text-[#0284C7]">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF]"></span>
            <span>Aguascalientes, México • Operaciones Activas</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-semibold rounded-lg ${
                link.isHighlight
                  ? 'text-[#0284C7] bg-sky-50 border border-sky-200/70'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span>{link.name}</span>
                  {link.isExternal && <ExternalLink className="w-3.5 h-3.5" />}
                </span>
                {link.isHighlight && (
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#00D4FF]/20 text-[#0284C7] rounded">
                    industrialpedia.com.mx
                  </span>
                )}
              </div>
            </a>
          ))}

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
              className="flex items-center justify-between px-3 py-2 text-xs font-mono font-semibold text-slate-700 bg-slate-50 rounded-lg border border-slate-200"
            >
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Idioma actual</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[#0284C7] font-bold">
                {lang} (Cambiar)
              </span>
            </button>

            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0284C7] to-[#00D4FF] rounded-lg shadow"
            >
              Cotizar con JIVOTECK
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
