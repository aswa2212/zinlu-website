'use client'

import { useEffect, useRef } from 'react'

const differentiators = [
    {
        title: 'Custom-Built Solutions',
        desc: 'No cookie-cutter templates. Every system is designed for your specific workflow.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polyline points="2,11 8,17 18,5" stroke="#ee826c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'SMB-First Thinking',
        desc: 'We understand small business constraints — budget, time, and team capacity matter.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polyline points="2,11 8,17 18,5" stroke="#ee826c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Outcome-Driven',
        desc: 'We measure success by real business impact — hours saved, errors reduced, revenue unlocked.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polyline points="2,11 8,17 18,5" stroke="#ee826c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Transparent Process',
        desc: 'You stay in the loop at every stage — no black boxes, no surprises.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polyline points="2,11 8,17 18,5" stroke="#ee826c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Long-Term Partnership',
        desc: 'We build to last. Our systems evolve as your business grows and needs change.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polyline points="2,11 8,17 18,5" stroke="#ee826c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
]

export default function WhyZinlu() {
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
        <section ref={sectionRef} className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background fades back toward black */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 100%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />

            <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
                <div className="reveal" style={{ marginBottom: '1rem' }}>
                    <span
                        className="font-body"
                        style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ee826c', fontWeight: 400 }}
                    >
                        Why ZINLU
                    </span>
                </div>
                <div className="reveal" style={{ marginBottom: '4rem' }}>
                    <h2
                        className="font-display"
                        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#c9c6c1', lineHeight: 1.2 }}
                    >
                        What Makes Us Different
                    </h2>
                </div>

                <div
                    className="reveal-stagger"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {differentiators.map((item) => (
                        <div key={item.title}>
                            <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
                            <h3
                                className="font-display"
                                style={{ fontSize: '1.05rem', color: '#c9c6c1', marginBottom: '0.6rem', fontWeight: 500 }}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="font-body"
                                style={{ fontSize: '13px', color: 'rgba(201,198,193,0.55)', lineHeight: 1.75 }}
                            >
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
