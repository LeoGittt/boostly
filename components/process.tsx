"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, FileText, Paintbrush, Rocket, BarChart } from "lucide-react"
import Link from "next/link"

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      number: "01",
      title: "Descubrimiento",
      description: "Analizamos tu negocio, objetivos y competencia para entender tus necesidades específicas.",
      icon: <Search className="h-5 w-5" />,
      color: "bg-primary/10 text-primary"
    },
    {
      number: "02",
      title: "Estrategia",
      description: "Desarrollamos un plan personalizado que se alinea con tus objetivos de negocio y presupuesto.",
      icon: <FileText className="h-5 w-5" />,
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      number: "03",
      title: "Diseño",
      description: "Creamos soluciones visuales que representan tu marca y conectan con tu audiencia.",
      icon: <Paintbrush className="h-5 w-5" />,
      color: "bg-pink-500/10 text-pink-500"
    },
    {
      number: "04",
      title: "Desarrollo",
      description: "Implementamos tu proyecto con código limpio y tecnologías modernas.",
      icon: <Rocket className="h-5 w-5" />,
      color: "bg-primary/10 text-primary"
    },
    {
      number: "05",
      title: "Optimización",
      description: "Monitoreamos y mejoramos continuamente para maximizar resultados.",
      icon: <BarChart className="h-5 w-5" />,
      color: "bg-purple-500/10 text-purple-500"
    }
  ]

  return (
    <section id="proceso" className="py-20 md:py-28 relative">
      <div className="container-width" ref={ref}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 bg-primary/5 text-primary">
            <Rocket className="h-3.5 w-3.5 mr-1.5" />
            NUESTRO PROCESO
          </Badge>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Metodología clara y efectiva</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un enfoque estructurado para garantizar excelencia en cada proyecto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${step.color} flex items-center justify-center`}>
                  <span className="font-medium">{step.number}</span>
                </div>

                <div className="flex-1">
                  <div className={`w-full h-px ${step.color.replace('bg-', 'bg-opacity-20 ')} my-6`}></div>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" className="group" asChild>
            <Link href="/proceso">
              Conocer más detalles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}