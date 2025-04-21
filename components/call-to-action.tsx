"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background z-0"></div>
      <div className="absolute inset-0 bg-grid opacity-[0.02] z-0"></div>

      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block relative mb-6">
            <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-30 animate-pulse"></div>
            <div className="relative z-10 bg-primary/10 p-4 rounded-full">
              <Rocket className="h-12 w-12 mx-auto text-primary" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold">
            Llevá tu negocio al <span className="text-primary">siguiente nivel</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubrí cómo nuestros servicios pueden transformar tu presencia digital y potenciar tus resultados.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <Link href="/contacto">
                <span>Solicitá tu presupuesto</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-border hover:border-primary text-foreground hover:text-primary rounded-full px-8 py-6 text-lg font-medium"
              asChild
            >
              <Link href="/servicios">Conocé nuestros servicios</Link>
            </Button>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-1/4 left-0 w-24 h-24 rounded-full bg-primary/10 blur-xl"
            animate={{
              y: [0, 15, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-1/4 right-0 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-pink-500/10 blur-xl"
            animate={{
              y: [0, 10, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
