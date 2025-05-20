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
import Image from "next/image";

interface ProjectsProps {
  showExploreButton?: boolean;
}

export default function Projects({ showExploreButton = true }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeProject, setActiveProject] = useState<
    | ((typeof projects)[number] & { category: keyof typeof colorVariants })
    | null
  >(null);
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

  const categories: {
    id: keyof typeof colorVariants;
    label: string;
    icon: JSX.Element;
  }[] = [
    { id: "all", label: "Todos", icon: <Rocket className="h-4 w-4" /> },
    { id: "web", label: "Sitios Web", icon: <Monitor className="h-4 w-4" /> },
    { id: "branding", label: "Branding", icon: <Brush className="h-4 w-4" /> },
    {
      id: "marketing",
      label: "Marketing",
      icon: <Megaphone className="h-4 w-4" />,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce La Marina",
      shortTitle: "La Marina Shop",
      description:
        "Tienda online personalizada desde cero con sistema de gestión integrado",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      tags: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "AWS",
        "Pasarela de pagos",
        "Dashboard",
      ],
      fullDescription:
        "Desarrollo completo de una plataforma de comercio electrónico personalizada para La Marina, incluyendo gestión de inventario, sistema de pagos, panel de administración y análisis de datos en tiempo real. La solución fue construida desde cero para satisfacer las necesidades específicas del cliente.",
      results: [
        "Incremento del 200% en ventas online",
        "Reducción del 45% en costos operativos",
        "98% de satisfacción del cliente",
      ],
      gallery: ["/placeholder.svg?height=600&width=800"],
      link: "#",
      year: "2023",
    },
    {
      id: 2,
      title: "Branding Marina Centro",
      shortTitle: "Marina Centro",
      description:
        "Diseño de identidad corporativa completa para Marina Centro",
      category: "branding",
      image: "/images/MarinaBranding.png",
      tags: [
        "Diseño de Logo",
        "Identidad Visual",
        "Papelería",
        "Señalética",
        "Guidelines",
      ],
      fullDescription:
        "Creación completa de la identidad visual para Marina Centro, incluyendo diseño de logotipo, sistema de colores, tipografía, papelería corporativa, señalética y manual de marca. El proyecto buscó reflejar los valores de modernidad y prestigio de la marca.",
      results: [
        "Reconocimiento de marca aumentado en 85%",
        "Implementación exitosa en 12 puntos de venta",
        "Manual de marca adoptado por todo el personal",
      ],
      gallery: ["/placeholder.svg?height=600&width=800"],
      link: "#",
      year: "2023",
    },
    {
      id: 3,
      title: "Rebranding Zona Apple Alvear",
      shortTitle: "Zona Apple",
      description:
        "Renovación completa de identidad visual para tienda premium de Apple",
      category: "branding",
      image: "/images/ZonaAppleBranding.png",
      tags: [
        "Rebranding",
        "Diseño Gráfico",
        "Marketing",
        "Retail",
        "Experiencia de Usuario",
      ],
      fullDescription:
        "Renovación estratégica de la marca Zona Apple Alvear, adaptando su identidad visual para alinearse con los estándares premium de Apple mientras mantiene su identidad local. Incluyó rediseño de logo, materiales promocionales y experiencia en tienda.",
      results: [
        "Incremento del 50% en tráfico de tienda",
        "90% de aprobación por parte de clientes",
        "Aumento del 35% en ventas post-rebranding",
      ],
      gallery: ["/placeholder.svg?height=600&width=800"],
      link: "#",
      year: "2022",
    },
    {
      id: 4,
      title: "Sistema de Gestión Integral Municipal",
      shortTitle: "MUNI",
      description: "Plataforma completa de gestión para municipalidades",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "PostgreSQL", "Docker", "API REST", "Gestión"],
      fullDescription:
        "Sistema integral para la gestión municipal que incluye módulos de recursos humanos, finanzas, atención ciudadana, gestión de trámites, y más. Diseñado para optimizar los procesos administrativos y mejorar el servicio al ciudadano.",
      results: [
        "Implementado en 5 municipalidades",
        "Reducción del 60% en tiempos de gestión",
        "95% de satisfacción de usuarios internos",
      ],
      gallery: ["/placeholder.svg?height=600&width=800"],
      link: "#",
      year: "2023",
    },
    {
      id: 5,
      title: "Eventop - Ticketera Virtual",
      shortTitle: "Eventop",
      description: "Plataforma de venta de entradas para eventos",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Stripe", "QR", "Real-time", "Mobile App"],
      fullDescription:
        "Desarrollo de una plataforma completa para la venta y gestión de entradas de eventos, incluyendo sistema de QR, validación en tiempo real, panel de organizador y aplicación móvil para control de acceso.",
      results: [
        "Más de 100,000 tickets vendidos",
        "Integración con 50+ venues",
        "Tiempo de procesamiento < 2 segundos",
      ],
      gallery: ["/placeholder.svg?height=600&width=800"],
      link: "#",
      year: "2023",
    },
    {
      id: 6,
      title: "Rebranding Trivoner",
      shortTitle: "Trivoner",
      description: "Renovación de marca para empresa de indumentaria",
      category: "branding",
      image: "/images/TrivonerBranding.png",
      tags: [
        "Branding",
        "Diseño Textil",
        "Marketing Digital",
        "Redes Sociales",
      ],
      fullDescription:
        "Rebranding completo para Trivoner, incluyendo nuevo logotipo, paleta de colores, tipografía y sistema de diseño para etiquetas y packaging. El proyecto incluyó también estrategia de comunicación en redes sociales.",
      results: [
        "Aumento del 75% en engagement en redes",
        "40% incremento en reconocimiento de marca",
        "Implementación exitosa en 20 productos",
      ],
      gallery: ["/placeholder.svg?height=600&width=800"],
      link: "#",
      year: "2023",
    },
    {
      id: 7,
      title: "CarDev - Gestión de Concesionarias",
      shortTitle: "CarDev",
      description: "Sistema integral para concesionarias de automóviles",
      category: "web",
      image: "/images/CarDev.png",
      tags: ["React", "Node.js", "MongoDB", "E-commerce", "CRM", "ERP"],
      fullDescription:
        "Desarrollo de una plataforma completa para concesionarias que integra e-commerce, gestión de inventario, CRM, seguimiento de ventas, gestión de empleados y análisis financiero. Incluye aplicación móvil para vendedores y clientes.",
      results: [
        "Adoptado por 15 concesionarias",
        "Aumento del 45% en eficiencia operativa",
        "Reducción del 30% en costos administrativos",
      ],
      gallery: ["/placeholder.svg?height=600&width=800"],
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
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />

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
                          colorVariants[
                            project.category as keyof typeof colorVariants
                          ]?.bg || colorVariants.default.bg,
                          colorVariants[
                            project.category as keyof typeof colorVariants
                          ]?.text || colorVariants.default.text,
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
                              colorVariants[
                                project.category as keyof typeof colorVariants
                              ]?.bg || colorVariants.default.bg,
                              colorVariants[
                                project.category as keyof typeof colorVariants
                              ]?.text || colorVariants.default.text
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
                            colorVariants[
                              activeProject.category as keyof typeof colorVariants
                            ]?.bg || colorVariants.default.bg,
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

        {showExploreButton && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group" asChild>
              <Link href="/proyectos">
                Explorar todos los proyectos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
