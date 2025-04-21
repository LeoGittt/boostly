"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Twitter, Instagram, Linkedin, Facebook, Github } from "lucide-react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const currentYear = new Date().getFullYear()

  return (
    <footer ref={ref} className="bg-card/30 border-t border-border relative">
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>

      <div className="container-width pt-16 pb-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          <motion.div
            className="col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                <Image src="/images/logo.png" alt="Boostly Logo" fill className="object-cover" />
              </div>
              <span className="font-medium text-lg tracking-tight">Boostly</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Impulsamos tu presencia digital con estrategias creativas y resultados medibles.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-medium mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nosotros"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/equipo" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Equipo
                </Link>
              </li>
              <li>
                <Link
                  href="/carreras"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Carreras
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-medium mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios/marketing-digital"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/desarrollo-web"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/branding"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Branding & Diseño
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/consultoria"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Consultoría
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terminos"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-medium mb-4">Suscríbete a nuestro newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Recibe las últimas noticias, artículos y recursos directamente en tu bandeja de entrada.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="tu@email.com" className="bg-secondary border-0 focus-transition" />
              <Button className="shrink-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Boostly. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <select className="bg-secondary text-sm rounded-md border-0 py-1 pl-2 pr-8">
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>
            <div className="text-sm text-muted-foreground">Hecho con ❤️ en Argentina</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
