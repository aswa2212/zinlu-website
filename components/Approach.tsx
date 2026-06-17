'use client'

import { useEffect, useRef } from 'react'

const stages = [
    {
        number: '01',
        title: 'Diagnose',
        desc: 'We map your business end-to-end — where time is lost, where revenue leaks, where decisions stall. We don\'t guess. We document exactly what is broken and why before designing any solution.',
    },
    {
        number: '02',
        title: 'Build',
        desc: 'We design and build your Business Operating System — a complete operational infrastructure custom-engineered for your business context, your team, and your growth targets. No off-the-shelf configurations. No generic deployments.',
    },
    {
        number: '03',
        title: 'Operate',
        desc: 'We run it. Permanently. Your system is managed, monitored, and evolved by ZINLU on an ongoing basis. You see the outcomes. We handle everything underneath.',
    },
]

export default function Approach() {
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
        <section ref={sectionRef} className="section-pad" style={{ position: 'relative' }}>
            <div className="container-main">
                {/* Section label + heading */}
                <div className="reveal" style={{ marginBottom: '1rem' }}>
                    <span
                        className="font-body"
                        style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ee826c', fontWeight: 400 }}
                    >
                        How We Work
                    </span>
                </div>
                <div className="reveal" style={{ marginBottom: '4rem' }}>
                    <h2
                        className="font-display"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#c9c6c1', lineHeight: 1.2, maxWidth: '560px' }}
                    >
                        From Operational Drag to Operational Leverage
                    </h2>
                </div>

                {/* Desktop: connecting line + 3 columns */}
                <div
                    className="reveal-stagger"
                    style={{
                        position: 'relative',
                    }}
                >
                    {/* Connecting line (desktop only) */}
                    <div
                        className="hidden md:block"
                        style={{
                            position: 'absolute',
                            top: '1.75rem',
                            left: '5%',
                            right: '5%',
                            height: '1px',
                            background: 'rgba(238,130,108,0.3)',
                            zIndex: 0,
                        }}
                        aria-hidden="true"
                    />

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '3rem',
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        {stages.map((stage) => (
                            <div key={stage.number}>
                                {/* Stage number */}
                                <div
                                    className="font-body"
                                    style={{
                                        fontSize: '3rem',
                                        color: '#ee826c',
                                        fontWeight: 300,
                                        lineHeight: 1,
                                        marginBottom: '1.5rem',
                                        letterSpacing: '-0.02em',
                                    }}
                                >
                                    {stage.number}
                                </div>
                                <h3
                                    className="font-display"
                                    style={{
                                        fontSize: '1.3rem',
                                        color: '#c9c6c1',
                                        marginBottom: '1rem',
                                        fontWeight: 500,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {stage.title}
                                </h3>
                                <p
                                    className="font-body"
                                    style={{
                                        fontSize: '14px',
                                        color: 'rgba(201,198,193,0.6)',
                                        lineHeight: 1.8,
                                        fontWeight: 300,
                                    }}
                                >
                                    {stage.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
