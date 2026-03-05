'use client'

import { useEffect, useRef } from 'react'

const industries = [
    'E-commerce',
    'Online Services',
    'Agencies',
    'Education',
    'SaaS Startups',
    'Local Businesses',
    'Consulting Firms',
    'Healthcare Admin',
    'Real Estate',
    'Media & Content',
    'Logistics',
    'Professional Services',
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
                        Industries
                    </span>
                </div>
                <div className="reveal" style={{ marginBottom: '3.5rem' }}>
                    <h2
                        className="font-display"
                        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#c9c6c1', lineHeight: 1.2 }}
                    >
                        We Work Across Sectors
                    </h2>
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
                    {industries.map((industry) => (
                        <div
                            key={industry}
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
                            {industry}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
