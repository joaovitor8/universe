/* eslint-disable @next/next/no-img-element */

import Link from "next/link"

const systemSL = ["sun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"]

export const SolarSystemNav = () => {
  return(
    <div className="w-20 space-y-2 m-5">
      {systemSL.map((s, key) =>
        <div key={key}>
          <Link href={`/solar-system/${s}`}>
            <span className="text-center space-x-1">
              <img src={`/planets/${s}.png`} alt={`Imagem ${s}`}/>
              <p className="capitalize">{s}</p>
            </span>
          </Link>
        </div>
      )}
  </div>
  )
}
