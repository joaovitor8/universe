import Link from "next/link"

export const Nav = () => {
  return (
    <nav className="w-full my-16 px-20 fixed flex justify-end">
      <ul className="flex items-center justify-center gap-4">
        <Link href={'/'} className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">Home</Link>
        <Link href={'/apod'} className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">Astronomical Photos</Link>
        <Link href={'/neows'} className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">Near Earth Object</Link>
        <Link href={'/donki'} className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">Climate</Link>
      </ul>
    </nav>
  )
}
