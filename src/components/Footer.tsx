import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { JivoteckLogo } from './JivoteckLogo';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: siteConfig.social.github },
    { name: 'LinkedIn', icon: Linkedin, href: siteConfig.social.linkedin },
    { name: 'X / Twitter', icon: Twitter, href: siteConfig.social.twitter },
    { name: 'Instagram', icon: Instagram, href: siteConfig.social.instagram },
  ];

  return (
    <footer className="bg-[#0A0E17] border-t border-slate-800 text-slate-400 font-sans pt-16 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Brand header matching Screenshot 2 */}
        <div className="space-y-3">
          <JivoteckLogo size="lg" darkText={false} />
          <p className="text-sm text-slate-300 font-sans font-light">
            Technology for the future of industry.
          </p>
        </div>

        {/* Links Navigation Grid matching Screenshot 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4 border-t border-slate-800/80">
          
          {/* Col 1 & 2: NAVIGATION */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
              NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-300">
              <a href="#nosotros" className="hover:text-white transition-colors">About Us</a>
              <a href="#servicios" className="hover:text-white transition-colors">What We Do</a>
              <a href="#nosotros" className="hover:text-white transition-colors">Values</a>
              <a href="#servicios" className="hover:text-white transition-colors">Future Launches</a>
              <a href="#contacto" className="hover:text-white transition-colors">Contact</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          {/* Col 2: LEGAL */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
              LEGAL
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div>Privacy</div>
              <div>Cookie Disclosure</div>
              <div>Industrialpedia Trademark</div>
            </div>
          </div>

          {/* Col 3: SOCIAL & LOCATION */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
              CONTACT & CHANNELS
            </h4>
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <a 
                href={`mailto:${siteConfig.contact.primaryEmail}`} 
                className="text-[#00D4FF] hover:underline block break-all font-semibold"
              >
                {siteConfig.contact.primaryEmail}
              </a>
              <div className="text-slate-400 font-sans">
                Aguascalientes, México
              </div>
              <div className="flex items-center gap-2 pt-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                      title={s.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar matching Screenshot 2 */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            &copy; 2026 JIVOTECK — ALL RIGHTS RESERVED
          </div>

          <div className="text-[11px] text-slate-400 uppercase tracking-widest">
            EN / INDUSTRIAL TECHNOLOGY
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <span>TOP</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
