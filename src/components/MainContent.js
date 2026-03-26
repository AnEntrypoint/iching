// MainContent component - extracted from App.js for better maintainability
import React from 'react';
import EnergyVisual from '../EnergyVisual';
import Explanation from '../Explanation';

function MainContent({ state, dynamicStyles, generateReading }) {
    return (
        <div style={dynamicStyles.appContainer}>
            <div style={dynamicStyles.contentContainer}>
                <header style={dynamicStyles.header}>
                    <h1 style={dynamicStyles.titleChinese} className="chinese-font">易經</h1>
                    <h2 style={dynamicStyles.titleEnglish}>I Ching Oracle</h2>
                    <p style={dynamicStyles.subtitle}>Consult the ancient Chinese Book of Changes for wisdom and guidance</p>
                </header>
                
                <div style={dynamicStyles.mainCard}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <div>
                            <EnergyVisual 
                                lines={state.trigram.lines}
                                changingLines={state.trigram.explanation.changingLines || []}
                                trigrams={state.trigram.explanation.trigrams || {}}
                            />
                        </div>
                        
                        <div style={{
                            backgroundColor: '#111827',
                            borderRadius: '8px',
                            padding: '24px',
                            border: '1px solid #374151'
                        }}>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '600',
                                marginBottom: '16px',
                                color: '#f59e0b'
                            }}>
                                Your Reading
                            </h3>
                            <Explanation 
                                explanation={state.trigram.explanation}
                            />
                        </div>
                    </div>
                </div>
                
                {/* About the I Ching section */}
                <div style={{
                    ...dynamicStyles.mainCard,
                    marginTop: '32px'
                }}>
                    <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        marginBottom: '24px',
                        textAlign: 'center',
                        color: '#f59e0b'
                    }}>
                        About the I Ching
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '24px'
                    }}>
                        <div style={{
                            backgroundColor: '#111827',
                            padding: '16px',
                            borderRadius: '8px',
                            border: '1px solid #374151'
                        }}>
                            <h4 style={{
                                fontWeight: '600',
                                marginBottom: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#ffffff'
                            }}>
                                <span style={{ color: '#f59e0b' }}>📜</span> History
                            </h4>
                            <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
                                The I Ching or Yi Jing, also known as the Book of Changes, is an ancient Chinese divination text and the oldest of the Chinese classics dating back over 3,000 years.
                            </p>
                        </div>
                        <div style={{
                            backgroundColor: '#111827',
                            padding: '16px',
                            borderRadius: '8px',
                            border: '1px solid #374151'
                        }}>
                            <h4 style={{
                                fontWeight: '600',
                                marginBottom: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#ffffff'
                            }}>
                                <span style={{ color: '#f59e0b' }}>☯</span> Philosophy
                            </h4>
                            <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
                                The I Ching embodies a model of the universe based on the dynamic balance of opposites (yin and yang), the evolution of events as a process, and acceptance of the inevitability of change.
                            </p>
                        </div>
                        <div style={{
                            backgroundColor: '#111827',
                            padding: '16px',
                            borderRadius: '8px',
                            border: '1px solid #374151'
                        }}>
                            <h4 style={{
                                fontWeight: '600',
                                marginBottom: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#ffffff'
                            }}>
                                <span style={{ color: '#f59e0b' }}>❓</span> How to Use
                            </h4>
                            <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
                                Focus on your question, then cast the hexagram. The resulting pattern provides insight into your situation. Interpret the meaning with an open mind and heart.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <button 
                style={dynamicStyles.newReadingButton}
                className="button-hover"
                onClick={generateReading}
            >
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Cast New Hexagram
            </button>
        </div>
    );
}

export default MainContent;
