'use client'

import { useEffect, useRef, useState } from 'react'

type FormState = {
    name: string
    email: string
    message: string
}

type Errors = Partial<FormState>

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState<Errors>({})

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

    const validate = (): boolean => {
        const newErrors: Errors = {}
        if (!form.name || form.name.trim().length < 2)
            newErrors.name = 'Please enter your name (at least 2 characters).'
        if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            newErrors.email = 'Please enter a valid email address.'
        if (!form.message || form.message.trim().length < 10)
            newErrors.message = 'Please tell us a bit more (at least 10 characters).'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        if (errors[name as keyof Errors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!validate()) return

        setLoading(true)
        setError(false)

        try {
            const response = await fetch('https://formspree.io/f/xqeojrgo', {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            if (response.ok) {
                setSubmitted(true)
            } else {
                setError(true)
            }
        } catch {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const errorStyle: React.CSSProperties = {
        fontSize: '12px',
        color: 'var(--color-accent)',
        marginTop: '6px',
        fontFamily: 'Inter, sans-serif',
        display: 'block',
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
                        Let&apos;s Talk About Your Business
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
                                href="mailto:hello@zinlu.in"
                                className="font-body"
                                style={{ color: '#ee826c', textDecoration: 'underline', textDecorationColor: 'rgba(238,130,108,0.4)', textUnderlineOffset: '3px', fontSize: '15px', transition: 'color 300ms ease, text-decoration-color 300ms ease', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = '#ff9a80'; e.currentTarget.style.textDecorationColor = 'rgba(255,154,128,0.8)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = '#ee826c'; e.currentTarget.style.textDecorationColor = 'rgba(238,130,108,0.4)'; }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                hello@zinlu.in
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
                                We respond within 24–48 hours. Whether you&apos;re exploring or ready to build — this is where it starts.
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
                                    We&apos;ll be in touch within 24–48 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} noValidate>
                                {error && (
                                    <div style={{ padding: '1rem', border: '1px solid rgba(238,130,108,0.3)', borderRadius: '4px' }}>
                                        <p className="font-body" style={{ fontSize: '13px', color: 'var(--color-accent)', lineHeight: 1.6 }}>
                                            Something went wrong. Please reach out directly via WhatsApp or email below.
                                        </p>
                                    </div>
                                )}
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
                                        value={form.name}
                                        onChange={handleChange}
                                        className="form-input"
                                        style={errors.name ? { borderBottomColor: 'var(--color-accent)' } : {}}
                                    />
                                    {errors.name && <span style={errorStyle}>{errors.name}</span>}
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
                                        value={form.email}
                                        onChange={handleChange}
                                        className="form-input"
                                        style={errors.email ? { borderBottomColor: 'var(--color-accent)' } : {}}
                                    />
                                    {errors.email && <span style={errorStyle}>{errors.email}</span>}
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
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="form-input"
                                        style={{ resize: 'none', ...(errors.message ? { borderBottomColor: 'var(--color-accent)' } : {}) }}
                                    />
                                    {errors.message && <span style={errorStyle}>{errors.message}</span>}
                                </div>
                                <button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={loading}
                                    style={{
                                        padding: '14px 32px',
                                        borderRadius: '9999px',
                                        fontSize: '13px',
                                        letterSpacing: '0.06em',
                                        alignSelf: 'flex-start',
                                        minHeight: '44px',
                                        opacity: loading ? 0.7 : 1,
                                        cursor: loading ? 'not-allowed' : 'pointer',
                                    }}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
