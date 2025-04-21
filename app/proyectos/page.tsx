import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectsHero from "@/components/projects-hero"
import ProjectsGrid from "@/components/projects-grid"
import ProjectsFilter from "@/components/projects-filter"
import CallToAction from "@/components/call-to-action"

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero />
        <ProjectsFilter />
        <ProjectsGrid />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
