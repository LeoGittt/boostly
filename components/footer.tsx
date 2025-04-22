"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";


export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const currentYear = new Date().getFullYear();

  const contactData = {
    phone: "+542645441265",
    whatsapp: "542645441265",
    email: "boostlytm@gmail.com",
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
    <footer
      ref={ref}
      className="bg-card/50 border-t border-border/30 relative overflow-hidden"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]"></div>

      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 pb-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {/* Columna 1 - Logo y contacto */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/logo.png"
                  alt="Boostly Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-medium text-lg tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Boostly
              </span>
            </Link>

            <p className="text-muted-foreground text-sm">
              Impulsamos tu presencia digital con estrategias creativas y
              resultados medibles.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{contactData.phone}</p>
                  <Button
                    variant="link"
                    size="sm"
                    className="p-0 h-auto text-primary"
                    asChild
                  >
                    <Link href={`tel:${contactData.phone}`}>Llamar ahora</Link>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">WhatsApp</p>
                  <Button
                    variant="link"
                    size="sm"
                    className="p-0 h-auto text-green-600"
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

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">{contactData.email}</p>
                  <Button
                    variant="link"
                    size="sm"
                    className="p-0 h-auto text-blue-600"
                    asChild
                  >
                    <Link href={`mailto:${contactData.email}`}>
                      Enviar email
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna 2 - Enlaces rápidos */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/servicios"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all"></div>
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all"></div>
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all"></div>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all"></div>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all"></div>
                  Contacto
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Columna 3 - Servicios */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/servicios/marketing-digital"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all"></div>
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/desarrollo-web"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all"></div>
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/branding"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all"></div>
                  Branding & Diseño
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/consultoria"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all"></div>
                  Consultoría
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/seo"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all"></div>
                  SEO & Posicionamiento
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Columna 4 - Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-lg">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Suscríbete para recibir nuestras últimas noticias y ofertas
              especiales.
            </p>

            <form className="space-y-3">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="bg-background border-border/50 focus:border-primary/50"
                required
              />
              <Button type="submit" className="w-full group">
                Suscribirse
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Pie inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Boostly. Todos los derechos reservados.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <Link
              href="/terminos"
              className="hover:text-foreground transition-colors"
            >
              Términos de servicio
            </Link>
            <Link
              href="/privacidad"
              className="hover:text-foreground transition-colors"
            >
              Política de privacidad
            </Link>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-1">
              <span>Hecho con</span>
              <span className="text-red-500">❤️</span>
              <span>en Argentina</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
