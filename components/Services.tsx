'use client'

import { useEffect, useRef } from 'react'

const services = [
    {
        title: 'Revenue Capture Systems',
        body: 'We build the infrastructure that ensures every lead is captured, every inquiry is responded to, and every sales opportunity is followed through — without manual intervention. Your pipeline runs. Your follow-ups happen. Your revenue doesn\'t wait for someone to remember.',
    },
    {
        title: 'Customer Operations Systems',
        body: 'We build the operational layer that serves your customers end-to-end — from first contact through resolution — at the quality and speed that large businesses deliver, without the headcount they require. Your customers are served. Your team is freed.',
    },
    {
        title: 'Business Intelligence Systems',
        body: 'We build the data and reporting infrastructure that gives you a real-time view of your business — what is working, what is breaking, and where the next growth lever is. You stop operating on instinct. You start operating on facts.',
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
                        What We Build
                    </span>
                </div>
                <div className="reveal" style={{ marginBottom: '1.5rem' }}>
                    <h2
                        className="font-display"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#c9c6c1', lineHeight: 1.2 }}
                    >
                        Business Operating Systems, Not One-Off Projects
                    </h2>
                </div>
                <div className="reveal" style={{ marginBottom: '4rem', maxWidth: '680px' }}>
                    <p className="font-body" style={{ fontSize: '17px', color: 'rgba(201,198,193,0.6)', lineHeight: 1.8 }}>
                        Every ZINLU engagement delivers a permanent operational asset — a system your business runs on, that we manage, and that gets stronger as your business grows.
                    </p>
                </div>

                {/* Services grid */}
                <div
                    className="reveal-stagger"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                    }}
                >
                    {services.map((svc) => (
                        <div
                            key={svc.title}
                            className="card-base svc-card"
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
                            <p
                                className="font-body"
                                style={{
                                    fontSize: '14px',
                                    color: 'rgba(201,198,193,0.65)',
                                    lineHeight: 1.8,
                                }}
                            >
                                {svc.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
