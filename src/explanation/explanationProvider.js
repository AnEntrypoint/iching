
import { hexagrams as HEXAGRAMS } from '../config/hexagrams.js';
import { trigrams as TRIGRAMS } from '../config/trigrams.js';
import { lineMeanings } from '../config/lineMeanings.js';
import { kingWenSequenceMap } from '../config/kingWenSequence.js';

function linesToBinary(lines) {
    // The lines are typically read from bottom to top, so we reverse them before creating the binary string.
    return [...lines].reverse().map(line => line === 1 ? '1' : '0').join('');
}

function getHexagramNumber(lines) {
    const binary = linesToBinary(lines);
    const hexagramNum = kingWenSequenceMap[binary];
    return hexagramNum || 1; // Default to 1 if not found
}

function calculateNuclearHexagram(lines) {
    // Nuclear hexagram is derived from lines 2, 3, 4, 5
    // Lines 2, 3, 4 form the lower trigram of the nuclear hexagram
    // Lines 3, 4, 5 form the upper trigram of the nuclear hexagram
    if (lines.length !== 6) return null;
    
    const nuclearLines = [
        lines[1], // line 2
        lines[2], // line 3
        lines[3], // line 4
        lines[2], // line 3 (repeated)
        lines[3], // line 4 (repeated)
        lines[4]  // line 5
    ];
    
    return getHexagramNumber(nuclearLines);
}

function calculateMutualHexagram(hexagramNumber) {
    // Mutual hexagram is the inverse/opposite pairing
    // Based on traditional I Ching sequence relationships
    const mutualPairs = {
        1: 2, 2: 1, 3: 4, 4: 3, 5: 6, 6: 5, 7: 8, 8: 7,
        9: 10, 10: 9, 11: 12, 12: 11, 13: 14, 14: 13, 15: 16, 16: 15,
        17: 18, 18: 17, 19: 20, 20: 19, 21: 22, 22: 21, 23: 24, 24: 23,
        25: 26, 26: 25, 27: 28, 28: 27, 29: 30, 30: 29, 31: 32, 32: 31,
        33: 34, 34: 33, 35: 36, 36: 35, 37: 38, 38: 37, 39: 40, 40: 39,
        41: 42, 42: 41, 43: 44, 44: 43, 45: 46, 46: 45, 47: 48, 48: 47,
        49: 50, 50: 49, 51: 52, 52: 51, 53: 54, 54: 53, 55: 56, 56: 55,
        57: 58, 58: 57, 59: 60, 60: 59, 61: 62, 62: 61, 63: 64, 64: 63
    };
    
    return mutualPairs[hexagramNumber] || hexagramNumber;
}

function getTrigramFromLines(lines) {
    const trigramMap = {
        '111': '☰', '000': '☷', '010': '☵', '101': '☲',
        '001': '☳', '110': '☴', '100': '☶', '011': '☱'
    };
    
    // Reverse the lines because they are read from bottom to top.
    const binary = [...lines].reverse().map(line => line === 1 ? '1' : '0').join('');
    return trigramMap[binary] || '☰';
}

function getChangingLines(lines) {
    const lineNames = ['Initial', 'Second', 'Third', 'Fourth', 'Fifth', 'Top'];
    const positions = ['bottom', 'second from bottom', 'middle lower', 'middle upper', 'second from top', 'top'];
    
    return lines.map((line, index) => {
        const position = index + 1;
        const isChanging = Math.random() < 0.15;
        const correctness = (position % 2 === 1 && line === 1) || (position % 2 === 0 && line === 0);
        
        return {
            position,
            name: lineNames[index],
            place: positions[index],
            type: line === 1 ? 'yang' : 'yin',
            value: line,
            correctness: correctness ? 'correct' : 'incorrect',
            isChanging,
            meaning: getLineMeaning(position, line),
            classical: getLineMeaning(position, line).classical || `Classical text for line ${position}: ${line === 1 ? 'Yang' : 'Yin'} line meaning.`,
            source: getLineMeaning(position, line).source || "Zhou Yi, Line Texts (Yao Ci)",
            relationships: [
                {
                    type: 'correspondence',
                    with: position <= 3 ? position + 3 : position - 3,
                    quality: Math.random() > 0.5 ? 'harmonious' : 'challenging'
                }
            ]
        };
    });
}

function getLineMeaning(position, lineType) {
    const type = lineType === 1 ? 'yang' : 'yin';
    const meaningData = lineMeanings[position][type];
    // Return a copy to prevent accidental mutation of the config data
    return { ...meaningData };
}

/**
 * Provides comprehensive I Ching explanations including hexagram, trigrams, and changing lines.
 * @param {Object} hexagram - The hexagram object with lines
 * @returns {Object} Complete explanation object
 */
function provideExplanation(hexagram) {
    const lines = hexagram.lines || [];
    const hexagramNumber = getHexagramNumber(lines);
    const hexagramInfo = HEXAGRAMS[hexagramNumber] || HEXAGRAMS[1];
    
    // Calculate nuclear and mutual hexagrams for deeper analysis
    const nuclearHexagramNumber = calculateNuclearHexagram(lines);
    const nuclearHexagramInfo = nuclearHexagramNumber ? HEXAGRAMS[nuclearHexagramNumber] : null;
    
    const mutualHexagramNumber = calculateMutualHexagram(hexagramNumber);
    const mutualHexagramInfo = HEXAGRAMS[mutualHexagramNumber] || null;
    
    const upperTrigram = getTrigramFromLines(lines.slice(3, 6));
    const lowerTrigram = getTrigramFromLines(lines.slice(0, 3));
    
    const upperTrigramInfo = TRIGRAMS[upperTrigram];
    const lowerTrigramInfo = TRIGRAMS[lowerTrigram];
    
    const changingLines = getChangingLines(lines);
    const hasChangingLines = changingLines.some(line => line.isChanging);
    
    let advice = hexagramInfo.advice || "Follow the natural way and trust in the process of change.";
    if (hasChangingLines) {
        advice += " Pay special attention to the changing lines, as they indicate areas of transformation and immediate concern.";
    }

    return {
        hexagram: {
            number: hexagramNumber,
            name: hexagramInfo.name,
            chinese: hexagramInfo.chinese,
            pinyin: hexagramInfo.chinese,
            character: hexagramInfo.chinese,
            meaning: hexagramInfo.name,
            judgment: hexagramInfo.judgment,
            image: hexagramInfo.image,
            classical: hexagramInfo.classical,
            translation: hexagramInfo.translation,
            source: hexagramInfo.source,
            commentary: hexagramInfo.commentary,
            wilhelm: hexagramInfo.image,
            sequence: `Hexagram ${hexagramNumber} in the traditional sequence.`,
            structure: `Six-line hexagram with ${upperTrigramInfo.name} above ${lowerTrigramInfo.name}`,
            keywords: [hexagramInfo.name, upperTrigramInfo.name, lowerTrigramInfo.name],
            nuclear: nuclearHexagramInfo ? {
                number: nuclearHexagramNumber,
                name: nuclearHexagramInfo.name,
                chinese: nuclearHexagramInfo.chinese,
                meaning: `The nuclear hexagram ${nuclearHexagramInfo.name} reveals the hidden essence and inner development potential within your situation.`,
                source: "Nuclear hexagram analysis from the Plum Blossom Numerology tradition (Mei Hua Yi Shu)"
            } : null,
            mutual: mutualHexagramInfo ? {
                number: mutualHexagramNumber,
                name: mutualHexagramInfo.name,
                chinese: mutualHexagramInfo.chinese,
                meaning: `The mutual hexagram ${mutualHexagramInfo.name} represents the complementary shadow aspect of your situation.`,
                source: "Mutual hexagram pairing from the traditional sequence arrangement"
            } : null
        },
        trigrams: {
            upper: {
                symbol: upperTrigram,
                ...upperTrigramInfo,
                chinese: `${upperTrigramInfo.name} (Chinese name)`,
                nature: upperTrigramInfo.attribute || 'Natural',
                attribute: upperTrigramInfo.attribute || upperTrigramInfo.name,
                season: 'Variable season',
                time: 'Variable time',
                animal: 'Symbolic animal',
                bodyPart: 'Associated body part',
                organ: 'Related organ',
                emotion: 'Natural emotion',
                color: 'Symbolic color',
                number: hexagramNumber,
                personality: `${upperTrigramInfo.name} personality traits`,
                qualities: upperTrigramInfo.meaning,
                defects: 'Potential shadow aspects',
                position: "Upper trigram represents the external situation, future influences, and conscious actions"
            },
            lower: {
                symbol: lowerTrigram,
                ...lowerTrigramInfo,
                chinese: `${lowerTrigramInfo.name} (Chinese name)`,
                nature: lowerTrigramInfo.attribute || 'Natural',
                attribute: lowerTrigramInfo.attribute || lowerTrigramInfo.name,
                season: 'Variable season',
                time: 'Variable time',
                animal: 'Symbolic animal',
                bodyPart: 'Associated body part',
                organ: 'Related organ',
                emotion: 'Natural emotion',
                color: 'Symbolic color',
                number: hexagramNumber + 1,
                personality: `${lowerTrigramInfo.name} personality traits`,
                qualities: lowerTrigramInfo.meaning,
                defects: 'Potential shadow aspects',
                position: "Lower trigram represents the internal situation, past influences, and unconscious patterns"
            },
            combination: `${upperTrigramInfo.name} above ${lowerTrigramInfo.name} suggests ${(upperTrigramInfo.attribute || upperTrigramInfo.name).toLowerCase()} acting upon ${(lowerTrigramInfo.attribute || lowerTrigramInfo.name).toLowerCase()}.`,
            relationship: `The ${upperTrigramInfo.family} and ${lowerTrigramInfo.family} create a ${upperTrigramInfo.name}-${lowerTrigramInfo.name} dynamic.`
        },
        lines: changingLines,
        changingLines: hasChangingLines ? changingLines.filter(line => line.isChanging) : [],
        seasonalCorrespondences: {
            season: `${upperTrigramInfo.name} and ${lowerTrigramInfo.name} seasons`,
            timeOfDay: 'Natural timing',
            direction: `${upperTrigramInfo.direction} influenced by ${lowerTrigramInfo.direction}`,
            planet: 'Celestial influence',
            element: `${upperTrigramInfo.element} over ${lowerTrigramInfo.element}`
        },
        fiveElements: {
            upperElement: upperTrigramInfo.element,
            lowerElement: lowerTrigramInfo.element,
            relationship: determineFiveElementRelationship(upperTrigramInfo.element, lowerTrigramInfo.element),
            advice: generateFiveElementAdvice(upperTrigramInfo.element, lowerTrigramInfo.element),
            source: 'Wu Xing theory from the Yellow Emperor\'s Classic of Internal Medicine (Huangdi Neijing), Han Dynasty',
            commentary: 'The Five Elements represent the fundamental forces of creation and transformation in Chinese cosmology. Each element has specific correspondences to seasons, organs, emotions, and life phases. (Needham, Science and Civilization in China, Vol. 2)'
        },
        guidance: {
            overall: `This hexagram counsels ${hexagramInfo.judgment.toLowerCase()}. The combination of ${upperTrigramInfo.name} and ${lowerTrigramInfo.name} indicates a time where ${upperTrigramInfo.meaning} meets ${lowerTrigramInfo.meaning}.`,
            advice: advice,
            timing: generateTiming(upperTrigramInfo, lowerTrigramInfo),
            relationships: generateRelationshipAdvice(upperTrigramInfo, lowerTrigramInfo),
            career: generateCareerAdvice(upperTrigramInfo, lowerTrigramInfo),
            health: generateHealthAdvice(upperTrigramInfo, lowerTrigramInfo),
            classical: hexagramInfo.image,
            seasonal: `This reading corresponds to the natural cycle of ${upperTrigramInfo.name} and ${lowerTrigramInfo.name}.`,
            structure: `The hexagram structure shows ${upperTrigramInfo.element} above ${lowerTrigramInfo.element}.`,
            spiritual: `Spiritual guidance integrates ${upperTrigramInfo.name} and ${lowerTrigramInfo.name} energies for personal growth.`
        },
        interpretation: {
            personality: `The outer self manifests ${upperTrigramInfo.name} qualities while the inner self operates with ${lowerTrigramInfo.name} characteristics.`,
            situation: `Current situation shows ${upperTrigramInfo.name} influences in the external world with ${lowerTrigramInfo.name} as the underlying foundation.`,
            action: `Recommended action: ${hexagramInfo.judgment}`,
            outcome: `Following this guidance leads to the fulfillment described in the judgment: "${hexagramInfo.judgment}"`
        }
    };
}

function generateTiming(upper, lower) {
    const timing = {
        '☰': "Swift action and immediate results",
        '☷': "Gradual development over time",
        '☵': "Fluid timing, adapt to circumstances",
        '☲': "Bright clarity, the time is now",
        '☳': "Sudden movement and rapid change",
        '☴': "Gentle, gradual penetration",
        '☶': "Still waiting, the time is not yet",
        '☱': "Joyful moments and open communication"
    };
    
    const upperTiming = timing[upper.symbol] || "natural timing";
    const lowerTiming = timing[lower.symbol] || "natural timing";
    
    return `${upperTiming} in the outer world, while ${lowerTiming} influences your inner development.`;
}

function generateRelationshipAdvice(upper, lower) {
    return `In relationships: ${upper.name} energy suggests ${upper.meaning} in your approach to others, while ${lower.name} indicates your emotional foundation is ${lower.meaning}. Balance these energies for harmonious connections.`;
}

function generateCareerAdvice(upper, lower) {
    return `In career matters: ${upper.name} points to ${upper.meaning} in your professional approach. Your underlying motivation (${lower.name}) suggests ${lower.meaning} drives your career decisions.`;
}

function generateHealthAdvice(upper, lower) {
    return `For health and vitality: The ${upper.name} aspect encourages ${upper.meaning} in your physical activities, while ${lower.name} suggests attending to ${lower.meaning} in your mental and emotional well-being.`;
}

function determineFiveElementRelationship(upperElement, lowerElement) {
    // Five Elements generating cycle: Wood→Fire→Earth→Metal→Water→Wood
    // Five Elements overcoming cycle: Wood→Earth→Water→Fire→Metal→Wood
    
    const generatingCycle = {
        'Wood': 'Fire',
        'Fire': 'Earth', 
        'Earth': 'Metal',
        'Metal': 'Water',
        'Water': 'Wood'
    };
    
    const overcomingCycle = {
        'Wood': 'Earth',
        'Earth': 'Water',
        'Water': 'Fire',
        'Fire': 'Metal',
        'Metal': 'Wood'
    };
    
    if (generatingCycle[lowerElement] === upperElement) {
        return `Generating relationship: ${lowerElement} feeds and nourishes ${upperElement}. This creates a harmonious, supportive dynamic.`;
    } else if (generatingCycle[upperElement] === lowerElement) {
        return `Generating relationship: ${upperElement} feeds and nourishes ${lowerElement}. This creates flowing, productive energy.`;
    } else if (overcomingCycle[upperElement] === lowerElement) {
        return `Overcoming relationship: ${upperElement} controls and disciplines ${lowerElement}. This creates tension requiring balance.`;
    } else if (overcomingCycle[lowerElement] === upperElement) {
        return `Overcoming relationship: ${lowerElement} controls and disciplines ${upperElement}. This creates internal conflict requiring resolution.`;
    } else if (upperElement === lowerElement) {
        return `Same element relationship: Double ${upperElement} energy creates intensity and focus, but may lack balance.`;
    } else {
        return `Neutral relationship: ${upperElement} and ${lowerElement} coexist, requiring conscious integration.`;
    }
}

function generateFiveElementAdvice(upperElement, lowerElement) {
    const elementAdvice = {
        'Wood': 'Cultivate growth, flexibility, and new beginnings. Spring energy favors planning and initiation.',
        'Fire': 'Embrace clarity, joy, and self-expression. Summer energy supports communication and creativity.',
        'Earth': 'Focus on stability, nourishment, and grounding. Late summer energy promotes practical building.',
        'Metal': 'Develop precision, structure, and letting go. Autumn energy supports harvest and refinement.',
        'Water': 'Honor depth, wisdom, and conservation. Winter energy encourages introspection and rest.'
    };
    
    const relationship = determineFiveElementRelationship(upperElement, lowerElement);
    const upperAdvice = elementAdvice[upperElement] || 'Balance this element\'s energy consciously.';
    const lowerAdvice = elementAdvice[lowerElement] || 'Integrate this element\'s qualities mindfully.';
    
    return `${relationship} Focus on ${upperAdvice} While honoring ${lowerAdvice} This creates optimal energetic flow according to traditional Wu Xing principles.`;
}

export { provideExplanation };
