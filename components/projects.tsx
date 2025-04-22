"use client";

import { JSX, useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
  Rocket,
  Search,
  Monitor,
  Brush,
  Megaphone,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeProject, setActiveProject] = useState<(typeof projects[number] & { category: keyof typeof colorVariants }) | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Sistema de colores centralizado
  const colorVariants = {
    web: {
      bg: "bg-blue-500/10",
      text: "text-blue-600",
      border: "border-blue-500/20",
      darkText: "dark:text-blue-400",
      icon: <Monitor className="h-5 w-5" />,
    },
    branding: {
      bg: "bg-purple-500/10",
      text: "text-purple-600",
      border: "border-purple-500/20",
      darkText: "dark:text-purple-400",
      icon: <Brush className="h-5 w-5" />,
    },
    marketing: {
      bg: "bg-pink-500/10",
      text: "text-pink-600",
      border: "border-pink-500/20",
      darkText: "dark:text-pink-400",
      icon: <Megaphone className="h-5 w-5" />,
    },
    all: {
      bg: "bg-gray-500/10",
      text: "text-gray-600",
      border: "border-gray-500/20",
      darkText: "dark:text-gray-400",
      icon: <Rocket className="h-5 w-5" />,
    },
    default: {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/20",
      darkText: "dark:text-primary-400",
      icon: <Rocket className="h-5 w-5" />,
    },
  };

  const categories: { id: keyof typeof colorVariants; label: string; icon: JSX.Element }[] = [
    { id: "all", label: "Todos", icon: <Rocket className="h-4 w-4" /> },
    { id: "web", label: "Sitios Web", icon: <Monitor className="h-4 w-4" /> },
    { id: "branding", label: "Branding", icon: <Brush className="h-4 w-4" /> },
    {
      id: "marketing",
      label: "Marketing",
      icon: <Megaphone className="h-4 w-4" />,
    },
  ];

  const projects: Array<{
    id: number;
    title: string;
    shortTitle: string;
    description: string;
    category: "all" | "marketing" | "web" | "branding" | "default"; // Cambiar aquí
    image: string;
    tags: string[];
    fullDescription: string;
    results: string[];
    gallery: string[];
    link: string;
    year: string;
  }> = [
    {
      id: 1,
      title: "E-commerce de moda",
      shortTitle: "Tienda de moda",
      description:
        "Tienda online con integración de pasarela de pagos y gestión de inventario.",
      category: "web", // Asegúrate de que coincida con el tipo esperado
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Shopify", "UX/UI", "E-commerce", "Pagos"],
      fullDescription:
        "Desarrollamos una tienda online completa para una marca de moda emergente...",
      results: ["Incremento del 70% en ventas online", "Reducción del 40% en abandonos de carrito"],
      gallery: ["/placeholder.svg?height=600&width=800"],
      link: "#",
      year: "2023",
    },
    {
      id: 2,
      title: "Identidad corporativa",
      shortTitle: "Rediseño de marca",
      description:
        "Rediseño de marca para empresa de tecnología con presencia internacional.",
      category: "branding",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Logo", "Papelería", "Guía de estilo", "Branding", "Identidad"],
      fullDescription:
        "Realizamos un rediseño completo de la identidad corporativa para una empresa de tecnología en expansión internacional. El proyecto incluyó la creación de un nuevo logotipo, sistema de colores, tipografía, papelería corporativa y guía de estilo para asegurar la consistencia de la marca en todos los puntos de contacto.",
      results: [
        "Reconocimiento de marca mejorado en un 60%",
        "Coherencia visual en todos los canales",
        "Feedback positivo de inversores y clientes",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      link: "#",
      year: "2022",
    },
    {
      id: 3,
      title: "Campaña digital",
      shortTitle: "Marketing digital",
      description:
        "Estrategia de marketing para lanzamiento de producto con 300% ROI.",
      category: "marketing",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["SEM", "Social Ads", "Email", "Influencers", "ROI"],
      fullDescription:
        "Diseñamos e implementamos una estrategia de marketing digital integral para el lanzamiento de un nuevo producto. La campaña incluyó anuncios en Google Ads, campañas en redes sociales, email marketing y colaboraciones con influencers, todo optimizado para maximizar el retorno de inversión.",
      results: [
        "300% de retorno sobre la inversión",
        "Más de 500,000 impresiones",
        "15,000 nuevos leads generados",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      link: "#",
      year: "2023",
    },
    {
      id: 4,
      title: "Aplicación móvil",
      shortTitle: "App de delivery",
      description:
        "App de delivery con más de 10,000 descargas en el primer mes.",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "UI/UX", "Backend", "Mobile", "Delivery"],
      fullDescription:
        "Desarrollamos una aplicación móvil para un servicio de delivery local, con funcionalidades de seguimiento en tiempo real, sistema de pagos integrado y programa de fidelización. La interfaz intuitiva y el rendimiento optimizado resultaron en una excelente adopción por parte de los usuarios.",
      results: [
        "10,000+ descargas en el primer mes",
        "4.8/5 valoración en App Store",
        "85% de retención de usuarios",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      link: "#",
      year: "2023",
    },
    {
      id: 5,
      title: "Portal inmobiliario",
      shortTitle: "Plataforma inmobiliaria",
      description:
        "Plataforma para gestión y búsqueda de propiedades en tiempo real.",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "APIs", "Mapas", "Inmobiliaria", "Búsqueda"],
      fullDescription:
        "Creamos un portal inmobiliario con funcionalidades avanzadas de búsqueda, filtrado y visualización de propiedades en mapas interactivos. La plataforma incluye un panel de administración para agentes inmobiliarios y un sistema de notificaciones para alertar a los usuarios sobre nuevas propiedades que coinciden con sus criterios de búsqueda.",
      results: [
        "Incremento del 120% en consultas",
        "Reducción del 40% en tiempo de búsqueda",
        "Aumento del 65% en conversiones",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      link: "#",
      year: "2022",
    },
    {
      id: 6,
      title: "Estrategia de redes",
      shortTitle: "Redes sociales",
      description:
        "Gestión de contenido para marca con aumento de 200% en engagement.",
      category: "marketing",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Instagram", "TikTok", "Contenido", "Social Media", "Engagement"],
      fullDescription:
        "Desarrollamos e implementamos una estrategia de contenido para redes sociales que transformó la presencia digital de la marca. Creamos un calendario editorial, directrices de estilo visual y tono de comunicación, y gestionamos la creación y publicación de contenido optimizado para cada plataforma.",
      results: [
        "Aumento del 200% en engagement",
        "Crecimiento de 150% en seguidores",
        "15 colaboraciones con influencers",
      ],
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      link: "#",
      year: "2023",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  // Animaciones
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
    hidden: { opacity: 0, y: 30 },
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      id="proyectos"
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
            PORTAFOLIO
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Proyectos destacados
            </span>{" "}
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              que impulsan negocios
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Descubre cómo hemos ayudado a empresas a transformar sus ideas en
            soluciones digitales exitosas.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          className="flex justify-center mb-8 md:mb-12 overflow-x-auto pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full"
          >
            <TabsList className="bg-background/50 backdrop-blur-sm border border-border/20 p-1 rounded-xl">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                    "data-[state=active]:bg-background data-[state=active]:shadow-sm",
                    activeCategory === category.id
                      ? colorVariants[category.id].text ||
                          colorVariants.default.text
                      : "text-muted-foreground"
                  )}
                >
                  {category.icon}
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Proyectos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              >
                <motion.div
                  whileHover="hover"
                  variants={cardVariants}
                  className="h-full"
                >
                  <Card className="h-full overflow-hidden border-border/20 group perspective-1000">
                    {/* Imagen del proyecto */}
                    <div className="aspect-[4/3] bg-secondary/50 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="24" height="24" fill="none" />
                          <path
                            d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5M4.5 14.5V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H9.5M19.5 9.5V5.5C19.5 4.94772 19.0523 4.5 18.5 4.5H14.5M19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className={cn(
                                "border-white/20 text-white hover:bg-white/20 hover:text-white",
                                "translate-y-2 group-hover:translate-y-0 transition-transform"
                              )}
                              onClick={() => setActiveProject(project)}
                            >
                              Ver detalles
                            </Button>
                          </DialogTrigger>
                        </Dialog>
                      </div>

                      {/* Badge de categoría */}
                      <div
                        className={cn(
                          "absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm",
                          colorVariants[project.category as keyof typeof colorVariants]?.bg ||
                            colorVariants.default.bg,
                          colorVariants[project.category as keyof typeof colorVariants]?.text ||
                            colorVariants.default.text,
                          "shadow-sm"
                        )}
                      >
                        {
                          categories.find((c) => c.id === project.category)
                            ?.label
                        }
                      </div>
                    </div>

                    {/* Contenido de la tarjeta */}
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <CardTitle className="text-lg">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {project.description}
                          </CardDescription>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {project.year}
                        </span>
                      </div>
                    </CardHeader>

                    <CardFooter className="flex justify-between items-center pt-0">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((tag, i) => (
                          <span
                            key={i}
                            className={cn(
                              "px-2 py-1 text-xs rounded-md",
                              colorVariants[project.category as keyof typeof colorVariants]?.bg ||
                                colorVariants.default.bg,
                              colorVariants[project.category as keyof typeof colorVariants]?.text ||
                                colorVariants.default.text
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md">
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full"
                        asChild
                      >
                        <Link href={project.link}>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal de proyecto */}
        <Dialog>
          {activeProject && (
            <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{activeProject.title}</DialogTitle>
                <DialogDescription>
                  {activeProject.description}
                </DialogDescription>
              </DialogHeader>

              <Carousel className="w-full mt-4">
                <CarouselContent>
                  {activeProject.gallery.map((image, idx) => (
                    <CarouselItem key={idx}>
                      <div className="aspect-video bg-secondary rounded-md relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                          <svg
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="24" height="24" fill="none" />
                            <path
                              d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5M4.5 14.5V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H9.5M19.5 9.5V5.5C19.5 4.94772 19.0523 4.5 18.5 4.5H14.5M19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    Sobre el proyecto
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {activeProject.fullDescription}
                  </p>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-3">
                      Tecnologías y servicios
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={cn(
                            "px-3 py-1.5 text-xs rounded-md",
                            colorVariants[activeProject.category as keyof typeof colorVariants]?.bg ||
                              colorVariants.default.bg,
                            colorVariants[activeProject.category]?.text ||
                              colorVariants.default.text
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Resultados clave</h3>
                  <ul className="space-y-3">
                    {activeProject.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <div
                          className={cn(
                            "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5",
                            colorVariants[activeProject.category]?.bg ||
                              colorVariants.default.bg,
                            colorVariants[activeProject.category]?.text ||
                              colorVariants.default.text
                          )}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-current"
                          >
                            <path
                              d="M20 6L9 17L4 12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="mt-6 w-full group" asChild>
                    <Link href={activeProject.link}>
                      Ver caso de estudio completo
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group" asChild>
            <Link href="/proyectos">
              Explorar todos los proyectos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
