'use client'

import { useEffect, useRef } from 'react'

const qualifiers = [
    'The business runs — but only because you’re holding it together',
    'You’ve grown past what manual operations can handle',
    'Revenue is slipping through gaps no one’s watching',
]

export default function Industries() {
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
            style={{
                background: 'rgba(255,255,255,0.015)',
                borderTop: '1px solid rgba(201,198,193,0.04)',
                borderBottom: '1px solid rgba(201,198,193,0.04)',
                position: 'relative',
            }}
        >
            <div className="container-main">
                {/* Label + heading */}
                <div className="reveal" style={{ marginBottom: '1rem' }}>
                    <span
                        className="font-body"
                        style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ee826c', fontWeight: 400 }}
                    >
                        Where We Operate
                    </span>
                </div>
                <div className="reveal" style={{ marginBottom: '2rem' }}>
                    <h2
                        className="font-display"
                        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#c9c6c1', lineHeight: 1.2 }}
                    >
                        Built for Businesses That Are Done Running on Heroics
                    </h2>
                </div>

                <div className="reveal" style={{ marginBottom: '3.5rem', maxWidth: '620px' }}>
                    <p className="font-body" style={{ fontSize: '17px', color: 'rgba(201,198,193,0.65)', lineHeight: 1.8 }}>
                        ZINLU works with businesses that have proven the model works and are ready to stop depending on the owner to keep it running. If your business moves money, serves customers, and depends on people coordinating manually to function — we can build the system that replaces that dependency.
                    </p>
                </div>

                {/* Industry pills */}
                <div
                    className="reveal-stagger"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '1rem',
                    }}
                >
                    {qualifiers.map((q) => (
                        <div
                            key={q}
                            style={{
                                border: '1px solid rgba(201,198,193,0.12)',
                                borderRadius: '4px',
                                padding: '1rem 1.5rem',
                                color: 'rgba(201,198,193,0.7)',
                                fontSize: '14px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 300,
                                letterSpacing: '0.04em',
                                transition: 'border-color 300ms ease, color 300ms ease',
                                cursor: 'default',
                                minHeight: '44px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(238,130,108,0.5)'
                                e.currentTarget.style.color = '#c9c6c1'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(201,198,193,0.12)'
                                e.currentTarget.style.color = 'rgba(201,198,193,0.7)'
                            }}
                        >
                            {q}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
