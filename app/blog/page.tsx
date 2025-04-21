"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Eye, MessageSquare, Rocket, Sparkles, Zap, Search, X, Bookmark, Share2, BookOpen, ChevronDown, Loader2, Heart, BookmarkCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface Post {
  id: number
  title: string
  excerpt: string
  category: string
  readTime: string
  views: string
  comments: number
  image: string
  date: string
  featured?: boolean
  tags: string[]
  author: {
    name: string
    avatar: string
    role: string
  }
  content: string
}

const BLOG_POSTS: Post[] = [
  {
    id: 1,
    title: "Estrategias de Marketing Digital para 2024",
    excerpt: "Descubre las tendencias que dominarán el panorama digital este año y cómo aprovecharlas para tu negocio.",
    category: "Marketing",
    readTime: "8 min",
    views: "1.2K",
    comments: 24,
    image: "/images/blog/marketing.jpg",
    date: "15 Ene 2024",
    featured: true,
    tags: ["Tendencias", "Redes Sociales", "Growth Hacking"],
    author: {
      name: "María González",
      avatar: "/images/avatars/1.jpg",
      role: "Especialista en Marketing"
    },
    content: `
      <h2>Introducción</h2>
      <p>El marketing digital en 2024 está evolucionando a un ritmo sin precedentes. Las nuevas tecnologías y cambios en el comportamiento del consumidor están redefiniendo las estrategias efectivas.</p>
      
      <h3>Tendencia 1: Marketing Conversacional</h3>
      <p>Los chatbots y asistentes IA están transformando la atención al cliente. Según estudios, el 65% de los consumidores prefieren resolver sus dudas mediante chat antes que llamar por teléfono.</p>
      
      <h3>Tendencia 2: Vídeo Corto Dominante</h3>
      <p>Plataformas como TikTok y Reels de Instagram están liderando el engagement. Los vídeos de menos de 30 segundos captan un 300% más de atención que los formatos largos.</p>
      
      <h2>Conclusión</h2>
      <p>Adaptarse a estas tendencias no es opcional. Las empresas que implementen estrategias de marketing conversacional y contenido en formato vídeo corto verán un ROI significativamente mayor.</p>
    `
  },
  // ... (otros posts con estructura similar)
]

const CATEGORIES = [
  { name: "Todos", icon: <Sparkles className="h-4 w-4" />, count: BLOG_POSTS.length },
  { name: "Marketing", icon: <Rocket className="h-4 w-4" />, count: BLOG_POSTS.filter(post => post.category === "Marketing").length },
  { name: "Diseño", icon: <Sparkles className="h-4 w-4" />, count: BLOG_POSTS.filter(post => post.category === "Diseño").length },
  { name: "Desarrollo", icon: <Zap className="h-4 w-4" />, count: BLOG_POSTS.filter(post => post.category === "Desarrollo").length },
  { name: "Branding", icon: <Bookmark className="h-4 w-4" />, count: BLOG_POSTS.filter(post => post.category === "Branding").length }
]

export default function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2])
  
  const filteredPosts = (activeCategory === "Todos" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory))
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))))
  
  const featuredPosts = BLOG_POSTS.filter(post => post.featured)
  
  const words = [
    { text: "Explora" },
    { text: "nuestro" },
    { text: "conocimiento", className: "text-primary" },
    { text: "y" },
    { text: "aprende", className: "text-primary" },
    { text: "🚀" }
  ]

  const openModal = (post: Post): void => {
    setIsLoading(true)
    setSelectedPost(post)
    // Simular carga de contenido
    setTimeout(() => {
      setIsLoading(false)
    }, 800)
  }

  const closeModal = () => {
    setSelectedPost(null)
    setIsBookmarked(false)
    setIsLiked(false)
  }

  return (
    <div className="relative overflow-hidden">
      {/* Particle background */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${Math.random() * 12 + 3}px`,
              height: `${Math.random() * 12 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient blobs */}
      <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, 60, 0] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full filter blur-[100px] opacity-30"
        />
        <motion.div 
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 35, repeat: Infinity, repeatType: "reverse", delay: 8 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-[90px] opacity-30"
        />
        <motion.div 
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 50, repeat: Infinity, repeatType: "reverse", delay: 15 }}
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-pink-500/10 rounded-full filter blur-[120px] opacity-30"
        />
      </div>

      <div className="fixed inset-0 bg-grid opacity-[0.02] -z-30 pointer-events-none" />

      <motion.section 
        ref={containerRef}
        style={{ opacity }}
        className="relative pt-32 pb-20 md:pt-40 md:pb-32"
      >
        <div className="container-width">
          {/* Hero Header */}
          <motion.div 
            style={{ y }}
            className="max-w-4xl mx-auto text-center mb-16 px-4"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary hover:bg-primary/10">
                <Rocket className="h-3.5 w-3.5 mr-1.5" />
                Artículos recientes • Actualizado diariamente
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" 
                cursorClassName="h-10 bg-primary/80"
              />
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Descubre artículos especializados en marketing digital, desarrollo web, diseño UX/UI y estrategias de crecimiento para tu negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <Button asChild variant="default" className="rounded-full px-6 h-11 group shadow-lg shadow-primary/20 hover:shadow-primary/30">
                <Link href="#featured">
                  Artículos destacados
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-6 h-11 group border-border/50 hover:border-primary/30"
                onClick={() => setShowSearch(!showSearch)}
              >
                {showSearch ? (
                  <X className="h-4 w-4" />
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Buscar artículos
                  </>
                )}
              </Button>
            </motion.div>
          </motion.div>

          {/* Search Bar */}
          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-12 max-w-2xl mx-auto px-4"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar artículos, categorías o tags..."
                    className="pl-11 pr-4 py-6 text-base border-border/50 bg-background/80 backdrop-blur-sm focus-visible:ring-primary/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {CATEGORIES.map((category) => (
              <Button
                key={category.name}
                variant={activeCategory === category.name ? "default" : "outline"}
                size="sm"
                className={cn(
                  "rounded-full px-4 h-9 flex items-center gap-2 transition-all border-border/50",
                  activeCategory === category.name ? "shadow-lg shadow-primary/10" : ""
                )}
                onClick={() => {
                  setActiveCategory(category.name)
                  setShowSearch(false)
                  setSearchQuery("")
                }}
              >
                {category.icon}
                {category.name}
                <span className="text-xs opacity-80 ml-1">({category.count})</span>
              </Button>
            ))}
          </motion.div>

          {/* Featured Posts */}
          <motion.section
            id="featured"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold mb-8 px-4 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
              Artículos Destacados
              <span className="ml-auto text-sm font-normal text-muted-foreground">
                {featuredPosts.length} artículos
              </span>
            </h2>

            <div className="space-y-8">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background/50 to-background/80 rounded-2xl -z-10" />
                  <div className="grid md:grid-cols-2 gap-8 items-center p-1">
                    <div className="relative overflow-hidden rounded-xl aspect-video md:aspect-[4/3] shadow-2xl border border-border/50 group-hover:border-primary/30 transition-colors">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <Badge className="absolute top-4 left-4 flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5" />
                        Destacado
                      </Badge>
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        {post.tags?.slice(0, 2).map((tag) => (
                          <Badge variant="secondary" key={tag} className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary" className="px-3 py-1">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.id}`} className="hover:underline underline-offset-4">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground mb-6 text-lg">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-6">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {post.readTime} lectura
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Eye className="h-4 w-4" />
                          {post.views} vistas
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MessageSquare className="h-4 w-4" />
                          {post.comments} comentarios
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Button 
                          onClick={() => openModal(post)}
                          className="group rounded-full px-6 shadow hover:shadow-md"
                        >
                          <BookOpen className="h-4 w-4 mr-2" />
                          Leer ahora
                          <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-border/50">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-border/50">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* All Posts */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center justify-between mb-8 px-4">
              <h2 className="text-2xl font-bold flex items-center">
                {activeCategory === "Todos" ? (
                  <>
                    <Rocket className="h-5 w-5 mr-2 text-primary" />
                    Todos los Artículos
                  </>
                ) : (
                  <>
                    {CATEGORIES.find(c => c.name === activeCategory)?.icon}
                    <span className="ml-2">{activeCategory}</span>
                  </>
                )}
              </h2>
              <span className="text-sm text-muted-foreground">
                {filteredPosts.length} {filteredPosts.length === 1 ? "artículo" : "artículos"}
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <div className="mx-auto max-w-md">
                  <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-bold mb-2">No se encontraron artículos</h3>
                  <p className="text-muted-foreground mb-6">
                    No hay resultados para "{searchQuery}" en {activeCategory === "Todos" ? "todos los artículos" : activeCategory}.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery("")
                      setActiveCategory("Todos")
                    }}
                  >
                    Mostrar todos los artículos
                  </Button>
                </div>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <article className="h-full flex flex-col border border-border/50 rounded-xl overflow-hidden bg-card/50 hover:bg-card transition-colors shadow-sm hover:shadow-md relative">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Badge variant="secondary" className="absolute top-3 left-3">
                          {post.category}
                        </Badge>
                        {post.tags && post.tags.length > 0 && (
                          <div className="absolute bottom-3 left-3 flex gap-2">
                            {post.tags.slice(0, 2).map(tag => (
                              <Badge 
                                key={tag} 
                                variant="outline" 
                                className="text-xs bg-background/80 backdrop-blur-sm"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          <Link href={`/blog/${post.id}`} className="hover:underline underline-offset-4">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto flex items-center justify-between text-sm">
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <Eye className="h-4 w-4" />
                            {post.views}
                          </span>
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <MessageSquare className="h-4 w-4" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-full hover:bg-primary/10"
                          onClick={() => openModal(post)}
                        >
                          <BookOpen className="h-3.5 w-3.5" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-full hover:bg-primary/10"
                        >
                          <Bookmark className="h-3.5 w-3.5" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-full hover:bg-primary/10"
                        >
                          <Share2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </article>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 text-center bg-gradient-to-br from-primary/5 to-background border border-border/50 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02] -z-10" />
            <div className="max-w-2xl mx-auto relative">
              <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/20 bg-primary/5 text-primary">
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Newsletter Exclusivo
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para llevar tu negocio al siguiente nivel?</h3>
              <p className="text-muted-foreground mb-8">
                Suscríbete a nuestro newsletter y recibe los últimos artículos, recursos exclusivos y consejos directamente en tu inbox.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button className="bg-primary hover:bg-primary/90 h-14 px-6 group shadow-lg hover:shadow-primary/30">
                  Suscribirse
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No spam. Solo contenido de valor. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </motion.section>
        </div>
      </motion.section>

      {/* Modal de Lectura */}
      <AnimatePresence>
        {selectedPost && (
          <Dialog open={!!selectedPost} onOpenChange={closeModal}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden">
              {isLoading ? (
                <div className="flex items-center justify-center h-96">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <>
                  <DialogHeader className="p-6 pb-0">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="px-3 py-1">
                        {selectedPost.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {selectedPost.date}
                      </span>
                    </div>
                    <DialogTitle className="text-3xl font-bold mb-2">
                      {selectedPost.title}
                    </DialogTitle>
                    <DialogDescription className="text-lg">
                      {selectedPost.excerpt}
                    </DialogDescription>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={selectedPost.author.avatar} />
                          <AvatarFallback>{selectedPost.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{selectedPost.author.name}</p>
                          <p className="text-xs text-muted-foreground">{selectedPost.author.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-auto">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="rounded-full"
                          onClick={() => setIsLiked(!isLiked)}
                        >
                          <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                          {isLiked ? 'Me gusta' : 'Dar me gusta'}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="rounded-full"
                          onClick={() => setIsBookmarked(!isBookmarked)}
                        >
                          {isBookmarked ? (
                            <BookmarkCheck className="h-4 w-4 mr-2 text-primary" />
                          ) : (
                            <Bookmark className="h-4 w-4 mr-2" />
                          )}
                          {isBookmarked ? 'Guardado' : 'Guardar'}
                        </Button>
                        <Button variant="ghost" size="sm" className="rounded-full">
                          <Share2 className="h-4 w-4 mr-2" />
                          Compartir
                        </Button>
                      </div>
                    </div>
                    <Separator className="mt-4" />
                  </DialogHeader>
                  <ScrollArea className="h-[60vh] p-6">
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                        <Image
                          src={selectedPost.image}
                          alt={selectedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                    </div>
                  </ScrollArea>
                  <div className="p-6 border-t">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {selectedPost.readTime} lectura
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Eye className="h-4 w-4" />
                          {selectedPost.views} vistas
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MessageSquare className="h-4 w-4" />
                          {selectedPost.comments} comentarios
                        </span>
                      </div>
                      <Button asChild className="rounded-full">
                        <Link href={`/blog/${selectedPost.id}`}>
                          Ver artículo completo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}