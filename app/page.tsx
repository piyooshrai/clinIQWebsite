import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Testimonial from '@/components/Testimonial'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <Stats />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  )
}
