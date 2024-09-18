'use client'

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu"

import Link from "next/link"

import { useState } from 'react'


export const Header = () => {
  const [nav, setNav] = useState(false)

  const showNav = () => {
    setNav(!nav)
  }

  const showNavTrue = () => {
    setNav(true)
  }

  const showNavFalse = () => {
    setNav(false)
  }

  return (
    <header className="h-24 px-10 flex items-center justify-between border-b">
      <h1><Link href={'/'} className="max-[1022px]:text-2xl   min-[1023px]:text-4xl">Universo</Link></h1>

      <Menubar className={`max-[896px]:bg-black max-[896px]:fixed max-[896px]:top-0 max-[896px]:z-40 max-[896px]:h-screen max-[896px]:w-full max-[896px]:flex max-[896px]:flex-col max-[896px]:items-center max-[896px]:justify-center max-[896px]:space-y-5 ${ nav ? 'max-[896px]:right-[0px]' : 'max-[896px]:right-[-100vw]' } min-[897px]:border-0  min-[897px]:flex min-[897px]:justify-evenly min-[897px]:space-x-8 min-[897px]:p-6 `}>
        <MenubarMenu>
          <Link href={'/apod'} onClick={showNavFalse}>Fotos Astronomicas</Link>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Sistema Solar</MenubarTrigger>
          <MenubarContent>
            <MenubarItem><Link href={'/solar-system'} onClick={showNavFalse}>Sistema Solar</Link></MenubarItem>
            <MenubarItem>Sol</MenubarItem>
            <MenubarItem>Planetas</MenubarItem>
            <MenubarItem>Cometas</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Viaje Alem</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Universo</MenubarItem>
            <MenubarItem>Galaxias</MenubarItem>
            <MenubarItem>Buraco Negro</MenubarItem>
            <MenubarItem>Estrelas</MenubarItem>
            <MenubarItem>Planetas</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      {nav ? (
        <div className="z-50 fixed w-full text-end   min-[897px]:hidden" onClick={showNavFalse}><span className="mr-20">Fechar</span></div>
      ) : (
        <div className="z-50   min-[897px]:hidden" onClick={showNavTrue}>Abrir</div>
      )}

    </header>
  )
}


{/* <Link href={'/apod'} onClick={showNavFalse}>Fotos Astronomicas</Link>
<Link href={'/solar-system'} onClick={showNavFalse}>Sistema Solar</Link>
<Link href={'/contact'} onClick={showNavFalse} className="text-purple-700">Contato</Link> */}


      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>Fotos Astronomicas</NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Sistema Solar</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[300px] grid-cols-[.75fr]">
                <NavigationMenuLink>Planetas</NavigationMenuLink>
                <NavigationMenuLink>Cometas</NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Planeta Terra</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[300px] grid-cols-1">
                <NavigationMenuLink>Terra</NavigationMenuLink>
                <NavigationMenuLink>Lua</NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Viaje Alem</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[300px] grid-cols-[.75fr]">
                <NavigationMenuLink>Universo</NavigationMenuLink>
                <NavigationMenuLink>Galaxias</NavigationMenuLink>
                <NavigationMenuLink>Buraco Negro</NavigationMenuLink>
                <NavigationMenuLink>Estrelas</NavigationMenuLink>
                <NavigationMenuLink>Planetas</NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}