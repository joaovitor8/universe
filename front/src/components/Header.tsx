import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="h-24 w-full px-10 flex items-center justify-between">
      <h1><Link href={'/'} className="text-4xl">Universe</Link></h1>

      <Menubar className="space-x-10 p-7 flex justify-evenly">
        <Link href={'/solar-system'}>Solar System</Link>
        <Link href={'/apod'}>Astronomical Photos</Link>
        <Link href={'/neows'}>Near Earth Object</Link>
      </Menubar>
    </header>
  )
}

// 320px a 480px: Dispositivos móveis pequenos (smartphones)
// 481px a 768px: Tablets e dispositivos móveis maiores
// 769px a 1024px: Telas pequenas e laptops
// 1025px a 1200px: Desktops e telas grandes
// 1201px e acima: Telas muito grandes e TVs1