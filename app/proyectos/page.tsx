import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CallToAction from "@/components/call-to-action";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";
import Projects from "@/components/projects";

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-grid opacity-30 z-0"></div>
          <div className="absolute top-0 right-0 w-full h-full max-w-3xl max-h-3xl bg-cyan-500/10 rounded-full blur-3xl z-0"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <Badge
                variant="outline"
                className="mb-4 px-4 py-1.5 text-xs sm:text-sm border-primary/20 bg-primary/5 text-primary hover:bg-primary/10"
              >
                <Rocket className="h-3.5 w-3.5 mr-1.5" />
                NUESTRO TRABAJO
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Transformando ideas
                </span>{" "}
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  en realidades digitales
                </span>
              </h1>

              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                Explora nuestra colección completa de proyectos y descubre cómo
                ayudamos a empresas a alcanzar sus objetivos a través de
                soluciones digitales innovadoras.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <Projects showExploreButton={false} />

        {/* Call to Action */}
        <CallToAction />
      </main>
    </>
  );
}
