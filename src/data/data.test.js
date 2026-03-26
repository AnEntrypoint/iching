import {
  HEXAGRAMS,
  TRIGRAMS,
  mutualPairs,
  trigramMap,
  meanings,
  baseAdvice,
  timing,
  generatingCycle,
  overcomingCycle,
  elementAdvice,
} from './index';

const TRIGRAM_SYMBOLS = ['☰', '☷', '☵', '☲', '☳', '☴', '☶', '☱'];

describe('HEXAGRAMS', () => {
  test('all 64 entries exist with keys 1-64', () => {
    for (let i = 1; i <= 64; i++) {
      expect(HEXAGRAMS[i]).toBeDefined();
    }
    expect(Object.keys(HEXAGRAMS)).toHaveLength(64);
  });

  test('each hexagram has name, chinese, judgment, and image', () => {
    for (let i = 1; i <= 64; i++) {
      const hex = HEXAGRAMS[i];
      expect(typeof hex.name).toBe('string');
      expect(typeof hex.chinese).toBe('string');
      expect(typeof hex.judgment).toBe('string');
      expect(typeof hex.image).toBe('string');
    }
  });
});

describe('TRIGRAMS', () => {
  test('all 8 trigram entries exist', () => {
    TRIGRAM_SYMBOLS.forEach((symbol) => {
      expect(TRIGRAMS[symbol]).toBeDefined();
    });
    expect(Object.keys(TRIGRAMS)).toHaveLength(8);
  });

  test('each trigram has name, element, attribute, family, direction, and meaning', () => {
    TRIGRAM_SYMBOLS.forEach((symbol) => {
      const tri = TRIGRAMS[symbol];
      expect(typeof tri.name).toBe('string');
      expect(typeof tri.element).toBe('string');
      expect(typeof tri.attribute).toBe('string');
      expect(typeof tri.family).toBe('string');
      expect(typeof tri.direction).toBe('string');
      expect(typeof tri.meaning).toBe('string');
    });
  });
});

describe('mutualPairs', () => {
  test('has 64 entries', () => {
    expect(Object.keys(mutualPairs)).toHaveLength(64);
  });

  test('pairs are bidirectional', () => {
    Object.entries(mutualPairs).forEach(([key, value]) => {
      const a = Number(key);
      const b = value;
      expect(mutualPairs[b]).toBe(a);
    });
  });
});

describe('trigramMap', () => {
  test('has 8 entries mapping binary strings to symbols', () => {
    expect(Object.keys(trigramMap)).toHaveLength(8);
    Object.entries(trigramMap).forEach(([binary, symbol]) => {
      expect(binary).toMatch(/^[01]{3}$/);
      expect(TRIGRAM_SYMBOLS).toContain(symbol);
    });
  });
});

describe('meanings', () => {
  test('has 6 entries for positions 1-6', () => {
    for (let i = 1; i <= 6; i++) {
      expect(meanings[i]).toBeDefined();
    }
    expect(Object.keys(meanings)).toHaveLength(6);
  });

  test('each position has yang, yin, classical, and source', () => {
    for (let i = 1; i <= 6; i++) {
      const m = meanings[i];
      expect(typeof m.yang).toBe('string');
      expect(typeof m.yin).toBe('string');
      expect(typeof m.classical).toBe('string');
      expect(typeof m.source).toBe('string');
    }
  });
});

describe('baseAdvice', () => {
  test('has entries for keys 1-8', () => {
    for (let i = 1; i <= 8; i++) {
      expect(typeof baseAdvice[i]).toBe('string');
    }
  });
});

describe('timing', () => {
  test('has 8 entries for each trigram symbol', () => {
    TRIGRAM_SYMBOLS.forEach((symbol) => {
      expect(typeof timing[symbol]).toBe('string');
    });
    expect(Object.keys(timing)).toHaveLength(8);
  });
});

describe('generatingCycle', () => {
  test('completes the cycle Wood->Fire->Earth->Metal->Water->Wood', () => {
    expect(generatingCycle['Wood']).toBe('Fire');
    expect(generatingCycle['Fire']).toBe('Earth');
    expect(generatingCycle['Earth']).toBe('Metal');
    expect(generatingCycle['Metal']).toBe('Water');
    expect(generatingCycle['Water']).toBe('Wood');
  });
});

describe('overcomingCycle', () => {
  test('completes the cycle Wood->Earth->Water->Fire->Metal->Wood', () => {
    expect(overcomingCycle['Wood']).toBe('Earth');
    expect(overcomingCycle['Earth']).toBe('Water');
    expect(overcomingCycle['Water']).toBe('Fire');
    expect(overcomingCycle['Fire']).toBe('Metal');
    expect(overcomingCycle['Metal']).toBe('Wood');
  });
});

describe('elementAdvice', () => {
  test('has entries for Wood, Fire, Earth, Metal, and Water', () => {
    ['Wood', 'Fire', 'Earth', 'Metal', 'Water'].forEach((element) => {
      expect(typeof elementAdvice[element]).toBe('string');
    });
  });
});
