import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="h-24 px-10 flex items-center justify-between border-b">
      <h1><Link href={'/'} className="text-4xl">Universe</Link></h1>

      <Menubar className="space-x-10 p-7 flex justify-evenly">
        <Link href={'/apod'}>Astronomical Photos</Link>
        <Link href={'/neows'}>Near Earth Object</Link>
        <Link href={'/donki'}>Climate</Link>
      </Menubar>
    </header>
  )
}
