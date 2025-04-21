"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Rocket, Check, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicePricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const pricingPlans = {
    marketing: [
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
    web: [
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
    branding: [
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
  }

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
    <section className="section-spacing relative">
      <div className="container-width" ref={ref}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary">
            <Rocket className="h-3.5 w-3.5 mr-1.5" />
            PRECIOS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Planes y precios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos diferentes planes adaptados a las necesidades de cada cliente, con la flexibilidad de
            personalizarlos según tus requerimientos específicos.
          </p>
        </div>

        <Tabs defaultValue="marketing" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-secondary">
              <TabsTrigger value="marketing" className="data-[state=active]:text-primary">
                Marketing Digital
              </TabsTrigger>
              <TabsTrigger value="web" className="data-[state=active]:text-primary">
                Desarrollo Web
              </TabsTrigger>
              <TabsTrigger value="branding" className="data-[state=active]:text-primary">
                Branding & Diseño
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(pricingPlans).map(([category, plans]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid md:grid-cols-3 gap-6"
              >
                {plans.map((plan, i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <Card
                      className={`h-full flex flex-col ${
                        plan.popular ? "border-primary/50 shadow-lg shadow-primary/10" : "border-border"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-primary text-white">Más popular</Badge>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <div className="mt-2">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground ml-1">/mes</span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-2">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                          {plan.notIncluded.map((feature, j) => (
                            <li key={j} className="flex items-start">
                              <X className="h-4 w-4 text-muted-foreground mt-1 mr-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className={`w-full ${
                            plan.popular
                              ? "bg-primary hover:bg-primary/90 text-white"
                              : "bg-secondary hover:bg-secondary/80"
                          }`}
                        >
                          Seleccionar plan
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
          <p className="text-muted-foreground mb-4">
            ¿Necesitas un plan personalizado? Contáctanos para crear una solución a medida para tu negocio.
          </p>
          <Button variant="outline" size="lg">
            Solicitar presupuesto personalizado
          </Button>
        </div>
      </div>
    </section>
  )
}
