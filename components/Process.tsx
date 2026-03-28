'use client'

import { useEffect, useRef } from 'react'

const steps = [
    {
        num: '1',
        title: 'Discovery Call',
        desc: 'We map your current operations, identify friction points, and understand your goals in a focused conversation.',
    },
    {
        num: '2',
        title: 'Operational Audit',
        desc: 'We review your workflows, tools, and data flows to uncover opportunities for automation and system improvement.',
    },
    {
        num: '3',
        title: 'System Design & Build',
        desc: 'We design and build your custom automation workflows, AI integrations, and operational systems.',
    },
    {
        num: '4',
        title: 'Launch & Enablement',
        desc: 'We deploy, test, and hand off — with training, documentation, and ongoing support to ensure lasting adoption.',
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
                        Engagement Process
                    </span>
                </div>
                <div className="reveal" style={{ marginBottom: '4rem' }}>
                    <h2
                        className="font-display"
                        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#c9c6c1', lineHeight: 1.2 }}
                    >
                        How We Work Together
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
