import React from 'react';

interface LogoProps {
  darkText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  iconOnly?: boolean;
}

/**
 * Authentic JIVOTECK Emblem matching the official brand identity:
 * - Architectural "J" with pointed chiseled apex and gothic notch
 * - Arched portal doorway with 4-point star inside
 * - Winding serpentine pathway flowing from the doorway
 * - Swooping "J" hook with 3 organic botanical leaves sprouting upward
 */
export const JivoteckIcon: React.FC<{ 
  className?: string; 
  size?: number;
  inverted?: boolean;
}> = ({ 
  className = "w-8 h-8", 
  size = 40,
  inverted = false
}) => {
  const pineColor = inverted ? "#FFFFFF" : "#13262F";
  const leafDark = inverted ? "#A3BFB5" : "#2E4846";
  const leafLight = inverted ? "#D0E0DA" : "#50756C";
  const portalBg = inverted ? "#13262F" : "#FAF8F5";
  const starColor = inverted ? "#FFFFFF" : "#13262F";

  return (
    <svg 
      viewBox="0 0 100 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size * 1.2}
    >
      <defs>
        <linearGradient id={`jvt-stem-${inverted ? 'inv' : 'std'}`} x1="30" y1="10" x2="70" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={pineColor} />
          <stop offset="100%" stopColor={inverted ? "#E5EBE8" : "#0A171D"} />
        </linearGradient>
        <linearGradient id={`jvt-leaf-${inverted ? 'inv' : 'std'}`} x1="15" y1="40" x2="45" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={leafLight} />
          <stop offset="100%" stopColor={leafDark} />
        </linearGradient>
      </defs>

      {/* 3 Botanical Leaves on the Left Curve */}
      {/* 1. Outer Leaf (leftmost) */}
      <path 
        d="M 30 83 C 23 76 13 63 15 48 C 16 43 19 39 23 44 C 28 50 31 66 34 81 Z" 
        fill={`url(#jvt-leaf-${inverted ? 'inv' : 'std'})`} 
      />
      <path 
        d="M 18 47 Q 24 63 31 82" 
        stroke={leafLight} 
        strokeWidth="0.8" 
        strokeLinecap="round" 
        fill="none" 
        opacity="0.7" 
      />

      {/* 2. Middle Leaf (tallest, graceful arch) */}
      <path 
        d="M 34 81 C 28 68 25 50 29 35 C 31 29 35 27 37 33 C 39 42 40 60 42 83 Z" 
        fill={`url(#jvt-leaf-${inverted ? 'inv' : 'std'})`} 
      />
      <path 
        d="M 33 33 Q 35 55 38 82" 
        stroke={leafLight} 
        strokeWidth="0.9" 
        strokeLinecap="round" 
        fill="none" 
        opacity="0.8" 
      />

      {/* 3. Inner Leaf (between middle leaf & stem) */}
      <path 
        d="M 40 82 C 38 72 39 56 43 46 C 45 42 48 43 48 48 C 48 56 47 68 47 84 Z" 
        fill={`url(#jvt-leaf-${inverted ? 'inv' : 'std'})`} 
      />
      <path 
        d="M 46 45 Q 45 64 44 83" 
        stroke={leafLight} 
        strokeWidth="0.75" 
        strokeLinecap="round" 
        fill="none" 
        opacity="0.7" 
      />

      {/* Architectural "J" Main Body with Chiseled Apex & Gothic Barb */}
      <path 
        d="
          M 68 8 
          L 53 21 
          C 52 22 50.5 23.5 52 25 
          C 53.5 26 53.5 27.5 53.5 30 
          L 53.5 70 
          C 53.5 82 45 92 32 92 
          C 24 92 20 87 20 87 
          C 20 87 23 98 36 98 
          C 52 98 64 87 64 71 
          L 64 57 
          L 68 57 
          Z" 
        fill={`url(#jvt-stem-${inverted ? 'inv' : 'std'})`} 
      />

      {/* Portal / Arched Doorway in Lower Stem */}
      <path 
        d="
          M 57.5 57 
          L 57.5 45 
          C 57.5 39 64.5 39 64.5 45 
          L 64.5 57 
          Z" 
        fill={portalBg} 
      />

      {/* 4-point Star inside Doorway */}
      <path 
        d="
          M 61 41.5 
          Q 61 45.5 63.5 45.5 
          Q 61 45.5 61 49.5 
          Q 61 45.5 58.5 45.5 
          Q 61 45.5 61 41.5 
          Z" 
        fill={starColor} 
      />

      {/* Serpentine Pathway leading out of the Portal */}
      <path 
        d="
          M 58.5 57 
          C 58.5 62 63.5 66 63.5 71 
          C 63.5 76 57.5 80 56.5 86 
          C 55.5 90 58.5 94 63.5 98 
          C 65.5 98 67 96.5 66 93.5 
          C 64.5 89 65.5 85 67.5 80 
          C 68.5 74 65 68 63 57 
          Z" 
        fill={portalBg} 
      />
    </svg>
  );
};

export const JivoteckLogo: React.FC<LogoProps> = ({ 
  darkText = true, 
  size = 'md',
  showSubtitle = true,
  iconOnly = false
}) => {
  const iconSizes = {
    sm: 'w-6 h-7',
    md: 'w-8 h-10',
    lg: 'w-10 h-12',
    xl: 'w-14 h-16'
  };

  const textSizes = {
    sm: 'text-sm font-bold tracking-[0.2em]',
    md: 'text-base font-bold tracking-[0.22em]',
    lg: 'text-xl font-bold tracking-[0.25em]',
    xl: 'text-2xl font-bold tracking-[0.28em]'
  };

  const textColor = darkText ? 'text-[#13262F]' : 'text-white';
  const subtitleColor = darkText ? 'text-[#3E5C54]' : 'text-[#A9C2B7]';
  const ruleColor = darkText ? 'bg-[#8FA89B]' : 'bg-white/40';

  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Official Architectural & Botanical Emblem */}
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        <JivoteckIcon className={iconSizes[size]} inverted={!darkText} />
      </div>
      
      {!iconOnly && (
        <div className="flex flex-col">
          {/* Wordmark: J I V O T E C K with 4-point star in the O */}
          <div className={`flex items-center ${textSizes[size]} font-serif ${textColor} uppercase`}>
            <span>J</span>
            <span>I</span>
            <span>V</span>
            {/* The signature "O" with 4-point star in the counter */}
            <span className="inline-flex items-center justify-center relative mx-[1px] w-4 h-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <ellipse cx="12" cy="12" rx="7.5" ry="9.5" stroke="currentColor" strokeWidth="2.2" />
                {/* 4-point Star in center of O */}
                <path 
                  d="M 12 6 Q 12 12 16 12 Q 12 12 12 18 Q 12 12 8 12 Q 12 12 12 6 Z" 
                  fill="currentColor" 
                />
              </svg>
            </span>
            <span>T</span>
            <span>E</span>
            <span>C</span>
            <span>K</span>
          </div>

          {/* Official Slogan: — GESTIÓN QUE IMPULSA — */}
          {showSubtitle && (
            <div className={`flex items-center gap-1.5 text-[9px] font-mono tracking-[0.22em] font-semibold uppercase ${subtitleColor} mt-0.5`}>
              <span className={`w-3.5 h-[1px] ${ruleColor}`}></span>
              <span>GESTIÓN QUE IMPULSA</span>
              <span className={`w-3.5 h-[1px] ${ruleColor}`}></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
