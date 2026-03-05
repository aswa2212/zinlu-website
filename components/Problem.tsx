'use client'

import { useEffect, useRef } from 'react'

const painPoints = [
    {
        title: 'Too Much Manual Work',
        desc: 'Teams spend hours on repetitive tasks that could be automated, reducing time for growth.',
    },
    {
        title: 'Disconnected Tools',
        desc: 'Software systems don\'t talk to each other, creating data silos and inefficiencies.',
    },
    {
        title: 'Slow Decision Making',
        desc: 'Without structured data flows, leaders operate on gut feel rather than real-time insight.',
    },
    {
        title: 'Hard to Scale',
        desc: 'Manual processes break down as the business grows, creating bottlenecks and errors.',
    },
    {
        title: 'Wasted Operational Capacity',
        desc: 'Resources are tied up in low-value tasks instead of being channeled into strategic work.',
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
                {/* heading */}
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
                        Why Businesses Struggle to Scale Efficiently
                    </h2>
                </div>

                {/* Intro paragraph */}
                <div className="reveal" style={{ marginBottom: '4rem', maxWidth: '620px' }}>
                    <p className="font-body" style={{ color: 'rgba(201,198,193,0.65)', fontSize: '17px', lineHeight: 1.8 }}>
                        Most businesses are held back not by lack of ambition, but by operational drag — systems
                        that don't scale, processes that weren't designed for growth, and tools that work against
                        each other. These are the patterns we see across industries.
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
                        ZINLU focuses on solving these problems by introducing intelligent systems and
                        automation into everyday business operations.
                    </p>
                </div>
            </div>
        </section>
    )
}
