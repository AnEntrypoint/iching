export const trigrams = {
    '☰': {
        name: 'Heaven',
        symbol: '☰',
        binary: '111',
        element: 'Metal',
        attribute: 'Strength',
        family: 'Father',
        direction: 'Northwest',
        meaning: 'Creative force, leadership, initiative, strength',
        classical: '乾為天 (Qian wei tian)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams), one of the Ten Wings',
        commentary: 'King Wen sequence: Heaven represents the creative principle, the father, and pure yang energy. "Heaven is round and moves ceaselessly." (Legge, 1882)',
        citation: 'The attributes of the trigrams are primarily derived from the Shuogua Zhuan (Discussion of the Trigrams), one of the Ten Wings of the I Ching.'
    },
    '☷': {
        name: 'Earth',
        symbol: '☷',
        binary: '000',
        element: 'Earth',
        attribute: 'Devotion',
        family: 'Mother',
        direction: 'Southwest',
        meaning: 'Receptive, nurturing, yielding, supportive',
        classical: '坤為地 (Kun wei di)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'King Wen sequence: Earth represents the receptive principle, the mother, and pure yin energy. "Earth is square and at rest." (Wilhelm/Baynes, 1967)',
        citation: 'The attributes of the trigrams are primarily derived from the Shuogua Zhuan (Discussion of the Trigrams), one of the Ten Wings of the I Ching.'
    },
    '☵': {
        name: 'Water',
        symbol: '☵',
        binary: '010',
        element: 'Water',
        attribute: 'Danger',
        family: 'Middle Son',
        direction: 'North',
        meaning: 'Flow, adaptability, hidden depths, persistence',
        classical: '坎為水 (Kan wei shui)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'The Book of Changes states: "Water flows downward and fills every hollow." Represents the second son and the principle of constant flow. (Lynn, 1994)',
        citation: 'The attributes of the trigrams are primarily derived from the Shuogua Zhuan (Discussion of the Trigrams), one of the Ten Wings of the I Ching.'
    },
    '☲': {
        name: 'Fire',
        symbol: '☲',
        binary: '101',
        element: 'Fire',
        attribute: 'Clinging',
        family: 'Middle Daughter',
        direction: 'South',
        meaning: 'Clarity, illumination, beauty, intelligence',
        classical: '離為火 (Li wei huo)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'Traditional interpretation: "Fire rises upward and gives light to all things." Represents the second daughter and the principle of clarity. (Wang Bi Commentary)',
        citation: 'The attributes of the trigrams are primarily derived from the Shuogua Zhuan (Discussion of the Trigrams), one of the Ten Wings of the I Ching.'
    },
    '☳': {
        name: 'Thunder',
        symbol: '☳',
        binary: '001',
        element: 'Wood',
        attribute: 'Movement',
        family: 'Eldest Son',
        direction: 'East',
        meaning: 'Arousal, initiative, new beginnings, decisive action',
        classical: '震為雷 (Zhen wei lei)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'Classical text: "Thunder arouses and sets everything in motion." Represents the eldest son and the principle of arousal. (Richard Wilhelm translation)',
        citation: 'The attributes of the trigrams are primarily derived from the Shuogua Zhuan (Discussion of the Trigrams), one of the Ten Wings of the I Ching.'
    },
    '☴': {
        name: 'Wind',
        symbol: '☴',
        binary: '110',
        element: 'Wood',
        attribute: 'Gentle',
        family: 'Eldest Daughter',
        direction: 'Southeast',
        meaning: 'Gentle penetration, flexibility, gradual progress',
        classical: '巽為風 (Xun wei feng)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'Ancient wisdom: "Wind disperses and penetrates everywhere." Represents the eldest daughter and gentle influence. (Zhu Xi Commentary, Song Dynasty)',
        citation: 'The attributes of the trigrams are primarily derived from the Shuogua Zhuan (Discussion of the Trigrams), one of the Ten Wings of the I Ching.'
    },
    '☶': {
        name: 'Mountain',
        symbol: '☶',
        binary: '100',
        element: 'Earth',
        attribute: 'Keeping Still',
        family: 'Youngest Son',
        direction: 'Northeast',
        meaning: 'Stillness, meditation, introspection, boundaries',
        classical: '艮為山 (Gen wei shan)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'Traditional teaching: "Mountain stands still and does not move." Represents the youngest son and the principle of stillness. (Cheng Yi Commentary)',
        citation: 'The attributes of the trigrams are primarily derived from the Shuogua Zhuan (Discussion of the Trigrams), one of the Ten Wings of the I Ching.'
    },
    '☱': {
        name: 'Lake',
        symbol: '☱',
        binary: '011',
        element: 'Metal',
        attribute: 'Joyous',
        family: 'Youngest Daughter',
        direction: 'West',
        meaning: 'Joy, openness, expression, communication',
        classical: '兌為澤 (Dui wei ze)',
        source: 'Shuogua Zhuan (Discussion of the Trigrams)',
        commentary: 'Classical meaning: "Lake is joyous and encourages all things." Represents the youngest daughter and the principle of joy. (James Legge translation, 1882)',
        citation: 'The attributes of the trigrams are primarily derived from the Shuogua Zhuan (Discussion of the Trigrams), one of the Ten Wings of the I Ching.'
    }
};

export const trigramMap = {
    source: "Traditional mapping of trigram symbols to their binary representations.",
    map: {
        '111': '☰', '000': '☷', '010': '☵', '101': '☲',
        '001': '☳', '110': '☴', '100': '☶', '011': '☱'
    }
};
