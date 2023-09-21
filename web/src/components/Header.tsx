import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="h-14 px-5 flex items-center justify-between border-b">
      <h1><Link href={'/'}>Universo</Link></h1>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Midia</MenubarTrigger>
          <MenubarContent>
            <MenubarItem> <Link href={'/apod'}>Imagem do Dia</Link> </MenubarItem>
            <MenubarItem>Todas as Imagens</MenubarItem>
            <MenubarItem>Videos</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Em construção</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Em construção</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Em construção</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
            <MenubarItem>Em construção</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Idioma" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pt-br">Portugues</SelectItem>
          <SelectItem value="en">Ingles</SelectItem>
        </SelectContent>
      </Select>
    </header>
  )
}
