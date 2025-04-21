"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useInView, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Rocket, MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Formulario enviado correctamente. Te contactaremos pronto.")
    }, 1500)
  }

  return (
    <section id="contacto" className="section-spacing relative">
      <div className="absolute top-0 right-0 vercel-gradient"></div>
      <div className="absolute bottom-0 left-0 vercel-gradient"></div>

      <div className="container-width" ref={ref}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary">
            <Rocket className="h-3.5 w-3.5 mr-1.5" />
            CONTACTO
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Comencemos tu proyecto</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para ayudarte a llevar tu presencia digital al siguiente nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Hablemos de tu proyecto</h3>
            <p className="text-muted-foreground mb-6">
              Completa el formulario y nos pondremos en contacto contigo a la brevedad para discutir cómo podemos
              ayudarte.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Visítanos</h4>
                  <p className="text-sm text-muted-foreground">San Francisco 123, Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Llámanos</h4>
                  <p className="text-sm text-muted-foreground">+54 11 5555-5555</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Envíanos un correo</h4>
                  <p className="text-sm text-muted-foreground">contacto@boostly.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border">
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Contáctanos</CardTitle>
                  <CardDescription>Completa el formulario para comenzar.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Nombre</Label>
                      <Input
                        id="first-name"
                        placeholder="Tu nombre"
                        required
                        className="bg-secondary border-0 focus-transition"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Apellido</Label>
                      <Input
                        id="last-name"
                        placeholder="Tu apellido"
                        required
                        className="bg-secondary border-0 focus-transition"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="bg-secondary border-0 focus-transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      placeholder="¿En qué podemos ayudarte?"
                      required
                      className="bg-secondary border-0 focus-transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos más sobre tu proyecto..."
                      required
                      className="min-h-[120px] bg-secondary border-0 focus-transition"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
