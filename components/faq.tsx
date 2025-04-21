"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Rocket } from "lucide-react"

export default function Faq() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer:
        "El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page simple puede estar lista en 1-2 semanas, mientras que un sitio web corporativo completo o un e-commerce puede tomar de 4 a 12 semanas. Durante nuestra consulta inicial, te proporcionaremos un cronograma detallado basado en tus requisitos específicos.",
    },
    {
      question: "¿Qué información necesitan para comenzar un proyecto?",
      answer:
        "Para iniciar un proyecto, necesitamos entender tus objetivos de negocio, público objetivo, competidores, preferencias de diseño y cualquier material existente (logo, contenido, etc.). Tenemos un cuestionario detallado que te enviaremos para recopilar esta información, seguido de una reunión de descubrimiento para profundizar en los detalles.",
    },
    {
      question: "¿Ofrecen servicios de mantenimiento después del lanzamiento?",
      answer:
        "Sí, ofrecemos varios planes de mantenimiento para asegurar que tu sitio web permanezca actualizado, seguro y funcionando de manera óptima. Estos planes incluyen actualizaciones regulares, copias de seguridad, monitoreo de seguridad, soporte técnico y pequeñas modificaciones de contenido.",
    },
    {
      question: "¿Cómo miden el éxito de las campañas de marketing?",
      answer:
        "Medimos el éxito a través de KPIs específicos alineados con tus objetivos de negocio. Esto puede incluir tráfico web, tasas de conversión, generación de leads, engagement en redes sociales, ROI de publicidad y más. Proporcionamos informes detallados y transparentes que muestran el rendimiento de tus campañas y las áreas de mejora.",
    },
    {
      question: "¿Trabajan con empresas de cualquier tamaño?",
      answer:
        "Sí, trabajamos con empresas de todos los tamaños, desde startups y pequeñas empresas hasta grandes corporaciones. Adaptamos nuestros servicios y soluciones para satisfacer las necesidades específicas y el presupuesto de cada cliente, asegurando que reciban el máximo valor independientemente de su tamaño.",
    },
  ]

  return (
    <section className="section-spacing bg-card/10 relative">
      <div className="container-width" ref={ref}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary">
            <Rocket className="h-3.5 w-3.5 mr-1.5" />
            PREGUNTAS FRECUENTES
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Resolvemos tus dudas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios y procesos.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
