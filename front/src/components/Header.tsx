"use client"

import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div>
        <Link href="/">Universe</Link>
      </div>

      <nav>
        <Link href="/apod">Astronomical Photos</Link>
        <Link href="/solar-system">Solar System</Link>
        <Link href="/astro-events">Astronomical Events</Link>
        {/* <Link href="">Travel Beyond</Link> */}
      </nav>

      {/* Botão de Menu Mobile */}
      <button onClick={toggleMobileMenu}>☰</button>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div>
          <nav>
            <Link href="/apod" onClick={toggleMobileMenu}>Astronomical Photos</Link>
            <Link href="/solar-system" onClick={toggleMobileMenu}>Solar System</Link>
            <Link href="/astro-events" onClick={toggleMobileMenu}>Astronomical Events</Link>
            {/* <Link href="/" onClick={toggleMobileMenu}>Travel Beyond</Link> */}
          </nav>
        </div>
      )}
    </header>
  );
};
