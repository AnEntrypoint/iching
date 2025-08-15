export const explanationStructure = {
    hexagram: {
        enabled: true,
        description: "Core information about the primary hexagram, including its name, number, judgment, and image.",
    },
    trigrams: {
        enabled: true,
        description: "Analysis of the upper and lower trigrams that form the hexagram, including their individual meanings and their interaction.",
    },
    lines: {
        enabled: true,
        description: "A detailed analysis of all six lines of the hexagram, read from bottom to top.",
    },
    changingLines: {
        enabled: true,
        description: "Specific guidance for any lines that are transforming, indicating dynamic aspects of the situation.",
    },
    seasonalCorrespondences: {
        enabled: false, // Disabled for now, as data is incomplete
        description: "Correspondences of the reading to seasons, times of day, and cardinal directions.",
    },
    fiveElements: {
        enabled: true,
        description: "Analysis based on the Five Elements theory (Wu Xing), exploring the elemental relationship between the trigrams.",
    },
    guidance: {
        enabled: true,
        description: "Practical advice derived from the hexagram, covering areas like relationships, career, and health.",
    },
    interpretation: {
        enabled: true,
        description: "A summary interpretation of the reading, including the current situation, recommended action, and expected outcome.",
    },
    advanced: {
        enabled: true,
        description: "Advanced esoteric concepts, including the nuclear and mutual hexagrams.",
        sections: {
            nuclear: { enabled: true },
            mutual: { enabled: true },
        }
    }
};
