import React from 'react';
import { Quote } from 'lucide-react';
import { siteContent, Testimonial } from '../content';

export const Testimonials: React.FC = () => {
  // Render ONLY when the testimonials array in content.ts is not empty
  if (!siteContent.testimonials || siteContent.testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-[#FAF5EA] border-t border-[#E8DFCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-2">
            CLIENT PERSPECTIVES
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B2342]">
            What Leaders Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.testimonials.map((item: Testimonial, idx: number) => (
            <div
              key={idx}
              className="bg-[#FFFDF8] p-8 rounded-xl border border-[#E8DFCB] shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#E3B263] mb-4 opacity-75" />
                <p className="text-stone-700 italic text-base leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8DFCB]/60">
                <p className="font-semibold text-[#0B2342] text-sm">{item.author}</p>
                <p className="text-xs text-stone-500 mt-0.5">{item.role}</p>
                {item.organization && (
                  <p className="text-xs text-[#C99A45] font-medium mt-0.5">{item.organization}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
