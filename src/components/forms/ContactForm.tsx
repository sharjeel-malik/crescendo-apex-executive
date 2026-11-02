import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { FORM_ENDPOINT } from '../../config';
import { siteContent } from '../../content';
import {
  ContactFormData,
  validateContactForm,
  createMailtoFallback,
} from '../../utils/formValidation';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    organization: '',
    email: '',
    phone: '',
    engagementType: 'Executive Consulting',
    message: '',
    consent: false,
    websiteHoneypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

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

    const validation = validateContactForm(formData);
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
          _subject: `New Inquiry from ${formData.name} - Crescendo Apex`,
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        // If placeholder endpoint or HTTP failure, show polite error with mailto fallback
        setStatus('error');
        setErrorMessage('Unable to send automatically via the form endpoint.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network or server connection issue.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-8 md:p-10 shadow-sm text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-[#E3B263]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E3B263]/40">
          <CheckCircle2 className="w-8 h-8 text-[#0B2342]" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#0B2342] mb-2">
          Thank You for Reaching Out
        </h3>
        <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
          Your inquiry has been received. Shomari White will review your note and respond promptly.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setFormData({
              name: '',
              organization: '',
              email: '',
              phone: '',
              engagementType: 'Executive Consulting',
              message: '',
              consent: false,
              websiteHoneypot: '',
            });
          }}
          className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B2342] hover:text-[#C99A45] transition-colors"
        >
          <span>Send Another Note</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  const mailtoLink = createMailtoFallback(
    `Consulting Inquiry: ${formData.name || 'Website Inquiry'}`,
    formData
  );

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-6 sm:p-8 md:p-10 shadow-sm"
      aria-label="Contact and Engagement Form"
    >
      {/* Hidden honeypot field for bot suppression */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteHoneypot">Leave this blank</label>
        <input
          type="text"
          id="websiteHoneypot"
          name="websiteHoneypot"
          value={formData.websiteHoneypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-5">
        {/* Name and Organization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
              Full Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Eleanor Vance"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`w-full px-4 py-3 rounded-md text-sm border bg-white text-[#0B2342] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E3B263] transition-colors ${
                errors.name ? 'border-red-500' : 'border-[#E8DFCB]'
              }`}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-600 font-medium">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="organization" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="e.g. University Advancement / Foundation"
              className="w-full px-4 py-3 rounded-md text-sm border border-[#E8DFCB] bg-white text-[#0B2342] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E3B263] transition-colors"
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
              Email Address <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@organization.org"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full px-4 py-3 rounded-md text-sm border bg-white text-[#0B2342] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E3B263] transition-colors ${
                errors.email ? 'border-red-500' : 'border-[#E8DFCB]'
              }`}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-600 font-medium">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 000-0000"
              className="w-full px-4 py-3 rounded-md text-sm border border-[#E8DFCB] bg-white text-[#0B2342] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E3B263] transition-colors"
            />
          </div>
        </div>

        {/* Engagement Type */}
        <div>
          <label htmlFor="engagementType" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
            Engagement Type
          </label>
          <select
            id="engagementType"
            name="engagementType"
            value={formData.engagementType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md text-sm border border-[#E8DFCB] bg-white text-[#0B2342] focus:outline-none focus:ring-2 focus:ring-[#E3B263] transition-colors"
          >
            {siteContent.contactPage.engagementTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
            Message <span className="text-red-700">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your organization's goals, challenges, or event details..."
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`w-full px-4 py-3 rounded-md text-sm border bg-white text-[#0B2342] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E3B263] transition-colors resize-y ${
              errors.message ? 'border-red-500' : 'border-[#E8DFCB]'
            }`}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-600 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div>
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
              className="mt-1 h-4 w-4 rounded border-stone-300 text-[#0B2342] focus:ring-[#E3B263] accent-[#0B2342]"
            />
            <label htmlFor="consent" className="text-xs text-stone-600 leading-normal select-none">
              I agree to allow Crescendo Apex to store my details and contact me regarding this inquiry. <span className="text-red-700">*</span>
            </label>
          </div>
          {errors.consent && (
            <p id="consent-error" className="mt-1 text-xs text-red-600 font-medium">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Error Notification with Mailto Fallback */}
        {status === 'error' && (
          <div className="p-4 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>{errorMessage || 'Something went wrong.'}</span>
            </div>
            <p className="text-stone-700">
              You can send your inquiry directly via your email client:{' '}
              <a
                href={mailtoLink}
                className="font-semibold text-[#0B2342] underline hover:text-[#C99A45]"
              >
                Click here to email shomari@crescendoapex.co
              </a>
            </p>
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#0B2342] text-white hover:bg-[#12335B] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm min-h-[44px]"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#E3B263]" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5 text-[#E3B263]" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
