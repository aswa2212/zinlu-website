'use client'

import { useEffect, useRef } from 'react'

export default function CTA() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.15 }
        )
        const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-stagger')
        reveals?.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="section-pad"
            style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}
        >
            {/* Animated radial pulse */}
            <div
                className="pulse-glow"
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(238,130,108,0.2) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
                <div className="reveal" style={{ marginBottom: '1.5rem' }}>
                    <h2
                        className="font-display"
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                            color: '#c9c6c1',
                            lineHeight: 1.15,
                            fontStyle: 'italic',
                            maxWidth: '700px',
                            margin: '0 auto',
                        }}
                    >
                        Start Optimizing Your Business Operations
                    </h2>
                </div>

                <div className="reveal" style={{ marginBottom: '3rem' }}>
                    <p
                        className="font-body"
                        style={{
                            fontSize: '17px',
                            color: 'rgba(201,198,193,0.6)',
                            maxWidth: '520px',
                            margin: '0 auto',
                            lineHeight: 1.8,
                        }}
                    >
                        Let's explore how AI systems and automation can unlock efficiency, reduce operational
                        drag, and position your business to scale.
                    </p>
                </div>

                <div
                    className="reveal"
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <a
                        href="#contact"
                        className="btn-primary"
                        style={{
                            padding: '15px 38px',
                            borderRadius: '9999px',
                            fontSize: '14px',
                            letterSpacing: '0.06em',
                            textDecoration: 'none',
                            display: 'inline-block',
                            minHeight: '44px',
                            lineHeight: '14px',
                        }}
                    >
                        Get in Touch
                    </a>
                    <a
                        href="#services"
                        className="btn-secondary"
                        style={{
                            padding: '15px 38px',
                            borderRadius: '9999px',
                            fontSize: '14px',
                            letterSpacing: '0.06em',
                            textDecoration: 'none',
                            display: 'inline-block',
                            minHeight: '44px',
                            lineHeight: '14px',
                        }}
                    >
                        View Services
                    </a>
                </div>
            </div>
        </section>
    )
}
