'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('visible')
                })
            },
            { threshold: 0.15 }
        )
        const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-stagger')
        reveals?.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section id="contact" ref={sectionRef} className="section-pad">
            <div className="container-main">
                {/* Label + heading */}
                <div className="reveal" style={{ marginBottom: '1rem' }}>
                    <span
                        className="font-body"
                        style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ee826c', fontWeight: 400 }}
                    >
                        Contact
                    </span>
                </div>
                <div className="reveal" style={{ marginBottom: '4rem' }}>
                    <h2
                        className="font-display"
                        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#c9c6c1', lineHeight: 1.2 }}
                    >
                        Let's Talk About Your Business
                    </h2>
                </div>

                <div
                    className="reveal-stagger"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '5rem',
                        alignItems: 'start',
                    }}
                >
                    {/* Left: contact info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <div
                                className="font-body"
                                style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,198,193,0.35)', marginBottom: '0.5rem' }}
                            >
                                Email
                            </div>
                            <a
                                href="mailto:zinlu.business@gmail.com"
                                className="font-body"
                                style={{ color: '#c9c6c1', textDecoration: 'none', fontSize: '15px', transition: 'color 300ms ease' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#ee826c')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#c9c6c1')}
                            >
                                zinlu.business@gmail.com
                            </a>
                        </div>
                        <div>
                            <div
                                className="font-body"
                                style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,198,193,0.35)', marginBottom: '0.5rem' }}
                            >
                                Phone
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <a
                                    href="tel:+918438630519"
                                    className="font-body"
                                    style={{ color: '#c9c6c1', textDecoration: 'none', fontSize: '15px', transition: 'color 300ms ease' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ee826c')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#c9c6c1')}
                                >
                                    +91 84386 30519
                                </a>
                                <a
                                    href="tel:+918590167718"
                                    className="font-body"
                                    style={{ color: '#c9c6c1', textDecoration: 'none', fontSize: '15px', transition: 'color 300ms ease' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ee826c')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#c9c6c1')}
                                >
                                    +91 85901 67718
                                </a>
                            </div>
                        </div>
                        <div>
                            <div
                                className="font-body"
                                style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,198,193,0.35)', marginBottom: '0.5rem' }}
                            >
                                WhatsApp
                            </div>
                            <a
                                href="https://wa.me/918438630519"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body"
                                style={{ color: '#c9c6c1', textDecoration: 'none', fontSize: '15px', transition: 'color 300ms ease', display: 'flex', alignItems: 'center', gap: '6px' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#ee826c')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#c9c6c1')}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                        <div>
                            <div
                                className="font-body"
                                style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,198,193,0.35)', marginBottom: '0.5rem' }}
                            >
                                LinkedIn
                            </div>
                            <a
                                href="https://www.linkedin.com/company/zinluoptimization/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body"
                                style={{ color: '#c9c6c1', textDecoration: 'none', fontSize: '15px', transition: 'color 300ms ease' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#ee826c')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#c9c6c1')}
                            >
                                zinlu
                            </a>
                        </div>
                        <div>
                            <div
                                className="font-body"
                                style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,198,193,0.35)', marginBottom: '0.5rem' }}
                            >
                                Instagram
                            </div>
                            <a
                                href="https://www.instagram.com/zinlu.optimization?igsh=Y3gxNXJ2MG5uYzRp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body"
                                style={{ color: '#c9c6c1', textDecoration: 'none', fontSize: '15px', transition: 'color 300ms ease' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#ee826c')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#c9c6c1')}
                            >
                                @zinlu.optimization
                            </a>
                        </div>
                        <div>
                            <div
                                className="font-body"
                                style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,198,193,0.35)', marginBottom: '0.5rem' }}
                            >
                                Location
                            </div>
                            <span className="font-body" style={{ color: 'rgba(201,198,193,0.6)', fontSize: '15px' }}>
                                Remote — Worldwide
                            </span>
                        </div>

                        <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(201,198,193,0.07)' }}>
                            <p className="font-body" style={{ fontSize: '13px', color: 'rgba(201,198,193,0.4)', lineHeight: 1.75 }}>
                                We typically respond within 24–48 hours. All enquiries are welcome — from early-stage exploration to ready-to-build engagements.
                            </p>
                        </div>
                    </div>

                    {/* Right: contact form */}
                    <div>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                                <div style={{ color: '#ee826c', fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                                <h3 className="font-display" style={{ color: '#c9c6c1', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                                    Message Received
                                </h3>
                                <p className="font-body" style={{ color: 'rgba(201,198,193,0.55)', fontSize: '14px' }}>
                                    We'll be in touch within 24–48 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className="font-body"
                                        style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,198,193,0.35)', display: 'block', marginBottom: '0.5rem' }}
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        required
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="font-body"
                                        style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,198,193,0.35)', display: 'block', marginBottom: '0.5rem' }}
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        required
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="contact-message"
                                        className="font-body"
                                        style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,198,193,0.35)', display: 'block', marginBottom: '0.5rem' }}
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        placeholder="Tell us about your business and what you're looking to build..."
                                        required
                                        rows={5}
                                        className="form-input"
                                        style={{ resize: 'none' }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn-primary"
                                    style={{
                                        padding: '14px 32px',
                                        borderRadius: '9999px',
                                        fontSize: '13px',
                                        letterSpacing: '0.06em',
                                        alignSelf: 'flex-start',
                                        minHeight: '44px',
                                    }}
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
