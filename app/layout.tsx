import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'ZINLU — AI Automation Agency | Business Optimization Through AI Systems',
    description:
        'ZINLU helps small and mid-sized businesses streamline operations, eliminate repetitive work, and make better decisions using AI-driven systems and automation.',
    keywords: 'AI automation, business optimization, workflow automation, AI systems, operational efficiency',
    icons: {
        icon: '/favicon-logo.jpg',
        shortcut: '/favicon-logo.jpg',
        apple: '/favicon-logo.jpg',
    },
    openGraph: {
        title: 'ZINLU — AI Automation Agency',
        description:
            'We help small and mid-sized businesses streamline operations, eliminate repetitive work, and make better decisions using AI-driven systems and automation.',
        type: 'website',
        locale: 'en_US',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body>{children}</body>
        </html>
    )
}
