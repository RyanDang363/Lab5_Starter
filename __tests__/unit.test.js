// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Phone number tests
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number with area code in parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number with letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('invalid phone number with too few digits', () => {
  expect(isPhoneNumber('123-45-678')).toBe(false);
});

// Email tests
test('valid simple email address', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('valid email with underscore in local part', () => {
  expect(isEmail('first_last@domain.org')).toBe(true);
});

test('invalid email missing at symbol', () => {
  expect(isEmail('user.example.com')).toBe(false);
});

test('invalid email with too long TLD', () => {
  expect(isEmail('user@example.tools')).toBe(false);
});

// Strong password tests
test('valid strong password at minimum length', () => {
  expect(isStrongPassword('a123')).toBe(true);
});

test('valid strong password with letters, numbers, underscore', () => {
  expect(isStrongPassword('A_good1')).toBe(true);
});

test('invalid password starting with non-letter', () => {
  expect(isStrongPassword('1badpw')).toBe(false);
});

test('invalid password that is too short', () => {
  expect(isStrongPassword('ab3')).toBe(false);
});

// Date tests
test('valid date with single-digit month and day', () => {
  expect(isDate('1/2/2020')).toBe(true);
});

test('valid date with two-digit month and day', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('invalid date with two-digit year', () => {
  expect(isDate('1/2/20')).toBe(false);
});

test('invalid date with wrong separator', () => {
  expect(isDate('12-31-1999')).toBe(false);
});

// Hex color tests
test('valid three-digit hex color with hash', () => {
  expect(isHexColor('#0Fa')).toBe(true);
});

test('valid six-digit hex color without hash', () => {
  expect(isHexColor('A1b2C3')).toBe(true);
});

test('invalid hex color with non-hex character', () => {
  expect(isHexColor('#GGG')).toBe(false);
});

test('invalid hex color with incorrect length', () => {
  expect(isHexColor('#12345')).toBe(false);
});
