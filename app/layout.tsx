import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    style: ['normal', 'italic'],
    variable: '--font-playfair',
    display: 'swap',
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'ZINLU — Business Optimization Company',
    description:
        'You Built the Business. We Build What Runs It.',
    keywords: 'business optimization, operational systems, business operating system, SMB operations, revenue systems, operational infrastructure',
    alternates: {
        canonical: 'https://www.zinlu.in',
    },
    icons: {
        icon: '/favicon-logo.jpg',
        shortcut: '/favicon-logo.jpg',
        apple: '/favicon-logo.jpg',
    },
    openGraph: {
        title: 'ZINLU — Business Optimization Company',
        description:
            'You Built the Business. We Build What Runs It.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary',
        title: 'ZINLU — Business Optimization Company',
        description:
            'You Built the Business. We Build What Runs It.',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "ZINLU",
                            "url": "https://www.zinlu.in",
                            "logo": "https://www.zinlu.in/zinluweb.svg",
                            "description": "ZINLU is a Business Optimization Company that builds and manages the systems that run a business — so it runs without the owner running behind it.",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+91-84386-30519",
                                "contactType": "Sales",
                                "areaServed": "IN",
                                "availableLanguage": "English"
                            },
                            "sameAs": [
                                "https://www.linkedin.com/company/zinluoptimization/",
                                "https://www.instagram.com/zinlu.optimization"
                            ]
                        })
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    )
}
