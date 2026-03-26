
/**
 * Generates a hexagram (6 lines) based on i-ching principles.
 * @returns {Object} The generated hexagram with lines represented as yin (0) or yang (1).
 */
function generateTrigram() {
    const lines = [];
    for (let i = 0; i < 6; i++) {
        lines.push(Math.random() > 0.5 ? 1 : 0);
    }
    
    const upperTrigram = getTrigramSymbol(lines.slice(3, 6));
    const lowerTrigram = getTrigramSymbol(lines.slice(0, 3));
    
    return {
        lines,
        hexagram: { lines },
        name: getHexagramName(lines),
        symbol: `${upperTrigram}${lowerTrigram}`,
        upperTrigram,
        lowerTrigram
    };
}

/**
 * Get trigram symbol from three lines
 */
function getTrigramSymbol(lines) {
    const trigramMap = {
        '111': '☰', '000': '☷', '010': '☵', '101': '☲',
        '001': '☳', '110': '☴', '100': '☶', '011': '☱'
    };
    
    const binary = lines.map(line => line === 1 ? '1' : '0').join('');
    return trigramMap[binary] || '☰';
}

/**
 * Get hexagram name based on the lines (simplified version)
 */
function getHexagramName(lines) {
    const yangCount = lines.filter(line => line === 1).length;
    if (yangCount === 6) return "Creative Heaven";
    if (yangCount === 0) return "Receptive Earth";
    if (yangCount >= 4) return "Strong Yang";
    if (yangCount <= 2) return "Strong Yin";
    return "Balanced";
}

export { generateTrigram };
