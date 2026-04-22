import Hero from '@/components/sections/Hero'
import BrandStatement from '@/components/sections/BrandStatement'
import ExpertTeaser from '@/components/sections/ExpertTeaser'
import Collections from '@/components/sections/Collections'
import BrandsStrip from '@/components/sections/BrandsStrip'
import ProcessSteps from '@/components/sections/ProcessSteps'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import Testimonials from '@/components/sections/Testimonials'
import WhyUs from '@/components/sections/WhyUs'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <ExpertTeaser />
      <Collections />
      <BrandsStrip />
      <ProcessSteps />
      <Services />
      <Gallery />
      <Testimonials />
      <WhyUs />
      <ContactSection />
    </>
  )
}
