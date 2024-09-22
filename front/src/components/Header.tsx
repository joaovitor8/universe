'use client'

import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
    <header className="h-24 px-10 flex items-center justify-between ">
      <h1><Link href={'/'} className="max-[1022px]:text-2xl   min-[1023px]:text-4xl">Universe</Link></h1>

      <NavigationMenu className={`max-[896px]:bg-black max-[896px]:fixed max-[896px]:top-0 max-[896px]:z-40 max-[896px]:h-screen max-[896px]:w-full
                        max-[896px]:
                        ${ nav ? 'max-[896px]:right-[0px]' : 'max-[896px]:right-[-100vw]' }
                        min-[897px]:`}>
          <NavigationMenuList className="max-[896px]:grid max-[896px]:space-y-1">
            <NavigationMenuItem>
              <NavigationMenuLink href={"/apod"} className={navigationMenuTriggerStyle()}>Astronomical Photos</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solar System</NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid p-4 max-[896px]:grid-cols-2 max-[896px]:w-[240px]   min-[897px]:grid-cols-5 min-[897px]:w-[490px]">
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Sun</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Mercury</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Venus</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Earth</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/mars"} className={navigationMenuTriggerStyle()}>Mars</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Jupiter</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Saturn</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Uranus</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Neptune</NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Travel Beyond</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid p-4 max-[896px]:grid-cols-2 max-[896px]:w-[240px]   min-[897px]:grid-cols-5 min-[897px]:w-[490px]">
                  <NavigationMenuLink>Universe</NavigationMenuLink>
                  <NavigationMenuLink>Galaxies</NavigationMenuLink>
                  <NavigationMenuLink>Black Hole</NavigationMenuLink>
                  <NavigationMenuLink>Stars</NavigationMenuLink>
                  <NavigationMenuLink>Planets</NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

      {/* <div className={`max-[896px]:bg-black max-[896px]:fixed max-[896px]:top-0 max-[896px]:z-40 max-[896px]:h-screen max-[896px]:w-full
                        max-[896px]:grid max-[896px]:content-center max-[896px]:place-content-center max-[896px]:space-y-2
                        ${ nav ? 'max-[896px]:right-[0px]' : 'max-[896px]:right-[-100vw]' }
                        min-[897px]:flex min-[897px]:justify-evenly min-[897px]:space-x-8 min-[897px]:p-6`}>
        <NavigationMenu>
          <NavigationMenuList className="max-[896px]:grid max-[896px]:space-y-1">
            <NavigationMenuItem>
              <NavigationMenuLink href={"/apod"} className={navigationMenuTriggerStyle()}>Astronomical Photos</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solar System</NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid gap-3 p-4 max-[896px]:grid-cols-2 max-[896px]:w-[240px]   min-[897px]:grid-cols-5 min-[897px]:w-[500px]">
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Sun</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Mercury</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Venus</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Earth</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/mars"} className={navigationMenuTriggerStyle()}>Mars</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Jupiter</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Saturn</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Uranus</NavigationMenuLink>
                  <NavigationMenuLink href={"/solar-system/"} className={navigationMenuTriggerStyle()}>Neptune</NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Travel Beyond</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 max-[896px]:grid-cols-2 max-[896px]:w-[240px]   min-[897px]:grid-cols-5 min-[897px]:w-[500px]">
                  <NavigationMenuLink>Universe</NavigationMenuLink>
                  <NavigationMenuLink>Galaxies</NavigationMenuLink>
                  <NavigationMenuLink>Black Hole</NavigationMenuLink>
                  <NavigationMenuLink>Stars</NavigationMenuLink>
                  <NavigationMenuLink>Planets</NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Select disabled>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Language"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="portuguese">Portuguese</SelectItem>
          </SelectContent>
        </Select>
      </div> */}

      {nav ? (
        <div className="z-50 fixed w-full text-end   min-[897px]:hidden" onClick={showNavFalse}><span className="mr-20">Fechar</span></div>
      ) : (
        <div className="z-50   min-[897px]:hidden" onClick={showNavTrue}>Abrir</div>
      )}

    </header>
  )
}
