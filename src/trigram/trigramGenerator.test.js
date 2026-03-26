import { generateTrigram } from './trigramGenerator';

const VALID_TRIGRAM_SYMBOLS = ['☰', '☷', '☵', '☲', '☳', '☴', '☶', '☱'];
const VALID_NAMES = ['Creative Heaven', 'Receptive Earth', 'Strong Yang', 'Strong Yin', 'Balanced'];

describe('generateTrigram', () => {
  test('returns object with all required keys', () => {
    const result = generateTrigram();
    expect(result).toHaveProperty('lines');
    expect(result).toHaveProperty('hexagram');
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('symbol');
    expect(result).toHaveProperty('upperTrigram');
    expect(result).toHaveProperty('lowerTrigram');
  });

  test('lines is an array of length 6', () => {
    const result = generateTrigram();
    expect(Array.isArray(result.lines)).toBe(true);
    expect(result.lines).toHaveLength(6);
  });

  test('each line is 0 or 1', () => {
    const result = generateTrigram();
    result.lines.forEach((line) => {
      expect([0, 1]).toContain(line);
    });
  });

  test('hexagram.lines equals lines', () => {
    const result = generateTrigram();
    expect(result.hexagram.lines).toEqual(result.lines);
  });

  test('symbol is a string of 2 unicode trigram characters', () => {
    const result = generateTrigram();
    expect(typeof result.symbol).toBe('string');
    expect(result.symbol).toHaveLength(2);
    const upper = result.symbol[0];
    const lower = result.symbol[1];
    expect(VALID_TRIGRAM_SYMBOLS).toContain(upper);
    expect(VALID_TRIGRAM_SYMBOLS).toContain(lower);
  });

  test('upperTrigram is a valid trigram symbol', () => {
    const result = generateTrigram();
    expect(VALID_TRIGRAM_SYMBOLS).toContain(result.upperTrigram);
  });

  test('lowerTrigram is a valid trigram symbol', () => {
    const result = generateTrigram();
    expect(VALID_TRIGRAM_SYMBOLS).toContain(result.lowerTrigram);
  });

  test('name is one of the valid hexagram names', () => {
    const result = generateTrigram();
    expect(VALID_NAMES).toContain(result.name);
  });

  test('multiple calls produce results (randomness works)', () => {
    const results = Array.from({ length: 20 }, () => generateTrigram());
    const uniqueSymbols = new Set(results.map((r) => r.symbol));
    expect(uniqueSymbols.size).toBeGreaterThan(1);
  });
});
