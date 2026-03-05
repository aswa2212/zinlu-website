'use client'

import { useEffect, useRef } from 'react'

const techItems = [
    { category: 'AI Models', detail: 'OpenAI GPT, Claude, open-source LLMs' },
    { category: 'Workflow Automation', detail: 'n8n, Make, Zapier, custom pipelines' },
    { category: 'Conversational AI', detail: 'Botpress, custom chatbot frameworks' },
    { category: 'API Integrations', detail: 'REST, GraphQL, webhook orchestration' },
    { category: 'Backend Infrastructure', detail: 'FastAPI, Node.js, Python' },
    { category: 'Cloud Infrastructure', detail: 'Docker, cloud services, serverless' },
    { category: 'Data Analytics', detail: 'Structured reporting, dashboards, ETL' },
]

export default function TechStack() {
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
        <section ref={sectionRef} className="section-pad">
            <div className="container-main">
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '5rem',
                        alignItems: 'start',
                    }}
                >
                    {/* Left: heading + description */}
                    <div>
                        <div className="reveal" style={{ marginBottom: '1rem' }}>
                            <span
                                className="font-body"
                                style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ee826c', fontWeight: 400 }}
                            >
                                Technology
                            </span>
                        </div>
                        <div className="reveal" style={{ marginBottom: '1.5rem' }}>
                            <h2
                                className="font-display"
                                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#c9c6c1', lineHeight: 1.2 }}
                            >
                                Built on Proven AI Technology
                            </h2>
                        </div>
                        <div className="reveal">
                            <p
                                className="font-body"
                                style={{ fontSize: '15px', color: 'rgba(201,198,193,0.6)', lineHeight: 1.85 }}
                            >
                                We build with modern, battle-tested tools — selecting the right technology for each
                                use case rather than forcing one approach. Our stack is deliberately composable,
                                allowing us to integrate with what you already use and scale with what you need.
                            </p>
                        </div>
                    </div>

                    {/* Right: tech list */}
                    <div className="reveal-stagger" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {techItems.map((item) => (
                            <div
                                key={item.category}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '1rem',
                                    paddingBottom: '1.25rem',
                                    borderBottom: '1px solid rgba(201,198,193,0.06)',
                                }}
                            >
                                {/* Dot marker */}
                                <span
                                    style={{
                                        width: '6px',
                                        height: '6px',
                                        borderRadius: '50%',
                                        background: '#ee826c',
                                        flexShrink: 0,
                                        marginTop: '7px',
                                    }}
                                />
                                <div>
                                    <div
                                        className="font-body"
                                        style={{ fontSize: '14px', color: '#c9c6c1', fontWeight: 400, marginBottom: '2px' }}
                                    >
                                        {item.category}
                                    </div>
                                    <div
                                        className="font-body"
                                        style={{ fontSize: '12px', color: 'rgba(201,198,193,0.45)', fontWeight: 300 }}
                                    >
                                        {item.detail}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
