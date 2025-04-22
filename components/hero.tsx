"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  Rocket,
  Sparkles,
  Zap,
  BarChart,
} from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const smoothY = useSpring(y, { damping: 20, stiffness: 100 });
  const smoothOpacity = useSpring(opacity, { damping: 20, stiffness: 100 });
  const smoothScale = useSpring(scale, { damping: 20, stiffness: 100 });

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
  ];

  const features = [
    { icon: <Rocket className="h-4 w-4" />, text: "Marketing Digital" },
    { icon: <Zap className="h-4 w-4" />, text: "Desarrollo Web" },
    { icon: <Sparkles className="h-4 w-4" />, text: "Branding & Diseño" },
    { icon: <BarChart className="h-4 w-4" />, text: "Analítica & SEO" },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  if (!mounted) return null;

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary"
            >
              <Rocket className="h-3.5 w-3.5 mr-1.5" />
              Elevamos tu marca al siguiente nivel
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <TypewriterEffect
              words={words}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            />
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Diseño, desarrollo y estrategias de marketing que elevan tu negocio
            con un enfoque creativo y resultados medibles.
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
                  i === currentIndex
                    ? "border-primary/50 bg-primary/5 text-primary"
                    : "text-muted-foreground"
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
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 group"
              asChild
            >
              <Link href="/contacto">
                Comenzar proyecto
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-border hover:bg-secondary group"
              asChild
            >
              <Link href="/servicios">
                Ver servicios
                <Sparkles className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* 3D Device Mockup */}
        {/* 3D Device Mockup Mejorado */}
        <motion.div
          className="mt-16 md:mt-24 relative max-w-5xl mx-auto perspective-1000"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.div
            className="rounded-xl border-2 border-border/50 overflow-hidden shadow-2xl bg-gradient-to-br from-card to-card/70 backdrop-blur-sm"
            whileHover={{
              rotateX: -8,
              rotateY: 8,
              translateZ: 30,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Barra de título con efecto de vidrio */}
            <div className="h-10 bg-background/80 backdrop-blur-md border-b border-border/50 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-destructive shadow-[0_0_4px_#ef4444]"></div>
                <div className="w-3 h-3 rounded-full bg-warning shadow-[0_0_4px_#eab308]"></div>
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_4px_hsl(var(--primary))]"></div>
              </div>
              <div className="ml-4 h-4 w-48 bg-muted/30 rounded-full animate-pulse"></div>
            </div>

            {/* Contenido del dashboard */}
            <div className="bg-gradient-to-br from-card/70 to-card/30 aspect-[16/9] relative overflow-hidden">
              {/* Efecto de reflexión sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

              {/* Dashboard interface mockup */}
              <div className="absolute inset-0 p-5 flex">
                {/* Sidebar */}
                <motion.div
                  className="w-56 bg-card/80 h-full rounded-lg border border-border/50 p-4 flex flex-col backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-24 h-5 bg-muted/50 rounded mb-6 animate-pulse"></div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted/30 transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        <div className="w-5 h-5 rounded-sm bg-primary/30 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <div className="w-32 h-3 bg-muted/50 rounded animate-pulse"></div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 w-36 h-4 bg-muted/50 rounded animate-pulse"></div>
                  <div className="mt-4 space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-3 p-2 rounded-md"
                      >
                        <div className="w-5 h-5 rounded-sm bg-muted/50 animate-pulse"></div>
                        <div className="w-28 h-3 bg-muted/50 rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Contenido principal */}
                <div className="flex-1 pl-5 flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-56 h-7 bg-muted/50 rounded-full animate-pulse"></div>
                    <div className="flex space-x-3">
                      <motion.div
                        className="w-24 h-9 bg-secondary rounded-lg flex items-center justify-center text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="opacity-70">Filtrar</span>
                      </motion.div>
                      <motion.div
                        className="w-24 h-9 bg-primary rounded-lg flex items-center justify-center text-sm font-medium text-primary-foreground"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Exportar</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Cards de métricas */}
                  <div className="grid grid-cols-3 gap-5 mb-6">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="bg-card/80 border border-border/30 rounded-xl p-4 h-32 backdrop-blur-sm"
                        whileHover={{
                          y: -3,
                          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-secondary/30 mb-3 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-sm bg-primary/30 animate-pulse"></div>
                        </div>
                        <div className="w-24 h-3 bg-muted/50 rounded mb-2 animate-pulse"></div>
                        <div className="w-20 h-4 bg-muted/70 rounded-full animate-pulse"></div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Gráfico */}
                  <motion.div
                    className="flex-1 bg-card/80 border border-border/30 rounded-xl p-5 backdrop-blur-sm"
                    whileHover={{ scale: 1.005 }}
                  >
                    <div className="flex justify-between items-center mb-5">
                      <div className="w-40 h-5 bg-muted/50 rounded-full animate-pulse"></div>
                      <div className="w-32 h-4 bg-muted/50 rounded-full animate-pulse"></div>
                    </div>
                    <div className="h-48 relative">
                      {/* Ejes del gráfico */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50"></div>
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-border/50"></div>

                      {/* Gráfico animado */}
                      <motion.svg
                        viewBox="0 0 100 40"
                        className="w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <path
                          d="M0,40 C10,35 20,36 30,30 C40,32 50,20 60,23 C70,15 80,18 90,10 C100,12"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M0,40 C10,35 20,36 30,30 C40,32 50,20 60,23 C70,15 80,18 90,10 C100,12 L100,40 Z"
                          fill="url(#gradient)"
                          fillOpacity="0.2"
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="hsl(var(--primary))"
                              stopOpacity="0.3"
                            />
                            <stop
                              offset="100%"
                              stopColor="hsl(var(--primary))"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>

                        {/* Puntos interactivos */}
                        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(
                          (x, i) => (
                            <motion.circle
                              key={i}
                              cx={x}
                              cy={i % 2 === 0 ? 40 - i * 0.3 : 40 - i * 0.4}
                              r="1.5"
                              fill="hsl(var(--primary))"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.7 + i * 0.05 }}
                            />
                          )
                        )}
                      </motion.svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Link href="#servicios" className="flex flex-col items-center group">
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
  );
}
