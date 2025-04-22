"use client";

import { JSX, useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  ChevronDown,
  HelpCircle,
  Clock,
  Mail,
  Settings,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Faq() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<keyof typeof faqs>("general");

  const categories: { id: keyof typeof faqs; label: string; icon: JSX.Element }[] = [
      {
        id: "general",
        label: "General",
        icon: <HelpCircle className="h-4 w-4" />,
      },
      { id: "timelines", label: "Tiempos", icon: <Clock className="h-4 w-4" /> },
      {
        id: "communication",
        label: "Comunicación",
        icon: <Mail className="h-4 w-4" />,
      },
      {
        id: "technical",
        label: "Técnico",
        icon: <Settings className="h-4 w-4" />,
      },
      {
        id: "results",
        label: "Resultados",
        icon: <TrendingUp className="h-4 w-4" />,
      },
    ];

  const faqs = {
    general: [
      {
        id: "gen-1",
        question: "¿Qué información necesitan para comenzar un proyecto?",
        answer:
          "Para iniciar un proyecto, necesitamos entender tus objetivos de negocio, público objetivo, competidores, preferencias de diseño y cualquier material existente (logo, contenido, etc.). Tenemos un cuestionario detallado que te enviaremos para recopilar esta información, seguido de una reunión de descubrimiento para profundizar en los detalles.",
      },
      {
        id: "gen-2",
        question: "¿Trabajan con empresas de cualquier tamaño?",
        answer:
          "Sí, trabajamos con empresas de todos los tamaños, desde startups y pequeñas empresas hasta grandes corporaciones. Adaptamos nuestros servicios y soluciones para satisfacer las necesidades específicas y el presupuesto de cada cliente, asegurando que reciban el máximo valor independientemente de su tamaño.",
      },
    ],
    timelines: [
      {
        id: "time-1",
        question: "¿Cuánto tiempo toma desarrollar un sitio web?",
        answer:
          "El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page simple puede estar lista en 1-2 semanas, mientras que un sitio web corporativo completo o un e-commerce puede tomar de 4 a 12 semanas. Durante nuestra consulta inicial, te proporcionaremos un cronograma detallado basado en tus requisitos específicos.",
      },
      {
        id: "time-2",
        question: "¿Cuál es el plazo para ver resultados de marketing?",
        answer:
          "Los resultados de marketing varían según la estrategia implementada. Las campañas de publicidad pueden mostrar resultados iniciales en días, mientras que estrategias orgánicas como SEO pueden tomar 3-6 meses para mostrar impacto significativo. Implementamos métricas tempranas para medir el progreso desde el inicio.",
      },
    ],
    communication: [
      {
        id: "comm-1",
        question: "¿Cómo es el proceso de comunicación durante los proyectos?",
        answer:
          "Mantenemos comunicación constante a través de canales dedicados (Slack, email, reuniones semanales). Asignamos un gestor de proyecto como punto de contacto único y utilizamos herramientas de gestión para mantenerte informado del progreso en tiempo real.",
      },
      {
        id: "comm-2",
        question: "¿Qué tan frecuentes son las actualizaciones de progreso?",
        answer:
          "Proporcionamos actualizaciones formales semanales con informes detallados, además de comunicación diaria según sea necesario. Para proyectos críticos, podemos establecer reuniones diarias de seguimiento durante las fases clave.",
      },
    ],
    technical: [
      {
        id: "tech-1",
        question:
          "¿Ofrecen servicios de mantenimiento después del lanzamiento?",
        answer:
          "Sí, ofrecemos varios planes de mantenimiento para asegurar que tu sitio web permanezca actualizado, seguro y funcionando de manera óptima. Estos planes incluyen actualizaciones regulares, copias de seguridad, monitoreo de seguridad, soporte técnico y pequeñas modificaciones de contenido.",
      },
      {
        id: "tech-2",
        question: "¿Qué tecnologías utilizan en el desarrollo?",
        answer:
          "Trabajamos con las tecnologías más modernas y adecuadas para cada proyecto, incluyendo Next.js, React, Tailwind CSS para frontend; Node.js, Python para backend; y WordPress para CMS. Seleccionamos la mejor stack tecnológica basada en los requisitos de tu proyecto.",
      },
    ],
    results: [
      {
        id: "res-1",
        question: "¿Cómo miden el éxito de las campañas de marketing?",
        answer:
          "Medimos el éxito a través de KPIs específicos alineados con tus objetivos de negocio. Esto puede incluir tráfico web, tasas de conversión, generación de leads, engagement en redes sociales, ROI de publicidad y más. Proporcionamos informes detallados y transparentes que muestran el rendimiento de tus campañas y las áreas de mejora.",
      },
      {
        id: "res-2",
        question: "¿Garantizan resultados específicos?",
        answer:
          "Si bien no podemos garantizar resultados específicos (como posiciones en buscadores o ventas), garantizamos que implementaremos las mejores prácticas y estrategias probadas para maximizar tus resultados. Nuestro enfoque basado en datos nos permite optimizar continuamente para obtener el mejor rendimiento posible.",
      },
    ],
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

  return (
    <section
      id="faq"
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
            PREGUNTAS FRECUENTES
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Respuestas claras
            </span>{" "}
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              a tus preguntas
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Hemos recopilado las preguntas más comunes para ayudarte a entender
            mejor nuestros servicios y procesos.
          </p>
        </motion.div>

        {/* Filtros por categoría */}
        <motion.div
          className="flex justify-center mb-8 md:mb-12 overflow-x-auto pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex bg-background/50 backdrop-blur-sm border border-border/20 rounded-xl p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                  activeCategory === category.id
                    ? "bg-background shadow-sm text-primary"
                    : "text-muted-foreground hover:bg-accent/30"
                )}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Acordeón de preguntas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs[activeCategory]?.map((faq, i) => (
              <motion.div key={faq.id} variants={itemVariants}>
                <AccordionItem
                  value={faq.id}
                  className="border-border/20 overflow-hidden rounded-lg hover:bg-card/50 transition-colors"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline text-left flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <HelpCircle className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-base sm:text-lg">
                        {faq.question}
                      </span>
                    </div>
                    
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-1 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA adicional */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">
            ¿No encontraste lo que buscabas?
          </p>
          <Button asChild>
            <Link href="/contacto">Contáctanos para más información</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
