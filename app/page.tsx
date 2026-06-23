import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ConceptSection from '@/components/ConceptSection'
import RegionsSection from '@/components/RegionsSection'
import TracksSection from '@/components/TracksSection'
import PhilosophySection from '@/components/PhilosophySection'
import FractionalCalculator from '@/components/FractionalCalculator'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ConceptSection />
        <RegionsSection />
        <TracksSection />
        <PhilosophySection />
        <FractionalCalculator />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
