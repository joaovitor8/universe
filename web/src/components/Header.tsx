import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="h-24 px-10 flex items-center justify-between border-b">
      <h1><Link href={'/'} className="text-4xl">Universe</Link></h1>

      <Menubar className="w-[600px] p-7 flex justify-evenly"> {/* w-[350px] */}
    {/* <MenubarMenu>
          <MenubarTrigger>Sistema Solar</MenubarTrigger>
          <MenubarContent>
            <MenubarItem> <Link href={'/'}> aaa </Link> </MenubarItem>
            <MenubarItem> <Link href={'/'}> aaa </Link> </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Universo</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Nasa API</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
        </MenubarContent>

        <MenubarMenu>
          <MenubarTrigger>AI</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
        </MenubarContent>

        
         */}

        {/* Quando ouver mais paginas voltar a config de cima */}
        <Link href={'/apod'}>Astronomical Photos</Link>
        <Link href={'/neows'}>Near Earth Object</Link>
        <Link href={'/donki'}>Climate</Link>
      </Menubar>
    </header>
  )
}
