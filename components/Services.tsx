'use client'

import { useEffect, useRef } from 'react'

const services = [
    {
        title: 'AI Process Automation',
        bullets: [
            'End-to-end workflow automation using AI agents',
            'Document processing and data extraction',
            'Automated reporting pipelines',
            'Multi-step task orchestration',
            'Error detection and exception handling',
        ],
    },
    {
        title: 'Business Workflow Optimization',
        bullets: [
            'Operational audit and bottleneck mapping',
            'Process redesign for scale',
            'SOP digitization and automation',
            'Cross-team coordination systems',
        ],
    },
    {
        title: 'AI System Integration',
        bullets: [
            'LLM integration into existing tools',
            'API connectivity and data synchronization',
            'CRM, ERP, and SaaS automation',
            'Custom AI middleware development',
        ],
    },
    {
        title: 'Customer Experience Automation',
        bullets: [
            'AI-powered support and messaging',
            'Lead qualification workflows',
            'Personalized outreach automation',
            'Customer journey optimization',
        ],
    },
    {
        title: 'Internal Productivity Systems',
        bullets: [
            'Knowledge base and AI assistant setup',
            'Internal chatbot development',
            'Task and project management automation',
            'Team onboarding automation',
        ],
    },
]

export default function Services() {
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
            { threshold: 0.1 }
        )
        const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-stagger')
        reveals?.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section id="services" ref={sectionRef} className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Large accent radial bloom behind this section */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '80%',
                    background: 'radial-gradient(ellipse at center, rgba(238,130,108,0.09) 0%, transparent 65%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
                {/* Label + heading */}
                <div className="reveal" style={{ marginBottom: '1rem' }}>
                    <span
                        className="font-body"
                        style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ee826c', fontWeight: 400 }}
                    >
                        What We Do
                    </span>
                </div>
                <div className="reveal" style={{ marginBottom: '4rem' }}>
                    <h2
                        className="font-display"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#c9c6c1', lineHeight: 1.2 }}
                    >
                        Services Built for Operational Impact
                    </h2>
                </div>

                {/* Services grid */}
                <div
                    className="reveal-stagger"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1.5rem',
                    }}
                >
                    {services.map((svc, i) => (
                        <div
                            key={svc.title}
                            className={`card-base${i === services.length - 1 && services.length % 2 !== 0 ? ' svc-last' : ''}`}
                            style={{
                                borderRadius: '6px',
                                padding: '2.5rem',
                            }}
                        >
                            <h3
                                className="font-display"
                                style={{
                                    fontSize: '1.25rem',
                                    color: '#c9c6c1',
                                    marginBottom: '1.5rem',
                                    fontWeight: 500,
                                    lineHeight: 1.3,
                                }}
                            >
                                {svc.title}
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                {svc.bullets.map((bullet) => (
                                    <li
                                        key={bullet}
                                        className="font-body"
                                        style={{
                                            fontSize: '13px',
                                            color: 'rgba(201,198,193,0.65)',
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '10px',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        <span style={{ color: '#ee826c', flexShrink: 0, marginTop: '4px', fontSize: '10px' }}>▸</span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}
