'use client'

import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
    <header className="h-24 px-10 flex items-center justify-between">
      <h1><Link href={'/'} className="max-[1022px]:text-3xl   min-[1023px]:text-5xl">Universe</Link></h1>

      <div className={`max-[896px]:bg-black max-[896px]:fixed max-[896px]:top-0 max-[896px]:z-40 max-[896px]:h-screen max-[896px]:w-full  max-[896px]:flex max-[896px]:justify-center max-[896px]:items-center  ${ nav ? 'max-[896px]:right-[0px]' : 'max-[896px]:right-[-100vw]' } `}>
        <NavigationMenu>
          <NavigationMenuList className="max-[896px]:grid max-[896px]:space-y-1">
            <NavigationMenuItem>
              <NavigationMenuLink href={"/apod"} className={navigationMenuTriggerStyle()}>Astronomical Photos</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href={"/solar-system"} className={navigationMenuTriggerStyle()}>Solar System</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href={"/"} className={navigationMenuTriggerStyle()}>Travel Beyond</NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuLink href={"/news"} className={navigationMenuTriggerStyle()}>News</NavigationMenuLink>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {nav ? (
        <div className="z-50 fixed w-full text-end   min-[897px]:hidden" onClick={showNavFalse}><span className="mr-20">Fechar</span></div>
      ) : (
        <div className="z-50   min-[897px]:hidden" onClick={showNavTrue}>Abrir</div>
      )}

    </header>
  )
}
