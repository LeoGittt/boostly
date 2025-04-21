"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Rocket,
  Code,
  Paintbrush,
  BarChart,
  Zap,
  Sparkles,
  LineChart,
  Globe,
  Smartphone,
} from "lucide-react"
import Link from "next/link"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      id: "marketing",
      title: "Marketing Digital",
      description:
        "Estrategias personalizadas para aumentar tu presencia online y conectar con tu audiencia de forma efectiva.",
      icon: <Rocket className="h-6 w-6" />,
      color: "primary",
      items: [
        {
          name: "Social Media Management",
          included: true,
          icon: <Globe className="h-4 w-4" />,
          description: "Gestión completa de tus redes sociales con contenido optimizado para cada plataforma.",
        },
        {
          name: "Estrategia de contenido",
          included: true,
          icon: <Sparkles className="h-4 w-4" />,
          description: "Desarrollo de planes editoriales y creación de contenido relevante para tu audiencia.",
        },
        {
          name: "Campañas publicitarias",
          included: true,
          icon: <BarChart className="h-4 w-4" />,
          description: "Anuncios optimizados en Google, Facebook, Instagram y otras plataformas.",
        },
        {
          name: "SEO y SEM",
          included: true,
          icon: <LineChart className="h-4 w-4" />,
          description: "Optimización para motores de búsqueda y gestión de campañas de pago por clic.",
        },
        {
          name: "Análisis y reportes",
          included: true,
          icon: <Zap className="h-4 w-4" />,
          description: "Informes detallados de rendimiento y recomendaciones para mejorar resultados.",
        },
      ],
    },
    {
      id: "web",
      title: "Desarrollo Web",
      description:
        "Sitios web y aplicaciones a medida con tecnologías modernas enfocadas en la experiencia de usuario.",
      icon: <Code className="h-6 w-6" />,
      color: "purple",
      items: [
        {
          name: "Diseño responsive",
          included: true,
          icon: <Smartphone className="h-4 w-4" />,
          description: "Sitios web adaptados a todos los dispositivos y tamaños de pantalla.",
        },
        {
          name: "Optimización de rendimiento",
          included: true,
          icon: <Zap className="h-4 w-4" />,
          description: "Velocidad de carga optimizada y experiencia de usuario fluida.",
        },
        {
          name: "E-commerce",
          included: true,
          icon: <Globe className="h-4 w-4" />,
          description: "Tiendas online con pasarelas de pago y gestión de inventario.",
        },
        {
          name: "Desarrollo frontend y backend",
          included: true,
          icon: <Code className="h-4 w-4" />,
          description: "Soluciones completas con las últimas tecnologías y frameworks.",
        },
        {
          name: "Mantenimiento y soporte",
          included: true,
          icon: <Sparkles className="h-4 w-4" />,
          description: "Actualizaciones regulares y soporte técnico para tu sitio web.",
        },
      ],
    },
    {
      id: "branding",
      title: "Branding & Diseño",
      description: "Identidad visual impactante que refleja los valores de tu marca y conecta con tus clientes.",
      icon: <Paintbrush className="h-6 w-6" />,
      color: "pink",
      items: [
        {
          name: "Diseño de logo",
          included: true,
          icon: <Sparkles className="h-4 w-4" />,
          description: "Creación de logotipos únicos y memorables que representan tu marca.",
        },
        {
          name: "Identidad corporativa",
          included: true,
          icon: <Paintbrush className="h-4 w-4" />,
          description: "Desarrollo de sistemas visuales completos para tu empresa.",
        },
        {
          name: "Material impreso",
          included: true,
          icon: <BarChart className="h-4 w-4" />,
          description: "Diseño de tarjetas, folletos, catálogos y otros materiales impresos.",
        },
        {
          name: "Diseño UX/UI",
          included: true,
          icon: <Smartphone className="h-4 w-4" />,
          description: "Interfaces intuitivas y atractivas para web y aplicaciones.",
        },
        {
          name: "Sistemas de diseño",
          included: true,
          icon: <Code className="h-4 w-4" />,
          description: "Creación de componentes reutilizables y guías de estilo.",
        },
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
    <section id="servicios" className="section-spacing bg-card/10 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container-width" ref={ref}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary">
            <Rocket className="h-3.5 w-3.5 mr-1.5" />
            SERVICIOS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Soluciones digitales integrales</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Impulsamos tu negocio en el mundo digital con estrategias personalizadas y un enfoque centrado en
            resultados.
          </p>
        </div>

        <Tabs defaultValue="marketing" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-secondary">
              {features.map((feature) => (
                <TabsTrigger key={feature.id} value={feature.id} className="data-[state=active]:text-primary">
                  <span className="flex items-center gap-2">
                    {feature.icon && <span className="hidden md:inline-flex">{feature.icon}</span>}
                    {feature.title}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-${feature.color}/10 text-${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <ul className="space-y-4">
                    {feature.items.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <div className={`mt-1 mr-3 p-1 rounded-full bg-${feature.color}/10 text-${feature.color}`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  <Button className="group" asChild>
                    <Link href={`/servicios/${feature.id}`}>
                      Ver detalles
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="bg-card border border-border rounded-lg p-6 shadow-sm"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div key={i} variants={itemVariants}>
                        <Card className="border-border hover-lift focus-transition">
                          <CardHeader className="pb-2">
                            <div
                              className={`h-10 w-10 rounded bg-${feature.color}/10 flex items-center justify-center mb-2`}
                            >
                              <Sparkles className={`h-5 w-5 text-${feature.color}`} />
                            </div>
                            <CardTitle className="text-sm">Característica {i + 1}</CardTitle>
                          </CardHeader>
                          <CardContent className="pb-4">
                            <CardDescription>Descripción breve de esta funcionalidad específica.</CardDescription>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
