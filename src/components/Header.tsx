import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { siteContent } from '../content';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B2342] border-b border-[#E3B263]/25 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Nav Group */}
          <div className="flex items-center gap-10 xl:gap-14">
            <div className="flex-shrink-0">
              <Logo light={true} />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main Navigation">
              {siteContent.navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    `text-sm tracking-wide transition-colors py-1 whitespace-nowrap ${
                      isActive
                        ? "text-white font-semibold border-b-2 border-[#E3B263]"
                        : "text-stone-300 hover:text-white font-normal"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden xl:flex items-center space-x-3">
            <Link
              to={siteContent.headerButtons.primary.href}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E3B263] active:translate-y-px"
            >
              <span>{siteContent.headerButtons.primary.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to={siteContent.headerButtons.secondary.href}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase text-white border border-[#E3B263]/70 hover:border-[#E3B263] hover:bg-[#E3B263]/10 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-px"
            >
              {siteContent.headerButtons.secondary.label}
            </Link>
          </div>

          {/* Medium screens (lg to xl) single compact action button */}
          <div className="hidden lg:flex xl:hidden items-center">
            <Link
              to={siteContent.headerButtons.primary.href}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all"
            >
              <span>Engage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-md text-stone-300 hover:text-white hover:bg-[#12335B] focus:outline-none focus:ring-2 focus:ring-[#E3B263] min-h-[44px] min-w-[44px]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6 text-[#E3B263]" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E3B263]/20 bg-[#0B2342] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {siteContent.navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  `px-3 py-3 rounded-md text-base font-medium transition-colors min-h-[44px] flex items-center ${
                    isActive
                      ? "text-white bg-[#12335B] border-l-4 border-[#E3B263] pl-2 font-semibold"
                      : "text-stone-300 hover:text-white hover:bg-[#12335B]/50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <Link
              to={siteContent.headerButtons.primary.href}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] text-sm font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] min-h-[44px]"
            >
              <span>{siteContent.headerButtons.primary.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to={siteContent.headerButtons.secondary.href}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-[6px] text-sm font-semibold tracking-wider uppercase text-white border border-[#E3B263]/80 hover:bg-[#E3B263]/10 min-h-[44px]"
            >
              {siteContent.headerButtons.secondary.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
