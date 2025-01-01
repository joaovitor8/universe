'use client'

import Link from "next/link"

export const Header = () => {
  return (
    <header className="h-24 px-10 flex items-center justify-between border-b">
      <h1><Link href={'/'} className="text-5xl">Universe</Link></h1>

      <nav className="w-1/2">
        <ul className="flex">
          <li className="bg-gray-800 w-1/3 mx-1 p-3 text-center rounded-md hover:bg-violet-500"> <Link href={'/apod'}>Astronomical Photos</Link> </li>
          <li className="bg-gray-800 w-1/3 mx-1 p-3 text-center rounded-md hover:bg-violet-500"> <Link href={'/solar-system'}>Solar System</Link> </li>
          <li className="bg-gray-800 w-1/3 mx-1 p-3 text-center rounded-md hover:bg-violet-500"> <Link href={'/'}>Travel Beyond</Link> </li>
        </ul>
      </nav>
    </header>
  )
}
