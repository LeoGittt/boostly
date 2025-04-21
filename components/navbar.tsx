"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const NAV_LINKS = [
  { name: "Proceso", href: "/proceso" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
]

const SERVICES_LINKS = [
  { name: "Marketing Digital", href: "/servicios/marketing-digital" },
  { name: "Desarrollo Web", href: "/servicios/desarrollo-web" },
  { name: "Branding & Diseño", href: "/servicios/branding" },
  { name: "Ver todos", href: "/servicios" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-2 shadow-sm" : "py-4",
        )}
      >
        <div className="container-width flex items-center justify-between w-full">
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            aria-label="Inicio"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative h-9 w-9 md:h-10 md:w-10 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/logo.png" 
                alt="Boostly Logo" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 36px, 40px"
                priority
              />
            </div>
            <span className="font-medium text-lg tracking-tight">Boostly</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-1 px-3 hover:bg-accent/50"
                  aria-label="Servicios"
                >
                  Servicios
                  <ChevronDown className="h-4 w-4 opacity-50 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center" 
                className="w-56 p-1 rounded-lg shadow-lg"
                sideOffset={8}
              >
                {SERVICES_LINKS.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link 
                      href={link.href} 
                      className="w-full px-2 py-2 rounded-md hover:bg-accent focus:bg-accent transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.name}
              </NavLink>
            ))}
            
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="ml-2 rounded-full h-9 w-9 flex items-center justify-center hover:bg-accent/50"
              aria-label="Cambiar tema"
            >
              {mounted ? (
                theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <div className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
            
            <Button size="sm" className="ml-2" asChild>
              <Link href="/contacto">
                Empezar proyecto
              </Link>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9 flex items-center justify-center"
              aria-label="Cambiar tema"
            >
              {mounted ? (
                theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <div className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground h-9 w-9"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b border-border fixed top-[72px] left-0 right-0 z-50 shadow-lg w-full"
          >
            <div className="container-width py-6 flex flex-col space-y-4">
              <MobileNavLink 
                href="/servicios" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </MobileNavLink>
              
              {NAV_LINKS.map((link) => (
                <MobileNavLink 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </MobileNavLink>
              ))}
              
              <Button 
                className="w-full mt-4" 
                size="sm"
                asChild
              >
                <Link 
                  href="/contacto"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Empezar proyecto
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Button 
      variant="ghost" 
      className="px-3 hover:bg-accent/50" 
      asChild
    >
      <Link href={href}>
        {children}
      </Link>
    </Button>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-foreground py-3 px-1 transition-colors hover:text-primary font-medium text-base border-b border-border/50 last:border-0"
    >
      {children}
    </Link>
  )
}