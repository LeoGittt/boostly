
import Hero from "@/components/hero"
import Features from "@/components/features"
import Process from "@/components/process"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Contact from "@/components/contact"

import CallToAction from "@/components/call-to-action"
import Clients from "@/components/clients"
import Faq from "@/components/faq"

export default function Home() {
  return (
    <>
      
      <main>
        <Hero />
        <Clients />
        <Features />
        <Process />
        <Projects />
        <Testimonials />
        <Blog />
        <Faq />
        <CallToAction />
        <Contact />
      </main>
      
    </>
  )
}
