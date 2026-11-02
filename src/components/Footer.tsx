import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';
import { Logo } from './Logo';
import { siteContent } from '../content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B2342] border-t border-[#E3B263]/30 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Logo with Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo light={true} showTagline={true} />
            <p className="text-xs text-stone-300 max-w-sm mt-3 leading-relaxed">
              Executive consulting, speaking, and leadership practice dedicated to elevating the people and systems behind lasting mission impact.
            </p>
            {siteContent.contact.location && (
              <p className="text-[11px] text-[#E3B263] mt-2 font-medium tracking-wide">
                &bull; {siteContent.contact.location}
              </p>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 text-sm" aria-label="Footer Navigation">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-stone-300 hover:text-[#E3B263] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social and Contact Links */}
          <div className="flex items-center gap-3">
            {/* Email Icon */}
            {siteContent.contact.email && (
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="p-2.5 rounded-full bg-[#12335B] text-stone-200 hover:text-[#E3B263] hover:bg-[#1A4373] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#E3B263]"
                aria-label="Email Shomari White"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}

            {/* LinkedIn Icon */}
            {siteContent.contact.linkedin && (
              <a
                href={siteContent.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#12335B] text-stone-200 hover:text-[#E3B263] hover:bg-[#1A4373] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#E3B263]"
                aria-label="Connect with Shomari White on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}

            {/* X (Twitter) only rendered if set */}
            {siteContent.contact.twitter && (
              <a
                href={siteContent.contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#12335B] text-stone-200 hover:text-[#E3B263] hover:bg-[#1A4373] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#E3B263]"
                aria-label="Follow on X"
              >
                <span className="font-bold text-sm">X</span>
              </a>
            )}
          </div>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-300 gap-4">
          <p>
            &copy; {currentYear} Crescendo Apex. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="text-stone-300 hover:text-[#E3B263] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">&bull;</span>
            <span className="text-stone-300">crescendoapex.co</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
