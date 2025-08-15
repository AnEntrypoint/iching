export const styles = {
    app: {
        appContainer: {
            background: 'linear-gradient(to bottom, #111827 0%, #1f2937 100%)',
            minHeight: '100vh',
            color: '#ffffff',
        },
        contentContainer: {
            maxWidth: '1024px',
            margin: '0 auto',
            padding: '32px 16px',
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
    },
    explanation: {
        container: {
            maxWidth: '100%',
            margin: '0',
            padding: '0',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            lineHeight: '1.8',
            color: '#d1d5db'
        },
        section: {
            marginBottom: '64px',
            paddingBottom: '48px',
            borderBottom: '1px solid #374151',
        },
        subsection: {
            marginBottom: '32px',
            padding: '28px',
            backgroundColor: 'rgba(17, 24, 39, 0.6)',
            border: '1px solid #374151',
            borderRadius: '8px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
        },
        classicalText: {
            padding: '24px',
            backgroundColor: 'rgba(245, 158, 11, 0.08)',
            borderLeft: '4px solid #f59e0b',
            borderRadius: '4px',
            marginBottom: '24px',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            lineHeight: '1.9',
            color: '#fbbf24'
        },
        levelHeader: (level) => ({
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
        })
    }
};
