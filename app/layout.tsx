import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { CookieConsent } from "@/components/cookie-consent"
import { ScrollProgress } from "@/components/scroll-progress"
import "./globals.css"
import { Suspense } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Boostly",
  description:
    "Impulsamos tu marca, transformamos tu presencia digital con estrategias creativas y resultados medibles."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth w-full" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased w-full`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="w-full">
            <Navbar/>
            <ScrollProgress />
            <Suspense fallback={<div>Cargando análisis...</div>}>
              <Analytics />
            </Suspense>
            <Suspense fallback={<div>Cargando contenido...</div>}>
              {children}
            </Suspense>
            <CookieConsent />
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
