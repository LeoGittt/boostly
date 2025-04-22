"use client";

import { JSX, useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Calendar, Clock, BookOpen, PenTool, Code, TrendingUp } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Post = {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  date: string;
  readTime: string;
  category: "marketing" | "web" | "branding" | "default";
  image: string;
  featured: boolean;
};

type Category = {
  id: "all" | "marketing" | "web" | "branding";
  label: string;
  icon: JSX.Element;
};

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<"all" | "marketing" | "web" | "branding">("all");

  const colorVariants = {
    marketing: {
      bg: "bg-pink-500/10",
      text: "text-pink-600",
      border: "border-pink-500/20",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    web: {
      bg: "bg-blue-500/10",
      text: "text-blue-600",
      border: "border-blue-500/20",
      icon: <Code className="h-4 w-4" />,
    },
    branding: {
      bg: "bg-purple-500/10",
      text: "text-purple-600",
      border: "border-purple-500/20",
      icon: <PenTool className="h-4 w-4" />,
    },
    default: {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/20",
      icon: <BookOpen className="h-4 w-4" />,
    },
  };

  const categories: Category[] = [
    { id: "all", label: "Todos", icon: <BookOpen className="h-4 w-4" /> },
    { id: "marketing", label: "Marketing", icon: <TrendingUp className="h-4 w-4" /> },
    { id: "web", label: "Desarrollo", icon: <Code className="h-4 w-4" /> },
    { id: "branding", label: "Branding", icon: <PenTool className="h-4 w-4" /> },
  ];

  const posts: Post[] = [
    {
      id: 1,
      title: "10 estrategias de marketing digital para dominar en 2025",
      shortTitle: "Marketing en 2025",
      description: "Descubre las tendencias innovadoras que transformarán el panorama del marketing digital el próximo año y cómo prepararte para ellas.",
      date: "15 Abr 2025",
      readTime: "5 min",
      category: "marketing",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 2,
      title: "Optimización extrema: Guía completa para acelerar tu sitio web",
      shortTitle: "Velocidad web",
      description: "Técnicas avanzadas para mejorar radicalmente el rendimiento de tu sitio y ofrecer una experiencia de usuario excepcional.",
      date: "10 Abr 2025",
      readTime: "7 min",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 3,
      title: "Branding en la era digital: Construyendo identidades memorables",
      shortTitle: "Branding digital",
      description: "Cómo crear una identidad de marca poderosa que resuene con tu audiencia en un mundo cada vez más digital.",
      date: "5 Abr 2025",
      readTime: "4 min",
      category: "branding",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 4,
      title: "React 19: Lo que necesitas saber sobre las nuevas características",
      shortTitle: "React 19",
      description: "Un vistazo profundo a las novedades de React 19 y cómo pueden beneficiar a tus proyectos de desarrollo.",
      date: "3 Abr 2025",
      readTime: "6 min",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 5,
      title: "Storytelling de marca: Cautiva a tu audiencia con narrativas poderosas",
      shortTitle: "Storytelling",
      description: "Estrategias efectivas para construir conexiones emocionales a través de historias auténticas de marca.",
      date: "28 Mar 2025",
      readTime: "5 min",
      category: "branding",
      image: "/placeholder.svg?height=400&width=600",
      featured: false,
    },
    {
      id: 6,
      title: "SEO técnico 2025: Más allá de los fundamentos",
      shortTitle: "SEO técnico",
      description: "Tácticas avanzadas de SEO técnico que te darán ventaja en los resultados de búsqueda del próximo año.",
      date: "22 Mar 2025",
      readTime: "8 min",
      category: "marketing",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
  ];

  const filteredPosts = posts.filter((post) => activeCategory === "all" || post.category === activeCategory);

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
    <section id="blog" className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 relative overflow-hidden bg-gradient-to-b from-card/10 to-transparent">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]"></div>

      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative" ref={ref}>
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
            CONOCIMIENTO
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Artículos y guías</span>{" "}
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">para impulsar tu negocio</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Compartimos conocimientos, tendencias y estrategias probadas para ayudarte a destacar en el mundo digital.
          </p>
        </motion.div>

        {/* Filtros de categoría */}
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
                  activeCategory === category.id ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:bg-accent/30",
                  activeCategory === category.id && ((colorVariants[category.id as keyof typeof colorVariants] || colorVariants.default).text)
                )}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Artículos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                layout
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className={cn(
                  post.featured && "lg:col-span-1",
                  post.featured && activeCategory === "all" && "lg:col-span-2 lg:row-span-2"
                )}
              >
                <motion.div whileHover="hover" variants={cardVariants} className="h-full">
                  <Card className="h-full overflow-hidden border-border/20 group perspective-1000">
                    {/* Imagen del artículo */}
                    <div
                      className={cn(
                        "aspect-[3/2] bg-secondary/50 relative overflow-hidden",
                        post.featured && activeCategory === "all" && "lg:aspect-[4/3]"
                      )}
                    >
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

                      {/* Badge destacado */}
                      {post.featured && (
                        <div className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground shadow-sm">
                          Destacado
                        </div>
                      )}

                      {/* Badge de categoría */}
                      <div
                        className={cn(
                          "absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm",
                          colorVariants[post.category]?.bg || colorVariants.default.bg,
                          colorVariants[post.category]?.text || colorVariants.default.text,
                          "shadow-sm"
                        )}
                      >
                        {categories.find((c) => c.id === post.category)?.label}
                      </div>
                    </div>

                    {/* Contenido del artículo */}
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg lg:text-xl line-clamp-2">
                        {activeCategory === "all" && post.featured ? post.title : post.shortTitle}
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">{post.description}</CardDescription>
                    </CardHeader>

                    <CardFooter className="mt-auto">
                      <Button
                        variant="ghost"
                        className="p-0 h-auto group text-foreground hover:text-primary"
                        asChild
                      >
                        <Link href={`/blog/${post.id}`}>
                          Leer artículo
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group" asChild>
            <Link href="/blog">
              Explorar todos los artículos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}