import React from 'react';

interface LogoProps {
  darkText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const JivoteckLogo: React.FC<LogoProps> = ({ 
  darkText = true, 
  size = 'md',
  showSubtitle = false 
}) => {
  const boxSizes = {
    sm: 'w-7 h-7 p-1',
    md: 'w-8 h-8 p-1.5',
    lg: 'w-10 h-10 p-2'
  };

  const textSizes = {
    sm: 'text-sm font-bold',
    md: 'text-base font-extrabold',
    lg: 'text-xl font-black'
  };

  return (
    <div className="flex items-center gap-2.5">
      {/* Upstream-style Tech Emblem */}
      <div className={`${boxSizes[size]} rounded-lg bg-gradient-to-br from-[#00584B] to-[#007362] flex items-center justify-center shrink-0 shadow-sm border border-emerald-400/30 transition-transform duration-200 group-hover:scale-105`}>
        <div className="w-full h-full rounded-[4px] bg-[#00D4B2] flex items-center justify-center shadow-inner">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00584B]"></div>
        </div>
      </div>
      
      {/* Brand text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`${textSizes[size]} tracking-tight font-sans uppercase ${
            darkText ? 'text-slate-900' : 'text-white'
          }`}>
            JIVOTECK
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase rounded bg-emerald-50 text-[#007362] border border-emerald-200/60">
            Startup
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">
            Aguascalientes, MX
          </span>
        )}
      </div>
    </div>
  );
};
