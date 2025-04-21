"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Code, Paintbrush, BarChart, Zap, Sparkles, LineChart, Globe, Smartphone } from "lucide-react"

export default function ServiceDetails() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      id: "marketing",
      title: "Marketing Digital",
      description:
        "Estrategias personalizadas para aumentar tu presencia online y conectar con tu audiencia de forma efectiva.",
      icon: <Rocket className="h-10 w-10" />,
      color: "primary",
      features: [
        {
          title: "Social Media Management",
          description: "Gestión completa de tus redes sociales con contenido optimizado para cada plataforma.",
          icon: <Globe className="h-5 w-5" />,
        },
        {
          title: "Estrategia de contenido",
          description: "Desarrollo de planes editoriales y creación de contenido relevante para tu audiencia.",
          icon: <Sparkles className="h-5 w-5" />,
        },
        {
          title: "Campañas publicitarias",
          description: "Anuncios optimizados en Google, Facebook, Instagram y otras plataformas.",
          icon: <BarChart className="h-5 w-5" />,
        },
        {
          title: "SEO y SEM",
          description: "Optimización para motores de búsqueda y gestión de campañas de pago por clic.",
          icon: <LineChart className="h-5 w-5" />,
        },
        {
          title: "Análisis y reportes",
          description: "Informes detallados de rendimiento y recomendaciones para mejorar resultados.",
          icon: <Zap className="h-5 w-5" />,
        },
      ],
    },
    {
      id: "web",
      title: "Desarrollo Web",
      description:
        "Sitios web y aplicaciones a medida con tecnologías modernas enfocadas en la experiencia de usuario.",
      icon: <Code className="h-10 w-10" />,
      color: "purple",
      features: [
        {
          title: "Diseño responsive",
          description: "Sitios web adaptados a todos los dispositivos y tamaños de pantalla.",
          icon: <Smartphone className="h-5 w-5" />,
        },
        {
          title: "Optimización de rendimiento",
          description: "Velocidad de carga optimizada y experiencia de usuario fluida.",
          icon: <Zap className="h-5 w-5" />,
        },
        {
          title: "E-commerce",
          description: "Tiendas online con pasarelas de pago y gestión de inventario.",
          icon: <Globe className="h-5 w-5" />,
        },
        {
          title: "Desarrollo frontend y backend",
          description: "Soluciones completas con las últimas tecnologías y frameworks.",
          icon: <Code className="h-5 w-5" />,
        },
        {
          title: "Mantenimiento y soporte",
          description: "Actualizaciones regulares y soporte técnico para tu sitio web.",
          icon: <Sparkles className="h-5 w-5" />,
        },
      ],
    },
    {
      id: "branding",
      title: "Branding & Diseño",
      description: "Identidad visual impactante que refleja los valores de tu marca y conecta con tus clientes.",
      icon: <Paintbrush className="h-10 w-10" />,
      color: "pink",
      features: [
        {
          title: "Diseño de logo",
          description: "Creación de logotipos únicos y memorables que representan tu marca.",
          icon: <Sparkles className="h-5 w-5" />,
        },
        {
          title: "Identidad corporativa",
          description: "Desarrollo de sistemas visuales completos para tu empresa.",
          icon: <Paintbrush className="h-5 w-5" />,
        },
        {
          title: "Material impreso",
          description: "Diseño de tarjetas, folletos, catálogos y otros materiales impresos.",
          icon: <BarChart className="h-5 w-5" />,
        },
        {
          title: "Diseño UX/UI",
          description: "Interfaces intuitivas y atractivas para web y aplicaciones.",
          icon: <Smartphone className="h-5 w-5" />,
        },
        {
          title: "Sistemas de diseño",
          description: "Creación de componentes reutilizables y guías de estilo.",
          icon: <Code className="h-5 w-5" />,
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
    <section id="servicios-detalle" className="section-spacing bg-card/10 relative">
      <div className="container-width" ref={ref}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary">
            <Rocket className="h-3.5 w-3.5 mr-1.5" />
            NUESTROS SERVICIOS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Soluciones digitales integrales</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Impulsamos tu negocio en el mundo digital con estrategias personalizadas y un enfoque centrado en
            resultados.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              <div className={`space-y-6 ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-${service.color}/10 text-${service.color}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, j) => (
                    <motion.li
                      key={j}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: j * 0.1 }}
                    >
                      <div className={`mt-1 mr-3 p-1 rounded-full bg-${service.color}/10 text-${service.color}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <div className="font-medium">{feature.title}</div>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className={i % 2 === 1 ? "md:col-start-1" : ""}>
                <Card
                  className={`border-${service.color}/20 hover:border-${service.color}/50 transition-colors duration-300`}
                >
                  <CardHeader>
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${service.color}/10 text-${service.color} mb-4`}
                    >
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-secondary rounded-md relative overflow-hidden">
                      <div className={`absolute inset-0 bg-${service.color}/5 flex items-center justify-center`}>
                        {service.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
