"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextGenerateEffectProps {
  words: string
  className?: string
}

export const TextGenerateEffect = ({ words, className }: TextGenerateEffectProps) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn("text-lg text-muted-foreground", className)}
    >
      {words}
    </motion.p>
  )
} 