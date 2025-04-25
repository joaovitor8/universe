"use client"

import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-5 px-10 mb-10 flex justify-between items-center max-md:justify-end">
      <div className="max-md:hidden">
        <Link href="/" className="text-4xl">Universe</Link>
      </div>

      <nav className="space-x-6 max-md:hidden">
        <Link href="/apod" className="hover:underline decoration-purple-900 decoration-2 underline-offset-4">Astronomical Photos</Link>
        <Link href="/solar-system" className="hover:underline decoration-purple-900 decoration-2 underline-offset-4">Solar System</Link>
        <Link href="/astro-events" className="hover:underline decoration-purple-900 decoration-2 underline-offset-4">Astronomical Events</Link>
        {/* <Link href="" className="hover:underline decoration-purple-900 decoration-2 underline-offset-4">Travel Beyond</Link> */}
      </nav>

      {/* Botão de Menu Mobile */}
      <button onClick={toggleMobileMenu} className="text-purple-700 text-3xl md:hidden">☰</button>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 right-0 bg-purple-950 rounded-l-lg w-[300px] p-5 shadow-lg md:hidden">
          <nav className="space-y-4 flex flex-col">
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
