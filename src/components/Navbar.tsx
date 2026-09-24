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
        ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DC] shadow-xs py-2.5' 
        : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#EAE5DC]/80 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo with authentic monogram and slogan */}
        <a href="#inicio" className="group flex items-center shrink-0">
          <JivoteckLogo size="md" darkText={true} showSubtitle={true} />
        </a>

        {/* Clean Quick Search pill (visible on desktop) */}
        <div className="hidden lg:flex items-center flex-1 max-w-sm mx-4">
          <div className="relative w-full flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'ES' ? 'Buscar servicio o desarrollo...' : 'Search service or project...'}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-white rounded-full border border-[#D8D2C6] focus:border-[#2E4846] focus:outline-none focus:ring-1 focus:ring-[#2E4846] transition-all text-[#13262F] placeholder-[#8FA89B]"
            />
            <Search className="w-3.5 h-3.5 text-[#8FA89B] absolute left-3 pointer-events-none" />
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
                  ? 'text-[#13262F] bg-[#F4F1EA] hover:bg-[#EAE5DC] font-bold border border-[#D8D2C6]'
                  : 'text-[#4A635B] hover:text-[#13262F] hover:bg-[#F4F1EA]/60'
              }`}
            >
              <span>{link.name}</span>
              {link.isHighlight && (
                <>
                  <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold bg-[#E2DDD4] text-[#2E4846] rounded">
                    BETA
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#2E4846]" />
                </>
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          
          {/* Status pill in warm tone */}
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-[#F4F1EA] text-[#2E4846] border border-[#D8D2C6]">
            <span className="w-2 h-2 rounded-full bg-[#50756C] animate-pulse"></span>
            <span>Aguascalientes, MX</span>
          </div>

          {/* Interactive Language Selector */}
          <button
            onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-semibold rounded-lg border border-[#D8D2C6] bg-white text-[#13262F] hover:bg-[#F4F1EA] transition-colors shadow-2xs"
            title="Cambiar idioma / Switch language"
          >
            <Globe className="w-3 h-3 text-[#2E4846]" />
            <span>{lang}</span>
          </button>

          {/* CTA Contact button */}
          <a
            href="#contacto"
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#13262F] hover:bg-[#1D3845] rounded-lg transition-all flex items-center gap-1.5 shadow-sm hover:shadow"
          >
            <span>{lang === 'ES' ? 'Cotizar' : 'Contact'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#13262F] hover:bg-[#F4F1EA] focus:outline-none"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#EAE5DC] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="mb-3 flex items-center gap-2 px-2 py-1.5 bg-[#F4F1EA] border border-[#D8D2C6] rounded-lg text-xs font-mono text-[#2E4846]">
            <span className="w-2 h-2 rounded-full bg-[#50756C]"></span>
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
                  ? 'text-[#13262F] bg-[#F4F1EA] border border-[#D8D2C6]'
                  : 'text-[#4A635B] hover:text-[#13262F] hover:bg-[#F4F1EA]/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span>{link.name}</span>
                  {link.isExternal && <ExternalLink className="w-3.5 h-3.5" />}
                </span>
                {link.isHighlight && (
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#E2DDD4] text-[#2E4846] rounded">
                    industrialpedia.com.mx
                  </span>
                )}
              </div>
            </a>
          ))}

          <div className="pt-3 border-t border-[#EAE5DC] flex flex-col gap-2">
            <button
              onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
              className="flex items-center justify-between px-3 py-2 text-xs font-mono font-semibold text-[#13262F] bg-white rounded-lg border border-[#D8D2C6]"
            >
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#2E4846]" />
                <span>Idioma actual</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-[#F4F1EA] border border-[#D8D2C6] text-[#2E4846] font-bold">
                {lang} (Cambiar)
              </span>
            </button>

            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#13262F] rounded-lg shadow"
            >
              Cotizar con JIVOTECK
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
