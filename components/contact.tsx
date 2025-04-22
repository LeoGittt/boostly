"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Datos de contacto
  const contactData = {
    phone: "+542645441265", // Número completo con código de país
    whatsapp: "542645441265", // Para enlace WhatsApp (sin el +)
    email: "boostlytm@gmail.com",
    instagram: "boostlysj", // Sin el @
    address: "San Juan, Argentina",
  };

  return (
    <section
      id="contacto"
      className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 relative overflow-hidden bg-gradient-to-b from-card/10 to-transparent"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]"></div>

      <div
        className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
        ref={ref}
      >
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1.5 text-xs sm:text-sm border-primary/20 bg-primary/5 text-primary hover:bg-primary/10"
          >
            <Rocket className="h-3.5 w-3.5 mr-1.5" />
            CONTÁCTANOS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Conversemos sobre
            </span>{" "}
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              tu proyecto
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Elige la forma más conveniente para ponerte en contacto con nuestro
            equipo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="border-border/20">
              <CardHeader>
                <CardTitle>Nuestra ubicación</CardTitle>
                <CardDescription>
                  Estamos en San Juan, Argentina
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Dirección</h4>
                    <p className="text-sm text-muted-foreground">
                      {contactData.address}
                    </p>
                    <Button
                      variant="link"
                      size="sm"
                      className="p-0 h-auto mt-2 text-primary"
                      asChild
                    >
                      <Link
                        href={`https://www.google.com/maps/place/San+Juan,+Argentina`}
                        target="_blank"
                      >
                        Ver en mapa
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/20">
              <CardHeader>
                <CardTitle>Contacto directo</CardTitle>
                <CardDescription>
                  Formas rápidas de comunicación
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4 shrink-0">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">WhatsApp</h4>
                    <p className="text-sm text-muted-foreground">
                      Chat instantáneo con nuestro equipo
                    </p>
                    <Button
                      className="mt-2 bg-green-600 hover:bg-green-700 text-white"
                      asChild
                    >
                      <Link
                        href={`https://wa.me/${contactData.whatsapp}`}
                        target="_blank"
                      >
                        Enviar mensaje
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Correo electrónico</h4>
                    <p className="text-sm text-muted-foreground">
                      {contactData.email}
                    </p>
                    <Button className="mt-2" variant="outline" asChild>
                      <Link href={`mailto:${contactData.email}`}>
                        Enviar email
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Opciones de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border/20 h-full">
              <CardHeader>
                <CardTitle>Otras formas de contacto</CardTitle>
                <CardDescription>
                  Selecciona la opción que prefieras
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Llamada telefónica</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Habla directamente con nuestro equipo.
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href={`tel:${contactData.phone}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Llamar ahora
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <Link
                        href={`https://wa.me/${contactData.whatsapp}`}
                        target="_blank"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Redes sociales</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Síguenos y contáctanos por Instagram.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href={`https://instagram.com/${contactData.instagram}`}
                      target="_blank"
                    >
                      @{contactData.instagram}
                    </Link>
                  </Button>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Horario de atención</h3>
                  <p className="text-sm text-muted-foreground">
                    Lunes a Viernes: 9:00 - 18:00 hs
                    <br />
                    Sábados: 10:00 - 13:00 hs
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
