'use client'

import { useEffect, useRef } from 'react'

export default function Vision() {
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
            {/* Atmospheric radial glow — peak warmth */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '120%',
                    background:
                        'radial-gradient(ellipse at center, rgba(238,130,108,0.14) 0%, rgba(238,130,108,0.06) 40%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
                {/* Section label */}
                <div className="reveal" style={{ marginBottom: '2rem' }}>
                    <span
                        className="font-body"
                        style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ee826c', fontWeight: 400 }}
                    >
                        Our Vision
                    </span>
                </div>

                {/* Large quote heading */}
                <div className="reveal" style={{ marginBottom: '3rem' }}>
                    <h2
                        className="font-display"
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                            fontStyle: 'italic',
                            color: '#c9c6c1',
                            lineHeight: 1.1,
                            letterSpacing: '-0.01em',
                            maxWidth: '850px',
                            margin: '0 auto',
                        }}
                    >
                        A World Where Every Business Operates at Its Full Potential
                    </h2>
                </div>

                {/* Body text */}
                <div
                    className="reveal-stagger"
                    style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                    <p
                        className="font-body"
                        style={{ fontSize: '18px', color: 'rgba(201,198,193,0.72)', lineHeight: 1.85 }}
                    >
                        We envision a future where the operational divide between large enterprises and small
                        businesses disappears — where any company, regardless of size, can access intelligent
                        systems that remove friction, surface insight, and unlock growth.
                    </p>
                    <p
                        className="font-body"
                        style={{ fontSize: '17px', color: 'rgba(201,198,193,0.55)', lineHeight: 1.85 }}
                    >
                        ZINLU exists to accelerate that future — one business at a time. Not through generic
                        software, but through thoughtfully designed systems that reflect the unique rhythm and
                        ambition of each business we serve. This is not just automation. This is operational
                        transformation.
                    </p>
                </div>
            </div>
        </section>
    )
}
