"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const posts = [
    {
      title: "10 estrategias de marketing digital para 2025",
      description: "Descubre las tendencias que dominarán el marketing digital en el próximo año.",
      date: "15 Abr 2025",
      readTime: "5 min",
      category: "Marketing Digital",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Cómo optimizar la velocidad de tu sitio web",
      description: "Guía completa para mejorar el rendimiento y la experiencia de usuario de tu sitio.",
      date: "10 Abr 2025",
      readTime: "7 min",
      category: "Desarrollo Web",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "El poder del branding en la era digital",
      description: "Por qué una identidad de marca sólida es más importante que nunca.",
      date: "5 Abr 2025",
      readTime: "4 min",
      category: "Branding",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

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
    <section id="blog" className="section-spacing relative">
      <div className="container-width" ref={ref}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary">
            <Rocket className="h-3.5 w-3.5 mr-1.5" />
            BLOG
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Últimos artículos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compartimos conocimientos, tendencias y consejos para ayudarte a potenciar tu presencia digital.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {posts.map((post, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="overflow-hidden border-border hover-lift h-full flex flex-col">
                <div className="aspect-[3/2] bg-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" fill="none" />
                      <path
                        d="M4 4H20V16H4V4Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 16L9 10L13 14L16 12L20 16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 10C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9C14 9.55228 14.4477 10 15 10Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 20H16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button variant="ghost" className="p-0 h-auto text-primary group" asChild>
                    <Link href="/blog">
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group" asChild>
            <Link href="/blog">
              Ver todos los artículos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
