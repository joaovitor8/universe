import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="h-14 px-5 flex items-center justify-between border-b">
      <h1><Link href={'/'} className="text-4xl">Universe</Link></h1>

      <Menubar className="w-[500px] flex justify-evenly"> {/* w-[350px] */}
        {/* <MenubarMenu>
          <MenubarTrigger>Space</MenubarTrigger>
          <MenubarContent>
            <MenubarItem> <Link href={'/apod'}>Astronomical Photos</Link> </MenubarItem>
            <MenubarItem> <Link href={'/neows'}>Near Earth Object</Link> </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>...</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
          </MenubarContent>
        </MenubarMenu> */}

        {/* Quando ouver mais paginas voltar a config de cima */}
        <Link href={'/apod'}>Astronomical Photos</Link>
        <Link href={'/neows'}>Near Earth Object</Link>
        <Link href={'/donki'}>Clima</Link>
      </Menubar>

      <Select disabled>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Language"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="br">Português</SelectItem>
        </SelectContent>
      </Select>
    </header>
  )
}
