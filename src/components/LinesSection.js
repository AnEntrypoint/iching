import React from 'react';

function LinesSection({ changingLines = [] }) {
    if (!changingLines || changingLines.length === 0) return null;

    const subsectionStyle = {
        marginBottom: '32px',
        padding: '28px',
        backgroundColor: 'rgba(17, 24, 39, 0.6)',
        border: '1px solid #374151',
        borderRadius: '8px',
    };

    return (
        <div style={{ display: 'grid', gap: '24px' }}>
            {changingLines.map((line, index) => (
                <div key={line.position || index} style={{
                    ...subsectionStyle,
                    borderLeft: '4px solid #f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.05)'
                }}>
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{
                            fontSize: '1.15rem',
                            color: '#f59e0b',
                            marginBottom: '12px',
                            fontWeight: '600'
                        }}>
                            Line {line.position}: {line.name}
                            <span style={{
                                marginLeft: '16px',
                                fontSize: '1rem',
                                fontWeight: '400'
                            }}>
                                {line.type === 'yang' ? 'Yang ⚊' : 'Yin ⚋'}
                                <span style={{ color: '#f59e0b' }}> (Transforming)</span>
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
                                Classical Text
                            </h5>
                            <p style={{ fontStyle: 'italic', fontSize: '1.05rem' }}>
                                &ldquo;{line.classical}&rdquo;
                            </p>
                        </div>
                    )}

                    {line.relationships && line.relationships.length > 0 && (
                        <div>
                            <h5 style={{ fontSize: '0.95rem', color: '#f59e0b', marginBottom: '12px', fontWeight: '500' }}>
                                Line Relationships
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
            ))}
        </div>
    );
}

export default LinesSection;
