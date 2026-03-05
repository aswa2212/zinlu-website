'use client'

import { useEffect, useRef } from 'react'

export default function ScrollBackground() {
    const bgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!bgRef.current) return
            const scrollY = window.scrollY
            const maxScroll = document.body.scrollHeight - window.innerHeight
            const progress = Math.max(0, Math.min(1, scrollY / maxScroll))

            // Peaks at ~0.6 scroll progress (0.22 opacity), fades to 0.08 by end
            let opacity: number
            if (progress <= 0.6) {
                opacity = progress / 0.6 * 0.22
            } else {
                opacity = 0.22 - ((progress - 0.6) / 0.4) * 0.14
            }
            opacity = Math.max(0, opacity)

            bgRef.current.style.opacity = String(opacity)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            ref={bgRef}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0,
                background:
                    'radial-gradient(ellipse at 60% 80%, rgba(238,130,108,0.9) 0%, rgba(238,130,108,0.4) 30%, transparent 70%)',
                transition: 'opacity 200ms ease-out',
            }}
            aria-hidden="true"
        />
    )
}
