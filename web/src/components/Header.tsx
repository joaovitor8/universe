"use client"

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Menu, X } from "lucide-react"

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

      <Menubar className="w-[500px] flex justify-evenly max-lg:hidden">
        <MenubarMenu>
          <MenubarTrigger>Space</MenubarTrigger>
          <MenubarContent>
            <MenubarItem> <Link href={'/apod'}>Astronomy Picture of the Day</Link> </MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Earth</MenubarTrigger>
          <MenubarContent>
            <MenubarItem> <Link href={'/neows'}>Near Earth Object Web Service</Link> </MenubarItem>
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
          <MenubarTrigger>Tec</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <div className="max-lg:hidden">
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



      <div className="min-[1024px]:hidden">
        {nav ? (
          <X className="fixed right-[20px] top-[15px] z-50" onClick={showNav} />
          ) : (
          <Menu onClick={showNav} />
        )}
      </div>

      <div className={`fixed top-[0px] z-40 flex h-[100vh] w-full flex-col items-center justify-center space-y-5 bg-gray-600 min-[1024px]:hidden ${ nav ? "right-[0px]" : "right-[-100vw]" } `}>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Space</MenubarTrigger>
            <MenubarContent>
              <MenubarItem> <Link href={'/apod'}>Astronomy Picture of the Day</Link> </MenubarItem>
              <MenubarItem>Em construção</MenubarItem>
              <MenubarItem>Em construção</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Earth</MenubarTrigger>
            <MenubarContent>
              <MenubarItem> <Link href={'/neows'}>Near Earth Object Web Service</Link> </MenubarItem>
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
            <MenubarTrigger>Tec</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Em construção</MenubarItem>
              <MenubarItem>Em construção</MenubarItem>
              <MenubarItem>Em construção</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

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
