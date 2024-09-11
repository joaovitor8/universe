'use client'

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import Link from "next/link"

import { useState } from 'react'


export const Header = () => {
  const [nav, setNav] = useState(false)

  const showNav = () => {
    setNav(!nav)
  }

  return (
    <header className="h-24 px-10 flex items-center justify-between border-b">
      <h1><Link href={'/'} className="max-lg:text-2xl lg:text-4xl">Universe</Link></h1>

      <Menubar className={`max-lg:bg-slate-700 max-lg:fixed max-lg:top-0 max-lg:z-40 max-lg:h-screen max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:space-y-5 ${ nav ? 'max-lg:right-[0px]' : 'max-lg:right-[-100vw]' }   lg:flex lg:justify-evenly lg:space-x-10 lg:p-7 `}>
        <Link href={'/apod'}>Astronomical Photos</Link>
        <Link href={'/solar-system'}>Solar System</Link>
        <Link href={'/contact'} className="text-purple-700">Contact</Link>
      </Menubar>

      {nav ? (
        <div className="lg:hidden max-lg:z-50" onClick={showNav}>Fechar</div>
      ) : (
        <div className="lg:hidden max-lg:z-50" onClick={showNav}>Abrir</div>
      )}

    </header>
  )
}
