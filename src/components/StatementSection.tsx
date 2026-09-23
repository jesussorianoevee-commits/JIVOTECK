import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const StatementSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0E17] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Big headline matching Screenshot 4 */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.18] max-w-3xl">
          We are changing the industry with Industrialpedia.
        </h2>

        {/* Narrative paragraphs matching Screenshot 4 */}
        <div className="space-y-6 text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
          <p>
            By integrating the principles of Maintenance 4.5 with accessible industrial information, we are building toward a new way of finding, understanding and using technical knowledge.
          </p>
          <p>
            We look forward to transforming the way industry connects with information, technology and the future.
          </p>
        </div>

        {/* Interactive Link Area to Industrialpedia.com.mx */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
          <div>
            <a
              href={siteConfig.industrialpedia.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-[#00D4FF] hover:text-white transition-colors"
            >
              <span>INDUSTRIALPEDIA — COMING SOON</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="text-xs text-slate-500 font-mono mt-1">
              A PROPRIETARY PRODUCT DEVELOPED BY JIVOTECK
            </div>
          </div>

          <a
            href={siteConfig.industrialpedia.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all w-fit"
          >
            <span>industrialpedia.com.mx</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#00D4FF]" />
          </a>
        </div>

      </div>
    </section>
  );
};
