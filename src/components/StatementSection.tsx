import React from 'react';

export const StatementSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0E17] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
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

        {/* Bottom cyan kicker matching Screenshot 4 */}
        <div className="pt-6">
          <div className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-[#00D4FF]">
            INDUSTRIALPEDIA — COMING SOON.
          </div>
          <div className="text-xs text-slate-500 font-mono mt-2">
            A PROPRIETARY PRODUCT DEVELOPED BY JIVOTECK
          </div>
        </div>

      </div>
    </section>
  );
};
