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
    <header className="h-24 w-full px-10 flex items-center justify-between">
      <h1><Link href={'/'} className="text-4xl">Universe</Link></h1>

      <Menubar className="space-x-10 p-7 flex justify-evenly max-lg:bg-red-700 max-lg:hidden">
        <Link href={'/solar-system'}>Solar System</Link>
        <Link href={'/apod'}>Astronomical Photos</Link>
        <Link href={'/neows'}>Near Earth Object</Link>
      </Menubar>



      {nav ? (
        <div className="fixed right-[30px] z-50 text-3xl   hidden" onClick={showNav}>A</div>
      ) : (
        <div className="text-3xl   hidden" onClick={showNav}>B</div>
      )}

      <Menubar className={`fixed top-[0px] z-40 flex h-[100vh] w-full flex-col items-center justify-center space-y-5 bg-white duration-1000   ${ nav ? 'right-[0px]' : 'right-[-100vw]' } `}>
        <Link href={'/solar-system'}>Solar System</Link>
        <Link href={'/apod'}>Astronomical Photos</Link>
        <Link href={'/neows'}>Near Earth Object</Link>
      </Menubar>
    </header>
  )
}
