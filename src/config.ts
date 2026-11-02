/**
 * Site Configuration & Form Endpoints
 * 
 * To receive real form submissions:
 * 1. Sign up for Formspree (https://formspree.io) or another form provider (e.g. Formkeep, Basin, Getform).
 * 2. Create a form and paste the provided endpoint URL into FORM_ENDPOINT below.
 * 3. Form submissions across Contact, Speaking, and Book notifications will send JSON payloads to this endpoint.
 *    If the endpoint fails or is unset, the form provides a friendly fallback with mailto:shomari@crescendoapex.co.
 */

export const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export const SITE_URL = 'https://crescendoapex.co';
export const SITE_DOMAIN = 'crescendoapex.co';
