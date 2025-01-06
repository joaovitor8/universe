import Link from "next/link"

export const Header = () => {
  return (
    <header className="py-10 px-20 mb-10 flex justify-between">
      <div>
        {/* Logo */}
        <Link href={'/'}>Universe</Link>
      </div>     

      <nav className="space-x-6   max-xl:hidden">
        <Link href={'/apod'} className="hover:underline decoration-purple-900 decoration-2 underline-offset-4">Astronomical Photos</Link>
        <Link href={'/solar-system'} className="hover:underline decoration-purple-900 decoration-2 underline-offset-4">Solar System</Link>
        <Link href={'/astro-events'} className="hover:underline decoration-purple-900 decoration-2 underline-offset-4">Astronomical Events</Link>
        <Link href={'/'} className="hover:underline decoration-purple-900 decoration-2 underline-offset-4">Travel Beyond</Link>
      </nav>

      {/* Botão de Menu Mobile */}
      <button className="xl:hidden text-purple-700">☰</button>
    </header>
  )
}
