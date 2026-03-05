'use client'

import { useEffect, useRef } from 'react'

const pills = ['Reduce Manual Work', 'Operational Efficiency', 'AI Workflows', 'Scalable Systems']

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const items = containerRef.current?.querySelectorAll('.hero-anim')
        items?.forEach((el, i) => {
            const elem = el as HTMLElement
            elem.style.animationDelay = `${i * 120}ms`
            elem.classList.add('animate-fade-up')
        })
    }, [])

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle center-bottom radial glow */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60%',
                    height: '50%',
                    background:
                        'radial-gradient(ellipse at center bottom, rgba(238,130,108,0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <div
                className="container-main"
                ref={containerRef}
                style={{ textAlign: 'center', paddingTop: '100px', paddingBottom: '80px' }}
            >
                {/* Headline */}
                <h1
                    className="hero-anim font-display"
                    style={{
                        fontSize: 'clamp(3rem, 7vw, 6rem)',
                        fontStyle: 'italic',
                        color: '#c9c6c1',
                        lineHeight: 1.1,
                        letterSpacing: '-0.01em',
                        marginBottom: '2rem',
                        maxWidth: '900px',
                        margin: '0 auto 2rem auto',
                    }}
                >
                    Business Optimization Through AI Systems &amp; Automation
                </h1>

                {/* Subheadline */}
                <p
                    className="hero-anim font-body"
                    style={{
                        fontSize: '18px',
                        fontWeight: 300,
                        color: 'rgba(201,198,193,0.7)',
                        maxWidth: '620px',
                        margin: '0 auto 3rem auto',
                        lineHeight: 1.75,
                    }}
                >
                    We help small and mid-sized businesses streamline operations, eliminate
                    repetitive work, and make better decisions using AI-driven systems and
                    automation.
                </p>

                {/* CTA Buttons */}
                <div
                    className="hero-anim"
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '2.5rem',
                    }}
                >
                    <a
                        href="#contact"
                        className="btn-primary"
                        style={{
                            padding: '14px 34px',
                            borderRadius: '9999px',
                            fontSize: '14px',
                            letterSpacing: '0.06em',
                            textDecoration: 'none',
                            display: 'inline-block',
                            minHeight: '44px',
                            lineHeight: '16px',
                        }}
                    >
                        Start a Conversation
                    </a>
                    <a
                        href="#services"
                        className="btn-secondary"
                        style={{
                            padding: '14px 34px',
                            borderRadius: '9999px',
                            fontSize: '14px',
                            letterSpacing: '0.06em',
                            textDecoration: 'none',
                            display: 'inline-block',
                            minHeight: '44px',
                            lineHeight: '16px',
                        }}
                    >
                        Explore Services
                    </a>
                </div>

                {/* Micro pills */}
                <div
                    className="hero-anim"
                    style={{
                        display: 'flex',
                        gap: '0.75rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {pills.map((pill) => (
                        <span
                            key={pill}
                            style={{
                                fontSize: '11px',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: 'rgba(201,198,193,0.4)',
                                border: '1px solid rgba(201,198,193,0.12)',
                                borderRadius: '9999px',
                                padding: '6px 14px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                            }}
                        >
                            {pill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
