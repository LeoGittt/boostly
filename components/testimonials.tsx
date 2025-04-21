"use client"

import { useRef, useState } from "react"
import { useInView, motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Rocket, Star } from "lucide-react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeSlide, setActiveSlide] = useState(0)

  const testimonials = [
    {
      quote:
        "Boostly transformó nuestra presencia digital por completo. Nuestro tráfico web aumentó un 200% en solo tres meses.",
      author: "María González",
      position: "CEO, Innovatech",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "El equipo de Boostly entendió perfectamente nuestra visión y la plasmó en una estrategia digital que superó nuestras expectativas.",
      author: "Carlos Rodríguez",
      position: "Marketing Director, TechSolutions",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Profesionales, creativos y orientados a resultados. La mejor inversión que hemos hecho para nuestro negocio.",
      author: "Laura Martínez",
      position: "Founder, StyleStore",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Boostly ha sido un socio clave en nuestro crecimiento. Su enfoque en resultados medibles y su creatividad han sido fundamentales.",
      author: "Roberto Sánchez",
      position: "COO, DigitalGrowth",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="testimonios" className="section-spacing relative">
      <div className="container-width" ref={ref}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary">
            <Rocket className="h-3.5 w-3.5 mr-1.5" />
            TESTIMONIOS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nos enorgullece el impacto positivo que generamos en nuestros clientes y sus negocios.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
            onSelect={(index) => setActiveSlide(index)}
          >
            <CarouselContent>
              {testimonials.map((testimonial, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="border-border h-full flex flex-col">
                      <CardHeader>
                        <div className="mb-2 flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 text-primary fill-primary" />
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardFooter className="flex items-center">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                          <div className="absolute inset-0 bg-secondary"></div>
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static lg:absolute translate-y-0 left-0 mr-2" />
              <div className="flex justify-center gap-1 mt-2">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSlide === i ? "w-6 bg-primary" : "w-2 bg-muted"
                    }`}
                  ></div>
                ))}
              </div>
              <CarouselNext className="relative static lg:absolute translate-y-0 right-0 ml-2" />
            </div>
          </Carousel>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { value: "95%", label: "Clientes satisfechos" },
            { value: "250+", label: "Proyectos completados" },
            { value: "15+", label: "Premios recibidos" },
            { value: "20+", label: "Profesionales" },
          ].map((stat, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="border-border bg-card/50 text-center">
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{stat.label}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
