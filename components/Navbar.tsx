'use client'

import { useState } from 'react'

const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '28px 48px',
                }}
            >
                {/* Logo */}
                <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} aria-label="ZINLU home">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/zinluweb.svg"
                        alt="ZINLU"
                        style={{ height: '75px', width: 'auto', display: 'block' }}
                    />
                </a>

                {/* Desktop nav */}
                <div
                    className="hidden md:flex"
                    style={{ gap: '2.5rem' }}
                >
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="nav-link">
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="flex md:hidden"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        padding: '4px',
                    }}
                >
                    <span style={{ display: 'block', width: 22, height: 1, background: '#c9c6c1' }} />
                    <span style={{ display: 'block', width: 16, height: 1, background: '#c9c6c1' }} />
                    <span style={{ display: 'block', width: 22, height: 1, background: '#c9c6c1' }} />
                </button>
            </nav>

            {/* Mobile overlay */}
            <div
                className={`mobile-menu-overlay ${menuOpen ? 'visible' : 'hidden'}`}
                style={{ gap: '2rem' }}
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    style={{
                        position: 'absolute',
                        top: 28,
                        right: 48,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#c9c6c1',
                        fontSize: 24,
                        lineHeight: 1,
                    }}
                >
                    ×
                </button>
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        style={{
                            color: '#c9c6c1',
                            textDecoration: 'none',
                            fontSize: '2rem',
                            fontFamily: 'Playfair Display, serif',
                            fontStyle: 'italic',
                            letterSpacing: '0.05em',
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </>
    )
}
