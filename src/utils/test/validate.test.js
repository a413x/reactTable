import {validate} from '../validate.js'

describe('Validate function tests', () => {
  test('validate work with numbers', () => {
    expect(validate('number', 123)).toBe(true)
    expect(validate('number', 'abc')).toBe(false)
    expect(validate('number', '1a')).toBe(false)
  })
  test('validate work with text', () => {
    expect(validate('text', 'abc')).toBe(true)
    expect(validate('text', 123)).toBe(false)
    expect(validate('text', '1a')).toBe(false)
  })
  test('validate work with email', () => {
    expect(validate('email', 'example@example.com')).toBe(true)
    expect(validate('email', '@example.com')).toBe(false)
    expect(validate('email', 'example@.com')).toBe(false)
  })
  test('validate work with phone', () => {
    expect(validate('phone', 11111111111)).toBe(true)
    expect(validate('phone', '+11111111111')).toBe(true)
    expect(validate('phone', 111)).toBe(false)
    expect(validate('phone', '11111111111a')).toBe(false)
  })
})
