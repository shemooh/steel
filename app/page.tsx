import Hero from '@/components/Hero'        // @/ = root/components/
import Features from '@/components/Features'
import Process from '@/components/Process'
import Capabilities from '@/components/Capabilities'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero /><Features /><Process /><Capabilities /><Stats /><Testimonials /><Footer />
    </main>
  )
}
