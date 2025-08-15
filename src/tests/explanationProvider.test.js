import { provideExplanation } from '../explanation/explanationProvider.js';
import { hexagrams } from '../config/hexagrams.js';

// Note: The 'jest' object and its methods are globally available in Jest tests.
// If you are using a different test runner, you might need to import 'describe', 'test', 'expect'.

describe('provideExplanation', () => {
  test('should return a complete and correct explanation for a given hexagram', () => {
    // Test with Hexagram 1: The Creative (all yang lines)
    const hexagramInput = { lines: [1, 1, 1, 1, 1, 1] };
    const explanation = provideExplanation(hexagramInput);

    // Check root structure
    expect(explanation).toHaveProperty('hexagram');
    expect(explanation).toHaveProperty('trigrams');
    expect(explanation).toHaveProperty('lines');
    expect(explanation).toHaveProperty('guidance');

    // Check hexagram details
    expect(explanation.hexagram.number).toBe(1);
    expect(explanation.hexagram.name).toBe('The Creative');
    expect(explanation.hexagram.chinese).toBe('乾 (Qián)');
    expect(explanation.hexagram.judgment).toEqual(hexagrams[1].judgment);
    expect(explanation.hexagram.image).toEqual(hexagrams[1].image);

    // Check trigram details
    expect(explanation.trigrams.upper.name).toBe('Heaven');
    expect(explanation.trigrams.lower.name).toBe('Heaven');

    // Check lines details
    expect(explanation.lines).toHaveLength(6);
    expect(explanation.lines[0].type).toBe('yang');
    expect(explanation.lines[0].position).toBe(1);

    // Check guidance
    expect(explanation.guidance.advice).toContain('Take initiative with confidence and strength.');
  });

  test('should handle a hexagram with mixed lines', () => {
    // This binary sequence corresponds to Hexagram 3
    const hexagramInput = { lines: [1, 0, 0, 0, 1, 0] };
    const explanation = provideExplanation(hexagramInput);

    expect(explanation.hexagram.number).toBe(3);
    expect(explanation.hexagram.name).toBe('Difficulty at the Beginning');

    // Check trigram details
    expect(explanation.trigrams.lower.name).toBe('Thunder'); // 001
    expect(explanation.trigrams.upper.name).toBe('Water');   // 010
  });

  test('should correctly identify line meanings', () => {
    const hexagramInput = { lines: [0, 1, 0, 1, 0, 1] }; // Hexagram 63
    const explanation = provideExplanation(hexagramInput);

    expect(explanation.hexagram.number).toBe(63);
    expect(explanation.lines[0].type).toBe('yin');
    expect(explanation.lines[0].meaning.meaning).toBe('Beginning with receptivity. Time for careful observation.');

    expect(explanation.lines[1].type).toBe('yang');
    expect(explanation.lines[1].meaning.meaning).toBe('Active engagement with others. Seek advisors and allies.');
  });
});
