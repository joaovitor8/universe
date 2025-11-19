"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"


export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((v) => !v)
  }

  // Fecha com ESC e bloqueia o scroll quando aberto
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  // Fecha ao clicar fora do menu
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!isMobileMenuOpen) return
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/apod", label: "Astronomical Photos" },
    { href: "/neows", label: "Near Earth Objects" },
    { href: "/solar-system", label: "Solar System" },
    { href: "/news", label: "News" },
  ]

  return (
    <header className="w-full sticky top-0 z-40 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold tracking-wide text-purple-600"> Universe </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6" aria-label="Primary">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`px-1 py-1 rounded-md transition-colors
                ${ pathname === link.href ? "text-purple-300 underline decoration-purple-700" : "hover:text-purple-400" }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-md text-purple-600 hover:bg-slate-900/30 focus:outline-none focus:ring-2 focus:ring-purple-500" aria-expanded={isMobileMenuOpen} aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"} >
            {isMobileMenuOpen ? (
              // close icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30" aria-hidden="true" />
          <div ref={menuRef} className="fixed right-4 top-20 w-[calc(100%-2rem)] max-w-xs bg-slate-950/95 border border-slate-800 rounded-lg p-6 z-40 shadow-lg animate-slide-down" role="dialog" aria-modal="true" >
            <nav className="flex flex-col space-y-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`block px-2 py-2 rounded-md transition-colors
                  ${ pathname === link.href ? "text-purple-300 bg-slate-900/40" : "hover:bg-slate-900/20 hover:text-purple-300" }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
