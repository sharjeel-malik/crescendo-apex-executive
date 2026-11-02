import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidEmail,
  validateContactForm,
  validateSpeakingForm,
  validateBookForm,
  createMailtoFallback,
} from './formValidation.ts';

test('isValidEmail validates formats accurately', () => {
  assert.equal(isValidEmail('shomari@crescendoapex.co'), true);
  assert.equal(isValidEmail('user.name+tag@example.org'), true);
  assert.equal(isValidEmail('plainaddress'), false);
  assert.equal(isValidEmail('@missinguser.com'), false);
  assert.equal(isValidEmail('missingdomain@.com'), false);
  assert.equal(isValidEmail(''), false);
});

test('validateContactForm rejects empty required fields', () => {
  const result = validateContactForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
  assert.ok(result.errors.consent);
});

test('validateContactForm catches spam honeypot', () => {
  const result = validateContactForm({
    name: 'Bot',
    email: 'bot@spam.com',
    message: 'Hello spam message',
    consent: true,
    websiteHoneypot: 'http://spam.ru',
  });
  assert.equal(result.isValid, false);
  assert.equal(result.errors.bot, 'Spam detected');
});

test('validateContactForm passes valid submission', () => {
  const result = validateContactForm({
    name: 'Jane Doe',
    organization: 'Global Higher Ed Fund',
    email: 'jdoe@example.org',
    phone: '555-0199',
    engagementType: 'Executive Consulting',
    message: 'We are seeking guidance on modernizing our advancement operations.',
    consent: true,
    websiteHoneypot: '',
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateSpeakingForm enforces required event fields', () => {
  const invalid = validateSpeakingForm({
    name: 'John Smith',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.organization);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.eventName);

  const valid = validateSpeakingForm({
    name: 'John Smith',
    organization: 'Advancement Conference 2027',
    email: 'jsmith@conference.org',
    eventName: 'Annual Higher Education Leadership Summit',
  });
  assert.equal(valid.isValid, true);
});

test('validateBookForm requires valid email', () => {
  const invalid = validateBookForm({ email: 'bad' });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.email);

  const valid = validateBookForm({ email: 'leader@nonprofit.org', firstName: 'Elena' });
  assert.equal(valid.isValid, true);
});

test('createMailtoFallback generates clean mailto URI', () => {
  const uri = createMailtoFallback('Speaking Request', {
    name: 'Jane Doe',
    organization: 'AASP',
  });
  assert.ok(uri.startsWith('mailto:shomari@crescendoapex.co?subject=Speaking%20Request'));
  assert.ok(uri.includes('Jane%20Doe'));
  assert.ok(uri.includes('AASP'));
});
