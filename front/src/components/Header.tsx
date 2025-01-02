'use client'

import Link from "next/link"

export const Header = () => {
  return (
    <header className="h-28 mb-10 px-10 flex items-center justify-between border-b">
      <h1><Link href={'/'} className="text-5xl">Universe</Link></h1>

      <nav className="space-x-2">
          <Link href={'/apod'} className="p-3 rounded-md">Astronomical Photos</Link>
          <Link href={'/solar-system'} className="p-3 rounded-md">Solar System</Link>
          <Link href={'/'} className="p-3 rounded-md">Travel Beyond</Link>
      </nav>
    </header>
  )
}
