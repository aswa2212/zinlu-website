'use client'

import { useEffect, useRef } from 'react'

export default function CoreConcept() {
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
            id="about"
            ref={sectionRef}
            className="section-pad"
            style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}
        >
            {/* Watermark */}
            <div
                className="watermark"
                aria-hidden="true"
                style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0,
                }}
            >
                ZINLU
            </div>

            <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
                {/* Section label */}
                <div className="reveal" style={{ marginBottom: '1.5rem' }}>
                    <span
                        className="font-body"
                        style={{
                            fontSize: '11px',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: '#ee826c',
                            fontWeight: 400,
                        }}
                    >
                        Our Belief
                    </span>
                </div>

                <div className="reveal" style={{ marginBottom: '3rem' }}>
                    <h2
                        className="font-display"
                        style={{
                            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                            color: '#c9c6c1',
                            lineHeight: 1.12,
                            letterSpacing: '-0.01em',
                            maxWidth: '780px',
                            margin: '0 auto',
                        }}
                    >
                        If You Stop, the Business Stops. That&apos;s the Problem We Solve.
                    </h2>
                </div>

                <div className="reveal-stagger" style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <p
                        className="font-body"
                        style={{
                            fontSize: '17px',
                            color: 'rgba(201,198,193,0.7)',
                            lineHeight: 1.85,
                        }}
                    >
                        Most owners are the operating system of their own business. Every decision, every follow-up, every function runs through them. The moment they step away — revenue slows, customers wait, and operations stall. That is not a business. That is a dependency.
                    </p>
                    <p
                        className="font-body"
                        style={{
                            fontSize: '17px',
                            color: 'rgba(201,198,193,0.7)',
                            lineHeight: 1.85,
                        }}
                    >
                        We build the infrastructure that replaces that dependency permanently. We run it, we manage it, and we stand behind what it produces. Every engagement is a long-term operating partnership — not a project, not a handoff, not a tool you figure out alone.
                    </p>
                </div>

                {/* Divider line */}
                <div className="reveal" style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                    <div
                        style={{
                            width: '1px',
                            height: '60px',
                            background: 'linear-gradient(to bottom, rgba(238,130,108,0.5), transparent)',
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
