"use client";

import { useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  FileText,
  Paintbrush,
  Rocket,
  BarChart,
  ChevronDown,
  Lightbulb,
  Target,
  Palette,
  Cpu,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeStep, setActiveStep] = useState(0);

  // Sistema de colores centralizado
  const colorVariants = {
    primary: {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/20",
      darkText: "dark:text-primary-400",
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-600",
      border: "border-purple-500/20",
      darkText: "dark:text-purple-400",
    },
    pink: {
      bg: "bg-pink-500/10",
      text: "text-pink-600",
      border: "border-pink-500/20",
      darkText: "dark:text-pink-400",
    },
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-600",
      border: "border-blue-500/20",
      darkText: "dark:text-blue-400",
    },
    emerald: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-600",
      border: "border-emerald-500/20",
      darkText: "dark:text-emerald-400",
    },
  };

  type ColorVariant = keyof typeof colorVariants;

  const steps = [
    {
      number: "01",
      title: "Descubrimiento",
      shortTitle: "Análisis Inicial",
      description: "Análisis inicial para entender las necesidades del proyecto.",
      color: "primary" as ColorVariant,
      icon: <Search className="h-5 w-5" />,
      details: [
        "Reunión inicial de consultoría",
        "Análisis de mercado y competencia",
        "Definición de KPIs y métricas clave",
        "Evaluación de recursos disponibles",
      ],
    },
    {
      number: "02",
      title: "Estrategia",
      shortTitle: "Planificación",
      description: "Planificación estratégica para alcanzar los objetivos definidos.",
      color: "purple" as ColorVariant,
      icon: <Lightbulb className="h-5 w-5" />,
      details: [
        "Definición de roadmap estratégico",
        "Selección de tecnologías adecuadas",
        "Plan de implementación por fases",
        "Estimación de tiempos y costos",
      ],
    },
    {
      number: "03",
      title: "Diseño",
      shortTitle: "Creación Visual",
      description: "Creación de diseños visuales y experiencia de usuario.",
      color: "pink" as ColorVariant,
      icon: <Paintbrush className="h-5 w-5" />,
      details: [
        "Creación de identidad visual",
        "Prototipado interactivo",
        "Pruebas de usabilidad",
      ],
    },
    {
      number: "04",
      title: "Desarrollo",
      shortTitle: "Implementación",
      description: "Implementación técnica del proyecto en desarrollo.",
      color: "blue" as ColorVariant,
      icon: <Rocket className="h-5 w-5" />,
      details: ["Implementación en staging", "Despliegue en producción"],
    },
    {
      number: "05",
      title: "Optimización",
      shortTitle: "Mejora Continua",
      description: "Optimización continua para mejorar el rendimiento.",
      color: "emerald" as ColorVariant,
      icon: <Zap className="h-5 w-5" />,
      details: [
        "Monitoreo de métricas clave",
        "Ajustes basados en datos",
        "Actualizaciones periódicas",
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

  return (
    <section
      id="proceso"
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
            METODOLOGÍA DE TRABAJO
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Proceso estructurado
            </span>{" "}
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              para resultados excepcionales
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Nuestra metodología probada garantiza excelencia en cada etapa de tu
            proyecto digital.
          </p>
        </motion.div>

        {/* Contenido del proceso */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6"
              variants={itemVariants}
            >
              <div
                className={cn(
                  "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center",
                  colorVariants[step.color].bg,
                  colorVariants[step.color].text
                )}
              >
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground mt-2">{step.description}</p>
                <ul className="mt-4 space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span
                        className={cn(
                          "mr-2 mt-1 w-2 h-2 rounded-full",
                          colorVariants[step.color].text
                        )}
                      ></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
