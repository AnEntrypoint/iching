// LinesSection component - extracted from Explanation.js
import React from 'react';

function LinesSection({ lines, changingLines, subsectionStyle }) {
    return (
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
                                                {line.meaning}
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
    );
}

export default LinesSection;
