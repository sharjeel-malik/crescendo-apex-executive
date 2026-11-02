/**
 * Form Validation and Submission Utilities
 */

export interface ContactFormData {
  name: string;
  organization: string;
  email: string;
  phone: string;
  engagementType: string;
  message: string;
  consent: boolean;
  websiteHoneypot?: string;
}

export interface SpeakingFormData {
  name: string;
  organization: string;
  email: string;
  eventName: string;
  eventDate: string;
  location: string;
  audienceSize: string;
  format: string;
  message: string;
  websiteHoneypot?: string;
}

export interface BookFormData {
  email: string;
  firstName?: string;
  websiteHoneypot?: string;
}

export interface ConsultingInquiryFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
  websiteHoneypot?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email.trim());
}

export function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (data.websiteHoneypot && data.websiteHoneypot.trim() !== '') {
    return { isValid: false, errors: { bot: 'Spam detected' } };
  }

  if (!data.name || !data.name.trim()) {
    errors.name = 'Full name is required';
  }

  if (!data.email || !data.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!data.message || !data.message.trim()) {
    errors.message = 'Please enter a message regarding your inquiry';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  if (data.consent !== true) {
    errors.consent = 'Please agree to allow Crescendo Apex to contact you';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateSpeakingForm(data: Partial<SpeakingFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (data.websiteHoneypot && data.websiteHoneypot.trim() !== '') {
    return { isValid: false, errors: { bot: 'Spam detected' } };
  }

  if (!data.name || !data.name.trim()) {
    errors.name = 'Contact name is required';
  }

  if (!data.organization || !data.organization.trim()) {
    errors.organization = 'Organization or event host is required';
  }

  if (!data.email || !data.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.eventName || !data.eventName.trim()) {
    errors.eventName = 'Event name is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateBookForm(data: Partial<BookFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (data.websiteHoneypot && data.websiteHoneypot.trim() !== '') {
    return { isValid: false, errors: { bot: 'Spam detected' } };
  }

  if (!data.email || !data.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function createMailtoFallback(subject: string, bodyObj: Record<string, any>): string {
  const bodyText = Object.entries(bodyObj)
    .filter(([k, v]) => v && k !== 'websiteHoneypot')
    .map(([k, v]) => `${k.charAt(0).toUpperCase() + k.slice(1)}: ${v}`)
    .join('\n');
  return `mailto:shomari@crescendoapex.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
}
