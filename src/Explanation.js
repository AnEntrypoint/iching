import React from 'react';

/**
 * Comprehensive I Ching explanation based on classical texts
 * Organized from basic understanding to advanced esoteric knowledge
 */
function Explanation({ explanation }) {
    if (!explanation || !explanation.hexagram) {
        return (
            <div style={{ textAlign: 'center', padding: '40px', color: '#9ca3af' }}>
                <p style={{ fontStyle: 'italic' }}>Cast your hexagram to receive your reading...</p>
            </div>
        );
    }

    const { hexagram, trigrams, lines, changingLines, seasonalCorrespondences, fiveElements, guidance, interpretation } = explanation;

    // Dark theme styling for comprehensive content
    const containerStyle = {
        maxWidth: '100%',
        margin: '0',
        padding: '0',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: '1.8',
        color: '#d1d5db'
    };

    const sectionStyle = {
        marginBottom: '64px',
        paddingBottom: '48px',
        borderBottom: '1px solid #374151',
    };

    const subsectionStyle = {
        marginBottom: '32px',
        padding: '28px',
        backgroundColor: 'rgba(17, 24, 39, 0.6)',
        border: '1px solid #374151',
        borderRadius: '8px',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginBottom: '32px'
    };

    const classicalTextStyle = {
        padding: '24px',
        backgroundColor: 'rgba(245, 158, 11, 0.08)',
        borderLeft: '4px solid #f59e0b',
        borderRadius: '4px',
        marginBottom: '24px',
        fontStyle: 'italic',
        fontSize: '1.1rem',
        lineHeight: '1.9',
        color: '#fbbf24'
    };

    const levelHeaderStyle = (level) => ({
        fontSize: level === 1 ? '1.75rem' : level === 2 ? '1.5rem' : '1.25rem',
        color: '#f59e0b',
        marginBottom: '32px',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        textAlign: 'center',
        padding: '16px',
        borderTop: '1px solid #374151',
        borderBottom: '1px solid #374151'
    });

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

                <div style={classicalTextStyle}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#fbbf24' }}>
                        The Judgment (判辭)
                    </h3>
                    <p style={{ fontSize: '1.2rem', marginBottom: '16px' }}>
                        "{hexagram.judgment}"
                    </p>
                    {hexagram.classical && (
                        <div style={{ marginBottom: '16px' }}>
                            <p style={{ fontSize: '1.1rem', marginBottom: '8px', fontFamily: '"Noto Serif SC", serif' }}>
                                {hexagram.classical}
                            </p>
                            <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                                {hexagram.translation}
                            </p>
                        </div>
                    )}
                    {hexagram.source && (
                        <p style={{ fontSize: '0.9rem', opacity: 0.8, fontStyle: 'italic' }}>
                            Source: {hexagram.source}
                        </p>
                    )}
                    {hexagram.commentary && (
                        <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '12px' }}>
                            {hexagram.commentary}
                        </p>
                    )}
                </div>

                {interpretation && (
                    <div style={subsectionStyle}>
                        <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '24px', fontWeight: '500' }}>
                            Essential Interpretation
                        </h3>
                        <div style={gridStyle}>
                            <div>
                                <h4 style={{ fontSize: '1rem', color: '#f59e0b', marginBottom: '12px', fontWeight: '500' }}>
                                    Current Situation
                                </h4>
                                <p>{interpretation.situation}</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', color: '#f59e0b', marginBottom: '12px', fontWeight: '500' }}>
                                    Recommended Action
                                </h4>
                                <p>{interpretation.action}</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', color: '#f59e0b', marginBottom: '12px', fontWeight: '500' }}>
                                    Expected Outcome
                                </h4>
                                <p>{interpretation.outcome}</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', color: '#f59e0b', marginBottom: '12px', fontWeight: '500' }}>
                                    Personal Pattern
                                </h4>
                                <p>{interpretation.personality}</p>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* LEVEL 2: THE IMAGE & SYMBOLIC MEANING */}
            <section style={sectionStyle}>
                <h2 style={levelHeaderStyle(2)}>Level 2: The Image & Symbolism</h2>
                
                <div style={classicalTextStyle}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#fbbf24' }}>
                        The Image (象辭)
                    </h3>
                    <p style={{ fontSize: '1.15rem', marginBottom: '20px' }}>
                        {hexagram.image}
                    </p>
                    <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                        The Image teaches us how to embody the wisdom of this hexagram through symbolic action and understanding. 
                        It reveals the deeper patterns of nature that this moment reflects.
                    </p>
                </div>

                {hexagram.structure && (
                    <div style={subsectionStyle}>
                        <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '16px', fontWeight: '500' }}>
                            Structural Composition
                        </h3>
                        <p style={{ fontSize: '1.05rem', marginBottom: '16px' }}>
                            {hexagram.structure}
                        </p>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: '1fr 1fr', 
                            gap: '16px',
                            padding: '16px',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            borderRadius: '8px'
                        }}>
                            <div>
                                <strong style={{ color: '#f59e0b' }}>Above:</strong> {trigrams.upper.name} ({trigrams.upper.chinese})
                            </div>
                            <div>
                                <strong style={{ color: '#f59e0b' }}>Below:</strong> {trigrams.lower.name} ({trigrams.lower.chinese})
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* LEVEL 3: PRACTICAL GUIDANCE */}
            <section style={sectionStyle}>
                <h2 style={levelHeaderStyle(2)}>Level 3: Practical Guidance</h2>
                
                <div style={subsectionStyle}>
                    <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '24px', fontWeight: '500' }}>
                        Overall Guidance
                    </h3>
                    <p style={{ fontSize: '1.1rem', marginBottom: '24px', lineHeight: '1.9' }}>
                        {guidance.overall}
                    </p>
                </div>

                <div style={gridStyle}>
                    <div style={subsectionStyle}>
                        <h4 style={{ fontSize: '1.1rem', color: '#f59e0b', marginBottom: '16px', fontWeight: '500' }}>
                            Relationships & Human Connections
                        </h4>
                        <p style={{ marginBottom: '16px' }}>{guidance.relationships}</p>
                        {guidance.social && (
                            <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                                <strong>Social Context:</strong> {guidance.social}
                            </p>
                        )}
                    </div>
                    
                    <div style={subsectionStyle}>
                        <h4 style={{ fontSize: '1.1rem', color: '#f59e0b', marginBottom: '16px', fontWeight: '500' }}>
                            Career & Worldly Affairs
                        </h4>
                        <p style={{ marginBottom: '16px' }}>{guidance.career}</p>
                        {guidance.business && (
                            <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                                <strong>Business Strategy:</strong> {guidance.business}
                            </p>
                        )}
                    </div>
                    
                    <div style={subsectionStyle}>
                        <h4 style={{ fontSize: '1.1rem', color: '#f59e0b', marginBottom: '16px', fontWeight: '500' }}>
                            Health & Personal Cultivation
                        </h4>
                        <p style={{ marginBottom: '16px' }}>{guidance.health}</p>
                        {guidance.wellbeing && (
                            <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                                <strong>Cultivation Practice:</strong> {guidance.wellbeing}
                            </p>
                        )}
                    </div>
                    
                    {guidance.spiritual && (
                        <div style={subsectionStyle}>
                            <h4 style={{ fontSize: '1.1rem', color: '#f59e0b', marginBottom: '16px', fontWeight: '500' }}>
                                Spiritual Development
                            </h4>
                            <p>{guidance.spiritual}</p>
                        </div>
                    )}
                </div>

                <div style={gridStyle}>
                    <div style={subsectionStyle}>
                        <h4 style={{ fontSize: '1.1rem', color: '#f59e0b', marginBottom: '16px', fontWeight: '500' }}>
                            Timing & Cycles
                        </h4>
                        <p style={{ marginBottom: '16px' }}>{guidance.timing}</p>
                        {guidance.seasonal && (
                            <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                                <strong>Seasonal Wisdom:</strong> {guidance.seasonal}
                            </p>
                        )}
                    </div>
                    
                    {guidance.structure && (
                        <div style={subsectionStyle}>
                            <h4 style={{ fontSize: '1.1rem', color: '#f59e0b', marginBottom: '16px', fontWeight: '500' }}>
                                Strategic Analysis
                            </h4>
                            <p>{guidance.structure}</p>
                        </div>
                    )}
                </div>

                {guidance.classical && (
                    <div style={classicalTextStyle}>
                        <h4 style={{ fontSize: '1.1rem', color: '#fbbf24', marginBottom: '16px', fontWeight: '500' }}>
                            Classical Wisdom
                        </h4>
                        <p style={{ fontSize: '1.05rem' }}>{guidance.classical}</p>
                    </div>
                )}
            </section>

            {/* LEVEL 4: CHANGING LINES - TRANSFORMATION */}
            {changingLines.length > 0 && (
                <section style={sectionStyle}>
                    <h2 style={levelHeaderStyle(2)}>Level 4: Lines of Transformation</h2>
                    
                    <div style={subsectionStyle}>
                        <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '16px', fontWeight: '500' }}>
                            Understanding Changing Lines
                        </h3>
                        <p style={{ marginBottom: '24px' }}>
                            The changing lines represent dynamic forces at work in your situation. They indicate where transformation 
                            is occurring and provide specific guidance for navigating these changes. Each line position carries 
                            unique significance in the hexagram's overall message.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '24px' }}>
                        {changingLines.map(line => (
                            <div key={line.position} style={{
                                ...subsectionStyle,
                                borderLeft: '4px solid #f59e0b',
                                backgroundColor: 'rgba(245, 158, 11, 0.05)'
                            }}>
                                <h4 style={{ 
                                    fontSize: '1.15rem', 
                                    color: '#f59e0b', 
                                    marginBottom: '16px', 
                                    fontWeight: '600' 
                                }}>
                                    Line {line.position}: {
                                        line.position === 1 ? 'Beginning/Foundation' : 
                                        line.position === 2 ? 'Inner Truth' :
                                        line.position === 3 ? 'Threshold/Transition' :
                                        line.position === 4 ? 'Outer Approach' :
                                        line.position === 5 ? 'Sovereign/Authority' : 
                                        'Sage/Completion'
                                    }
                                </h4>
                                <p style={{ fontSize: '1.05rem', marginBottom: '16px' }}>
                                    {line.meaning.meaning}
                                </p>
                                {line.guidance && (
                                    <p style={{ fontSize: '0.95rem', opacity: 0.9, fontStyle: 'italic' }}>
                                        <strong>Specific Guidance:</strong> {line.guidance}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* LEVEL 5: TRIGRAM ANALYSIS - THE BUILDING BLOCKS */}
            <section style={sectionStyle}>
                <h2 style={levelHeaderStyle(2)}>Level 5: Trigram Constitution</h2>
                
                <div style={subsectionStyle}>
                    <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '24px', fontWeight: '500' }}>
                        The Eight Trigrams (八卦)
                    </h3>
                    <p style={{ marginBottom: '24px' }}>
                        {trigrams.combination}
                    </p>
                    <p style={{ marginBottom: '32px' }}>
                        <strong style={{ color: '#f59e0b' }}>Dynamic Interaction:</strong> {trigrams.relationship}
                    </p>
                </div>

                <div style={gridStyle}>
                    <div style={subsectionStyle}>
                        <h4 style={{ fontSize: '1.15rem', color: '#f59e0b', marginBottom: '24px', fontWeight: '600' }}>
                            Upper Trigram: {trigrams.upper.name} {trigrams.upper.symbol}
                        </h4>
                        <p style={{ fontStyle: 'italic', marginBottom: '20px', fontSize: '1.1rem' }} className="chinese-font">
                            {trigrams.upper.chinese} - {trigrams.upper.position}
                        </p>
                        
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '12px', fontWeight: '500' }}>
                                Essential Nature & Meaning
                            </h5>
                            <p style={{ marginBottom: '12px' }}>
                                <strong>Fundamental Nature:</strong> {trigrams.upper.nature}
                            </p>
                            <p style={{ marginBottom: '12px' }}>
                                <strong>Core Meaning:</strong> {trigrams.upper.meaning}
                            </p>
                            <p style={{ marginBottom: '12px' }}>
                                <strong>Attributes:</strong> {trigrams.upper.attribute}
                            </p>
                            <p style={{ marginBottom: '12px' }}>
                                <strong>Positive Qualities:</strong> {trigrams.upper.qualities}
                            </p>
                            <p style={{ color: '#ef4444' }}>
                                <strong>Shadow Aspects:</strong> {trigrams.upper.defects}
                            </p>
                        </div>

                        <div style={{ 
                            padding: '16px', 
                            backgroundColor: 'rgba(0,0,0,0.3)', 
                            borderRadius: '8px',
                            fontSize: '0.95rem'
                        }}>
                            <h5 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '12px', fontWeight: '500' }}>
                                Classical Correspondences
                            </h5>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                <p><strong>Element:</strong> {trigrams.upper.element}</p>
                                <p><strong>Direction:</strong> {trigrams.upper.direction}</p>
                                <p><strong>Season:</strong> {trigrams.upper.season}</p>
                                <p><strong>Time:</strong> {trigrams.upper.time}</p>
                                <p><strong>Family:</strong> {trigrams.upper.family}</p>
                                <p><strong>Body Part:</strong> {trigrams.upper.bodyPart}</p>
                                <p><strong>Animal:</strong> {trigrams.upper.animal}</p>
                                <p><strong>Color:</strong> {trigrams.upper.color}</p>
                                <p><strong>Emotion:</strong> {trigrams.upper.emotion}</p>
                                <p><strong>Organ:</strong> {trigrams.upper.organ}</p>
                            </div>
                            {trigrams.upper.source && (
                                <p style={{ fontSize: '0.85rem', opacity: 0.7, fontStyle: 'italic', marginTop: '12px' }}>
                                    Source: {trigrams.upper.source}
                                </p>
                            )}
                            {trigrams.upper.commentary && (
                                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '8px' }}>
                                    {trigrams.upper.commentary}
                                </p>
                            )}
                        </div>
                    </div>
                    
                    <div style={subsectionStyle}>
                        <h4 style={{ fontSize: '1.15rem', color: '#f59e0b', marginBottom: '24px', fontWeight: '600' }}>
                            Lower Trigram: {trigrams.lower.name} {trigrams.lower.symbol}
                        </h4>
                        <p style={{ fontStyle: 'italic', marginBottom: '20px', fontSize: '1.1rem' }} className="chinese-font">
                            {trigrams.lower.chinese} - {trigrams.lower.position}
                        </p>
                        
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '12px', fontWeight: '500' }}>
                                Essential Nature & Meaning
                            </h5>
                            <p style={{ marginBottom: '12px' }}>
                                <strong>Fundamental Nature:</strong> {trigrams.lower.nature}
                            </p>
                            <p style={{ marginBottom: '12px' }}>
                                <strong>Core Meaning:</strong> {trigrams.lower.meaning}
                            </p>
                            <p style={{ marginBottom: '12px' }}>
                                <strong>Attributes:</strong> {trigrams.lower.attribute}
                            </p>
                            <p style={{ marginBottom: '12px' }}>
                                <strong>Positive Qualities:</strong> {trigrams.lower.qualities}
                            </p>
                            <p style={{ color: '#ef4444' }}>
                                <strong>Shadow Aspects:</strong> {trigrams.lower.defects}
                            </p>
                        </div>

                        <div style={{ 
                            padding: '16px', 
                            backgroundColor: 'rgba(0,0,0,0.3)', 
                            borderRadius: '8px',
                            fontSize: '0.95rem'
                        }}>
                            <h5 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '12px', fontWeight: '500' }}>
                                Classical Correspondences
                            </h5>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                <p><strong>Element:</strong> {trigrams.lower.element}</p>
                                <p><strong>Direction:</strong> {trigrams.lower.direction}</p>
                                <p><strong>Season:</strong> {trigrams.lower.season}</p>
                                <p><strong>Time:</strong> {trigrams.lower.time}</p>
                                <p><strong>Family:</strong> {trigrams.lower.family}</p>
                                <p><strong>Body Part:</strong> {trigrams.lower.bodyPart}</p>
                                <p><strong>Animal:</strong> {trigrams.lower.animal}</p>
                                <p><strong>Color:</strong> {trigrams.lower.color}</p>
                                <p><strong>Emotion:</strong> {trigrams.lower.emotion}</p>
                                <p><strong>Organ:</strong> {trigrams.lower.organ}</p>
                            </div>
                            {trigrams.lower.source && (
                                <p style={{ fontSize: '0.85rem', opacity: 0.7, fontStyle: 'italic', marginTop: '12px' }}>
                                    Source: {trigrams.lower.source}
                                </p>
                            )}
                            {trigrams.lower.commentary && (
                                <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '8px' }}>
                                    {trigrams.lower.commentary}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* LEVEL 6: CLASSICAL COSMOLOGY */}
            {(fiveElements || seasonalCorrespondences) && (
                <section style={sectionStyle}>
                    <h2 style={levelHeaderStyle(3)}>Level 6: Classical Cosmology</h2>
                    
                    <div style={gridStyle}>
                        {fiveElements && (
                            <div style={subsectionStyle}>
                                <h3 style={{ fontSize: '1.15rem', color: '#f59e0b', marginBottom: '24px', fontWeight: '600' }}>
                                    Five Elements Theory (五行)
                                </h3>
                                <div style={{ marginBottom: '24px' }}>
                                    <p style={{ marginBottom: '16px', fontSize: '1.05rem' }}>
                                        <strong>Upper Trigram Element:</strong> {fiveElements.upperElement}
                                    </p>
                                    <p style={{ marginBottom: '16px', fontSize: '1.05rem' }}>
                                        <strong>Lower Trigram Element:</strong> {fiveElements.lowerElement}
                                    </p>
                                    <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#fbbf24' }}>
                                        <strong>Elemental Relationship:</strong> {fiveElements.relationship}
                                    </p>
                                </div>
                                <div style={classicalTextStyle}>
                                    <h4 style={{ fontSize: '1rem', color: '#fbbf24', marginBottom: '12px', fontWeight: '500' }}>
                                        Five Elements Wisdom
                                    </h4>
                                    <p style={{ marginBottom: '16px' }}>{fiveElements.advice}</p>
                                    {fiveElements.source && (
                                        <p style={{ fontSize: '0.9rem', opacity: 0.8, fontStyle: 'italic' }}>
                                            Source: {fiveElements.source}
                                        </p>
                                    )}
                                    {fiveElements.commentary && (
                                        <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '12px' }}>
                                            {fiveElements.commentary}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                        
                        {seasonalCorrespondences && (
                            <div style={subsectionStyle}>
                                <h3 style={{ fontSize: '1.15rem', color: '#f59e0b', marginBottom: '24px', fontWeight: '600' }}>
                                    Temporal & Spatial Correspondences
                                </h3>
                                <div style={{ display: 'grid', gap: '12px', fontSize: '1.05rem' }}>
                                    <p>
                                        <strong>Dominant Season:</strong> {seasonalCorrespondences.season}
                                    </p>
                                    <p>
                                        <strong>Optimal Time of Day:</strong> {seasonalCorrespondences.timeOfDay}
                                    </p>
                                    <p>
                                        <strong>Cardinal Direction:</strong> {seasonalCorrespondences.direction}
                                    </p>
                                    <p>
                                        <strong>Planetary Influence:</strong> {seasonalCorrespondences.planet}
                                    </p>
                                    <p>
                                        <strong>Elemental Phase:</strong> {seasonalCorrespondences.element}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* LEVEL 7: DETAILED LINE ANALYSIS */}
            <section style={sectionStyle}>
                <h2 style={levelHeaderStyle(3)}>Level 7: Complete Line Analysis (爻辭)</h2>
                
                <div style={subsectionStyle}>
                    <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '24px', fontWeight: '500' }}>
                        The Six Lines - From Earth to Heaven
                    </h3>
                    <p style={{ marginBottom: '24px' }}>
                        Each line represents a stage of development within the hexagram's situation. Lines are read from bottom 
                        (Line 1 - the beginning) to top (Line 6 - the completion). The position of each line, its yin or yang nature, 
                        and its relationships with other lines all contribute to its meaning.
                    </p>
                    <div style={{ 
                        padding: '16px', 
                        backgroundColor: 'rgba(0,0,0,0.3)', 
                        borderRadius: '8px',
                        marginBottom: '24px'
                    }}>
                        <p style={{ fontSize: '0.95rem', marginBottom: '8px' }}>
                            <strong style={{ color: '#f59e0b' }}>Line Positions:</strong>
                        </p>
                        <ul style={{ margin: '0', paddingLeft: '24px', fontSize: '0.9rem' }}>
                            <li>Lines 1 & 2: The Earth positions - foundation and inner development</li>
                            <li>Lines 3 & 4: The Human positions - transition and outer relationships</li>
                            <li>Lines 5 & 6: The Heaven positions - leadership and transcendence</li>
                        </ul>
                    </div>
                </div>

                <div style={{ display: 'grid', gap: '24px' }}>
                    {lines.slice().reverse().map((line, index) => {
                        const actualPosition = 6 - index;
                        return (
                            <div key={actualPosition} style={{
                                ...subsectionStyle,
                                borderLeft: line.isChanging ? '4px solid #f59e0b' : '4px solid #374151',
                                backgroundColor: line.isChanging ? 'rgba(245, 158, 11, 0.05)' : 'rgba(17, 24, 39, 0.6)'
                            }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <h4 style={{ 
                                        fontSize: '1.15rem', 
                                        color: line.isChanging ? '#f59e0b' : '#ffffff', 
                                        marginBottom: '12px',
                                        fontWeight: '600' 
                                    }}>
                                        Line {line.position}: {line.name} 
                                        <span style={{ 
                                            marginLeft: '16px',
                                            fontSize: '1rem',
                                            fontWeight: '400'
                                        }}>
                                            {line.type === 1 ? 'Yang ⚊' : 'Yin ⚋'}
                                            {line.isChanging && <span style={{ color: '#f59e0b' }}> (Transforming)</span>}
                                        </span>
                                    </h4>
                                    <div style={{ 
                                        display: 'inline-block',
                                        padding: '4px 12px', 
                                        borderRadius: '4px', 
                                        fontSize: '0.875rem',
                                        backgroundColor: line.correctness === 'correct' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                        color: line.correctness === 'correct' ? '#22c55e' : '#ef4444',
                                        border: '1px solid',
                                        borderColor: line.correctness === 'correct' ? '#22c55e' : '#ef4444'
                                    }}>
                                        Position: {line.correctness}
                                    </div>
                                </div>
                                
                                <div style={{ marginBottom: '20px' }}>
                                    <h5 style={{ fontSize: '1rem', color: '#f59e0b', marginBottom: '12px', fontWeight: '500' }}>
                                        Position Analysis
                                    </h5>
                                    <p style={{ marginBottom: '12px' }}>
                                        <strong>Structural Position:</strong> {line.place}
                                    </p>
                                    <p style={{ marginBottom: '12px' }}>
                                        <strong>Line Character:</strong> {line.attribute || `${line.type === 1 ? 'Yang' : 'Yin'} force in position ${line.position}`}
                                    </p>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <h5 style={{ fontSize: '1rem', color: '#f59e0b', marginBottom: '12px', fontWeight: '500' }}>
                                        Line Meaning
                                    </h5>
                                    <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                        {line.meaning.meaning}
                                    </p>
                                </div>
                                
                                {line.classical && (
                                    <div style={{
                                        padding: '16px',
                                        backgroundColor: 'rgba(245, 158, 11, 0.08)',
                                        borderLeft: '3px solid #f59e0b',
                                        borderRadius: '4px',
                                        marginBottom: '20px'
                                    }}>
                                        <h5 style={{ fontSize: '0.95rem', color: '#fbbf24', marginBottom: '12px', fontWeight: '500' }}>
                                            Classical Text (古典爻辭)
                                        </h5>
                                        <p style={{ fontStyle: 'italic', fontSize: '1.05rem' }}>
                                            "{line.classical}"
                                        </p>
                                    </div>
                                )}
                                
                                {line.relationships && line.relationships.length > 0 && (
                                    <div>
                                        <h5 style={{ fontSize: '0.95rem', color: '#f59e0b', marginBottom: '12px', fontWeight: '500' }}>
                                            Line Relationships & Resonances
                                        </h5>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                            {line.relationships.map((rel, idx) => (
                                                <span key={idx} style={{ 
                                                    padding: '6px 12px', 
                                                    backgroundColor: 'rgba(107, 114, 128, 0.2)', 
                                                    borderRadius: '4px',
                                                    fontSize: '0.875rem',
                                                    border: '1px solid #6b7280'
                                                }}>
                                                    {rel.type} with Line {rel.with}: {rel.quality}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* LEVEL 8: ADVANCED ESOTERIC KNOWLEDGE */}
            <section style={{ ...sectionStyle, marginBottom: '0' }}>
                <h2 style={levelHeaderStyle(3)}>Level 8: Esoteric Wisdom</h2>
                
                {guidance.esoteric && (
                    <div style={subsectionStyle}>
                        <h3 style={{ fontSize: '1.15rem', color: '#f59e0b', marginBottom: '20px', fontWeight: '600' }}>
                            Hidden Teachings
                        </h3>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.9' }}>
                            {guidance.esoteric}
                        </p>
                    </div>
                )}

                {hexagram.nuclear && (
                    <div style={subsectionStyle}>
                        <h3 style={{ fontSize: '1.15rem', color: '#f59e0b', marginBottom: '20px', fontWeight: '600' }}>
                            Nuclear Hexagram
                        </h3>
                        <p style={{ fontSize: '1.05rem', marginBottom: '16px' }}>
                            The nuclear hexagram reveals the inner essence hidden within the outer form.
                        </p>
                        <p>
                            <strong>Nuclear Hexagram:</strong> {hexagram.nuclear.number}. {hexagram.nuclear.name}
                        </p>
                        <p style={{ fontStyle: 'italic', marginTop: '12px' }}>
                            {hexagram.nuclear.meaning}
                        </p>
                    </div>
                )}

                {hexagram.mutual && (
                    <div style={subsectionStyle}>
                        <h3 style={{ fontSize: '1.15rem', color: '#f59e0b', marginBottom: '20px', fontWeight: '600' }}>
                            Mutual Hexagram (Paired Opposite)
                        </h3>
                        <p>
                            <strong>Mutual Hexagram:</strong> {hexagram.mutual.number}. {hexagram.mutual.name}
                        </p>
                        <p style={{ fontStyle: 'italic', marginTop: '12px' }}>
                            This represents the shadow or complementary aspect of your current situation.
                        </p>
                    </div>
                )}

                <div style={{
                    marginTop: '48px',
                    padding: '32px',
                    textAlign: 'center',
                    borderTop: '1px solid #374151',
                    color: '#9ca3af'
                }}>
                    <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '16px' }}>
                        "The I Ching does not offer itself with proofs and results; it does not vaunt itself, 
                        nor is it easy to approach. Like a part of nature, it waits until it is discovered."
                    </p>
                    <p style={{ fontSize: '0.875rem', marginBottom: '24px' }}>
                        The wisdom of the I Ching is inexhaustible. Each reading offers layers of meaning 
                        that reveal themselves through contemplation and lived experience.
                    </p>
                    
                    <div style={{ 
                        textAlign: 'left',
                        backgroundColor: 'rgba(17, 24, 39, 0.6)',
                        padding: '24px',
                        borderRadius: '8px',
                        border: '1px solid #374151'
                    }}>
                        <h4 style={{ fontSize: '1rem', color: '#f59e0b', marginBottom: '16px', fontWeight: '600', textAlign: 'center' }}>
                            Bibliography & Sources
                        </h4>
                        <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                            <p style={{ marginBottom: '8px' }}>
                                <strong>Primary Sources:</strong>
                            </p>
                            <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
                                <li>Zhou Yi (周易) - The Book of Changes, c. 1000 BCE</li>
                                <li>Shi Yi (十翼) - The Ten Wings, attributed to Confucius</li>
                                <li>Shuogua Zhuan (說卦傳) - Discussion of the Trigrams</li>
                                <li>Huangdi Neijing (黃帝內經) - Yellow Emperor's Classic of Internal Medicine</li>
                            </ul>
                            <p style={{ marginBottom: '8px' }}>
                                <strong>Classical Commentaries:</strong>
                            </p>
                            <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
                                <li>Wang Bi (王弼) Commentary, 3rd century CE</li>
                                <li>Zhu Xi (朱熹) Commentary, Song Dynasty</li>
                                <li>Cheng Yi (程颐) Commentary, Song Dynasty</li>
                            </ul>
                            <p style={{ marginBottom: '8px' }}>
                                <strong>Modern Scholarly Translations:</strong>
                            </p>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li>Wilhelm, Richard & Baynes, Cary F. (1967). The I Ching or Book of Changes. Princeton University Press.</li>
                                <li>Legge, James (1882). The Yi King. Sacred Books of the East, Vol. 16. Oxford University Press.</li>
                                <li>Lynn, Richard J. (1994). The Classic of Changes. Columbia University Press.</li>
                                <li>Needham, Joseph (1956). Science and Civilization in China, Vol. 2. Cambridge University Press.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Explanation;