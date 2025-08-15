import { generateTrigram } from '../trigram/trigramGenerator.js';

test('generateTrigram should return a valid trigram', () => {
    const trigram = generateTrigram();
    expect(trigram).toBeDefined();
    expect(trigram.lines).toBeDefined();
    expect(trigram.lines.length).toBe(6);
    expect(trigram.lines.every(line => line === 0 || line === 1)).toBe(true);
});
