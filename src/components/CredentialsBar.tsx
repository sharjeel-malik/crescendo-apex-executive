import React from 'react';
import { Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { siteContent } from '../content';

export const CredentialsBar: React.FC<{ className?: string }> = ({ className = "" }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'aasp':
        return <Award className="w-5 h-5 text-[#E3B263]" />;
      case 'nahse':
        return <ShieldCheck className="w-5 h-5 text-[#E3B263]" />;
      case '100bm':
        return <HeartHandshake className="w-5 h-5 text-[#E3B263]" />;
      default:
        return <Award className="w-5 h-5 text-[#E3B263]" />;
    }
  };

  return (
    <div className={`w-full bg-[#0B2342] border-y border-[#E3B263]/30 shadow-inner py-6 md:py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E3B263]/20">
          {siteContent.verifiedCredentials.map((cred, idx) => (
            <div
              key={cred.id}
              className={`flex items-start gap-4 ${idx > 0 ? "pt-5 md:pt-0 md:pl-8" : ""}`}
            >
              {/* Circular pale-gold badge with thin gold icon */}
              <div className="flex-shrink-0 p-3 rounded-full bg-[#12335B] border border-[#E3B263]/40 shadow-sm">
                {getIcon(cred.id)}
              </div>

              {/* Text content */}
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#E3B263]">
                  {cred.title}
                </p>
                <p className="text-sm font-medium text-white mt-0.5 leading-snug">
                  {cred.organization} {cred.years && <span className="text-[#E3B263] whitespace-nowrap">{cred.years}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
