import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { MountainPattern } from '../components/MountainPattern';
import { siteContent } from '../content';

export const About: React.FC = () => {
  const { about, verifiedCredentials } = siteContent;

  return (
    <div className="w-full">
      <SEOHead
        title="About Shomari White | Executive Leader & Strategist"
        description={about.hero.text}
        path="/about"
        ogImage="/images/about-portrait.jpg"
      />

      {/* Hero Section */}
      <section className="relative w-full bg-[#0B2342] text-white overflow-hidden py-16 lg:py-24 border-b border-[#E3B263]/25">
        <MountainPattern opacity={0.12} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#E3B263] uppercase">
                {about.hero.sub}
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {about.hero.h1}
              </h1>
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
                {about.hero.text}
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-[#E3B263]/40">
                <img
                  src={about.hero.image}
                  alt="Shomari White portrait"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                  width={500}
                  height={625}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background & Key Leadership Roles */}
      <section className="py-20 lg:py-24 bg-[#FAF5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Background & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45]">
                EXPERIENCE & FOUNDATION
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2342]">
                {about.background.heading}
              </h2>
              <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                <p>{about.background.paragraph1}</p>
                <p>{about.background.paragraph2}</p>
              </div>

              {/* Career Highlights (renders only if populated) */}
              {about.careerHighlights && about.careerHighlights.length > 0 && (
                <div className="pt-4">
                  <h3 className="font-serif text-lg font-bold text-[#0B2342] mb-3">
                    Career Highlights
                  </h3>
                  <ul className="space-y-2">
                    {about.careerHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#E3B263] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Key Leadership Roles Checklist */}
            <div className="lg:col-span-5 bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-8 shadow-xs self-start">
              <h3 className="font-serif text-2xl font-bold text-[#0B2342] mb-6 border-b border-[#E8DFCB] pb-4">
                Key Leadership Roles
              </h3>
              <div className="space-y-6">
                {verifiedCredentials.map((role) => (
                  <div key={role.id} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#E3B263] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0B2342] leading-snug">
                        {role.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-0.5 font-medium">
                        {role.organization} {role.years && <span className="text-[#C99A45] font-semibold">{role.years}</span>}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy (Three Pillars) */}
      <section className="py-20 bg-[#FAF5EA] border-t border-[#E8DFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-2">
              CORE PRINCIPLES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2342]">
              {about.philosophy.heading}
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              {about.philosophy.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.philosophy.pillars.map((pillar) => (
              <div
                key={pillar.badge}
                className="bg-[#FFFDF8] rounded-xl p-8 border border-[#E8DFCB] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold tracking-widest text-[#E3B263] uppercase mb-4">
                    Pillar {pillar.badge}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0B2342] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-[#FAF5EA] border-t border-[#E8DFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-2">
              MOMENTS & ENGAGEMENTS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2342]">
              Leadership in Action
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.gallery.map((item, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E8DFCB] shadow-sm group"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-semibold text-white tracking-wider uppercase">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Band over Mountain Pattern */}
      <section className="relative py-20 bg-[#0B2342] text-white overflow-hidden border-t border-[#E3B263]/25 text-center">
        <MountainPattern opacity={0.15} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#E3B263] uppercase">
            {about.missionBand.label}
          </p>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-relaxed">
            &ldquo;{about.missionBand.statement}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-[#0B2342] text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            {about.ctaBand.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {about.ctaBand.text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to={about.ctaBand.primaryBtn.href}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all shadow-md active:translate-y-px min-h-[44px]"
            >
              <span>{about.ctaBand.primaryBtn.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to={about.ctaBand.secondaryBtn.href}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase text-white border border-[#E3B263]/70 hover:border-[#E3B263] hover:bg-[#E3B263]/10 transition-all min-h-[44px]"
            >
              {about.ctaBand.secondaryBtn.label}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
