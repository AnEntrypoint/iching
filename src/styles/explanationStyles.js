export const explanationStyles = {
    containerStyle: {
        maxWidth: '100%',
        margin: '0',
        padding: '0',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: '1.8',
        color: '#d1d5db'
    },
    sectionStyle: {
        marginBottom: '64px',
        paddingBottom: '48px',
        borderBottom: '1px solid #374151',
    },
    subsectionStyle: {
        marginBottom: '32px',
        padding: '28px',
        backgroundColor: 'rgba(17, 24, 39, 0.6)',
        border: '1px solid #374151',
        borderRadius: '8px',
    },
    gridStyle: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginBottom: '32px'
    },
    classicalTextStyle: {
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
    levelHeaderStyle: (level) => ({
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
    }),
    textStyle: {
        fontSize: '1.05rem',
        lineHeight: '1.8',
        color: '#d1d5db'
    },
    listStyle: {
        paddingLeft: '24px',
        fontSize: '1rem',
        lineHeight: '1.8',
        color: '#d1d5db'
    }
};
