"use client"

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { useState } from "react"
import Link from "next/link"

export const Header = () => {
  const [nav, setNav] = useState(false)

  const showNav = () => {
    setNav(!nav)
  }

  return (
    <header className="h-14 px-5 flex items-center justify-between border-b">
      <h1><Link href={'/'} className="text-4xl">Universe</Link></h1>

      <Menubar className="w-[350px] flex justify-evenly">
        <MenubarMenu>
          <MenubarTrigger>Space</MenubarTrigger>
          <MenubarContent>
            <MenubarItem> <Link href={'/apod'}>Astronomical Photos</Link> </MenubarItem>
            <MenubarItem> <Link href={'/donki'}>Space Weather</Link> </MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Earth</MenubarTrigger>
          <MenubarContent>
            <MenubarItem> <Link href={'/neows'}>Near-Earth Objects</Link> </MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Marth</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Technology</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pt-br">Português</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  )
}
