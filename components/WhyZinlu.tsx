'use client'

import { useEffect, useRef } from 'react'

const differentiators = [
    {
        title: 'Engineered for Your Business',
        desc: 'Nothing we build is a configuration of someone else\'s template. Every system is designed from the ground up for your specific operations, your team, and your growth stage.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polyline points="2,11 8,17 18,5" stroke="#ee826c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'We Run What We Build',
        desc: 'We don\'t hand off and disappear. ZINLU manages the infrastructure we build — monitoring performance, resolving issues, and evolving the system as your business grows.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polyline points="2,11 8,17 18,5" stroke="#ee826c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Outcomes, Not Outputs',
        desc: 'We measure what matters: leads captured, hours recovered, revenue that didn\'t slip through. Not features shipped. Not tasks completed. Not tools configured.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polyline points="2,11 8,17 18,5" stroke="#ee826c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Right-Sized Today. Built to Outgrow Itself.',
        desc: 'We understand the constraints of a growing business — budget, team size, time. Every system we build fits where you are today and is architected to carry you where you are going.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polyline points="2,11 8,17 18,5" stroke="#ee826c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Long-Term Partnership',
        desc: 'This is not a project engagement. ZINLU is an ongoing operational partner. The system grows with you. The relationship gets stronger as the business grows.',
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
                        We Don’t Deliver Projects. We Deliver Operating Infrastructure.
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
