import { displayEnergyVisual } from '../visual/visualDisplay.js';

test('displayEnergyVisual should display the energy visual correctly', () => {
    const trigram = { lines: [1, 0, 1, 0, 1, 0] };
    const result = displayEnergyVisual(trigram);
    expect(result).toBeDefined();
    expect(result.description).toBe('Yang Yin Yang Yin Yang Yin');
});
