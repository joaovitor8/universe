"use client"

import { useState } from "react"
import Link from "next/link"

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header>
      <div>
        <Link href="/">Universe</Link>
      </div>

      <nav>
        <Link href="/apod">Astronomical Photos</Link>
        <Link href="/solar-system">Solar System</Link>
        <Link href="/astro-events">Astronomical Events</Link>
        <Link href="">Travel Beyond</Link>
      </nav>



      {/*Mobile */}
      <button onClick={toggleMobileMenu}>☰</button>

      {isMobileMenuOpen && (
        <div>
          <nav>
            <Link href="/apod" onClick={toggleMobileMenu}>Astronomical Photos</Link>
            <Link href="/solar-system" onClick={toggleMobileMenu}>Solar System</Link>
            <Link href="/astro-events" onClick={toggleMobileMenu}>Astronomical Events</Link>
            <Link href="/" onClick={toggleMobileMenu}>Travel Beyond</Link>
          </nav>
        </div>
      )}
    </header>
  )
}


// faça a estilização do componente sem mecher na estrutura, quero uma estilização minimalista e moderno com responsividade mandendo o foco no tema, que é espacial, só mexa na estrutura só for para melhorar para as boas praticas