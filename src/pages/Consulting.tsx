import React, { useState } from 'react';
import {
  Compass,
  Settings,
  Users,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Check,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { MountainPattern } from '../components/MountainPattern';
import { ConsultingInquiryForm } from '../components/forms/ConsultingInquiryForm';
import { siteContent } from '../content';

export const Consulting: React.FC = () => {
  const { consulting, home } = siteContent;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'strategy-planning':
        return <Compass className="w-6 h-6 text-[#0B2342]" />;
      case 'advancement-operations':
        return <Settings className="w-6 h-6 text-[#0B2342]" />;
      case 'leadership-development':
        return <Users className="w-6 h-6 text-[#0B2342]" />;
      case 'organizational-effectiveness':
        return <ShieldCheck className="w-6 h-6 text-[#0B2342]" />;
      default:
        return <Compass className="w-6 h-6 text-[#0B2342]" />;
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Executive Consulting | Strategy & Advancement Operations"
        description={consulting.hero.text}
        path="/consulting"
      />

      {/* Hero Section */}
      <section className="relative w-full bg-[#0B2342] text-white overflow-hidden py-16 lg:py-24 border-b border-[#E3B263]/25">
        <MountainPattern opacity={0.12} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#E3B263] uppercase mb-3">
            {consulting.hero.sub}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {consulting.hero.h1}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto">
            {consulting.hero.text}
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all shadow-md active:translate-y-px"
            >
              <span>Discuss an Engagement</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* (a) My Consulting Services (4 Cards) */}
      <section className="py-20 lg:py-24 bg-[#FAF5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-2">
              AREAS OF PRACTICE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2342]">
              My Consulting Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consulting.services.map((service) => (
              <div
                key={service.id}
                className="bg-[#FFFDF8] rounded-xl p-8 border border-[#E8DFCB] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-[#FDF8EE] border border-[#E3B263]/40 flex items-center justify-center mb-6">
                    {getServiceIcon(service.id)}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0B2342] mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-stone-700 text-sm font-medium leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    {service.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* (b) Who I Work With & (c) Ways to Engage */}
      <section className="py-20 bg-[#FAF5EA] border-t border-[#E8DFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Who I Work With */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45]">
                PARTNERS IN ADVANCEMENT
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2342]">
                Who I Work With
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {consulting.whoIWorkWith.map((org, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFFDF8] p-5 rounded-xl border border-[#E8DFCB] shadow-2xs"
                  >
                    <h3 className="font-serif text-lg font-bold text-[#0B2342] mb-1">
                      {org.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {org.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ways to Engage */}
            <div className="lg:col-span-5 bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-8 shadow-xs self-start">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-1">
                COLLABORATION MODELS
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#0B2342] mb-6 border-b border-[#E8DFCB] pb-4">
                Ways to Engage
              </h3>
              <ul className="space-y-4">
                {consulting.waysToEngage.map((way, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-[#E3B263]/20 border border-[#E3B263] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#0B2342]" />
                    </div>
                    <span className="text-sm font-semibold text-[#0B2342]">
                      {way}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* (d) How We Work (4 steps) */}
      <section className="py-20 lg:py-24 bg-[#FAF5EA] border-t border-[#E8DFCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-2">
              DISCIPLINED EXECUTION
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2342]">
              {home.howWeWork.heading}
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              {home.howWeWork.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.howWeWork.steps.map((step) => (
              <div
                key={step.number}
                className="bg-[#FFFDF8] rounded-xl p-8 border border-[#E8DFCB] shadow-xs"
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

      {/* (e) FAQ Accordion */}
      <section className="py-20 bg-[#FAF5EA] border-t border-[#E8DFCB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-2">
              QUESTIONS & ANSWERS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2342]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {consulting.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFDF8] rounded-xl border border-[#E8DFCB] overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#E3B263] min-h-[44px]"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#0B2342] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#E3B263] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      className="px-6 pb-6 pt-1 text-sm text-stone-600 leading-relaxed border-t border-[#E8DFCB]/60 animate-in fade-in duration-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* (f) Navy CTA Band with Inquiry Form */}
      <section id="inquiry" className="py-20 bg-[#0B2342] text-white relative overflow-hidden border-t border-[#E3B263]/25">
        <MountainPattern opacity={0.12} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#E3B263] uppercase">
                TAKE THE NEXT STEP
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                {consulting.ctaBand.title}
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {consulting.ctaBand.text}
              </p>
            </div>

            <div className="lg:col-span-7">
              <ConsultingInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
