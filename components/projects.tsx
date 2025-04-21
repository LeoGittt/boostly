"use client"

import { useRef, useState } from "react"
import { useInView, motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Rocket } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeProject, setActiveProject] = useState(null)

  const categories = [
    { id: "all", label: "Todos" },
    { id: "web", label: "Sitios Web" },
    { id: "branding", label: "Branding" },
    { id: "marketing", label: "Marketing" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce de moda",
      description: "Tienda online con integración de pasarela de pagos y gestión de inventario.",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Shopify", "UX/UI"],
      fullDescription:
        "Desarrollamos una tienda online completa para una marca de moda emergente, con un diseño minimalista y elegante que refleja la identidad de la marca. Implementamos integración con Shopify para la gestión de inventario y procesamiento de pagos, optimizando la experiencia de compra para aumentar las conversiones.",
      results: [
        "Incremento del 70% en ventas online",
        "Reducción del 40% en abandonos de carrito",
        "Aumento del 50% en ticket promedio",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: 2,
      title: "Identidad corporativa",
      description: "Rediseño de marca para empresa de tecnología con presencia internacional.",
      category: "branding",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Logo", "Papelería", "Guía de estilo"],
      fullDescription:
        "Realizamos un rediseño completo de la identidad corporativa para una empresa de tecnología en expansión internacional. El proyecto incluyó la creación de un nuevo logotipo, sistema de colores, tipografía, papelería corporativa y guía de estilo para asegurar la consistencia de la marca en todos los puntos de contacto.",
      results: [
        "Reconocimiento de marca mejorado en un 60%",
        "Coherencia visual en todos los canales",
        "Feedback positivo de inversores y clientes",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: 3,
      title: "Campaña digital",
      description: "Estrategia de marketing para lanzamiento de producto con 300% ROI.",
      category: "marketing",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["SEM", "Social Ads", "Email"],
      fullDescription:
        "Diseñamos e implementamos una estrategia de marketing digital integral para el lanzamiento de un nuevo producto. La campaña incluyó anuncios en Google Ads, campañas en redes sociales, email marketing y colaboraciones con influencers, todo optimizado para maximizar el retorno de inversión.",
      results: ["300% de retorno sobre la inversión", "Más de 500,000 impresiones", "15,000 nuevos leads generados"],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: 4,
      title: "Aplicación móvil",
      description: "App de delivery con más de 10,000 descargas en el primer mes.",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "UI/UX", "Backend"],
      fullDescription:
        "Desarrollamos una aplicación móvil para un servicio de delivery local, con funcionalidades de seguimiento en tiempo real, sistema de pagos integrado y programa de fidelización. La interfaz intuitiva y el rendimiento optimizado resultaron en una excelente adopción por parte de los usuarios.",
      results: ["10,000+ descargas en el primer mes", "4.8/5 valoración en App Store", "85% de retención de usuarios"],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: 5,
      title: "Portal inmobiliario",
      description: "Plataforma para gestión y búsqueda de propiedades en tiempo real.",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "APIs", "Mapas"],
      fullDescription:
        "Creamos un portal inmobiliario con funcionalidades avanzadas de búsqueda, filtrado y visualización de propiedades en mapas interactivos. La plataforma incluye un panel de administración para agentes inmobiliarios y un sistema de notificaciones para alertar a los usuarios sobre nuevas propiedades que coinciden con sus criterios de búsqueda.",
      results: [
        "Incremento del 120% en consultas",
        "Reducción del 40% en tiempo de búsqueda",
        "Aumento del 65% en conversiones",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: 6,
      title: "Estrategia de redes",
      description: "Gestión de contenido para marca con aumento de 200% en engagement.",
      category: "marketing",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Instagram", "TikTok", "Contenido"],
      fullDescription:
        "Desarrollamos e implementamos una estrategia de contenido para redes sociales que transformó la presencia digital de la marca. Creamos un calendario editorial, directrices de estilo visual y tono de comunicación, y gestionamos la creación y publicación de contenido optimizado para cada plataforma.",
      results: [
        "Aumento del 200% en engagement",
        "Crecimiento de 150% en seguidores",
        "15 colaboraciones con influencers",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
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
    <section id="proyectos" className="section-spacing bg-card/10 relative">
      <div className="container-width" ref={ref}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary">
            <Rocket className="h-3.5 w-3.5 mr-1.5" />
            PROYECTOS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Nuestro trabajo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora algunos de nuestros proyectos más destacados y descubre cómo ayudamos a nuestros clientes a alcanzar
            sus objetivos digitales.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-secondary">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="data-[state=active]:text-primary">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects
                  .filter((project) => category.id === "all" || project.category === category.id)
                  .map((project) => (
                    <motion.div key={project.id} variants={itemVariants}>
                      <Card className="overflow-hidden border-border hover-lift group perspective">
                        <div className="aspect-[4/3] bg-secondary relative">
                          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="24" height="24" fill="none" />
                              <path
                                d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5M4.5 14.5V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H9.5M19.5 9.5V5.5C19.5 4.94772 19.0523 4.5 18.5 4.5H14.5M19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-white/20 text-white hover:bg-white/20 hover:text-white"
                                  onClick={() => setActiveProject(project)}
                                >
                                  Ver detalles
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-4xl">
                                <DialogHeader>
                                  <DialogTitle>{project.title}</DialogTitle>
                                  <DialogDescription>{project.description}</DialogDescription>
                                </DialogHeader>

                                <Carousel className="w-full">
                                  <CarouselContent>
                                    {project.gallery.map((image, idx) => (
                                      <CarouselItem key={idx}>
                                        <div className="aspect-video bg-secondary rounded-md relative">
                                          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                            <svg
                                              width="64"
                                              height="64"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <rect width="24" height="24" fill="none" />
                                              <path
                                                d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5M4.5 14.5V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H9.5M19.5 9.5V5.5C19.5 4.94772 19.0523 4.5 18.5 4.5H14.5M19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              />
                                            </svg>
                                          </div>
                                        </div>
                                      </CarouselItem>
                                    ))}
                                  </CarouselContent>
                                  <CarouselPrevious />
                                  <CarouselNext />
                                </Carousel>

                                <div className="grid md:grid-cols-2 gap-6 mt-4">
                                  <div>
                                    <h3 className="text-lg font-medium mb-2">Descripción</h3>
                                    <p className="text-muted-foreground text-sm">{project.fullDescription}</p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                      {project.tags.map((tag, i) => (
                                        <span
                                          key={i}
                                          className="px-2 py-1 bg-secondary text-xs rounded-md text-muted-foreground"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <h3 className="text-lg font-medium mb-2">Resultados</h3>
                                    <ul className="space-y-2">
                                      {project.results.map((result, i) => (
                                        <li key={i} className="flex items-start">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 text-primary shrink-0 mt-1"
                                          >
                                            <path
                                              d="M20 6L9 17L4 12"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                          <span className="text-sm">{result}</span>
                                        </li>
                                      ))}
                                    </ul>

                                    <Button className="mt-6 w-full" variant="outline">
                                      Ver caso completo
                                      <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between items-center">
                          <div className="flex gap-2">
                            {project.tags.slice(0, 2).map((tag, i) => (
                              <span key={i} className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md">
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 2 && (
                              <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md">
                                +{project.tags.length - 2}
                              </span>
                            )}
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group" asChild>
            <Link href="/proyectos">
              Ver todos los proyectos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
