import React, { useState, useEffect, useCallback } from 'react';
import EnergyVisual from './EnergyVisual';
import Explanation from './Explanation';
import { generateTrigram } from './trigram/trigramGenerator';
import { displayEnergyVisual } from './visual/visualDisplay';
import { provideExplanation } from './explanation/explanationProvider';
import './App.css';

/**
 * Main component for the I-Ching Reading App with Jinba ittai principles.
 * Creates seamless harmony between user and interface.
 * @returns {JSX.Element} The rendered component.
 */
function App() {
    const [state, setState] = useState({
        trigram: null,
        loading: true,
        error: null,
        isRevealed: false,
        userPresence: 'approaching'
    });
    
    // eslint-disable-next-line no-unused-vars
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    // eslint-disable-next-line no-unused-vars
    const [scrollDepth, setScrollDepth] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [breathingPhase, setBreathingPhase] = useState(0);

    // Jinba ittai: Respond to user's natural movements
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        const handleScroll = () => {
            const depth = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            setScrollDepth(Math.min(depth, 1));
        };
        
        const handleUserPresence = () => {
            setState(prev => ({ ...prev, userPresence: 'present' }));
        };

        const breathingInterval = setInterval(() => {
            setBreathingPhase(prev => (prev + 0.02) % (Math.PI * 2));
        }, 50);
        
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleUserPresence);
        window.addEventListener('keydown', handleUserPresence);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleUserPresence);
            window.removeEventListener('keydown', handleUserPresence);
            clearInterval(breathingInterval);
        };
    }, []);

    const generateReading = useCallback(() => {
        setState(prev => ({ ...prev, loading: true, isRevealed: false }));
        
        // Jinba ittai: Graceful transition timing
        setTimeout(() => {
            try {
                console.log('Generating I-Ching reading...');
                const trigram = generateTrigram();
                const visualDisplay = displayEnergyVisual(trigram);
                const explanation = provideExplanation(trigram);

                const reading = {
                    trigram,
                    visualDisplay,
                    explanation
                };

                console.log('Reading generated successfully:', reading);
                setState({
                    trigram: reading,
                    loading: false,
                    error: null,
                    isRevealed: false,
                    userPresence: 'present'
                });
                
                // Reveal content gradually
                setTimeout(() => {
                    setState(prev => ({ ...prev, isRevealed: true }));
                }, 300);
                
            } catch (error) {
                console.error('Error generating reading:', error);
                setState(prev => ({
                    ...prev,
                    trigram: null,
                    loading: false,
                    error: error
                }));
            }
        }, 800); // Contemplative pause
    }, []);

    useEffect(() => {
        generateReading();
    }, [generateReading]);

    // Dark theme styling following the design guideline
    const dynamicStyles = {
        appContainer: {
            background: 'linear-gradient(to bottom, #111827 0%, #1f2937 100%)',
            minHeight: '100vh',
            color: '#ffffff',
        },
        contentContainer: {
            maxWidth: '1024px',
            margin: '0 auto',
            padding: '32px 16px',
            opacity: state.isRevealed ? 1 : 0,
            transition: 'opacity 0.6s ease',
        },
        header: {
            textAlign: 'center',
            marginBottom: '48px',
        },
        titleChinese: {
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#f59e0b',
            marginBottom: '16px',
            fontFamily: '"Noto Serif SC", serif',
        },
        titleEnglish: {
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '8px',
            color: '#ffffff',
        },
        subtitle: {
            color: '#d1d5db',
            fontSize: '1rem',
            maxWidth: '512px',
            margin: '0 auto',
        },
        mainCard: {
            backgroundColor: '#1f2937',
            borderRadius: '12px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            padding: '24px',
            marginBottom: '32px',
            border: '1px solid #374151',
        },
        castButton: {
            background: '#f59e0b',
            color: '#111827',
            border: 'none',
            borderRadius: '9999px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
        },
        newReadingButton: {
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            background: '#f59e0b',
            color: '#111827',
            border: 'none',
            borderRadius: '9999px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 1000,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
        },
        loadingContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, #111827 0%, #1f2937 100%)',
        },
        loadingText: {
            fontSize: '16px',
            color: '#9ca3af',
            marginTop: '24px',
            fontStyle: 'italic',
        },
        loadingSymbol: {
            fontSize: '64px',
            color: '#f59e0b',
            animation: 'spin 3s linear infinite',
        }
    };

    if (state.loading) {
        return (
            <div style={dynamicStyles.loadingContainer}>
                <div style={dynamicStyles.loadingSymbol} className="loading-pulse">☯</div>
                <div style={dynamicStyles.loadingText}>
                    Consulting the oracle...
                </div>
            </div>
        );
    }

    if (state.error) {
        return (
            <div style={dynamicStyles.loadingContainer}>
                <div style={{ fontSize: '2rem', marginBottom: '20px', color: '#8b5a3c' }}>⚠</div>
                <div style={dynamicStyles.loadingText}>
                    Unable to consult: {state.error.message}
                </div>
                <button 
                    onClick={generateReading}
                    style={{
                        ...dynamicStyles.newReadingButton,
                        position: 'static',
                        marginTop: '20px'
                    }}
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (!state.trigram) {
        return (
            <div style={dynamicStyles.loadingContainer}>
                <div style={dynamicStyles.loadingText}>Preparing the cosmic connection...</div>
            </div>
        );
    }

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
                                lines={state.trigram.trigram.lines} 
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
                            <blockquote style={{ color: '#d1d5db', fontSize: '0.875rem', margin: 0 }}>
                                <p style={{margin: 0}}>
                                The I Ching or Yi Jing, also known as the Book of Changes, is an ancient Chinese divination text and the oldest of the Chinese classics dating back over 3,000 years.
                                </p>
                            </blockquote>
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
                            <blockquote style={{ color: '#d1d5db', fontSize: '0.875rem', margin: 0 }}>
                                <p style={{margin: 0}}>
                                The I Ching embodies a model of the universe based on the dynamic balance of opposites (yin and yang), the evolution of events as a process, and acceptance of the inevitability of change.
                                </p>
                            </blockquote>
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
                            <blockquote style={{ color: '#d1d5db', fontSize: '0.875rem', margin: 0 }}>
                                <p style={{margin: 0}}>
                                Focus on your question, then cast the hexagram. The resulting pattern provides insight into your situation. Interpret the meaning with an open mind and heart.
                                </p>
                            </blockquote>
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

export default App;
