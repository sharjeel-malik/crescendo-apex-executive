import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Users, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BookMockup } from '../components/BookMockup';
import { BookNotifyForm } from '../components/forms/BookNotifyForm';
import { MountainPattern } from '../components/MountainPattern';
import { siteContent } from '../content';

export const NonprofitCrescendo: React.FC = () => {
  const { book } = siteContent;

  return (
    <div className="w-full">
      <SEOHead
        title="Nonprofit Crescendo | Upcoming Book by Shomari White"
        description={book.description}
        path="/nonprofit-crescendo"
      />

      {/* Hero Section: Cream background, Book on left, Text on right */}
      <section className="py-16 lg:py-24 bg-[#FAF5EA] border-b border-[#E8DFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: 3D Book Mockup */}
            <div className="lg:col-span-5 flex justify-center py-6">
              <BookMockup size="lg" />
            </div>

            {/* Right: Book Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded bg-[#E3B263]/20 text-[#0B2342] border border-[#E3B263]/50 text-xs font-semibold tracking-wider uppercase mb-3">
                  {book.badge}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2342] tracking-tight leading-tight">
                  {book.title}
                </h1>
                <p className="mt-2 text-lg sm:text-xl text-[#C99A45] font-semibold font-serif">
                  {book.subtitle}
                </p>
              </div>

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                {book.description}
              </p>

              <div className="pt-2">
                <a
                  href="#notify"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all shadow-md active:translate-y-px"
                >
                  <span>{book.cta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (a) What You'll Discover & (b) Who It's For */}
      <section className="py-20 bg-[#FAF5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* What You'll Discover */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45]">
                INSIDE THE BOOK
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2342]">
                What You&apos;ll Discover
              </h2>
              <div className="space-y-4 pt-2">
                {book.whatYoullDiscover.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FFFDF8] border border-[#E8DFCB] shadow-2xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#E3B263] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-semibold text-[#0B2342]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who It's For */}
            <div className="lg:col-span-5 bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-8 shadow-xs self-start">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-1">
                AUDIENCE
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#0B2342] mb-6 border-b border-[#E8DFCB] pb-4">
                Who It&apos;s For
              </h3>
              <ul className="space-y-4">
                {book.whoItsFor.map((audience, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-[#E3B263]/20 border border-[#E3B263] shrink-0">
                      <Users className="w-3.5 h-3.5 text-[#0B2342]" />
                    </div>
                    <span className="text-sm font-semibold text-[#0B2342]">
                      {audience}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* (c) About the Author Box */}
      <section className="py-16 bg-[#FAF5EA] border-t border-[#E8DFCB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden shrink-0 border border-[#E8DFCB] shadow-xs">
              <img
                src={book.authorBox.image}
                alt="Shomari White author portrait"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                width={144}
                height={144}
              />
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45]">
                THE AUTHOR
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#0B2342]">
                {book.authorBox.heading}
              </h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {book.authorBox.text}
              </p>
              <div>
                <Link
                  to={book.authorBox.link.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#0B2342] hover:text-[#C99A45] transition-colors"
                >
                  <span>{book.authorBox.link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E3B263]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (d) Get Notified at Launch Form */}
      <section className="py-20 bg-[#FAF5EA] border-t border-[#E8DFCB]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookNotifyForm />
        </div>
      </section>

      {/* (e) Speaking CTA Band */}
      <section className="py-20 bg-[#0B2342] text-white relative overflow-hidden border-t border-[#E3B263]/25">
        <MountainPattern opacity={0.12} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {book.speakingCta.title}
          </h2>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {book.speakingCta.text}
          </p>
          <div className="pt-2">
            <Link
              to={book.speakingCta.href}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all shadow-md active:translate-y-px"
            >
              <span>{book.speakingCta.buttonLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
