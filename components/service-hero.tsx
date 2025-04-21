"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ServiceHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 vercel-gradient"></div>
      <div className="absolute bottom-0 left-0 vercel-gradient"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>

      <div className="container-width relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary">
              <Rocket className="h-3.5 w-3.5 mr-1.5" />
              SERVICIOS
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nuestros <span className="text-primary">servicios</span>
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Soluciones digitales integrales para impulsar tu negocio con estrategias personalizadas y resultados
            medibles.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 group" asChild>
              <Link href="/contacto">
                Solicitar presupuesto
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 border-border hover:bg-secondary" asChild>
              <Link href="#servicios-detalle">Ver detalles</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
