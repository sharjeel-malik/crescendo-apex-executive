import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { MountainPattern } from '../components/MountainPattern';
import { ContactForm } from '../components/forms/ContactForm';
import { siteContent } from '../content';

export const Contact: React.FC = () => {
  const { contactPage, contact } = siteContent;

  return (
    <div className="w-full">
      <SEOHead
        title="Contact Shomari White | Discuss an Engagement"
        description={contactPage.hero.text}
        path="/contact"
      />

      {/* Hero Section */}
      <section className="relative w-full bg-[#0B2342] text-white overflow-hidden py-16 lg:py-20 border-b border-[#E3B263]/25">
        <MountainPattern opacity={0.12} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#E3B263] uppercase mb-2">
            {contactPage.hero.sub}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {contactPage.hero.h1}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            {contactPage.hero.text}
          </p>
        </div>
      </section>

      {/* Main Content: Left Info Card & Right Contact Form */}
      <section className="py-20 bg-[#FAF5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Info Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-8 shadow-xs space-y-6">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-1">
                    GET IN TOUCH
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-[#0B2342]">
                    Contact Information
                  </h2>
                </div>

                <div className="space-y-5 divide-y divide-[#E8DFCB]/60">
                  {/* Email */}
                  {contact.email && (
                    <div className="flex items-start gap-3.5 pt-4 first:pt-0">
                      <div className="p-2.5 rounded-full bg-[#FAF5EA] border border-[#E3B263]/40 text-[#0B2342] shrink-0 mt-0.5">
                        <Mail className="w-4 h-4 text-[#C99A45]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                          Direct Email
                        </p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-sm font-semibold text-[#0B2342] hover:text-[#C99A45] transition-colors break-all"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Phone (Render only if provided in content.ts) */}
                  {contact.phone && (
                    <div className="flex items-start gap-3.5 pt-4">
                      <div className="p-2.5 rounded-full bg-[#FAF5EA] border border-[#E3B263]/40 text-[#0B2342] shrink-0 mt-0.5">
                        <Phone className="w-4 h-4 text-[#C99A45]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                          Phone
                        </p>
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-sm font-semibold text-[#0B2342] hover:text-[#C99A45] transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* LinkedIn */}
                  {contact.linkedin && (
                    <div className="flex items-start gap-3.5 pt-4">
                      <div className="p-2.5 rounded-full bg-[#FAF5EA] border border-[#E3B263]/40 text-[#0B2342] shrink-0 mt-0.5">
                        <Linkedin className="w-4 h-4 text-[#C99A45]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                          LinkedIn
                        </p>
                        <a
                          href={contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-[#0B2342] hover:text-[#C99A45] transition-colors flex items-center gap-1 group"
                        >
                          <span>Connect with me</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#E3B263] transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Location */}
                  {contact.location && (
                    <div className="flex items-start gap-3.5 pt-4">
                      <div className="p-2.5 rounded-full bg-[#FAF5EA] border border-[#E3B263]/40 text-[#0B2342] shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-[#C99A45]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                          Availability
                        </p>
                        <p className="text-sm font-semibold text-[#0B2342]">
                          {contact.location}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>

          {/* Three Small Cards below linking to Consulting, Speaking and Book */}
          <div className="mt-20 pt-16 border-t border-[#E8DFCB]">
            <div className="text-center max-w-xl mx-auto mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-1">
                EXPLORE PRACTICE AREAS
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#0B2342]">
                How Else Can We Collaborate?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactPage.quickLinks.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  className="bg-[#FFFDF8] rounded-xl p-6 border border-[#E8DFCB] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0B2342] group-hover:text-[#C99A45] transition-colors mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B2342] group-hover:text-[#C99A45]">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E3B263] transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
