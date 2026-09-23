import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { JivoteckLogo } from './JivoteckLogo';
import { siteConfig } from '../config/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3.5' : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo matching Base44 reference */}
        <a href="#inicio" className="flex items-center gap-2">
          <JivoteckLogo size="md" darkText={true} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors ${
                link.isHighlight
                  ? 'text-[#0099CC] hover:text-[#00B4D8]'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <span>{link.name}</span>
              {link.isHighlight && (
                <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-mono font-bold bg-[#EAF4FE] text-[#0099CC] rounded">
                  PRÓX
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`mailto:${siteConfig.contact.primaryEmail}`}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-mono transition-colors"
            title={siteConfig.contact.primaryEmail}
          >
            <Mail className="w-3.5 h-3.5 text-[#0099CC]" />
            <span className="hidden xl:inline">{siteConfig.contact.primaryEmail}</span>
          </a>

          <a
            href="#contacto"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>Contacto</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded text-slate-700 hover:text-slate-950 focus:outline-none"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-semibold uppercase tracking-wider ${
                link.isHighlight
                  ? 'text-[#0099CC] bg-[#EAF4FE] rounded'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{link.name}</span>
                {link.isHighlight && (
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#D2E8FD] text-[#0099CC] rounded">
                    COMING SOON
                  </span>
                )}
              </div>
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={`mailto:${siteConfig.contact.primaryEmail}`}
              className="flex items-center justify-center gap-2 py-2 text-xs font-mono text-slate-600 bg-slate-50 rounded border border-slate-200"
            >
              <Mail className="w-4 h-4 text-[#0099CC]" />
              <span>{siteConfig.contact.primaryEmail}</span>
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 rounded shadow"
            >
              Hablemos de tu Proyecto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
