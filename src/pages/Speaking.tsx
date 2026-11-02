import React from 'react';
import {
  UsersRound,
  Zap,
  HeartHandshake,
  Award,
  Download,
  ArrowRight,
  Mic,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { MountainPattern } from '../components/MountainPattern';
import { SpeakingForm } from '../components/forms/SpeakingForm';
import { siteContent } from '../content';

export const Speaking: React.FC = () => {
  const { speaking } = siteContent;

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'users-round':
        return <UsersRound className="w-6 h-6 text-[#0B2342]" />;
      case 'zap':
        return <Zap className="w-6 h-6 text-[#0B2342]" />;
      case 'heart-handshake':
        return <HeartHandshake className="w-6 h-6 text-[#0B2342]" />;
      case 'award':
        return <Award className="w-6 h-6 text-[#0B2342]" />;
      default:
        return <Mic className="w-6 h-6 text-[#0B2342]" />;
    }
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Speaking Engagements | Keynotes & Workshops"
        description={speaking.hero.text}
        path="/speaking"
        ogImage="/images/speaking-stage.jpg"
      />

      {/* Hero Section */}
      <section className="relative w-full bg-[#0B2342] text-white overflow-hidden py-16 lg:py-24 border-b border-[#E3B263]/25">
        <div className="absolute inset-0 z-0">
          <img
            src={speaking.hero.image}
            alt="Shomari White speaking on stage"
            className="w-full h-full object-cover object-center opacity-30"
            loading="eager"
            fetchPriority="high"
            width={1440}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2342] via-[#0B2342]/85 to-[#0B2342]/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#E3B263] uppercase mb-3">
            {speaking.hero.sub}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {speaking.hero.h1}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto">
            {speaking.hero.text}
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#request"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all shadow-md active:translate-y-px min-h-[44px]"
            >
              <span>Invite Shomari to Speak</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* (a) Featured Topics (4 cards) */}
      <section className="py-20 lg:py-24 bg-[#FAF5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-2">
              KEYNOTE & WORKSHOP THEMES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2342]">
              Featured Topics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speaking.topics.map((topic, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF8] rounded-xl p-8 border border-[#E8DFCB] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-[#FDF8EE] border border-[#E3B263]/40 flex items-center justify-center mb-6">
                    {getTopicIcon(topic.icon)}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0B2342] mb-3 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* (b) Formats & (c) Ideal Audiences */}
      <section className="py-20 bg-[#FAF5EA] border-t border-[#E8DFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Formats */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45]">
                DELIVERY TAILORED TO YOUR PROGRAM
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2342]">
                Speaking Formats
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {speaking.formats.map((fmt, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFFDF8] p-6 rounded-xl border border-[#E8DFCB] shadow-2xs"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-[#E3B263]" />
                      <h3 className="font-serif text-lg font-bold text-[#0B2342]">
                        {fmt.title}
                      </h3>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {fmt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal Audiences */}
            <div className="lg:col-span-5 bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-8 shadow-xs self-start">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-1">
                WHO BENEFITS
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#0B2342] mb-6 border-b border-[#E8DFCB] pb-4">
                Ideal Audiences
              </h3>
              <ul className="space-y-4">
                {speaking.idealAudiences.map((aud, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E3B263] shrink-0" />
                    <span className="text-sm font-semibold text-[#0B2342]">
                      {aud}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* (d) Photo Strip */}
      <section className="py-16 bg-[#FAF5EA] border-t border-[#E8DFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-sm border border-[#E8DFCB]">
              <img
                src="/images/speaking-audience.jpg"
                alt="Audience engaged during leadership conference"
                className="w-full h-full object-cover"
                loading="lazy"
                width={480}
                height={300}
              />
            </div>
            <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-sm border border-[#E8DFCB]">
              <img
                src="/images/speaking-stage.jpg"
                alt="Shomari White presenting on stage"
                className="w-full h-full object-cover"
                loading="lazy"
                width={480}
                height={300}
              />
            </div>
            <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-sm border border-[#E8DFCB]">
              <img
                src="/images/workshop.jpg"
                alt="Interactive group workshop in session"
                className="w-full h-full object-cover"
                loading="lazy"
                width={480}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* (e) Media Kit Block */}
      <section className="py-16 bg-[#FAF5EA] border-t border-[#E8DFCB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-8 md:p-10 shadow-xs">
            <div className="mb-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-1">
                FOR EVENT ORGANIZERS
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#0B2342]">
                Media Kit & Speaker Bio
              </h3>
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
              {speaking.mediaKit.shortBio}
            </p>

            {/* Downloads (render only if file paths exist in content.ts) */}
            {speaking.mediaKit.downloads && speaking.mediaKit.downloads.length > 0 && (
              <div className="pt-4 border-t border-[#E8DFCB] flex flex-wrap gap-4">
                {speaking.mediaKit.downloads.map((dl, idx) => (
                  <a
                    key={idx}
                    href={dl.fileUrl}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-semibold tracking-wider uppercase bg-[#0B2342] text-white hover:bg-[#12335B] transition-colors"
                  >
                    <Download className="w-4 h-4 text-[#E3B263]" />
                    <span>{dl.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* (f) Navy CTA Band */}
      <section className="py-20 bg-[#0B2342] text-white relative overflow-hidden border-t border-[#E3B263]/25">
        <MountainPattern opacity={0.12} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {speaking.ctaBand.title}
          </h2>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {speaking.ctaBand.text}
          </p>
          <div>
            <a
              href={speaking.ctaBand.cta.href}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all shadow-md active:translate-y-px"
            >
              <span>{speaking.ctaBand.cta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* (g) Speaking Request Form */}
      <section className="py-20 bg-[#FAF5EA] border-t border-[#E8DFCB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpeakingForm />
        </div>
      </section>
    </div>
  );
};
