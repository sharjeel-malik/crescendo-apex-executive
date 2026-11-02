import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { siteContent } from '../content';

export const Privacy: React.FC = () => {
  const { privacy } = siteContent;

  return (
    <div className="w-full bg-[#FAF5EA] py-16 lg:py-24">
      <SEOHead
        title="Privacy Policy | Crescendo Apex"
        description="Privacy policy and data handling practices for Crescendo Apex and Shomari White consulting practice."
        path="/privacy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B2342] hover:text-[#C99A45] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#E3B263]" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-8 sm:p-12 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-full bg-[#FAF5EA] border border-[#E3B263]/40">
              <Shield className="w-5 h-5 text-[#0B2342]" />
            </div>
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B2342]">
                {privacy.title}
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Last Updated: {privacy.lastUpdated}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-8 divide-y divide-[#E8DFCB]/60">
            {privacy.sections.map((section, idx) => (
              <div key={idx} className="pt-6 first:pt-0">
                <h2 className="font-serif text-xl font-bold text-[#0B2342] mb-3">
                  {section.heading}
                </h2>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
