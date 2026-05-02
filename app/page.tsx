import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ConceptSection from '@/components/ConceptSection'
import RegionsSection from '@/components/RegionsSection'
import HousesSection from '@/components/HousesSection'
import PhilosophySection from '@/components/PhilosophySection'
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
        <HousesSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
