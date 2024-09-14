import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="h-24 px-10 flex items-center justify-between border-b">
      <h1><Link href={'/'} className="max-[1022px]:text-2xl   min-[1023px]:text-4xl">Universo</Link></h1>

      <Menubar className="max-[1022px]:hidden">
        <Link href={'/apod'}>Fotos Astronomicas</Link>
        <Link href={'/solar-system'}>Sistema Solar</Link>
        <Link href={'/contact'} className="text-purple-700">Contato</Link>
      </Menubar>
    </header>
  )
}
