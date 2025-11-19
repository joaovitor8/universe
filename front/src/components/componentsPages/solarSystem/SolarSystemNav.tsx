"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

const systemSL = ["sun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

export const SolarSystemNav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-center">
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
        {systemSL.map((body) => {
          const isActive = pathname === `/solar-system/${body}`
          return (
            <Link
              key={body}
              href={`/solar-system/${body}`}
              className={`
                px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap 
                ${isActive ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}
              `}
            >
              {body.charAt(0).toUpperCase() + body.slice(1)}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
