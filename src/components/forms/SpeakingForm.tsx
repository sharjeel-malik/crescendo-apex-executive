import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { FORM_ENDPOINT } from '../../config';
import {
  SpeakingFormData,
  validateSpeakingForm,
  createMailtoFallback,
} from '../../utils/formValidation';

export const SpeakingForm: React.FC = () => {
  const [formData, setFormData] = useState<SpeakingFormData>({
    name: '',
    organization: '',
    email: '',
    eventName: '',
    eventDate: '',
    location: '',
    audienceSize: '',
    format: 'Keynote',
    message: '',
    websiteHoneypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

    const validation = validateSpeakingForm(formData);
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
          _subject: `Speaking Request: ${formData.eventName} (${formData.organization}) - Crescendo Apex`,
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage('Unable to dispatch through form endpoint.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network or server connection issue.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-8 md:p-12 shadow-sm text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-[#E3B263]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E3B263]/40">
          <CheckCircle2 className="w-8 h-8 text-[#0B2342]" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#0B2342] mb-2">
          Speaking Request Received
        </h3>
        <p className="text-stone-600 text-sm max-w-lg mx-auto leading-relaxed">
          Thank you for inviting Shomari White to speak at your event. We will review date availability, audience goals, and format details and get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setFormData({
              name: '',
              organization: '',
              email: '',
              eventName: '',
              eventDate: '',
              location: '',
              audienceSize: '',
              format: 'Keynote',
              message: '',
              websiteHoneypot: '',
            });
          }}
          className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B2342] hover:text-[#C99A45]"
        >
          <span>Submit Another Speaking Request</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  const mailtoLink = createMailtoFallback(
    `Speaking Request: ${formData.eventName || 'Event Request'} - ${formData.organization || 'Organization'}`,
    formData
  );

  return (
    <form
      id="request"
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#FFFDF8] border border-[#E8DFCB] rounded-xl p-6 sm:p-8 md:p-10 shadow-sm"
      aria-label="Speaking Request Form"
    >
      <div className="mb-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C99A45] mb-1">
          EVENT INQUIRY
        </p>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0B2342]">
          Invite Shomari to Speak
        </h3>
        <p className="text-stone-600 text-sm mt-1">
          Provide your event details below and we will confirm calendar availability.
        </p>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="speakingWebsiteHoneypot">Leave blank</label>
        <input
          type="text"
          id="speakingWebsiteHoneypot"
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
            <label htmlFor="speakingName" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
              Contact Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="speakingName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Jordan Miller"
              required
              aria-invalid={!!errors.name}
              className={`w-full px-4 py-3 rounded-md text-sm border bg-white text-[#0B2342] focus:outline-none focus:ring-2 focus:ring-[#E3B263] transition-colors ${
                errors.name ? 'border-red-500' : 'border-[#E8DFCB]'
              }`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-600 font-medium">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="speakingOrg" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
              Organization / Host <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="speakingOrg"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="e.g. CASE District Summit / University"
              required
              aria-invalid={!!errors.organization}
              className={`w-full px-4 py-3 rounded-md text-sm border bg-white text-[#0B2342] focus:outline-none focus:ring-2 focus:ring-[#E3B263] transition-colors ${
                errors.organization ? 'border-red-500' : 'border-[#E8DFCB]'
              }`}
            />
            {errors.organization && <p className="mt-1 text-xs text-red-600 font-medium">{errors.organization}</p>}
          </div>
        </div>

        {/* Email and Event Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="speakingEmail" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
              Email Address <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              id="speakingEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jmiller@association.org"
              required
              aria-invalid={!!errors.email}
              className={`w-full px-4 py-3 rounded-md text-sm border bg-white text-[#0B2342] focus:outline-none focus:ring-2 focus:ring-[#E3B263] transition-colors ${
                errors.email ? 'border-red-500' : 'border-[#E8DFCB]'
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="speakingEventName" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
              Event Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="speakingEventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              placeholder="e.g. 2027 Annual Leadership Conference"
              required
              aria-invalid={!!errors.eventName}
              className={`w-full px-4 py-3 rounded-md text-sm border bg-white text-[#0B2342] focus:outline-none focus:ring-2 focus:ring-[#E3B263] transition-colors ${
                errors.eventName ? 'border-red-500' : 'border-[#E8DFCB]'
              }`}
            />
            {errors.eventName && <p className="mt-1 text-xs text-red-600 font-medium">{errors.eventName}</p>}
          </div>
        </div>

        {/* Event Date, Location, Audience Size, Format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label htmlFor="eventDate" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
              Event Date
            </label>
            <input
              type="text"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              placeholder="e.g. Oct 14, 2027"
              className="w-full px-3.5 py-2.5 rounded-md text-sm border border-[#E8DFCB] bg-white text-[#0B2342] focus:ring-2 focus:ring-[#E3B263] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
              Location / Virtual
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Chicago, IL or Virtual"
              className="w-full px-3.5 py-2.5 rounded-md text-sm border border-[#E8DFCB] bg-white text-[#0B2342] focus:ring-2 focus:ring-[#E3B263] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="audienceSize" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
              Audience Size
            </label>
            <input
              type="text"
              id="audienceSize"
              name="audienceSize"
              value={formData.audienceSize}
              onChange={handleChange}
              placeholder="e.g. 250 attendees"
              className="w-full px-3.5 py-2.5 rounded-md text-sm border border-[#E8DFCB] bg-white text-[#0B2342] focus:ring-2 focus:ring-[#E3B263] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="format" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
              Format
            </label>
            <select
              id="format"
              name="format"
              value={formData.format}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-md text-sm border border-[#E8DFCB] bg-white text-[#0B2342] focus:ring-2 focus:ring-[#E3B263] transition-colors"
            >
              <option value="Keynote">Keynote</option>
              <option value="Workshop">Workshop</option>
              <option value="Panel">Panel or Fireside</option>
              <option value="Virtual">Virtual Session</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="speakingMessage" className="block text-xs font-semibold uppercase tracking-wider text-[#0B2342] mb-1.5">
            Event Objectives & Details
          </label>
          <textarea
            id="speakingMessage"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about the audience profile, key theme, and goals for this session..."
            className="w-full px-4 py-3 rounded-md text-sm border border-[#E8DFCB] bg-white text-[#0B2342] focus:ring-2 focus:ring-[#E3B263] transition-colors resize-y"
          />
        </div>

        {/* Error Notification with Mailto Fallback */}
        {status === 'error' && (
          <div className="p-4 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>{errorMessage || 'Unable to submit speaking request.'}</span>
            </div>
            <p className="text-stone-700">
              You can dispatch your speaking inquiry directly via email:{' '}
              <a
                href={mailtoLink}
                className="font-semibold text-[#0B2342] underline hover:text-[#C99A45]"
              >
                Send speaking request to shomari@crescendoapex.co
              </a>
            </p>
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] text-xs font-semibold tracking-wider uppercase bg-[#E3B263] text-[#0B2342] hover:bg-[#C99A45] transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm min-h-[44px]"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#0B2342]" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <span>Submit Speaking Request</span>
                <Send className="w-3.5 h-3.5 text-[#0B2342]" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
