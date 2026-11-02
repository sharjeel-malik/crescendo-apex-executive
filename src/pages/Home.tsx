import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Compass,
  Settings,
  Users,
  Mic,
  Briefcase,
  Building,
  Award,
  Shield,
  HeartHandshake,
  UsersRound,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CredentialsBar } from '../components/CredentialsBar';
import { Testimonials } from '../components/Testimonials';
import { MountainPattern } from '../components/MountainPattern';
import { Logo } from '../components/Logo';
import { siteContent } from '../content';

export const Home: React.FC = () => {
  const { home } = siteContent;

  const getPerspectiveIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-[#E3B263]" />;
      case 'building':
        return <Building className="w-5 h-5 text-[#E3B263]" />;
      case 'award':
        return <Award className="w-5 h-5 text-[#E3B263]" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-[#E3B263]" />;
      case 'heart-handshake':
        return <HeartHandshake className="w-5 h-5 text-[#E3B263]" />;
      case 'users':
        return <UsersRound className="w-5 h-5 text-[#E3B263]" />;
      default:
        return <Award className="w-5 h-5 text-[#E3B263]" />;
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'exec-strategy':
        return <Compass className="w-6 h-6 text-[#0B2342]" />;
      case 'advancement-ops':
        return <Settings className="w-6 h-6 text-[#0B2342]" />;
      case 'leadership-dev':
        return <Users className="w-6 h-6 text-[#0B2342]" />;
      case 'speaking-thought':
        return <Mic className="w-6 h-6 text-[#0B2342]" />;
      default:
        return <Compass className="w-6 h-6 text-[#0B2342]" />;
    }
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Crescendo Apex | Elevating People & Systems for Lasting Impact"
        description={home.hero.subtext}
        path="/"
        ogImage="/images/og-social.jpg"
      />

      {/* 1. HERO SECTION (Navy with Portrait on the right) */}
      <section className="relative w-full bg-[#0B2342] text-white overflow-hidden">
        <MountainPattern opacity={0.12} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#E3B263] uppercase">
                {home.hero.eyebrow}
              </p>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-white leading-[1.12]">
                {home.hero.h1}
              </h1>

              <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl">
                {home.hero.subtext}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  to={home.hero.ctaPrimary.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all shadow-md active:translate-y-px min-h-[44px]"
                >
                  <span>{home.hero.ctaPrimary.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to={home.hero.ctaSecondary.href}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase text-white border border-[#E3B263]/70 hover:border-[#E3B263] hover:bg-[#E3B263]/10 transition-all min-h-[44px]"
                >
                  {home.hero.ctaSecondary.label}
                </Link>
              </div>
            </div>

            {/* Right Portrait */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-[#E3B263]/30">
                <img
                  src="/images/hero-portrait.jpg"
                  alt={home.hero.portraitAlt}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                  width={600}
                  height={750}
                />
                {/* Left-to-right subtle blend gradient matching mockup */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B2342]/70 via-transparent to-transparent pointer-events-none lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2342]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDENTIALS BAR */}
      <CredentialsBar />

      {/* 3. SECTION: LEADERSHIP THAT STRENGTHENS MISSION (Cream background) */}
      <section className="py-20 lg:py-28 bg-[#FAF5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0B2342] tracking-tight">
              {home.leadershipSection.heading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
              {home.leadershipSection.intro}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {home.leadershipSection.cards.map((card) => (
              <div
                key={card.id}
                className="bg-[#FFFDF8] rounded-xl p-4 sm:p-8 border border-[#E8DFCB] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between items-center sm:items-start text-center sm:text-left"
              >
                <div className="w-full flex flex-col items-center sm:items-start">
                  {/* Circular pale-gold badge with thin navy line icon */}
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#FDF8EE] border border-[#E3B263]/40 flex items-center justify-center mb-3 sm:mb-6 shadow-xs shrink-0">
                    {getServiceIcon(card.id)}
                  </div>

                  <h3 className="font-serif text-sm sm:text-xl font-bold text-[#0B2342] leading-snug mb-1 sm:mb-3">
                    {card.title}
                  </h3>

                  <p className="hidden sm:block text-stone-600 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <Link
                  to={card.href}
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#0B2342] hover:text-[#C99A45] transition-colors mt-2 sm:mt-auto group"
                >
                  <span className="hidden sm:inline">Learn More</span>
                  <span className="sm:hidden">Explore</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1 text-[#E3B263]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DARK SECTION: NONPROFITS & HIGHER EDUCATION */}
      <section className="py-20 lg:py-28 bg-[#0B2342] text-white relative overflow-hidden border-t border-[#E3B263]/20">
        <MountainPattern opacity={0.1} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#E3B263] uppercase mb-2">
              {home.impactSection.eyebrow}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {home.impactSection.h2}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              {home.impactSection.text}
            </p>
            <div className="mt-6">
              <Link
                to={home.impactSection.cta.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all shadow-sm active:translate-y-px"
              >
                <span>{home.impactSection.cta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 4 Photo Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.impactSection.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#12335B] rounded-xl overflow-hidden border border-[#E3B263]/30 shadow-md flex flex-col group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#07172C]">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={275}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12335B] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK TOGETHER */}
      <section className="py-20 lg:py-24 bg-[#FAF5EA] border-t border-[#E8DFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-2">
              OUR METHODOLOGY
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2342]">
              {home.howWeWork.heading}
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              {home.howWeWork.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {home.howWeWork.steps.map((step) => (
              <div
                key={step.number}
                className="bg-[#FFFDF8] rounded-xl p-8 border border-[#E8DFCB] shadow-xs relative flex flex-col"
              >
                <div className="text-4xl font-serif font-bold text-[#E3B263] mb-4">
                  {step.number}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0B2342] mb-2">
                  {step.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PERSPECTIVE & EXPERIENCE (Cream background) */}
      <section className="py-20 lg:py-28 bg-[#FAF5EA] border-t border-[#E8DFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden shadow-xl border border-[#E8DFCB]">
                <img
                  src={home.perspectiveSection.image}
                  alt="Shomari White executive perspective"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  width={500}
                  height={625}
                />
              </div>
            </div>

            {/* Right Text & 6 Items */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-1">
                  EXECUTIVE LEADERSHIP
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2342]">
                  {home.perspectiveSection.heading}
                </h2>
                <p className="text-sm sm:text-base font-medium text-stone-700 mt-2">
                  {home.perspectiveSection.sub}
                </p>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {home.perspectiveSection.text}
              </p>

              {/* 6 Items with Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {home.perspectiveSection.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-lg bg-[#FFFDF8] border border-[#E8DFCB] shadow-2xs"
                  >
                    <div className="p-2 rounded-md bg-[#FAF5EA] border border-[#E3B263]/30 shrink-0">
                      {getPerspectiveIcon(item.icon)}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#0B2342]">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to={home.perspectiveSection.cta.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all shadow-sm active:translate-y-px"
                >
                  <span>{home.perspectiveSection.cta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SPEAKING STRIP */}
      <section className="relative py-24 bg-[#0B2342] text-white overflow-hidden border-y border-[#E3B263]/30">
        <div className="absolute inset-0 z-0">
          <img
            src={home.speakingStrip.bgImage}
            alt="Shomari White on stage speaking"
            className="w-full h-full object-cover object-center opacity-25"
            loading="lazy"
            width={1440}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2342] via-[#0B2342]/90 to-[#0B2342]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#E3B263] uppercase">
            KEYNOTES &bull; WORKSHOPS &bull; RETREATS
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {home.speakingStrip.headline}
          </h2>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {home.speakingStrip.subtext}
          </p>

          <div className="pt-2">
            <Link
              to={home.speakingStrip.cta.href}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all shadow-md active:translate-y-px"
            >
              <span>{home.speakingStrip.cta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (Conditional, renders only if content.testimonials has items) */}
      <Testimonials />

      {/* 9. PRE-FOOTER BAND (Navy) */}
      <section className="py-16 lg:py-20 bg-[#0B2342] text-white border-t border-[#E3B263]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left Column: Upcoming Book */}
            <div className="space-y-4">
              <div className="mb-2">
                <Logo light={true} />
              </div>
              <span className="inline-block px-2.5 py-1 rounded bg-[#E3B263]/20 text-[#E3B263] border border-[#E3B263]/40 text-[11px] font-semibold tracking-wider uppercase">
                {home.preFooter.bookSection.badge}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {home.preFooter.bookSection.title}
              </h3>
              <p className="text-[#E3B263] text-sm font-medium">
                {home.preFooter.bookSection.subtitle}
              </p>
              <p className="text-stone-300 text-sm leading-relaxed max-w-lg">
                {home.preFooter.bookSection.description}
              </p>
              <div className="pt-2">
                <Link
                  to={home.preFooter.bookSection.cta.href}
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-[6px] text-xs font-semibold tracking-wider uppercase text-white border border-[#E3B263] hover:bg-[#E3B263]/10 transition-colors"
                >
                  <span>{home.preFooter.bookSection.cta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E3B263]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Let's Create Lasting Impact */}
            <div className="pt-10 lg:pt-0 lg:pl-16 space-y-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E3B263]">
                CONNECT & COLLABORATE
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {home.preFooter.ctaSection.title}
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed max-w-lg">
                {home.preFooter.ctaSection.description}
              </p>
              <div className="pt-3">
                <Link
                  to={home.preFooter.ctaSection.cta.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all shadow-md active:translate-y-px"
                >
                  <span>{home.preFooter.ctaSection.cta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
