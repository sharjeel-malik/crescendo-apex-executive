import React from 'react';
import { LogoMark } from './Logo';

interface BookMockupProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BookMockup: React.FC<BookMockupProps> = ({
  className = "",
  size = 'md',
}) => {
  // Dimension styles based on size
  const sizeClasses = {
    sm: "w-48 h-64",
    md: "w-64 h-84 md:w-72 md:h-96",
    lg: "w-72 h-96 md:w-84 md:h-[440px]",
  }[size];

  return (
    <div className={`relative perspective-1000 group ${className}`}>
      {/* Soft shadow under the book */}
      <div className="absolute -bottom-6 left-6 right-6 h-8 bg-black/40 blur-xl rounded-full transform group-hover:scale-105 transition-transform duration-500" />

      {/* 3D Book Container */}
      <div
        className={`relative ${sizeClasses} mx-auto rounded-r-md transition-all duration-500 ease-out transform group-hover:-translate-y-2 group-hover:rotate-y-[-6deg] group-hover:shadow-2xl`}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: '20px 24px 35px -5px rgba(11, 35, 66, 0.45), -3px 0px 8px rgba(0, 0, 0, 0.35)',
        }}
      >
        {/* Book Spine (left edge gradient simulation) */}
        <div
          className="absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-20 pointer-events-none rounded-l-xs"
        />

        {/* Embossed Spine crease line */}
        <div className="absolute inset-y-0 left-4 w-px bg-white/10 z-20 pointer-events-none" />

        {/* Front Cover */}
        <div className="relative w-full h-full bg-[#0B2342] text-white rounded-r-md overflow-hidden border-t border-r border-b border-[#E3B263]/40 flex flex-col justify-between p-6 md:p-8 select-none">
          {/* Subtle textured radial sheen on cover */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1C4170]/70 via-[#0B2342] to-[#07172C] opacity-90" />

          {/* Gold Decorative Inner Border */}
          <div className="absolute inset-3 border border-[#E3B263]/30 pointer-events-none rounded-xs">
            <div className="absolute inset-1 border border-[#E3B263]/15" />
          </div>

          {/* Top Cover Content */}
          <div className="relative z-10 text-center pt-2">
            <p className="text-[9px] md:text-[10px] tracking-[0.22em] text-[#E3B263] uppercase font-semibold">
              Leadership &bull; Strategy &bull; Impact
            </p>
            <div className="h-px w-12 bg-[#E3B263]/40 mx-auto my-2" />
          </div>

          {/* Title and Logo Mark */}
          <div className="relative z-10 text-center my-auto py-2">
            <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white uppercase leading-none drop-shadow-sm">
              NONPROFIT
            </h3>
            <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#E3B263] uppercase mt-1 drop-shadow-sm">
              CRESCENDO
            </h3>

            <div className="my-5 flex justify-center">
              <div className="p-2.5 rounded-full bg-[#E3B263]/10 border border-[#E3B263]/30 shadow-inner">
                <LogoMark className="h-9 w-9" />
              </div>
            </div>

            <p className="text-[11px] md:text-xs text-stone-300 font-medium max-w-[200px] mx-auto leading-relaxed">
              Building Stronger Organizations for a Brighter Future
            </p>
          </div>

          {/* Author Footer */}
          <div className="relative z-10 text-center pb-2">
            <div className="h-px w-16 bg-[#E3B263]/40 mx-auto mb-2.5" />
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white">
              SHOMARI WHITE
            </p>
            <p className="text-[9px] tracking-widest text-[#E3B263]/80 uppercase mt-0.5">
              Foreword & Executive Insights
            </p>
          </div>

          {/* Realistic Book Page Depth on Right Edge */}
          <div
            className="absolute top-1 bottom-1 right-0 w-2.5 bg-gradient-to-r from-stone-400 via-stone-200 to-stone-100 rounded-r-xs shadow-inner pointer-events-none border-l border-black/30"
            style={{ transform: 'translateX(2px)' }}
          />
        </div>
      </div>
    </div>
  );
};
