import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'white' | 'orange';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconOnly?: boolean;
  className?: string;
  showSubtitle?: boolean;
}

/**
 * Authentic JIVOTECK Emblem & Wordmark strictly respecting the official brand asset:
 * - Stylized "J" checkmark/radical emblem with wavy flag cut
 * - Precision vertical orange accent bar
 * - Bold geometric "JIVO teck" typography with zero overlapping letters
 */
export const JivoteckEmblem: React.FC<{
  className?: string;
  color?: string;
  showAccent?: boolean;
}> = ({
  className = "w-8 h-8",
  color = "#FFFFFF",
  showAccent = false,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Official Emblem Path matching exact vector geometry */}
      <path
        d="M 38 88 
           L 58 88 
           L 90 22 
           L 63 22 
           L 58 28 
           C 61 34 65 37 70 40 
           L 51 70 
           L 43 70 
           L 43 42 
           L 24 42 
           L 24 58 
           C 27 50 34 50 38 62 
           L 38 88 
           Z"
        fill={color}
      />
      {/* Optional orange vertical bar accent if requested */}
      {showAccent && (
        <path
          d="M 87 22 L 93 22 L 93 42 L 87 48 Z"
          fill="#FF6B35"
        />
      )}
    </svg>
  );
};

export const JivoteckLogo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  iconOnly = false,
  className = '',
  showSubtitle = false,
}) => {
  const isDark = variant === 'dark';
  const logoSrc = isDark
    ? '/assets/jivoteck_logo_dark.png'
    : '/assets/jivoteck_logo_light.png';

  const sizeHeights = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-11',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  return (
    <div
      className={`inline-flex items-center select-none group ${className}`}
      role="img"
      aria-label="JIVOTECK — Corporativo tecnológico"
    >
      <span className="sr-only">JIVOTECK</span>

      {iconOnly ? (
        <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
          <JivoteckEmblem
            className="w-9 h-9"
            color={isDark ? '#FFFFFF' : '#0E2433'}
          />
        </div>
      ) : (
        <div className="flex flex-col items-start">
          <img
            src={logoSrc}
            alt="JIVOTECK"
            className={`${sizeHeights[size]} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
            loading="eager"
          />
          {showSubtitle && (
            <span className="text-[9px] font-mono font-semibold tracking-widest text-[#0E2433]/70 uppercase pl-1 pt-0.5">
              Corporativo tecnológico
            </span>
          )}
        </div>
      )}
    </div>
  );
};
