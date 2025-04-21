"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function BlogHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      <div className="absolute inset-0 bg-[url('/images/blog-pattern.svg')] opacity-5" />
      
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Blog de Marketing Digital
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Descubre las últimas tendencias, consejos y estrategias para impulsar tu negocio en el mundo digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar artículos..."
                className="pl-10"
              />
            </div>
            <Button>Buscar</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 