import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { FORM_ENDPOINT } from '../../config';
import {
  ConsultingInquiryFormData,
  isValidEmail,
  createMailtoFallback,
} from '../../utils/formValidation';

export const ConsultingInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<ConsultingInquiryFormData>({
    name: '',
    email: '',
    organization: '',
    message: '',
    websiteHoneypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

    const errs: Record<string, string> = {};
    if (formData.websiteHoneypot && formData.websiteHoneypot.trim()) {
      return;
    }
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!isValidEmail(formData.email)) errs.email = 'Invalid email';
    if (!formData.message.trim()) errs.message = 'Please provide a message';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
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
          _subject: `Consulting Inquiry from ${formData.name} - Crescendo Apex`,
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage('Could not send via form endpoint.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network or server error.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#12335B] border border-[#E3B263]/40 rounded-xl p-8 text-center text-white">
        <div className="w-12 h-12 bg-[#E3B263]/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#E3B263]">
          <CheckCircle2 className="w-6 h-6 text-[#E3B263]" />
        </div>
        <h4 className="font-serif text-xl font-bold mb-1">Inquiry Received</h4>
        <p className="text-stone-300 text-xs max-w-sm mx-auto">
          Thank you! Shomari White will review your goals and get back to you promptly.
        </p>
      </div>
    );
  }

  const mailtoLink = createMailtoFallback(
    `Consulting Inquiry: ${formData.name}`,
    formData
  );

  return (
    <form
      id="inquiry"
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#12335B] border border-[#E3B263]/40 rounded-xl p-6 md:p-8 text-white shadow-xl"
      aria-label="Quick Consulting Inquiry Form"
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="consultingHoneypot">Leave blank</label>
        <input
          type="text"
          id="consultingHoneypot"
          name="websiteHoneypot"
          value={formData.websiteHoneypot}
          onChange={handleChange}
          tabIndex={-1}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="inquiryName" className="block text-xs font-semibold uppercase tracking-wider text-[#E3B263] mb-1">
            Your Name *
          </label>
          <input
            type="text"
            id="inquiryName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
            className="w-full px-3.5 py-2.5 rounded-md text-sm bg-[#0B2342] border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E3B263]"
          />
          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="inquiryEmail" className="block text-xs font-semibold uppercase tracking-wider text-[#E3B263] mb-1">
            Email *
          </label>
          <input
            type="email"
            id="inquiryEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jdoe@organization.org"
            required
            className="w-full px-3.5 py-2.5 rounded-md text-sm bg-[#0B2342] border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E3B263]"
          />
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="inquiryOrg" className="block text-xs font-semibold uppercase tracking-wider text-[#E3B263] mb-1">
          Organization
        </label>
        <input
          type="text"
          id="inquiryOrg"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          placeholder="Nonprofit or University Name"
          className="w-full px-3.5 py-2.5 rounded-md text-sm bg-[#0B2342] border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E3B263]"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="inquiryMessage" className="block text-xs font-semibold uppercase tracking-wider text-[#E3B263] mb-1">
          How Can I Help? *
        </label>
        <textarea
          id="inquiryMessage"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your objectives or questions..."
          required
          className="w-full px-3.5 py-2.5 rounded-md text-sm bg-[#0B2342] border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E3B263] resize-y"
        />
        {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div className="p-3 mb-4 rounded bg-red-900/40 border border-red-500/50 text-xs flex flex-col gap-1 text-stone-200">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-red-300" />
            <span>{errorMessage}</span>
          </div>
          <a href={mailtoLink} className="underline text-[#E3B263]">
            Or email shomari@crescendoapex.co directly
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all disabled:opacity-60 min-h-[44px]"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-[#0B2342]" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Submit Consulting Inquiry</span>
            <Send className="w-3.5 h-3.5 text-[#0B2342]" />
          </>
        )}
      </button>
    </form>
  );
};
