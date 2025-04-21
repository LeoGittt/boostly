"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"

export default function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const clients = [
    { name: "Cliente 1", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Cliente 2", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Cliente 3", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Cliente 4", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Cliente 5", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Cliente 6", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section className="py-12 border-y border-border bg-card/20" ref={ref}>
      <div className="container-width">
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-sm">CONFÍAN EN NOSOTROS</p>
        </div>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              className="relative h-8 w-24 opacity-50 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute inset-0 bg-muted rounded-md"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
