import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  light?: boolean;
}

export const LogoMark: React.FC<{ className?: string; size?: number }> = ({ className = "h-8 w-8", size = 32 }) => (
  <svg
    viewBox="0 0 48 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={(size * 40) / 48}
    aria-hidden="true"
  >
    {/* Ascending mountain peaks with rising diagonal strokes */}
    <path
      d="M4 36L18 8L27 23L33 13L44 36"
      stroke="#E3B263"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 36L21 21L26 28"
      stroke="#E3B263"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.85"
    />
    <line
      x1="2"
      y1="36"
      x2="46"
      y2="36"
      stroke="#E3B263"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const Logo: React.FC<LogoProps> = ({ className = "", showTagline = false, light = true }) => {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E3B263] ${className}`}
      aria-label="Crescendo Apex Home"
    >
      <div className="shrink-0 transition-transform group-hover:scale-105 duration-200">
        <LogoMark className="h-7 w-auto md:h-8" />
      </div>
      <div className="flex flex-col">
        <span
          className={`font-sans text-base md:text-lg font-bold tracking-[0.2em] uppercase leading-none transition-colors ${
            light ? "text-white" : "text-[#0B2342]"
          }`}
        >
          CRESCENDO APEX
        </span>
        {showTagline && (
          <span className="text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-[#E3B263] font-medium mt-1">
            Leadership. Strategy. Impact.
          </span>
        )}
      </div>
    </Link>
  );
};
