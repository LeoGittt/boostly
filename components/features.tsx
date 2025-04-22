"use client";

import { JSX, useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Rocket,
  Code,
  Paintbrush,
  BarChart,
  Zap,
  Sparkles,
  LineChart,
  Globe,
  Smartphone,
  Users,
  Target,
  Layout,
  Palette,
  Mail,
  ShoppingCart,
  Camera,
  Video,
  TrendingUp,
  Server,
  Database,
  Cloud,
  Shield,
  SmartphoneCharging,
  Monitor,
  Cpu,
  Figma,
  Mic,
  Music,
  Presentation,
  ScanEye,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState("marketing");

  // Sistema de colores centralizado
  const colorVariants = {
    marketing: {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/20",
      darkText: "dark:text-primary-400",
      icon: <Rocket className="h-5 w-5" />,
    },
    web: {
      bg: "bg-purple-500/10",
      text: "text-purple-600",
      border: "border-purple-500/20",
      darkText: "dark:text-purple-400",
      icon: <Code className="h-5 w-5" />,
    },
    branding: {
      bg: "bg-pink-500/10",
      text: "text-pink-600",
      border: "border-pink-500/20",
      darkText: "dark:text-pink-400",
      icon: <Paintbrush className="h-5 w-5" />,
    },
    multimedia: {
      bg: "bg-blue-500/10",
      text: "text-blue-600",
      border: "border-blue-500/20",
      darkText: "dark:text-blue-400",
      icon: <Camera className="h-5 w-5" />,
    },
    consultoria: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-600",
      border: "border-emerald-500/20",
      darkText: "dark:text-emerald-400",
      icon: <LineChart className="h-5 w-5" />,
    },
    software: {
      bg: "bg-amber-500/10",
      text: "text-amber-600",
      border: "border-amber-500/20",
      darkText: "dark:text-amber-400",
      icon: <Cpu className="h-5 w-5" />,
    },
  };

  const features: Array<{
    id: keyof typeof colorVariants;
    title: string;
    shortTitle: string;
    description: string;
    icon: JSX.Element;
    items: Array<{
      name: string;
      icon: JSX.Element;
      description: string;
    }>;
  }> = [
    {
      id: "marketing",
      title: "Marketing Digital",
      shortTitle: "Marketing",
      description:
        "Estrategias personalizadas para aumentar tu presencia online y conectar con tu audiencia.",
      icon: <Rocket className="h-5 w-5" />,
      items: [
        {
          name: "Social Media Management",
          icon: <Users className="h-4 w-4" />,
          description:
            "Gestión completa de redes sociales con contenido optimizado.",
        },
        {
          name: "Estrategia de Contenido",
          icon: <Mail className="h-4 w-4" />,
          description: "Planes editoriales y creación de contenido relevante.",
        },
        {
          name: "Campañas Publicitarias",
          icon: <Target className="h-4 w-4" />,
          description:
            "Anuncios optimizados en múltiples plataformas digitales.",
        },
        {
          name: "SEO y SEM",
          icon: <TrendingUp className="h-4 w-4" />,
          description: "Optimización para motores de búsqueda y campañas PPC.",
        },
        {
          name: "Analítica Avanzada",
          icon: <BarChart className="h-4 w-4" />,
          description: "Informes detallados y recomendaciones estratégicas.",
        },
      ],
    },
    {
      id: "web",
      title: "Desarrollo Web",
      shortTitle: "Web",
      description:
        "Sitios web y aplicaciones modernas con enfoque en experiencia de usuario.",
      icon: <Code className="h-5 w-5" />,
      items: [
        {
          name: "Diseño Responsive",
          icon: <SmartphoneCharging className="h-4 w-4" />,
          description: "Adaptación perfecta a todos los dispositivos.",
        },
        {
          name: "Optimización",
          icon: <Zap className="h-4 w-4" />,
          description: "Máxima velocidad y rendimiento.",
        },
        {
          name: "E-commerce",
          icon: <ShoppingCart className="h-4 w-4" />,
          description: "Tiendas online con pasarelas de pago.",
        },
        {
          name: "Fullstack",
          icon: <Server className="h-4 w-4" />,
          description: "Soluciones completas frontend y backend.",
        },
        {
          name: "Soporte",
          icon: <Shield className="h-4 w-4" />,
          description: "Mantenimiento y actualizaciones.",
        },
      ],
    },
    {
      id: "branding",
      title: "Branding & Diseño",
      shortTitle: "Branding",
      description:
        "Identidad visual impactante que comunica los valores de tu marca.",
      icon: <Paintbrush className="h-5 w-5" />,
      items: [
        {
          name: "Diseño de Logo",
          icon: <Palette className="h-4 w-4" />,
          description: "Logotipos únicos y memorables.",
        },
        {
          name: "Identidad Visual",
          icon: <Figma className="h-4 w-4" />,
          description: "Sistemas visuales completos.",
        },
        {
          name: "Material Impreso",
          icon: <Mail className="h-4 w-4" />,
          description: "Diseño gráfico para impresión.",
        },
        {
          name: "UX/UI",
          icon: <Layout className="h-4 w-4" />,
          description: "Interfaces intuitivas y atractivas.",
        },
        {
          name: "Sistemas de Diseño",
          icon: <Database className="h-4 w-4" />,
          description: "Componentes reutilizables.",
        },
      ],
    },
    {
      id: "multimedia",
      title: "Producción Multimedia",
      shortTitle: "Multimedia",
      description:
        "Contenido audiovisual profesional para destacar en todas las plataformas.",
      icon: <Camera className="h-5 w-5" />,
      items: [
        {
          name: "Fotografía",
          icon: <Camera className="h-4 w-4" />,
          description: "Sesiones profesionales de producto y retrato.",
        },
        {
          name: "Video",
          icon: <Video className="h-4 w-4" />,
          description: "Producción de contenido audiovisual.",
        },
        {
          name: "Animación",
          icon: <ScanEye className="h-4 w-4" />,
          description: "Motion graphics y animaciones 2D/3D.",
        },
        {
          name: "Edición",
          icon: <Monitor className="h-4 w-4" />,
          description: "Postproducción profesional.",
        },
        {
          name: "Streaming",
          icon: <Cloud className="h-4 w-4" />,
          description: "Producción de eventos en vivo.",
        },
      ],
    },
    {
      id: "consultoria",
      title: "Consultoría IT",
      shortTitle: "Consultoría",
      description:
        "Soluciones tecnológicas para optimizar los procesos de tu negocio.",
      icon: <LineChart className="h-5 w-5" />,
      items: [
        {
          name: "Transformación Digital",
          icon: <TrendingUp className="h-4 w-4" />,
          description: "Modernización con tecnología.",
        },
        {
          name: "Cloud",
          icon: <Cloud className="h-4 w-4" />,
          description: "Infraestructura en la nube.",
        },
        {
          name: "Ciberseguridad",
          icon: <Shield className="h-4 w-4" />,
          description: "Protección contra amenazas.",
        },
        {
          name: "Automatización",
          icon: <Zap className="h-4 w-4" />,
          description: "Optimización de procesos.",
        },
        {
          name: "Business Intelligence",
          icon: <BarChart className="h-4 w-4" />,
          description: "Análisis de datos estratégicos.",
        },
      ],
    },
    {
      id: "software",
      title: "Software a Medida",
      shortTitle: "Software",
      description:
        "Soluciones personalizadas para necesidades empresariales específicas.",
      icon: <Cpu className="h-5 w-5" />,
      items: [
        {
          name: "Aplicaciones Empresariales",
          icon: <Presentation className="h-4 w-4" />,
          description: "Sistemas para gestionar tu negocio.",
        },
        {
          name: "Apps Móviles",
          icon: <Smartphone className="h-4 w-4" />,
          description: "Aplicaciones iOS y Android nativas.",
        },
        {
          name: "Integraciones",
          icon: <Server className="h-4 w-4" />,
          description: "Conexión entre sistemas existentes.",
        },
        {
          name: "Bases de Datos",
          icon: <Database className="h-4 w-4" />,
          description: "Sistemas de gestión de información.",
        },
        {
          name: "API Development",
          icon: <Code className="h-4 w-4" />,
          description: "Interfaces de programación personalizadas.",
        },
      ],
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
      },
    },
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, x: 10 },
  };

  return (
    <section
      id="servicios"
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
            NUESTROS SERVICIOS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Soluciones digitales
            </span>{" "}
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              a tu medida
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Impulsamos tu negocio con estrategias digitales personalizadas y
            resultados medibles.
          </p>
        </motion.div>

        {/* Tabs para desktop */}
        <div className="hidden lg:block">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <motion.div
              className="flex justify-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TabsList className="bg-background/50 backdrop-blur-sm border border-border/20 p-1.5 rounded-xl">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                      "data-[state=active]:bg-background data-[state=active]:shadow-sm",
                      colorVariants[feature.id].text,
                      colorVariants[feature.id].border,
                      "hover:bg-accent/30"
                    )}
                  >
                    <span className="flex items-center gap-2 whitespace-nowrap">
                      {feature.icon}
                      {feature.title}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            <AnimatePresence mode="wait">
              {features.map((feature) => (
                <TabsContent
                  key={feature.id}
                  value={feature.id}
                  className="mt-0"
                >
                  <motion.div
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start"
                  >
                    <div className="space-y-6">
                      <div
                        className={cn(
                          "inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl",
                          colorVariants[feature.id].bg,
                          colorVariants[feature.id].text,
                          colorVariants[feature.id].border
                        )}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-3 sm:space-y-4">
                        {feature.items.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start p-3 rounded-lg hover:bg-accent/20 transition-colors"
                            variants={itemVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div
                              className={cn(
                                "mt-1 mr-3 p-1.5 rounded-full",
                                colorVariants[feature.id].bg,
                                colorVariants[feature.id].text,
                                colorVariants[feature.id].border
                              )}
                            >
                              {item.icon}
                            </div>
                            <div>
                              <div className="font-medium text-sm sm:text-base">
                                {item.name}
                              </div>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                                {item.description}
                              </p>
                            </div>
                          </motion.li>
                        ))}
                      </ul>

                      <Button
                        className="group w-full sm:w-auto mt-4"
                        asChild
                        variant="outline"
                      >
                        <Link href={`/servicios/${feature.id}`}>
                          Ver detalles
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>

                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="bg-card border border-border/20 rounded-xl p-4 sm:p-6 shadow-sm backdrop-blur-sm"
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -5, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Card
                              className={cn(
                                "border-border/20 hover:shadow-md transition-all h-full",
                                `hover:border-${
                                  feature.id === "marketing"
                                    ? "primary"
                                    : feature.id === "web"
                                    ? "purple-500"
                                    : feature.id
                                }-300/50`
                              )}
                            >
                              <CardHeader className="pb-3">
                                <div
                                  className={cn(
                                    "h-10 w-10 sm:h-12 sm:w-12 rounded-lg flex items-center justify-center mb-3",
                                    colorVariants[feature.id].bg,
                                    colorVariants[feature.id].border
                                  )}
                                >
                                  <Sparkles
                                    className={cn(
                                      "h-4 w-4 sm:h-5 sm:w-5",
                                      colorVariants[feature.id].text
                                    )}
                                  />
                                </div>
                                <CardTitle className="text-sm sm:text-base">
                                  Beneficio {i + 1}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="pb-3 sm:pb-4">
                                <CardDescription className="text-xs sm:text-sm">
                                  Mejora significativa en este aspecto clave del
                                  servicio.
                                </CardDescription>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </div>

        {/* Versión móvil - Acordeón */}
        <div className="lg:hidden space-y-6">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: features.indexOf(feature) * 0.1,
              }}
              className={cn(
                "bg-card border rounded-xl overflow-hidden transition-all",
                activeTab === feature.id
                  ? "border-primary/30 shadow-md"
                  : "border-border/50"
              )}
            >
              <button
                onClick={() =>
                  setActiveTab(activeTab === feature.id ? "" : feature.id)
                }
                className={cn(
                  "w-full flex items-center justify-between p-4 sm:p-5 text-left",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-lg",
                      colorVariants[feature.id].bg,
                      colorVariants[feature.id].text,
                      colorVariants[feature.id].border
                    )}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg">
                    {feature.shortTitle}
                  </h3>
                </div>
                <ArrowRight
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    activeTab === feature.id
                      ? "rotate-90 text-primary"
                      : "text-muted-foreground"
                  )}
                />
              </button>

              <AnimatePresence>
                {activeTab === feature.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 sm:px-5 overflow-hidden"
                  >
                    <div className="pb-4 sm:pb-5 space-y-5">
                      <p className="text-muted-foreground text-sm sm:text-base">
                        {feature.description}
                      </p>

                      <ul className="space-y-3">
                        {feature.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start p-3 rounded-lg bg-accent/10"
                          >
                            <div
                              className={cn(
                                "mt-1 mr-3 p-1.5 rounded-full",
                                colorVariants[feature.id].bg,
                                colorVariants[feature.id].text,
                                colorVariants[feature.id].border
                              )}
                            >
                              {item.icon}
                            </div>
                            <div>
                              <div className="font-medium text-sm sm:text-base">
                                {item.name}
                              </div>
                              <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                                {item.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>

                      <Button className="group w-full mt-2" asChild size="sm">
                        <Link href={`/servicios/${feature.id}`}>
                          Ver detalles
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
