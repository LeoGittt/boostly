"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Rocket, Sparkles, Zap, BarChart } from "lucide-react"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  const smoothY = useSpring(y, { damping: 20, stiffness: 100 })
  const smoothOpacity = useSpring(opacity, { damping: 20, stiffness: 100 })
  const smoothScale = useSpring(scale, { damping: 20, stiffness: 100 })

  const words = [
    {
      text: "Transformamos",
    },
    {
      text: "tu",
    },
    {
      text: "presencia",
    },
    {
      text: "digital",
      className: "text-primary",
    },
    {
      text: "🚀",
    },
  ]

  const features = [
    { icon: <Rocket className="h-4 w-4" />, text: "Marketing Digital" },
    { icon: <Zap className="h-4 w-4" />, text: "Desarrollo Web" },
    { icon: <Sparkles className="h-4 w-4" />, text: "Branding & Diseño" },
    { icon: <BarChart className="h-4 w-4" />, text: "Analítica & SEO" },
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [features.length])

  if (!mounted) return null

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>

      <motion.div
        style={{ y: smoothY, opacity: smoothOpacity, scale: smoothScale }}
        className="container-width relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary">
              <Rocket className="h-3.5 w-3.5 mr-1.5" />
              Impulsando marcas desde 2021
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <TypewriterEffect words={words} className="text-4xl md:text-6xl font-bold tracking-tight" />
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Diseño, desarrollo y estrategias de marketing que elevan tu negocio con un enfoque creativo y resultados
            medibles.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {features.map((feature, i) => (
              <Badge
                key={i}
                variant="outline"
                className={`px-3 py-1.5 text-sm border-border bg-card ${
                  i === currentIndex ? "border-primary/50 bg-primary/5 text-primary" : "text-muted-foreground"
                }`}
              >
                {feature.icon}
                <span className="ml-1.5">{feature.text}</span>
              </Badge>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 group" asChild>
              <Link href="/contacto">
                Comenzar proyecto
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 border-border hover:bg-secondary group" asChild>
              <Link href="/servicios">
                Ver servicios
                <Sparkles className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* 3D Device Mockup */}
        <motion.div
          className="mt-16 md:mt-24 relative max-w-5xl mx-auto perspective"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.div
            className="rounded-lg border border-border overflow-hidden shadow-2xl"
            whileHover={{ rotateX: -5, rotateY: 5, translateZ: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-8 bg-secondary flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <div className="ml-4 h-4 w-48 bg-muted rounded-full"></div>
            </div>
            <div className="bg-card/50 aspect-[16/9] relative">
              {/* Dashboard interface mockup */}
              <div className="absolute inset-0 p-4 flex">
                <div className="w-48 bg-card h-full rounded-md border border-border p-3 flex flex-col">
                  <div className="w-20 h-5 bg-muted rounded mb-4"></div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-sm bg-primary/20"></div>
                        <div className="w-24 h-3 bg-muted rounded"></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 w-32 h-4 bg-muted rounded"></div>
                  <div className="mt-3 space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-sm bg-muted"></div>
                        <div className="w-20 h-3 bg-muted rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 pl-4 flex flex-col">
                  <div className="flex justify-between mb-4">
                    <div className="w-48 h-6 bg-muted rounded"></div>
                    <div className="flex space-x-2">
                      <div className="w-20 h-8 bg-secondary rounded-md"></div>
                      <div className="w-20 h-8 bg-primary rounded-md"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-card border border-border rounded-md p-3 h-28">
                        <div className="w-12 h-12 rounded-md bg-secondary mb-2 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-sm bg-primary/20"></div>
                        </div>
                        <div className="w-20 h-3 bg-muted rounded mb-1"></div>
                        <div className="w-16 h-3 bg-muted rounded"></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 bg-card border border-border rounded-md p-4">
                    <div className="flex justify-between mb-4">
                      <div className="w-32 h-4 bg-muted rounded"></div>
                      <div className="w-24 h-4 bg-muted rounded"></div>
                    </div>
                    <div className="h-40 relative">
                      {/* Chart mockup */}
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border"></div>
                      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border"></div>
                      <svg viewBox="0 0 100 40" className="w-full h-full">
                        <path
                          d="M0,40 L10,35 L20,36 L30,30 L40,32 L50,20 L60,23 L70,15 L80,18 L90,10 L100,12"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="1"
                        />
                        <path
                          d="M0,40 L10,35 L20,36 L30,30 L40,32 L50,20 L60,23 L70,15 L80,18 L90,10 L100,12 L100,40 L0,40"
                          fill="hsl(var(--primary))"
                          fillOpacity="0.1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="flex justify-center mt-12 gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-3xl font-semibold text-foreground">200+</p>
              <p className="text-sm text-muted-foreground">Proyectos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground">Satisfacción</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-foreground">24/7</p>
              <p className="text-sm text-muted-foreground">Soporte</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Link href="#servicios" className="flex flex-col items-center group">
            <span className="text-sm text-muted-foreground mb-2 group-hover:text-foreground transition-colors">
              Descubre más
            </span>
            <motion.div
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
