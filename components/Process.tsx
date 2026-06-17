'use client'

import { useEffect, useRef } from 'react'

const steps = [
    {
        num: '1',
        title: 'Operational Discovery',
        desc: 'We map your current operations, surface every inefficiency, and identify the highest-leverage points for system-driven improvement. We ask the questions most consultants skip.',
    },
    {
        num: '2',
        title: 'System Design',
        desc: 'We architect your Business Operating System — the exact infrastructure your business needs to run without manual dependency. Every component is designed for your context, not copied from a playbook.',
    },
    {
        num: '3',
        title: 'Build & Deploy',
        desc: 'We build every component, integrate every connection, and deploy a production-grade system that is tested before it goes live. You review. We execute.',
    },
    {
        num: '4',
        title: 'Ongoing Management',
        desc: 'We take permanent ownership of the system. You see the outcomes. We handle everything it takes to produce them — monitoring, maintaining, and evolving as your business grows.',
    },
]

export default function Process() {
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
                <div className="reveal" style={{ marginBottom: '1rem' }}>
                    <span
                        className="font-body"
                        style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ee826c', fontWeight: 400 }}
                    >
                        How to Get Started
                    </span>
                </div>
                <div className="reveal" style={{ marginBottom: '4rem' }}>
                    <h2
                        className="font-display"
                        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#c9c6c1', lineHeight: 1.2 }}
                    >
                        Four Steps to a Business That Runs Itself
                    </h2>
                </div>

                {/* Desktop: horizontal steps */}
                <div
                    className="reveal-stagger hidden md:block"
                    style={{ position: 'relative' }}
                >
                    {/* Dotted connecting line */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '22px',
                            left: '3%',
                            right: '3%',
                            borderTop: '1px dashed rgba(238,130,108,0.25)',
                            zIndex: 0,
                        }}
                        aria-hidden="true"
                    />

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '2rem',
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        {steps.map((step) => (
                            <div key={step.num} style={{ textAlign: 'center' }}>
                                {/* Circle */}
                                <div
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '50%',
                                        border: '1px solid #ee826c',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1.5rem auto',
                                        background: '#000',
                                        color: '#ee826c',
                                        fontSize: '13px',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    {step.num}
                                </div>
                                <h3
                                    className="font-display"
                                    style={{ fontSize: '1rem', color: '#c9c6c1', marginBottom: '0.75rem', fontWeight: 500 }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    className="font-body"
                                    style={{ fontSize: '13px', color: 'rgba(201,198,193,0.55)', lineHeight: 1.75 }}
                                >
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile: vertical timeline */}
                <div className="reveal-stagger md:hidden" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '4rem' }}>
                    {steps.map((step) => (
                        <div key={step.num} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    border: '1px solid #ee826c',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    color: '#ee826c',
                                    fontSize: '13px',
                                    fontFamily: 'Inter, sans-serif',
                                }}
                            >
                                {step.num}
                            </div>
                            <div>
                                <h3
                                    className="font-display"
                                    style={{ fontSize: '1rem', color: '#c9c6c1', marginBottom: '0.5rem', fontWeight: 500 }}
                                >
                                    {step.title}
                                </h3>
                                <p className="font-body" style={{ fontSize: '13px', color: 'rgba(201,198,193,0.55)', lineHeight: 1.75 }}>
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
