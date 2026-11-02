import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { FORM_ENDPOINT } from '../../config';
import {
  BookFormData,
  validateBookForm,
  createMailtoFallback,
} from '../../utils/formValidation';

export const BookNotifyForm: React.FC = () => {
  const [formData, setFormData] = useState<BookFormData>({
    email: '',
    firstName: '',
    websiteHoneypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateBookForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Book Launch Notification List: ${formData.email} - Crescendo Apex`,
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage('Unable to register via endpoint.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network or server connection issue.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-8 text-center shadow-sm animate-in fade-in duration-300">
        <div className="w-12 h-12 bg-[#E3B263]/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#E3B263]/40">
          <CheckCircle2 className="w-6 h-6 text-[#0B2342]" />
        </div>
        <h4 className="font-serif text-xl font-bold text-[#0B2342] mb-1">
          You&apos;re on the Launch List
        </h4>
        <p className="text-stone-600 text-xs max-w-sm mx-auto leading-relaxed">
          Thank you! We will notify you the moment <em>Nonprofit Crescendo</em> is released and share exclusive chapter excerpts.
        </p>
      </div>
    );
  }

  const mailtoLink = createMailtoFallback(
    `Book Launch Notification Request: ${formData.email || ''}`,
    formData
  );

  return (
    <form
      id="notify"
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-6 sm:p-8 shadow-sm"
      aria-label="Book Launch Notification Form"
    >
      <div className="mb-5">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-1">
          BE THE FIRST TO KNOW
        </p>
        <h3 className="font-serif text-2xl font-bold text-[#0B2342]">
          Get Notified at Launch
        </h3>
        <p className="text-stone-600 text-xs sm:text-sm mt-1">
          Sign up to receive early publication updates, preview chapters, and release date announcements.
        </p>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="bookHoneypot">Leave blank</label>
        <input
          type="text"
          id="bookHoneypot"
          name="websiteHoneypot"
          value={formData.websiteHoneypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="bookFirstName" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1">
            First Name (Optional)
          </label>
          <input
            type="text"
            id="bookFirstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="e.g. Maria"
            className="w-full px-4 py-3 rounded-md text-sm border border-[#E8DFCB] bg-white text-[#0B2342] focus:ring-2 focus:ring-[#E3B263] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="bookEmail" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1">
            Email Address <span className="text-red-700">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              id="bookEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@organization.org"
              required
              aria-invalid={!!errors.email}
              className={`w-full pl-10 pr-4 py-3 rounded-md text-sm border bg-white text-[#0B2342] focus:ring-2 focus:ring-[#E3B263] transition-colors ${
                errors.email ? 'border-red-500' : 'border-[#E8DFCB]'
              }`}
            />
            <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
          </div>
          {errors.email && <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>}
        </div>

        {status === 'error' && (
          <div className="p-3.5 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>{errorMessage || 'Notice list submission failed.'}</span>
            </div>
            <p className="text-stone-700">
              Or email directly:{' '}
              <a href={mailtoLink} className="underline font-semibold text-[#0B2342]">
                shomari@crescendoapex.co
              </a>
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm min-h-[44px]"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#0B2342]" />
              <span>Joining List...</span>
            </>
          ) : (
            <>
              <span>Notify Me at Launch</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0B2342]" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
