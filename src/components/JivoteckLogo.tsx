import React from 'react';

interface LogoProps {
  darkText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  iconOnly?: boolean;
}

export const JivoteckIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = "w-8 h-8", 
  size = 40 
}) => {
  return (
    <svg 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
    >
      <defs>
        {/* Gradients blending Ref 1 (isometric facets) & Ref 2 (#4AB9DE, #8AE3EA, #00D4FF) */}
        <linearGradient id="jvt-top-l" x1="12" y1="8" x2="31" y2="23" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
        <linearGradient id="jvt-top-r" x1="52" y1="8" x2="33" y2="23" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
        <linearGradient id="jvt-bot-l" x1="12" y1="28" x2="30" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#4AB9DE" />
        </linearGradient>
        <linearGradient id="jvt-bot-r" x1="52" y1="28" x2="34" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4AB9DE" />
          <stop offset="100%" stopColor="#8AE3EA" />
        </linearGradient>
        <linearGradient id="jvt-arrow" x1="32" y1="19" x2="32" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Facet 1: Top-Left Apex ('T' left wing) */}
      <path 
        d="M 30.5 7 L 15 15.5 C 13.8 16.2 13 17.5 13 19 L 13 25 L 26.5 17.5 C 27.8 16.8 29.2 16.3 30.5 16 Z" 
        fill="url(#jvt-top-l)" 
      />

      {/* Facet 2: Top-Right Apex ('T' right wing) */}
      <path 
        d="M 33.5 7 L 49 15.5 C 50.2 16.2 51 17.5 51 19 L 51 25 L 37.5 17.5 C 36.2 16.8 34.8 16.3 33.5 16 Z" 
        fill="url(#jvt-top-r)" 
      />

      {/* Facet 3: Lower-Left Wing ('J' contour & lower bracket) */}
      <path 
        d="M 13 29.5 L 13 43 C 13 44.5 13.8 45.8 15 46.5 L 26 53 C 27.2 53.7 28.5 53.7 28.5 52.5 L 28.5 40 L 22 36 L 22 34.5 L 26.5 32 L 13 29.5 Z" 
        fill="url(#jvt-bot-l)" 
      />

      {/* Facet 4: Lower-Right Wing (Hexagonal flank) */}
      <path 
        d="M 51 29.5 L 51 43 C 51 44.5 50.2 45.8 49 46.5 L 38 53 C 36.8 53.7 35.5 53.7 35.5 52.5 L 35.5 40 L 42 36 L 42 34.5 L 37.5 32 L 51 29.5 Z" 
        fill="url(#jvt-bot-r)" 
      />

      {/* Central Upward Core Arrow (momentum, high technology & forward progress) */}
      <path 
        d="M 32 19 L 36.5 24.5 L 34 24.5 L 34 38 L 30 38 L 30 24.5 L 27.5 24.5 Z" 
        fill="url(#jvt-arrow)" 
      />
    </svg>
  );
};

export const JivoteckLogo: React.FC<LogoProps> = ({ 
  darkText = true, 
  size = 'md',
  showSubtitle = false,
  iconOnly = false
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-sm font-bold',
    md: 'text-base font-extrabold',
    lg: 'text-xl font-black',
    xl: 'text-2xl font-black'
  };

  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      {/* Dynamic 3D Isometric Tech Icon */}
      <div className="relative shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
        {/* Subtle ambient light blue halo */}
        <div className="absolute inset-0 bg-[#00D4FF]/20 rounded-full blur-md -z-10 group-hover:bg-[#00D4FF]/35 transition-all"></div>
        <JivoteckIcon className={iconSizes[size]} />
      </div>
      
      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`${textSizes[size]} tracking-tight font-sans uppercase ${
              darkText ? 'text-slate-900' : 'text-white'
            }`}>
              <span>JIVO</span>
              <span className="text-[#0284C7]">TECK</span>
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase rounded bg-sky-50 text-[#0284C7] border border-sky-200">
              Tech
            </span>
          </div>
          {showSubtitle && (
            <span className={`text-[10px] font-mono tracking-wider uppercase ${
              darkText ? 'text-slate-500' : 'text-slate-300'
            }`}>
              Industrial Tech • Aguascalientes
            </span>
          )}
        </div>
      )}
    </div>
  );
};
