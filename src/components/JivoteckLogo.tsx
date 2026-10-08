import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'white' | 'orange';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconOnly?: boolean;
  className?: string;
  showSubtitle?: boolean;
}

/**
 * Authentic JIVOTECK Emblem matching the official brand identity:
 * - Radical/check style "J" monogram with wavy flag terminal on the left
 * - Slanted upward stem with top horizontal spur/serif pointing left
 * - Dynamic flame/accent mark on the upper right in primary orange
 */
export const JivoteckEmblem: React.FC<{
  className?: string;
  color?: string;
  accentColor?: string;
  showAccent?: boolean;
}> = ({
  className = "w-8 h-8",
  color = "#FFFFFF",
  accentColor = "#FF6B35",
  showAccent = true,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main Stylized "J" / Radical Emblem */}
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

      {/* Dynamic orange accent swoosh hugging the upper stem */}
      {showAccent && (
        <path
          d="M 87 34 
             C 90 28 92 23 93 18 
             C 90 23 87 28 85 33 
             Z"
          fill={accentColor}
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
  const emblemColor =
    variant === 'dark'
      ? '#FFFFFF'
      : variant === 'light'
      ? '#0E2433'
      : variant === 'orange'
      ? '#FF6B35'
      : '#FFFFFF';

  const textColor =
    variant === 'white'
      ? 'text-white'
      : 'text-[#FF6B35]';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14',
  };

  const textSizes = {
    sm: { jivo: 'text-[15px]', teck: 'text-[17px]', gap: '-space-y-1' },
    md: { jivo: 'text-[18px]', teck: 'text-[20px]', gap: '-space-y-1' },
    lg: { jivo: 'text-[22px]', teck: 'text-[25px]', gap: '-space-y-1.5' },
    xl: { jivo: 'text-[28px]', teck: 'text-[32px]', gap: '-space-y-2' },
  };

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      role="img"
      aria-label="JIVOTECK — Corporativo tecnológico"
    >
      <span className="sr-only">JIVOTECK</span>

      {/* Official Emblem */}
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        <JivoteckEmblem
          className={iconSizes[size]}
          color={emblemColor}
          accentColor="#FF6B35"
          showAccent={true}
        />
      </div>

      {!iconOnly && (
        <div className={`flex flex-col ${textSizes[size].gap} font-sans leading-none tracking-tight font-black ${textColor}`}>
          <span className={`${textSizes[size].jivo} tracking-wider uppercase font-black`}>
            JIVO
          </span>
          <span className={`${textSizes[size].teck} lowercase font-black tracking-tight`}>
            teck
          </span>
          {showSubtitle && (
            <span className="text-[9px] font-mono font-semibold tracking-widest text-[#0E2433]/70 uppercase pt-1">
              Corporativo tecnológico
            </span>
          )}
        </div>
      )}
    </div>
  );
};
