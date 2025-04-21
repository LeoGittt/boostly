"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Aquí iría la lógica para registrar la vista de página
    // Por ejemplo, con Google Analytics, Plausible, etc.
    console.log(`Página vista: ${pathname}${searchParams ? `?${searchParams}` : ""}`)
  }, [pathname, searchParams])

  return null
}
