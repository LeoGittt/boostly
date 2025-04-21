"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, ExternalLink, Heart, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [likedProjects, setLikedProjects] = useState<number[]>([])
  const [savedProjects, setSavedProjects] = useState<number[]>([])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9], [0, 1, 1])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const tabs = ["Todos", "Sitios Web", "Redes Sociales", "Branding"]

  const projects = [
    {
      id: 1,
      title: "Rediseño de E-commerce",
      category: "Sitios Web",
      image: "/placeholder.svg?height=600&width=800",
      color: "purple",
      client: "Fashion Store",
      year: "2023",
      description:
        "Rediseño completo de tienda online con enfoque en experiencia de usuario y optimización de conversión.",
      tags: ["E-commerce", "UI/UX", "Responsive"],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      results: [
        "Aumento del 45% en conversiones",
        "Reducción del 30% en tasa de rebote",
        "Incremento del 25% en tiempo de permanencia",
      ],
    },
    {
      id: 2,
      title: "Campaña en Redes Sociales",
      category: "Redes Sociales",
      image: "/placeholder.svg?height=600&width=800",
      color: "cyan",
      client: "Healthy Food",
      year: "2023",
      description:
        "Estrategia integral de contenido para redes sociales con enfoque en engagement y crecimiento de comunidad.",
      tags: ["Instagram", "Facebook", "Contenido"],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      results: ["200% de aumento en seguidores", "35% más de engagement", "15 colaboraciones con influencers"],
    },
    {
      id: 3,
      title: "Identidad Corporativa",
      category: "Branding",
      image: "/placeholder.svg?height=600&width=800",
      color: "pink",
      client: "Tech Startup",
      year: "2022",
      description:
        "Desarrollo de identidad visual completa para startup tecnológica, incluyendo logo, paleta de colores y aplicaciones.",
      tags: ["Branding", "Logo", "Identidad"],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      results: [
        "Reconocimiento de marca mejorado en un 60%",
        "Coherencia visual en todos los canales",
        "Feedback positivo de inversores y clientes",
      ],
    },
    {
      id: 4,
      title: "Tienda Online de Moda",
      category: "Sitios Web",
      image: "/placeholder.svg?height=600&width=800",
      color: "purple",
      client: "Urban Style",
      year: "2023",
      description:
        "Desarrollo de tienda online con integración de pasarela de pagos, gestión de inventario y experiencia de compra optimizada.",
      tags: ["E-commerce", "Web", "Moda"],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      results: [
        "Incremento del 70% en ventas online",
        "Reducción del 40% en abandonos de carrito",
        "Aumento del 50% en ticket promedio",
      ],
    },
    {
      id: 5,
      title: "Estrategia Digital Completa",
      category: "Redes Sociales",
      image: "/placeholder.svg?height=600&width=800",
      color: "cyan",
      client: "Local Restaurant",
      year: "2022",
      description:
        "Estrategia integral de marketing digital incluyendo redes sociales, email marketing y publicidad online.",
      tags: ["Estrategia", "Redes Sociales", "Ads"],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      results: [
        "Aumento del 120% en reservas online",
        "ROI de 300% en campañas publicitarias",
        "Crecimiento de base de datos en un 80%",
      ],
    },
    {
      id: 6,
      title: "Aplicación Móvil",
      category: "Sitios Web",
      image: "/placeholder.svg?height=600&width=800",
      color: "pink",
      client: "Fitness App",
      year: "2023",
      description: "Diseño y desarrollo de aplicación móvil para seguimiento de rutinas de ejercicio y nutrición.",
      tags: ["App", "UI/UX", "Desarrollo"],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      results: ["10,000+ descargas en el primer mes", "4.8/5 valoración en App Store", "85% de retención de usuarios"],
    },
  ]

  const filteredProjects =
    activeTab === 0 ? projects : projects.filter((project) => project.category === tabs[activeTab])

  const toggleLike = (id: number) => {
    if (likedProjects.includes(id)) {
      setLikedProjects(likedProjects.filter((projectId) => projectId !== id))
    } else {
      setLikedProjects([...likedProjects, id])
    }
  }

  const toggleSave = (id: number) => {
    if (savedProjects.includes(id)) {
      setSavedProjects(savedProjects.filter((projectId) => projectId !== id))
    } else {
      setSavedProjects([...savedProjects, id])
    }
  }

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30 z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full max-w-3xl max-h-3xl bg-cyan-500/10 rounded-full blur-3xl z-0"></div>

      <motion.div ref={ref} className="max-w-7xl mx-auto relative z-10" style={{ y, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="px-4 py-1.5 rounded-full bg-gray-800/50 border-gray-700 text-sm font-medium text-gray-300 mb-6"
          >
            Nuestro Portfolio
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Proyectos destacados
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explora algunos de nuestros trabajos más recientes y descubre cómo podemos ayudarte a alcanzar tus
            objetivos.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === index
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white glow-purple"
                  : "bg-gray-800/50 text-gray-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="frosted-glass border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden">
                <CardHeader className="p-0 relative">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className={`text-${project.color}-400 font-medium text-sm mb-2`}>{project.category}</div>
                        <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                        <div className="flex space-x-2">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="bg-black/50 border-gray-700">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full bg-black/50 border-gray-700 hover:bg-black/70"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleLike(project.id)
                            }}
                          >
                            <Heart
                              className={`h-4 w-4 ${
                                likedProjects.includes(project.id) ? "fill-red-500 text-red-500" : "text-gray-300"
                              }`}
                            />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="frosted-glass border-gray-700">
                          <p>Me gusta</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full bg-black/50 border-gray-700 hover:bg-black/70"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleSave(project.id)
                            }}
                          >
                            <Bookmark
                              className={`h-4 w-4 ${
                                savedProjects.includes(project.id) ? "fill-purple-500 text-purple-500" : "text-gray-300"
                              }`}
                            />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="frosted-glass border-gray-700">
                          <p>Guardar</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full bg-black/50 border-gray-700 hover:bg-black/70"
                          >
                            <Share2 className="h-4 w-4 text-gray-300" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="frosted-glass border-gray-700">
                          <p>Compartir</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <CardTitle className="text-lg text-white mb-1">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400">{project.client}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={`bg-${project.color}-500/10 text-${project.color}-400 border-${project.color}-500/30`}
                    >
                      {project.year}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full border-gray-700 hover:border-purple-500 text-gray-300 hover:text-white group"
                      >
                        Ver proyecto
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl frosted-glass border-gray-700">
                      <DialogHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <Badge
                              variant="outline"
                              className={`bg-${project.color}-500/10 text-${project.color}-400 border-${project.color}-500/30 mb-2`}
                            >
                              {project.category}
                            </Badge>
                            <DialogTitle className="text-2xl text-white">{project.title}</DialogTitle>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-black/50 border-gray-700 hover:bg-black/70"
                              onClick={() => toggleLike(project.id)}
                            >
                              <Heart
                                className={`h-4 w-4 ${
                                  likedProjects.includes(project.id) ? "fill-red-500 text-red-500" : "text-gray-300"
                                }`}
                              />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-black/50 border-gray-700 hover:bg-black/70"
                              onClick={() => toggleSave(project.id)}
                            >
                              <Bookmark
                                className={`h-4 w-4 ${
                                  savedProjects.includes(project.id)
                                    ? "fill-purple-500 text-purple-500"
                                    : "text-gray-300"
                                }`}
                              />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-black/50 border-gray-700 hover:bg-black/70"
                            >
                              <Share2 className="h-4 w-4 text-gray-300" />
                            </Button>
                          </div>
                        </div>
                        <DialogDescription className="text-gray-400">
                          Cliente: {project.client} | Año: {project.year}
                        </DialogDescription>
                      </DialogHeader>

                      <Carousel className="w-full">
                        <CarouselContent>
                          {project.gallery.map((image, idx) => (
                            <CarouselItem key={idx}>
                              <div className="relative aspect-video rounded-lg overflow-hidden">
                                <Image
                                  src={image || "/placeholder.svg"}
                                  alt={`${project.title} - Imagen ${idx + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        <div>
                          <h3 className="text-lg font-medium text-white mb-3">Descripción del proyecto</h3>
                          <p className="text-gray-400">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="bg-gray-800/50 border-gray-700">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium text-white mb-3">Resultados</h3>
                          <ul className="space-y-2">
                            {project.results.map((result, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="mt-1 mr-3 p-1 rounded-full bg-green-500/20">
                                  <Check className="h-3 w-3 text-green-500" />
                                </div>
                                <span className="text-gray-300">{result}</span>
                              </li>
                            ))}
                          </ul>

                          <Button className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                            Ver caso completo
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Button
            variant="outline"
            className="border-gray-700 hover:border-purple-500 text-gray-300 hover:text-white rounded-full px-8 py-6 text-lg font-medium group"
          >
            <span>Ver todos los proyectos</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Check(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
