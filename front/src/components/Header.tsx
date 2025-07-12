"use client"

import { useState } from "react"
import Link from "next/link"

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="p-4 mb-10">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide text-purple-700">Universe</Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/apod" className="hover:underline decoration-purple-700 decoration-2 underline-offset-4">Astronomical Photos</Link>
          <Link href="/neows" className="hover:underline decoration-purple-700 decoration-2 underline-offset-4">Near Earth Objects</Link>

          <Link href="/solar-system" className="hover:underline decoration-purple-700 decoration-2 underline-offset-4">Solar System</Link>
          <Link href="/news" className="hover:underline decoration-purple-700 decoration-2 underline-offset-4">News</Link>
        </nav>

        <button
          onClick={toggleMobileMenu}
          className="text-2xl md:hidden focus:outline-none text-purple-700"
          aria-label="Toggle menu"
        >☰</button>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-background mt-2 px-8 py-10 border border-purple-700 rounded-lg absolute right-2 md:hidden animate-slide-down">
          <nav className="flex flex-col space-y-4">
            <Link href="/apod" onClick={toggleMobileMenu} className="hover:text-purple-700">Astronomical Photos</Link>
            <Link href="/neows" onClick={toggleMobileMenu} className="hover:text-purple-700">Near Earth Objects</Link>
            
            <Link href="/solar-system" onClick={toggleMobileMenu} className="hover:text-purple-700">Solar System</Link>
            <Link href="/news" className="hover:underline decoration-purple-700 decoration-2 underline-offset-4">News</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
