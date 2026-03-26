import React, { useRef, useEffect, useState } from 'react';

/** Dark theme hexagram visualization matching the design guideline
 */
function EnergyVisual({ lines = [], changingLines = [], trigrams = {} }) {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const [isAnimating] = useState(true);
    
    const CANVAS_WIDTH = 300;
    const CANVAS_HEIGHT = 300;
    
    const LINE_WIDTH = 80;
    const LINE_HEIGHT = 12;
    const LINE_SPACING = 16;
    const YIN_GAP = 30;
    const CENTER_X = CANVAS_WIDTH / 2;
    const CENTER_Y = CANVAS_HEIGHT / 2;
    const START_Y = CENTER_Y - ((5 * LINE_SPACING + 6 * LINE_HEIGHT) / 2);

    useEffect(() => {
        if (!lines || lines.length !== 6) return;
        
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let animationTime = 0;
        
        const animate = () => {
            if (!isAnimating) return;
            
            animationTime += 0.016;
            
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            
            ctx.save();
            ctx.fillStyle = '#374151';
            ctx.beginPath();
            ctx.arc(CENTER_X, CENTER_Y, 120, 0, Math.PI * 2);
            ctx.fill();
            
            const gradient = ctx.createRadialGradient(CENTER_X, CENTER_Y, 100, CENTER_X, CENTER_Y, 120);
            gradient.addColorStop(0, 'rgba(17, 24, 39, 0)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(CENTER_X, CENTER_Y, 120, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            
            drawHexagramLines(ctx, animationTime);
            
            const hexagramNumber = getHexagramNumber(lines);
            if (hexagramNumber) {
                ctx.save();
                ctx.fillStyle = '#9ca3af';
                ctx.font = '14px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(`#${hexagramNumber}`, CENTER_X, START_Y + 6 * (LINE_HEIGHT + LINE_SPACING) + 20);
                ctx.restore();
            }
            
            animationRef.current = requestAnimationFrame(animate);
        };
        
        const drawHexagramLines = (ctx, time) => {
            lines.forEach((lineType, index) => {
                const y = START_Y + (5 - index) * (LINE_HEIGHT + LINE_SPACING) + LINE_HEIGHT/2;
                const lineNumber = index + 1;
                const isChanging = changingLines.some(cl => cl.position === lineNumber);
                
                drawLine(ctx, CENTER_X, y, lineType, isChanging, time);
            });
        };
        
        const drawLine = (ctx, centerX, y, lineType, isChanging, time) => {
            const isYang = lineType === 1;
            
            ctx.save();
            
            if (isChanging) {
                const pulse = Math.sin(time * 2) * 0.3 + 0.7;
                ctx.strokeStyle = `rgba(245, 158, 11, ${pulse})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#f59e0b';
            } else {
                ctx.strokeStyle = '#f59e0b';
            }
            
            ctx.lineWidth = LINE_HEIGHT;
            ctx.lineCap = 'round';
            
            if (isYang) {
                ctx.beginPath();
                ctx.moveTo(centerX - LINE_WIDTH/2, y);
                ctx.lineTo(centerX + LINE_WIDTH/2, y);
                ctx.stroke();
            } else {
                const segmentLength = (LINE_WIDTH - YIN_GAP) / 2;
                
                ctx.beginPath();
                ctx.moveTo(centerX - LINE_WIDTH/2, y);
                ctx.lineTo(centerX - YIN_GAP/2, y);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(centerX + YIN_GAP/2, y);
                ctx.lineTo(centerX + LINE_WIDTH/2, y);
                ctx.stroke();
            }
            
            ctx.restore();
        };
        
        const getHexagramNumber = (lines) => {
            let binary = '';
            lines.forEach(line => {
                binary += line.toString();
            });
            return parseInt(binary, 2) % 64 + 1;
        };
        
        animate();
        
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [lines, changingLines, trigrams, isAnimating, CENTER_X, CENTER_Y, START_Y]);

    if (!lines || lines.length !== 6) {
        return (
            <div style={{ 
                width: '300px',
                height: '300px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#374151',
                borderRadius: '50%',
                boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.3)'
            }}>
                <p style={{ 
                    color: '#9ca3af', 
                    fontSize: '14px',
                    fontStyle: 'italic'
                }}>
                    Casting hexagram...
                </p>
            </div>
        );
    }

    return (
        <div style={{ 
            position: 'relative',
            width: '300px',
            margin: '0 auto'
        }}>
            <canvas 
                ref={canvasRef}
                width={CANVAS_WIDTH}
                height={CANVAS_HEIGHT}
                style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))'
                }}
            />
            
            {/* Trigram labels */}
            {trigrams.upper && trigrams.lower && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '100%',
                    transform: 'translateY(-50%)',
                    marginLeft: '20px',
                    fontSize: '14px',
                    color: '#9ca3af'
                }}>
                    <div style={{ marginBottom: '40px' }}>
                        <div style={{ color: '#f59e0b', fontWeight: '600' }}>{trigrams.upper.name}</div>
                        <div style={{ fontSize: '12px' }} className="chinese-font">{trigrams.upper.chinese}</div>
                    </div>
                    <div>
                        <div style={{ color: '#f59e0b', fontWeight: '600' }}>{trigrams.lower.name}</div>
                        <div style={{ fontSize: '12px' }} className="chinese-font">{trigrams.lower.chinese}</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EnergyVisual;