'use client'

import { useEffect, useRef } from 'react'

const painPoints = [
    {
        title: 'Owner Dependency',
        desc: 'The business cannot function without you in it. Every decision, every follow-up, every operation requires your direct attention — which means your growth is capped by your hours.',
    },
    {
        title: 'Revenue Left on the Table',
        desc: 'Leads that don\'t get followed up. Customers who asked and heard nothing back. Opportunities that slipped through. These are not edge cases — they are daily losses that compound silently.',
    },
    {
        title: 'Operations That Break Under Load',
        desc: 'What works at ten customers breaks at fifty. Manual processes don\'t scale — they multiply errors, slow response times, and erode the customer experience that built your reputation.',
    },
    {
        title: 'Decisions Made in the Dark',
        desc: 'Without structured data flowing through your operations, every major call is a guess. Leaders who operate on instinct alone consistently underperform those who operate on systems.',
    },
    {
        title: 'No Operational Leverage',
        desc: 'Your team spends its capacity on low-value repetition instead of high-value execution. The hours exist — but they are buried in tasks that should not require a human to complete.',
    },
]

export default function Problem() {
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
        <section id="problem" ref={sectionRef} className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Faint warm glow bottom-right */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    bottom: '-20%',
                    right: '-10%',
                    width: '50%',
                    height: '60%',
                    background: 'radial-gradient(ellipse at bottom right, rgba(238,130,108,0.12) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <div className="container-main">
                {/* eyebrow + heading */}
                <div className="reveal" style={{ marginBottom: '1rem' }}>
                    <span
                        className="font-body"
                        style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ee826c', fontWeight: 400 }}
                    >
                        Why Most Businesses Plateau
                    </span>
                </div>
                <div className="reveal" style={{ marginBottom: '2rem' }}>
                    <h2
                        className="font-display"
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                            color: '#c9c6c1',
                            lineHeight: 1.15,
                            maxWidth: '680px',
                        }}
                    >
                        The Real Bottleneck Is Never the Market
                    </h2>
                </div>

                {/* Intro paragraph */}
                <div className="reveal" style={{ marginBottom: '4rem', maxWidth: '620px' }}>
                    <p className="font-body" style={{ color: 'rgba(201,198,193,0.65)', fontSize: '17px', lineHeight: 1.8 }}>
                        Almost every business that struggles to scale is facing the same structural problem: the business runs on people, not systems. When the people stop, everything stops. ZINLU fixes that at the root.
                    </p>
                </div>

                {/* Pain points grid */}
                <div
                    className="reveal-stagger"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '4rem',
                    }}
                >
                    {painPoints.map((point) => (
                        <div
                            key={point.title}
                            className="card-base"
                            style={{
                                borderRadius: '4px',
                                padding: '2rem',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: '28px',
                                        height: '2px',
                                        background: '#ee826c',
                                        marginRight: '12px',
                                        flexShrink: 0,
                                    }}
                                />
                                <h3
                                    className="font-display"
                                    style={{ fontSize: '1.05rem', color: '#c9c6c1', fontWeight: 500 }}
                                >
                                    {point.title}
                                </h3>
                            </div>
                            <p className="font-body" style={{ fontSize: '14px', color: 'rgba(201,198,193,0.6)', lineHeight: 1.75 }}>
                                {point.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bridge sentence */}
                <div className="reveal">
                    <p
                        className="font-body"
                        style={{
                            fontSize: '18px',
                            color: 'rgba(201,198,193,0.8)',
                            maxWidth: '740px',
                            lineHeight: 1.8,
                            borderLeft: '2px solid rgba(238,130,108,0.4)',
                            paddingLeft: '1.5rem',
                        }}
                    >
                        ZINLU builds the infrastructure that eliminates each of these — not one at a time, but as an integrated operating system built specifically for your business.
                    </p>
                </div>
            </div>
        </section>
    )
}
