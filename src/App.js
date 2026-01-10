import React, { useState, useEffect } from 'react';
import MainContent from './components/MainContent';
import { generateTrigram } from './trigram/trigramGenerator';
import { provideExplanation } from './explanation/explanationProvider';
import './App.css';

function App() {
    const [state, setState] = useState({
        trigram: null,
        loading: true,
        error: null,
        isRevealed: false
    });

    useEffect(() => {
        const initializeReading = async () => {
            try {
                const trigram = generateTrigram();
                const explanation = provideExplanation(trigram.hexagram);
                
                setState({
                    trigram: { ...trigram, explanation },
                    loading: false,
                    error: null,
                    isRevealed: false
                });
            } catch (err) {
                setState({
                    trigram: null,
                    loading: false,
                    error: 'Failed to generate reading',
                    isRevealed: false
                });
            }
        };

        initializeReading();
    }, []);

    const generateReading = () => {
        try {
            const trigram = generateTrigram();
            const explanation = provideExplanation(trigram.hexagram);
            
            setState(prev => ({
                ...prev,
                trigram: { ...trigram, explanation },
                isRevealed: false
            }));
        } catch (err) {
            setState(prev => ({
                ...prev,
                error: 'Failed to generate reading'
            }));
        }
    };

    const dynamicStyles = {
        appContainer: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        },
        contentContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem'
        },
        header: {
            textAlign: 'center',
            marginBottom: '3rem'
        },
        titleChinese: {
            fontSize: '4rem',
            color: '#f59e0b',
            marginBottom: '0.5rem',
            fontWeight: '700'
        },
        titleEnglish: {
            fontSize: '2.5rem',
            color: '#ffffff',
            marginBottom: '1rem',
            fontWeight: '600'
        },
        subtitle: {
            fontSize: '1.125rem',
            color: '#9ca3af',
            maxWidth: '600px',
            margin: '0 auto'
        },
        mainCard: {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
        }
    };

    if (state.loading) {
        return (
            <div style={dynamicStyles.appContainer}>
                <div style={dynamicStyles.contentContainer}>
                    <div style={{ textAlign: 'center', padding: '4rem' }}>
                        <div style={{ color: '#ffffff', fontSize: '1.25rem' }}>
                            Consulting the oracle...
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (state.error) {
        return (
            <div style={dynamicStyles.appContainer}>
                <div style={dynamicStyles.contentContainer}>
                    <div style={{ textAlign: 'center', padding: '4rem' }}>
                        <div style={{ color: '#ef4444', fontSize: '1.25rem', marginBottom: '1rem' }}>
                            {state.error}
                        </div>
                        <button 
                            onClick={generateReading}
                            style={{
                                background: '#f59e0b',
                                color: '#ffffff',
                                border: 'none',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                cursor: 'pointer'
                            }}
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={dynamicStyles.appContainer}>
            <div style={dynamicStyles.contentContainer}>
                <MainContent 
                    state={state} 
                    dynamicStyles={dynamicStyles} 
                    generateReading={generateReading} 
                />
            </div>
        </div>
    );
}

export default App;