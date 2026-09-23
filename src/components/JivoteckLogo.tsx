import React from 'react';

interface LogoProps {
  darkText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const JivoteckLogo: React.FC<LogoProps> = ({ darkText = true, size = 'md' }) => {
  const boxSizes = {
    sm: 'w-6 h-6 p-1 border',
    md: 'w-7 h-7 p-1 border',
    lg: 'w-8 h-8 p-1.5 border'
  };

  const dotSizes = {
    sm: 'w-2.5 h-2.5',
    md: 'w-3 h-3',
    lg: 'w-3.5 h-3.5'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base font-bold',
    lg: 'text-lg font-bold'
  };

  return (
    <div className="flex items-center gap-2.5">
      {/* Box with cyan center dot */}
      <div className={`${boxSizes[size]} rounded-[4px] border-slate-300 bg-white flex items-center justify-center shrink-0 shadow-sm`}>
        <div className={`${dotSizes[size]} bg-[#00D4FF] rounded-[2px]`}></div>
      </div>
      {/* Brand text */}
      <span className={`${textSizes[size]} tracking-tight font-extrabold font-sans uppercase ${
        darkText ? 'text-slate-900' : 'text-white'
      }`}>
        JIVOTECK
      </span>
    </div>
  );
};
