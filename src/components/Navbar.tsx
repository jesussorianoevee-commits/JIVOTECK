import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { JivoteckLogo } from './JivoteckLogo';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'quienes-somos', 'ecosistema', 'contacto'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Quiénes somos', href: '#quienes-somos', id: 'quienes-somos' },
    { name: 'Ecosistema', href: '#ecosistema', id: 'ecosistema' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0E2433] border-b border-[#0E2433]/40 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">

        {/* Brand Logo matching mockup */}
        <a
          href="#inicio"
          className="group flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] rounded-lg"
          aria-label="JIVOTECK Inicio"
        >
          <JivoteckLogo size="md" variant="dark" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#FF6B35] rounded-full animate-in fade-in"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Pill Action Button */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="#contacto"
            className="border border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
          >
            <span>Contacto</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] flex items-center justify-center"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden bg-[#0E2433] border-b border-white/10 px-6 pt-3 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`min-h-[44px] flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeSection === link.id
                  ? 'text-[#FF6B35] bg-white/5 font-semibold'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{link.name}</span>
            </a>
          ))}

          <div className="pt-3 border-t border-white/10">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B35] border border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white rounded-full transition-colors"
            >
              <span>Contacto</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
