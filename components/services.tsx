"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Rocket, Code, BarChart3, Paintbrush, ArrowRight, Check, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeService, setActiveService] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9], [0, 1, 1])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const services = [
    {
      id: "marketing",
      icon: <Rocket className="h-8 w-8" />,
      title: "Marketing Digital & Redes Sociales",
      description:
        "Estrategias personalizadas para aumentar tu presencia en redes sociales y conectar con tu audiencia.",
      color: "purple",
      features: [
        "Gestión de redes sociales",
        "Estrategias de contenido",
        "Campañas publicitarias",
        "Análisis de resultados",
        "Crecimiento de audiencia",
      ],
      pricing: [
        {
          name: "Básico",
          price: "$299",
          features: ["2 redes sociales", "8 publicaciones mensuales", "Informe mensual", "Soporte por email"],
          notIncluded: ["Campañas publicitarias", "Estrategia de contenido"],
        },
        {
          name: "Profesional",
          price: "$599",
          popular: true,
          features: [
            "4 redes sociales",
            "16 publicaciones mensuales",
            "Informe quincenal",
            "Soporte prioritario",
            "1 campaña publicitaria",
          ],
          notIncluded: ["Estrategia de contenido avanzada"],
        },
        {
          name: "Premium",
          price: "$999",
          features: [
            "Todas las redes sociales",
            "30 publicaciones mensuales",
            "Informe semanal",
            "Soporte 24/7",
            "3 campañas publicitarias",
            "Estrategia de contenido avanzada",
          ],
          notIncluded: [],
        },
      ],
    },
    {
      id: "desarrollo",
      icon: <Code className="h-8 w-8" />,
      title: "Desarrollo & Programación",
      description:
        "Sitios web y aplicaciones a medida con tecnologías modernas y enfoque en la experiencia de usuario.",
      color: "cyan",
      features: [
        "Diseño web responsive",
        "Desarrollo frontend y backend",
        "E-commerce",
        "Aplicaciones web",
        "Optimización de rendimiento",
      ],
      pricing: [
        {
          name: "Landing Page",
          price: "$499",
          features: ["Diseño personalizado", "Responsive", "Formulario de contacto", "Optimización SEO básica"],
          notIncluded: ["Múltiples páginas", "CMS"],
        },
        {
          name: "Sitio Web",
          price: "$999",
          popular: true,
          features: ["Hasta 5 páginas", "Diseño personalizado", "Responsive", "CMS básico", "Optimización SEO"],
          notIncluded: ["E-commerce"],
        },
        {
          name: "E-commerce",
          price: "$1999",
          features: [
            "Tienda online completa",
            "Hasta 100 productos",
            "Pasarela de pagos",
            "Panel de administración",
            "Optimización SEO avanzada",
            "Capacitación",
          ],
          notIncluded: [],
        },
      ],
    },
    {
      id: "publicidad",
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Publicidad Digital",
      description: "Campañas publicitarias optimizadas para maximizar tu inversión y alcanzar a tu público objetivo.",
      color: "pink",
      features: ["Google Ads", "Facebook & Instagram Ads", "LinkedIn Ads", "Remarketing", "Análisis y optimización"],
      pricing: [
        {
          name: "Básico",
          price: "$399",
          features: ["1 plataforma", "Configuración de campaña", "Segmentación básica", "Informe mensual"],
          notIncluded: ["Optimización continua", "Remarketing"],
        },
        {
          name: "Profesional",
          price: "$799",
          popular: true,
          features: [
            "2 plataformas",
            "Configuración avanzada",
            "Segmentación avanzada",
            "Optimización semanal",
            "Remarketing básico",
          ],
          notIncluded: ["Estrategia multicanal"],
        },
        {
          name: "Premium",
          price: "$1499",
          features: [
            "Todas las plataformas",
            "Estrategia multicanal",
            "Segmentación avanzada",
            "Optimización diaria",
            "Remarketing avanzado",
            "Informes personalizados",
          ],
          notIncluded: [],
        },
      ],
    },
    {
      id: "diseno",
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Rebranding & Diseño Gráfico",
      description: "Identidad visual impactante que refleja los valores de tu marca y conecta con tus clientes.",
      color: "purple",
      features: [
        "Diseño de logotipos",
        "Identidad corporativa",
        "Material impreso",
        "Diseño para redes sociales",
        "Packaging",
      ],
      pricing: [
        {
          name: "Logo",
          price: "$299",
          features: ["3 propuestas", "3 revisiones", "Archivos en alta resolución", "Manual básico de marca"],
          notIncluded: ["Papelería corporativa", "Aplicaciones de marca"],
        },
        {
          name: "Identidad Corporativa",
          price: "$699",
          popular: true,
          features: [
            "Logo + 3 propuestas",
            "5 revisiones",
            "Papelería corporativa",
            "Manual completo de marca",
            "Redes sociales",
          ],
          notIncluded: ["Packaging"],
        },
        {
          name: "Rebranding Completo",
          price: "$1299",
          features: [
            "Análisis de marca",
            "Logo + 5 propuestas",
            "Revisiones ilimitadas",
            "Papelería corporativa",
            "Manual completo de marca",
            "Redes sociales y aplicaciones",
            "Packaging",
          ],
          notIncluded: [],
        },
      ],
    },
  ]

  return (
    <section id="servicios" className="py-24 px-6 md:px-12 bg-black/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl bg-purple-500/10 rounded-full blur-3xl z-0"></div>

      <motion.div ref={ref} className="max-w-7xl mx-auto relative z-10" style={{ y, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="px-4 py-1.5 rounded-full bg-gray-800/50 border-gray-700 text-sm font-medium text-gray-300 mb-6"
          >
            Nuestros Servicios
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Soluciones digitales completas
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Impulsamos tu negocio en el mundo digital con estrategias personalizadas y resultados medibles.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <Card className="frosted-glass border-gray-800 hover:border-gray-700 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className={`bg-${service.color}-500/10 rounded-xl p-4 inline-block mb-4 glow-${service.color}`}>
                    {service.icon}
                  </div>
                  <CardTitle className={`text-xl font-semibold text-${service.color}-400`}>{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-gray-500">+{service.features.length - 3} características más</li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className={`w-full bg-${service.color}-500/10 text-${service.color}-400 hover:bg-${service.color}-500/20 border border-${service.color}-500/30 group-hover:glow-${service.color}`}
                        variant="outline"
                        onClick={() => setActiveService(service.id)}
                      >
                        Ver detalles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-3xl frosted-glass border-gray-700">
                      <DialogHeader>
                        <div className="flex items-center mb-2">
                          <div className={`bg-${service.color}-500/10 rounded-xl p-3 mr-3 glow-${service.color}`}>
                            {service.icon}
                          </div>
                          <DialogTitle className="text-2xl text-white">{service.title}</DialogTitle>
                        </div>
                        <DialogDescription>{service.description}</DialogDescription>
                      </DialogHeader>

                      <Tabs defaultValue="features" className="mt-4">
                        <TabsList className="grid grid-cols-2 bg-gray-900/50">
                          <TabsTrigger value="features">Características</TabsTrigger>
                          <TabsTrigger value="pricing">Planes y Precios</TabsTrigger>
                        </TabsList>
                        <TabsContent value="features" className="pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className={`mt-1 mr-3 p-1 rounded-full bg-${service.color}-500/20`}>
                                  <Check className="h-4 w-4 text-green-500" />
                                </div>
                                <div>
                                  <h4 className="text-white font-medium">{feature}</h4>
                                  <p className="text-sm text-gray-400">Optimizado para tu negocio</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="pricing" className="pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {service.pricing.map((plan, idx) => (
                              <Card
                                key={idx}
                                className={`bg-gray-900/50 border-gray-800 ${plan.popular ? "relative border-purple-500/50 glow-purple" : ""}`}
                              >
                                {plan.popular && (
                                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <Badge className="bg-purple-500 text-white">Más popular</Badge>
                                  </div>
                                )}
                                <CardHeader>
                                  <CardTitle className="text-lg text-white">{plan.name}</CardTitle>
                                  <div className="mt-2">
                                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-400 ml-1">/mes</span>
                                  </div>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2">
                                    {plan.features.map((feature, fidx) => (
                                      <li key={fidx} className="flex items-start">
                                        <Check className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                      </li>
                                    ))}
                                    {plan.notIncluded.map((feature, fidx) => (
                                      <li key={fidx} className="flex items-start">
                                        <X className="h-4 w-4 text-gray-500 mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-sm text-gray-500">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </CardContent>
                                <CardFooter>
                                  <Button
                                    className={`w-full ${plan.popular ? "bg-purple-500 hover:bg-purple-600 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}`}
                                  >
                                    Seleccionar plan
                                  </Button>
                                </CardFooter>
                              </Card>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>

                      <div className="mt-6 flex justify-end">
                        <Button className={`bg-${service.color}-500 hover:bg-${service.color}-600 text-white`}>
                          Solicitar presupuesto
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 rounded-2xl overflow-hidden animated-border"
        >
          <div className="bg-gray-900/50 p-1 rounded-2xl overflow-hidden">
            <div className="relative rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 p-8 md:p-12">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">¿No encontrás lo que buscás?</h3>
                    <p className="text-gray-300">Ofrecemos soluciones personalizadas para tu negocio.</p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-medium"
                  >
                    Contactanos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
