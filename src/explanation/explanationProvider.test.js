import { provideExplanation } from './explanationProvider';

describe('provideExplanation', () => {
  const validHexagram = { lines: [1, 0, 1, 0, 1, 0] };

  // Test 1: Returns all top-level keys
  test('returns all top-level keys', () => {
    const result = provideExplanation(validHexagram);
    const expectedKeys = [
      'hexagram',
      'trigrams',
      'lines',
      'changingLines',
      'seasonalCorrespondences',
      'fiveElements',
      'guidance',
      'interpretation',
    ];
    expectedKeys.forEach((key) => {
      expect(result).toHaveProperty(key);
    });
  });

  // Test 2: Hexagram number is 1-64 for any valid input
  test('hexagram number is between 1 and 64', () => {
    const result = provideExplanation(validHexagram);
    expect(result.hexagram.number).toBeGreaterThanOrEqual(1);
    expect(result.hexagram.number).toBeLessThanOrEqual(64);
  });

  // Test 3: Hexagram has name and chinese fields as strings
  test('hexagram has name and chinese fields as strings', () => {
    const result = provideExplanation(validHexagram);
    expect(typeof result.hexagram.name).toBe('string');
    expect(result.hexagram.name.length).toBeGreaterThan(0);
    expect(typeof result.hexagram.chinese).toBe('string');
    expect(result.hexagram.chinese.length).toBeGreaterThan(0);
  });

  // Test 4: Trigrams upper and lower have name, element, symbol
  test('trigrams upper and lower have name, element, and symbol', () => {
    const result = provideExplanation(validHexagram);
    const { upper, lower } = result.trigrams;

    expect(typeof upper.name).toBe('string');
    expect(typeof upper.element).toBe('string');
    expect(typeof upper.symbol).toBe('string');

    expect(typeof lower.name).toBe('string');
    expect(typeof lower.element).toBe('string');
    expect(typeof lower.symbol).toBe('string');
  });

  // Test 5: Lines array has 6 elements
  test('lines array has exactly 6 elements', () => {
    const result = provideExplanation(validHexagram);
    expect(result.lines).toHaveLength(6);
  });

  // Test 6: Each line has position (1-6), type ('yang' or 'yin'), meaning (string), classical (string)
  test('each line has position, type, meaning, and classical fields', () => {
    const result = provideExplanation(validHexagram);
    result.lines.forEach((line, index) => {
      expect(line.position).toBe(index + 1);
      expect(line.position).toBeGreaterThanOrEqual(1);
      expect(line.position).toBeLessThanOrEqual(6);
      expect(['yang', 'yin']).toContain(line.type);
      expect(typeof line.meaning).toBe('string');
      expect(line.meaning.length).toBeGreaterThan(0);
      expect(typeof line.classical).toBe('string');
      expect(line.classical.length).toBeGreaterThan(0);
    });
  });

  // Test 7: ChangingLines is subset of lines where isChanging is true
  test('changingLines is a subset of lines where isChanging is true', () => {
    const result = provideExplanation(validHexagram);
    const expectedChanging = result.lines.filter((line) => line.isChanging);
    expect(result.changingLines).toEqual(expectedChanging);
    result.changingLines.forEach((changingLine) => {
      expect(changingLine.isChanging).toBe(true);
      expect(result.lines).toContainEqual(changingLine);
    });
  });

  // Test 8: FiveElements has upperElement and lowerElement matching trigram elements
  test('fiveElements upperElement and lowerElement match trigram elements', () => {
    const result = provideExplanation(validHexagram);
    expect(result.fiveElements.upperElement).toBe(result.trigrams.upper.element);
    expect(result.fiveElements.lowerElement).toBe(result.trigrams.lower.element);
  });

  // Test 9: Guidance has overall, advice, timing fields as strings
  test('guidance has overall, advice, and timing fields as strings', () => {
    const result = provideExplanation(validHexagram);
    expect(typeof result.guidance.overall).toBe('string');
    expect(result.guidance.overall.length).toBeGreaterThan(0);
    expect(typeof result.guidance.advice).toBe('string');
    expect(result.guidance.advice.length).toBeGreaterThan(0);
    expect(typeof result.guidance.timing).toBe('string');
    expect(result.guidance.timing.length).toBeGreaterThan(0);
  });

  // Test 10: All-yang lines [1,1,1,1,1,1] produces hexagram 64
  test('all-yang lines [1,1,1,1,1,1] produces hexagram number 64', () => {
    const result = provideExplanation({ lines: [1, 1, 1, 1, 1, 1] });
    // parseInt('111111', 2) = 63, (63 % 64) + 1 = 64
    expect(result.hexagram.number).toBe(64);
    expect(typeof result.hexagram.name).toBe('string');
  });

  // Test 11: All-yin lines [0,0,0,0,0,0] produces hexagram 1
  test('all-yin lines [0,0,0,0,0,0] produces hexagram number 1', () => {
    const result = provideExplanation({ lines: [0, 0, 0, 0, 0, 0] });
    // parseInt('000000', 2) = 0, (0 % 64) + 1 = 1
    expect(result.hexagram.number).toBe(1);
    expect(typeof result.hexagram.name).toBe('string');
  });

  // Test 12: [1,0,1,0,1,0] and [0,1,0,1,0,1] produce valid different results
  test('[1,0,1,0,1,0] and [0,1,0,1,0,1] produce valid different results', () => {
    const result1 = provideExplanation({ lines: [1, 0, 1, 0, 1, 0] });
    const result2 = provideExplanation({ lines: [0, 1, 0, 1, 0, 1] });

    expect(result1.hexagram.number).toBeGreaterThanOrEqual(1);
    expect(result1.hexagram.number).toBeLessThanOrEqual(64);
    expect(result2.hexagram.number).toBeGreaterThanOrEqual(1);
    expect(result2.hexagram.number).toBeLessThanOrEqual(64);

    // '101010' = 42, (42 % 64) + 1 = 43
    // '010101' = 21, (21 % 64) + 1 = 22
    expect(result1.hexagram.number).not.toBe(result2.hexagram.number);
  });

  // Test 13: Nuclear hexagram is calculated (may be null for some inputs)
  test('nuclear hexagram is calculated', () => {
    const result = provideExplanation(validHexagram);
    const nuclear = result.hexagram.nuclear;
    if (nuclear !== null) {
      expect(typeof nuclear.number).toBe('number');
      expect(nuclear.number).toBeGreaterThanOrEqual(1);
      expect(nuclear.number).toBeLessThanOrEqual(64);
      expect(typeof nuclear.name).toBe('string');
      expect(typeof nuclear.chinese).toBe('string');
    }
  });

  // Test 14: Mutual hexagram exists when hexagram number is 1-64
  test('mutual hexagram exists for valid hexagram numbers', () => {
    const result = provideExplanation(validHexagram);
    const mutual = result.hexagram.mutual;
    expect(mutual).not.toBeNull();
    expect(typeof mutual.number).toBe('number');
    expect(mutual.number).toBeGreaterThanOrEqual(1);
    expect(mutual.number).toBeLessThanOrEqual(64);
    expect(typeof mutual.name).toBe('string');
    expect(typeof mutual.chinese).toBe('string');
  });

  // Test 15: Five element relationship is a non-empty string
  test('five element relationship is a non-empty string', () => {
    const result = provideExplanation(validHexagram);
    expect(typeof result.fiveElements.relationship).toBe('string');
    expect(result.fiveElements.relationship.length).toBeGreaterThan(0);
  });

  // Test 16: All 64 possible hexagram numbers produce valid output
  test('all 64 binary combinations produce valid output', () => {
    for (let i = 0; i < 64; i++) {
      const lines = [];
      for (let bit = 5; bit >= 0; bit--) {
        lines.push((i >> bit) & 1);
      }

      const result = provideExplanation({ lines });

      // Verify top-level structure
      expect(result).toHaveProperty('hexagram');
      expect(result).toHaveProperty('trigrams');
      expect(result).toHaveProperty('lines');
      expect(result).toHaveProperty('changingLines');
      expect(result).toHaveProperty('seasonalCorrespondences');
      expect(result).toHaveProperty('fiveElements');
      expect(result).toHaveProperty('guidance');
      expect(result).toHaveProperty('interpretation');

      // Verify hexagram number is valid
      expect(result.hexagram.number).toBeGreaterThanOrEqual(1);
      expect(result.hexagram.number).toBeLessThanOrEqual(64);

      // Verify hexagram has required string fields
      expect(typeof result.hexagram.name).toBe('string');
      expect(typeof result.hexagram.chinese).toBe('string');

      // Verify trigrams have required fields
      expect(typeof result.trigrams.upper.name).toBe('string');
      expect(typeof result.trigrams.upper.element).toBe('string');
      expect(typeof result.trigrams.upper.symbol).toBe('string');
      expect(typeof result.trigrams.lower.name).toBe('string');
      expect(typeof result.trigrams.lower.element).toBe('string');
      expect(typeof result.trigrams.lower.symbol).toBe('string');

      // Verify lines array
      expect(result.lines).toHaveLength(6);

      // Verify five elements match trigrams
      expect(result.fiveElements.upperElement).toBe(result.trigrams.upper.element);
      expect(result.fiveElements.lowerElement).toBe(result.trigrams.lower.element);
      expect(typeof result.fiveElements.relationship).toBe('string');
      expect(result.fiveElements.relationship.length).toBeGreaterThan(0);

      // Verify guidance strings
      expect(typeof result.guidance.overall).toBe('string');
      expect(typeof result.guidance.advice).toBe('string');
      expect(typeof result.guidance.timing).toBe('string');

      // Verify changingLines is a valid subset
      const expectedChanging = result.lines.filter((line) => line.isChanging);
      expect(result.changingLines).toEqual(expectedChanging);
    }
  });
});
