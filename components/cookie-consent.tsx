"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Mostrar el banner después de un breve retraso
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:max-w-md z-50"
        >
          <div className="bg-card border border-border rounded-lg shadow-lg p-4 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 h-6 w-6 text-muted-foreground hover:text-foreground"
              onClick={declineCookies}
            >
              <X className="h-4 w-4" />
            </Button>
            <h3 className="font-medium mb-2">🍪 Usamos cookies</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes aceptarlas o configurar tus
              preferencias.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={declineCookies}>
                Rechazar
              </Button>
              <Button size="sm" onClick={acceptCookies}>
                Aceptar
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
