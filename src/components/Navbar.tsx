import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, ArrowUpRight } from 'lucide-react';
import { JivoteckLogo } from './JivoteckLogo';
import { siteConfig } from '../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', isExternal: false },
    { name: 'Ecosistema', href: '#ecosistema', isExternal: false },
    { name: 'Cómo construimos', href: '#como-construimos', isExternal: false },
    { name: 'Nosotros', href: '#nosotros', isExternal: false },
    { name: 'Prensa', href: '#prensa', isExternal: false },
    {
      name: 'Industrialpedia',
      href: siteConfig.industrialpedia.websiteUrl,
      isExternal: true
    },
    { name: 'Contacto', href: '#contacto', isExternal: false }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled
        ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DC] shadow-xs py-2.5'
        : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#EAE5DC]/80 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* Brand Logo with authentic monogram */}
        <a
          href="#inicio"
          className="group flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846] rounded-lg"
          aria-label="JIVOTECK Inicio"
        >
          <JivoteckLogo size="md" darkText={true} showSubtitle={true} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
          {navLinks.map((link) => {
            if (link.isExternal) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 text-[#13262F] bg-[#F4F1EA] hover:bg-[#EAE5DC] border border-[#D8D2C6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
                  title="Visitar Industrialpedia (sitio externo)"
                >
                  <span>{link.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#2E4846]" aria-hidden="true" />
                </a>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all text-[#4A635B] hover:text-[#13262F] hover:bg-[#F4F1EA]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="#contacto"
            className="min-h-[40px] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#13262F] hover:bg-[#1D3845] rounded-xl transition-all flex items-center gap-1.5 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
          >
            <span>Contacto</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu toggle (accessible min 44x44px target) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-xl text-[#13262F] hover:bg-[#F4F1EA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846] flex items-center justify-center"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE5DC] px-4 pt-3 pb-6 space-y-1 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className={`min-h-[44px] flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846] ${
                link.isExternal
                  ? 'text-[#13262F] bg-[#F4F1EA] border border-[#D8D2C6]'
                  : 'text-[#4A635B] hover:text-[#13262F] hover:bg-[#F4F1EA]/60'
              }`}
            >
              <span>{link.name}</span>
              {link.isExternal && (
                <span className="flex items-center gap-1 text-xs font-mono text-[#2E4846]">
                  <span>industrialpedia.com.mx</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              )}
            </a>
          ))}

          <div className="pt-3 border-t border-[#EAE5DC]">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] w-full flex items-center justify-center text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#13262F] hover:bg-[#1D3845] rounded-xl shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4846]"
            >
              Contacto corporativo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
