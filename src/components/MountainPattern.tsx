import React from 'react';

interface MountainPatternProps {
  className?: string;
  opacity?: number;
}

export const MountainPattern: React.FC<MountainPatternProps> = ({
  className = "absolute inset-0 pointer-events-none",
  opacity = 0.15,
}) => {
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ opacity }}
      >
        <path
          d="M0 400L220 220L360 310L580 140L780 280L980 90L1180 230L1320 160L1440 250V400H0Z"
          fill="url(#goldGradient)"
          opacity="0.3"
        />
        <path
          d="M0 400L220 220L360 310L580 140L780 280L980 90L1180 230L1320 160L1440 250"
          stroke="#E3B263"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path
          d="M0 400L180 260L320 330L510 180L720 300L910 130L1110 270L1260 200L1440 310"
          stroke="#E3B263"
          strokeWidth="1"
          opacity="0.6"
        />
        <defs>
          <linearGradient id="goldGradient" x1="720" y1="90" x2="720" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E3B263" stopOpacity="0.4" />
            <stop offset="1" stopColor="#E3B263" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
