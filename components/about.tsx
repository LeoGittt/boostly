"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const achievements = [
    { value: "+3", label: "años de experiencia" },
    { value: "+50", label: "clientes satisfechos" },
    { value: "+200", label: "proyectos entregados" },
    { value: "24/7", label: "soporte técnico" },
  ]

  return (
    <section id="nosotros" className="section-spacing relative">
      <div className="container-width" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary font-medium mb-2 text-sm">NOSOTROS</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Impulsamos tu presencia digital</h2>
            <p className="text-muted-foreground mb-6">
              Somos un equipo de expertos en marketing digital, diseño y desarrollo web comprometidos con el éxito de tu
              negocio.
            </p>
            <p className="text-muted-foreground mb-8">
              Nuestro enfoque estratégico y metódico nos permite crear soluciones digitales que no solo se ven
              increíbles, sino que también generan resultados tangibles para tu empresa.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              {achievements.map((item, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-primary mb-1">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <Button className="group" size="lg">
              Conoce al equipo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-xl overflow-hidden">
              <div className="bg-secondary absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-4 w-full max-w-md">
                  <div className="space-y-4">
                    <div className="aspect-square rounded-lg bg-muted"></div>
                    <div className="aspect-video rounded-lg bg-muted/50"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="aspect-video rounded-lg bg-muted/50"></div>
                    <div className="aspect-square rounded-lg bg-muted"></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
