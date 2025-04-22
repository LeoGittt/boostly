"use client";

import { JSX, useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Search,
  FileText,
  Paintbrush,
  Code,
  BarChart,
  ChevronRight,
  X,
  Check,
  Users,
  Target,
  Layout,
  Server,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function WorkProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedStep, setSelectedStep] = useState<{
    id: number;
    title: string;
    shortTitle: string;
    description: string;
    icon: JSX.Element;
    color: keyof typeof colorVariants;
    details: string[];
    deliverables: string[];
  } | null>(null);

  const steps: {
    id: number;
    title: string;
    shortTitle: string;
    description: string;
    icon: JSX.Element;
    color: keyof typeof colorVariants;
    details: string[];
    deliverables: string[];
  }[] = [
    {
      id: 1,
      title: "Descubrimiento",
      shortTitle: "Análisis Inicial",
      description:
        "Analizamos profundamente tu negocio para identificar necesidades y oportunidades.",
      icon: <Search className="h-6 w-6" />,
      color: "primary",
      details: [
        "Reunión inicial de consultoría",
        "Análisis de mercado y competencia",
        "Definición de KPIs clave",
        "Evaluación de recursos disponibles",
      ],
      deliverables: [
        "Documento de requisitos",
        "Mapa de stakeholders",
        "Cronograma preliminar",
      ],
    },
    {
      id: 2,
      title: "Planificación Estratégica",
      shortTitle: "Estrategia",
      description:
        "Desarrollamos un plan detallado alineado con tus objetivos comerciales.",
      icon: <Target className="h-6 w-6" />,
      color: "blue",
      details: [
        "Definición de roadmap estratégico",
        "Selección de tecnologías",
        "Plan de implementación por fases",
        "Estimación de tiempos y costos",
      ],
      deliverables: [
        "Plan de proyecto detallado",
        "Arquitectura técnica",
        "Presupuesto finalizado",
      ],
    },
    {
      id: 3,
      title: "Diseño Creativo",
      shortTitle: "Diseño",
      description:
        "Creamos soluciones visuales impactantes que conectan con tu audiencia.",
      icon: <Paintbrush className="h-6 w-6" />,
      color: "purple",
      details: [
        "Diseño de interfaces y experiencia",
        "Creación de identidad visual",
        "Prototipado interactivo",
        "Pruebas de usabilidad",
      ],
      deliverables: [
        "Guía de estilo de marca",
        "Prototipos interactivos",
        "Sistema de diseño",
      ],
    },
    {
      id: 4,
      title: "Desarrollo Técnico",
      shortTitle: "Desarrollo",
      description:
        "Implementamos soluciones robustas con las mejores tecnologías.",
      icon: <Code className="h-6 w-6" />,
      color: "emerald",
      details: [
        "Desarrollo frontend y backend",
        "Integración de sistemas",
        "Pruebas de calidad",
        "Implementación en staging",
      ],
      deliverables: [
        "Código fuente documentado",
        "Entorno de pruebas",
        "Manual técnico",
      ],
    },
    {
      id: 5,
      title: "Lanzamiento Controlado",
      shortTitle: "Lanzamiento",
      description:
        "Desplegamos tu proyecto con monitoreo constante para garantizar éxito.",
      icon: <Rocket className="h-6 w-6" />,
      color: "orange",
      details: [
        "Implementación en producción",
        "Migración de datos",
        "Capacitación de equipos",
        "Plan de contingencia",
      ],
      deliverables: [
        "Sistema en producción",
        "Documentación de usuario",
        "Vídeos tutoriales",
      ],
    },
    {
      id: 6,
      title: "Optimización Continua",
      shortTitle: "Optimización",
      description: "Mejoramos constantemente para maximizar tus resultados.",
      icon: <BarChart className="h-6 w-6" />,
      color: "pink",
      details: [
        "Análisis de métricas",
        "Pruebas A/B multivariante",
        "Actualizaciones periódicas",
        "Soporte prioritario",
      ],
      deliverables: [
        "Informes de rendimiento",
        "Plan de optimización",
        "Roadmap de mejoras",
      ],
    },
  ];

  const colorVariants = {
    primary: {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/20",
      icon: <Search className="h-5 w-5" />,
    },
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-600",
      border: "border-blue-500/20",
      icon: <Target className="h-5 w-5" />,
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-600",
      border: "border-purple-500/20",
      icon: <Paintbrush className="h-5 w-5" />,
    },
    emerald: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-600",
      border: "border-emerald-500/20",
      icon: <Code className="h-5 w-5" />,
    },
    orange: {
      bg: "bg-orange-500/10",
      text: "text-orange-600",
      border: "border-orange-500/20",
      icon: <Rocket className="h-5 w-5" />,
    },
    pink: {
      bg: "bg-pink-500/10",
      text: "text-pink-600",
      border: "border-pink-500/20",
      icon: <BarChart className="h-5 w-5" />,
    },
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

  const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      id="proceso"
      className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 relative overflow-hidden bg-gradient-to-b from-card/5 to-transparent"
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
            METODOLOGÍA
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Nuestro proceso
            </span>{" "}
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              de trabajo
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Un enfoque estructurado que garantiza excelencia en cada etapa de tu
            proyecto digital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                onClick={() => setSelectedStep(step)}
                className={cn(
                  "w-full h-full p-6 bg-card/80 border border-border/20 rounded-xl shadow-sm hover:shadow-md transition-all text-left",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                    colorVariants[step.color as keyof typeof colorVariants].bg,
                    colorVariants[step.color].border
                  )}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="flex items-center text-sm font-medium text-primary">
                  <span>Ver detalles</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal de detalle */}
        <AnimatePresence>
          {selectedStep && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-card border border-border/20 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-lg flex items-center justify-center",
                          colorVariants[selectedStep.color].bg,
                          colorVariants[selectedStep.color].border
                        )}
                      >
                        {selectedStep.icon}
                      </div>
                      <h3 className="text-2xl font-bold">
                        {selectedStep.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedStep(null)}
                      className="p-1 rounded-full hover:bg-secondary"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {selectedStep.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Check
                          className={cn(
                            "h-5 w-5",
                            colorVariants[selectedStep.color].text
                          )}
                        />
                        <span>Actividades clave</span>
                      </h4>
                      <ul className="space-y-2">
                        {selectedStep.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <div
                              className={cn(
                                "w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0",
                                colorVariants[selectedStep.color].bg,
                                colorVariants[selectedStep.color].text
                              )}
                            >
                              <Check className="h-3 w-3" />
                            </div>
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <FileText
                          className={cn(
                            "h-5 w-5",
                            colorVariants[selectedStep.color].text
                          )}
                        />
                        <span>Entregables</span>
                      </h4>
                      <ul className="space-y-2">
                        {selectedStep.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div
                              className={cn(
                                "w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 shrink-0",
                                colorVariants[selectedStep.color].bg,
                                colorVariants[selectedStep.color].text
                              )}
                            >
                              <Check className="h-3 w-3" />
                            </div>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/20">
                    <Button
                      className="group w-full"
                      variant="outline"
                      onClick={() => setSelectedStep(null)}
                    >
                      Cerrar
                      <X className="ml-2 h-4 w-4 transition-transform group-hover:rotate-90" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
