import React from 'react';
import { explanationStyles } from './styles/explanationStyles.js';
import LinesSection from './components/LinesSection.js';

const Explanation = ({ hexagram }) => {
    const { 
        containerStyle, 
        sectionStyle, 
        subsectionStyle, 
        levelHeaderStyle,
        textStyle,
        listStyle
    } = explanationStyles;

    return (
        <div style={containerStyle}>
            {/* LEVEL 1: BASIC IDENTIFICATION & PRIMARY MEANING */}
            <section style={sectionStyle}>
                <h2 style={levelHeaderStyle(1)}>Level 1: Primary Oracle</h2>
                
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        color: '#ffffff',
                        marginBottom: '16px',
                        fontWeight: '700'
                    }}>
                        {hexagram.number}. {hexagram.name}
                    </h1>
                    <h2 style={{
                        fontSize: '2rem',
                        color: '#f59e0b',
                        marginBottom: '24px',
                        fontWeight: '400',
                        fontFamily: '"Noto Serif SC", serif'
                    }} className="chinese-font">
                        {hexagram.chinese}
                    </h2>
                    <p style={{ 
                        fontSize: '1.25rem', 
                        color: '#9ca3af',
                        marginBottom: '8px'
                    }}>
                        {hexagram.pinyin} • {hexagram.meaning}
                    </p>
                    {hexagram.keywords && (
                        <p style={{ 
                            fontSize: '1rem', 
                            color: '#6b7280',
                            fontStyle: 'italic'
                        }}>
                            Keywords: {hexagram.keywords.join(' • ')}
                        </p>
                    )}
                </div>
                
                <div style={subsectionStyle}>
                    <h3 style={{ fontSize: '1.25rem', color: '#f59e0b', marginBottom: '16px' }}>
                        Primary Judgment
                    </h3>
                    <p style={textStyle}>
                        {hexagram.judgment}
                    </p>
                </div>
                
                {hexagram.image && (
                    <div style={subsectionStyle}>
                        <h3 style={{ fontSize: '1.25rem', color: '#f59e0b', marginBottom: '16px' }}>
                            The Image
                        </h3>
                        <p style={textStyle}>
                            {hexagram.image}
                        </p>
                    </div>
                )}
            </section>
            
            {/* LEVEL 4: CHANGING LINES */}
            {hexagram.changingLines && hexagram.changingLines.length > 0 && (
                <section style={sectionStyle}>
                    <h2 style={levelHeaderStyle(4)}>Level 4: Changing Lines</h2>
                    <LinesSection changingLines={hexagram.changingLines} />
                </section>
            )}
        </div>
    );
};

export default Explanation;