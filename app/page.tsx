import Navbar from '@/components/Navbar'
import ScrollBackground from '@/components/ScrollBackground'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import CoreConcept from '@/components/CoreConcept'
import Approach from '@/components/Approach'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import TechStack from '@/components/TechStack'
import WhyZinlu from '@/components/WhyZinlu'
import Process from '@/components/Process'
import Vision from '@/components/Vision'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            {/* Fixed scroll-driven gradient background */}
            <ScrollBackground />

            {/* All content sits above the fixed background */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Navbar />
                <main>
                    <Hero />
                    <Problem />
                    <CoreConcept />
                    <Approach />
                    <Services />
                    <Industries />
                    <TechStack />
                    <WhyZinlu />
                    <Process />
                    <Vision />
                    <CTA />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    )
}
