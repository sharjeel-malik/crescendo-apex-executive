import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home as HomeIcon } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LogoMark } from '../components/Logo';

export const NotFound: React.FC = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-[#FAF5EA] px-4 py-20">
      <SEOHead
        title="Page Not Found | Crescendo Apex"
        description="The page you were looking for could not be found."
        path="/404"
      />

      <div className="max-w-md mx-auto text-center bg-[#FFFDF8] border border-[#E8DFCB] rounded-2xl p-10 shadow-sm">
        <div className="p-3.5 rounded-full bg-[#FAF5EA] border border-[#E3B263]/40 inline-flex mb-6">
          <LogoMark className="h-10 w-10" />
        </div>

        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-2">
          404 ERROR
        </p>

        <h1 className="font-serif text-3xl font-bold text-[#0B2342] mb-3">
          Page Not Found
        </h1>

        <p className="text-stone-600 text-sm leading-relaxed mb-8">
          The page you are looking for doesn&apos;t exist or has moved. Return to the homepage to explore Shomari White&apos;s executive consulting, speaking, and book practice.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all shadow-xs"
          >
            <HomeIcon className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#0B2342] text-white hover:bg-[#12335B] transition-all shadow-xs"
          >
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
