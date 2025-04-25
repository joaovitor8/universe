/* eslint-disable @next/next/no-img-element */

import Link from "next/link"

const systemSL = ["sun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]  //"pluto"

export const SolarSystemNav = () => {
  return(
    <div>

      <Link href={'/solar-system'}>Back</Link>
      {systemSL.map((s, key) =>
        <div key={key}>
          <Link href={`/solar-system/${s}`}>
            <img src={`/planets/${s}.png`} alt={`Imagem ${s}`}/>
            <p>{s}</p>
          </Link>
        </div>
      )}
  </div>
  )
}
