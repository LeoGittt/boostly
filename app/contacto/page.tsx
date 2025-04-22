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
    phone: "+542645441265",
    whatsapp: "542645441265",
    email: "boostlytm@gmail.com",
    instagram: "boostlysj",
    address: "San Juan, Argentina",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto"
        >
          {/* Información de ubicación */}
          <motion.div variants={itemVariants}>
            <Card className="border-border/20 h-full">
              <CardHeader>
                <CardTitle>Nuestra ubicación</CardTitle>
                <CardDescription>
                  Estamos en San Juan, Argentina
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Dirección</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {contactData.address}
                    </p>
                    <Button variant="outline" asChild>
                      <Link
                        href={`https://www.google.com/maps/place/San+Juan,+Argentina`}
                        target="_blank"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        Ver en mapa
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Información de contacto */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Card className="border-border/20">
              <CardHeader>
                <CardTitle>Contacto directo</CardTitle>
                <CardDescription>
                  Formas rápidas de comunicación con nuestro equipo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Respuesta inmediata en horario comercial
                    </p>
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white"
                      asChild
                    >
                      <Link
                        href={`https://wa.me/${contactData.whatsapp}`}
                        target="_blank"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Enviar mensaje
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Correo electrónico</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {contactData.email}
                    </p>
                    <Button variant="outline" asChild>
                      <Link href={`mailto:${contactData.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Enviar email
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Llamada telefónica</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {contactData.phone}
                    </p>
                    <Button variant="outline" asChild>
                      <Link href={`tel:${contactData.phone}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Llamar ahora
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/20">
              <CardHeader>
                <CardTitle>Redes sociales</CardTitle>
                <CardDescription>
                  Conecta con nosotros en nuestras redes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-600"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      @{contactData.instagram}
                    </p>
                    <Button variant="outline" asChild>
                      <Link
                        href={`https://instagram.com/${contactData.instagram}`}
                        target="_blank"
                      >
                        Seguir en Instagram
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
