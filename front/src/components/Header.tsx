'use client'

import Link from "next/link"

export const Header = () => {
  return (
    <header className="h-28 mb-10 px-10 flex items-center justify-between border-b">
      <h1><Link href={'/'} className="text-5xl">Universe</Link></h1>

      <nav className="space-x-5   max-xl:hidden">
        <Link href={'/apod'} className="hover:underline underlineMod">Astronomical Photos</Link>
        <Link href={'/solar-system'} className="hover:underline underlineMod">Solar System</Link>
        <Link href={'/'} className="hover:underline underlineMod">Travel Beyond</Link>
      </nav>
    </header>
  )
}
