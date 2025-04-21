"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef, JSX } from "react"
import { Button } from "@/components/ui/button"
import { Rocket, Code, Paintbrush, BarChart, Server, Smartphone, Globe, Shield, Zap, Sparkles, Check, ArrowRight, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface Service {
  id: number
  title: string
  icon: JSX.Element
  category: string
  description: string
  features: string[]
  price: string
  time: string
  highlight: boolean
  coverImage: string
}

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Desarrollo Web Premium",
    icon: <Code className="h-6 w-6" />,
    category: "Tecnología",
    description: "Sitios web a medida con tecnología de última generación para máxima performance.",
    features: [
      "Diseño 100% responsive",
      "Optimización SEO integrada",
      "Integración con APIs",
      "Backend personalizado",
      "Deploy automatizado"
    ],
    price: "Desde $2,500",
    time: "4-6 semanas",
    highlight: true,
    coverImage: "/images/services/web-dev.jpg"
  },
  {
    id: 2,
    title: "Diseño UX/UI Profesional",
    icon: <Paintbrush className="h-6 w-6" />,
    category: "Diseño",
    description: "Interfaces intuitivas que mejoran la experiencia de usuario y aumentan conversiones.",
    features: [
      "Research de usuarios",
      "Prototipado interactivo",
      "Sistema de diseño completo",
      "Pruebas de usabilidad",
      "Guías de estilo"
    ],
    price: "Desde $1,800",
    time: "3-5 semanas",
    highlight: false,
    coverImage: "/images/services/ux-design.jpg"
  },
  {
    id: 3,
    title: "Marketing Digital Avanzado",
    icon: <BarChart className="h-6 w-6" />,
    category: "Marketing",
    description: "Estrategias data-driven para maximizar tu ROI en canales digitales.",
    features: [
      "Análisis de mercado",
      "Campañas performance",
      "Automatización de marketing",
      "Growth hacking",
      "Reportes detallados"
    ],
    price: "Desde $1,200/mes",
    time: "Continuo",
    highlight: true,
    coverImage: "/images/services/digital-marketing.jpg"
  },
  {
    id: 4,
    title: "Aplicaciones Móviles",
    icon: <Smartphone className="h-6 w-6" />,
    category: "Tecnología",
    description: "Apps nativas e híbridas para iOS y Android con excelente rendimiento.",
    features: [
      "Desarrollo nativo/híbrido",
      "Pruebas exhaustivas",
      "Publicación en stores",
      "Actualizaciones continuas",
      "Soporte 24/7"
    ],
    price: "Desde $3,500",
    time: "6-8 semanas",
    highlight: false,
    coverImage: "/images/services/mobile-app.jpg"
  },
  {
    id: 5,
    title: "Infraestructura Cloud",
    icon: <Server className="h-6 w-6" />,
    category: "Tecnología",
    description: "Soluciones escalables y seguras en la nube para tu negocio.",
    features: [
      "Arquitectura cloud",
      "Escalabilidad automática",
      "Backup automatizados",
      "Monitoreo 24/7",
      "Certificaciones de seguridad"
    ],
    price: "Desde $900/mes",
    time: "Implementación en 2 semanas",
    highlight: false,
    coverImage: "/images/services/cloud.jpg"
  },
  {
    id: 6,
    title: "Branding Corporativo",
    icon: <Globe className="h-6 w-6" />,
    category: "Diseño",
    description: "Identidad de marca completa que comunica tu valor único.",
    features: [
      "Estrategia de marca",
      "Diseño de logotipo",
      "Sistema visual completo",
      "Guía de marca",
      "Assets digitales/físicos"
    ],
    price: "Desde $3,000",
    time: "4-8 semanas",
    highlight: true,
    coverImage: "/images/services/branding.jpg"
  }
]

const CATEGORIES = [
  { value: "all", label: "Todos", icon: <Sparkles className="h-4 w-4" /> },
  { value: "technology", label: "Tecnología", icon: <Code className="h-4 w-4" /> },
  { value: "design", label: "Diseño", icon: <Paintbrush className="h-4 w-4" /> },
  { value: "marketing", label: "Marketing", icon: <BarChart className="h-4 w-4" /> }
]

const TESTIMONIALS = [
  {
    name: "Carlos Mendoza",
    role: "CEO, TechSolutions",
    avatar: "/images/avatars/1.jpg",
    content: "Increíble trabajo en nuestro e-commerce. Las conversiones aumentaron un 240% después del rediseño UX.",
    rating: 5
  },
  {
    name: "Ana Lucía Fernández",
    role: "CMO, BrandHouse",
    avatar: "/images/avatars/2.jpg",
    content: "Su estrategia de marketing digital nos ayudó a triplicar nuestro ROI en solo 3 meses. ¡Altamente recomendados!",
    rating: 5
  },
  {
    name: "Javier Rodríguez",
    role: "CTO, StartupX",
    avatar: "/images/avatars/3.jpg",
    content: "La aplicación que desarrollaron superó todas nuestras expectativas. El código es limpio y bien documentado.",
    rating: 4
  }
]

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2])
  
  const filteredServices = activeCategory === "all" 
    ? SERVICES 
    : SERVICES.filter(service => 
        service.category.toLowerCase() === activeCategory.toLowerCase()
      )

  const words = [
    { text: "Soluciones" },
    { text: "digitales", className: "text-primary" },
    { text: "a" },
    { text: "medida", className: "text-primary" },
    { text: "🚀" }
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <motion.section 
        ref={containerRef}
        style={{ opacity }}
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-background to-background/95"
      >
        <div className="container-width">
          {/* Hero Header */}
          <motion.div 
            style={{ y }}
            className="max-w-4xl mx-auto text-center mb-16 px-4"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary hover:bg-primary/10">
                <Rocket className="h-3.5 w-3.5 mr-1.5" />
                Transformamos ideas en realidad digital
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <TypewriterEffect 
                words={words} 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" 
                cursorClassName="h-10 bg-primary/80"
              />
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Servicios de alta gama diseñados para impulsar tu presencia digital al siguiente nivel con tecnología de vanguardia y diseño excepcional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <Button asChild variant="default" className="rounded-full px-6 h-11 group shadow-lg shadow-primary/20 hover:shadow-primary/30">
                <a href="#services">
                  Nuestros servicios
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" className="rounded-full px-6 h-11 group border-border/50 hover:border-primary/30">
                <a href="#contact">
                  Contacto directo
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Services Section */}
          <section id="services" className="mb-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Nuestros Servicios Premium
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  Soluciones especializadas diseñadas para negocios exigentes que buscan excelencia digital.
                </p>
              </div>
              
              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4 h-12">
                  {CATEGORIES.map((category) => (
                    <TabsTrigger 
                      key={category.value}
                      value={category.value}
                      className="flex items-center gap-2"
                      onClick={() => setActiveCategory(category.value)}
                    >
                      {category.icon}
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className={cn(
                    "h-full flex flex-col border-border/50 overflow-hidden transition-all",
                    service.highlight ? "border-primary/30 shadow-lg shadow-primary/10" : "shadow-sm hover:shadow-md"
                  )}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.coverImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge variant="secondary" className="absolute top-4 left-4">
                        {service.category}
                      </Badge>
                      {service.highlight && (
                        <Badge className="absolute top-4 right-4 bg-primary/90 hover:bg-primary">
                          <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                          Popular
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                      <div className="flex justify-between w-full text-sm">
                        <span className="text-muted-foreground">{service.time}</span>
                        <span className="font-medium">{service.price}</span>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant={service.highlight ? "default" : "outline"} 
                            className="w-full group"
                            onClick={() => setSelectedService(service)}
                          >
                            Detalles del servicio
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 overflow-hidden">
                          {selectedService && (
                            <div className="grid md:grid-cols-2">
                              <div className="relative h-full min-h-[400px]">
                                <img
                                  src={selectedService.coverImage}
                                  alt={selectedService.title}
                                  className="w-full h-full object-cover absolute inset-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                                  <Badge variant="secondary" className="mb-4 w-fit">
                                    {selectedService.category}
                                  </Badge>
                                  <h3 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h3>
                                  <p className="text-white/80 mb-6">{selectedService.description}</p>
                                  <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2 text-white/80">
                                      <Clock className="h-4 w-4" />
                                      <span className="text-sm">{selectedService.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/80">
                                      <span className="text-sm font-medium">{selectedService.price}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="p-8">
                                <h4 className="text-lg font-semibold mb-4">Características principales</h4>
                                <ul className="space-y-3 mb-8">
                                  {selectedService.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                      <div className="p-1 rounded-full bg-primary/10 text-primary mt-0.5">
                                        <Check className="h-3 w-3" />
                                      </div>
                                      <span className="text-sm">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                                <Separator className="my-6" />
                                <h4 className="text-lg font-semibold mb-4">Proceso de trabajo</h4>
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                  {[
                                    { step: "1", title: "Consulta", desc: "Reunión inicial" },
                                    { step: "2", title: "Propuesta", desc: "Plan detallado" },
                                    { step: "3", title: "Desarrollo", desc: "Implementación" },
                                    { step: "4", title: "Revisión", desc: "Feedback" },
                                    { step: "5", title: "Entrega", desc: "Producto final" },
                                    { step: "6", title: "Soporte", desc: "Post-venta" }
                                  ].map((item) => (
                                    <div key={item.step} className="flex flex-col items-center text-center">
                                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2 font-medium">
                                        {item.step}
                                      </div>
                                      <div className="text-sm font-medium">{item.title}</div>
                                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                                    </div>
                                  ))}
                                </div>
                                <Button className="w-full" size="lg">
                                  Contratar este servicio
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </motion.section>
    </div>
  )
}

interface StarIconProps extends React.SVGProps<SVGSVGElement> {}

function StarIcon(props: StarIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}