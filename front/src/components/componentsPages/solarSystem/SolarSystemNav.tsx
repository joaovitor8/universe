/* eslint-disable @next/next/no-img-element */

import Link from "next/link"

const systemSL = ["sun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]  //"pluto"

export const SolarSystemNav = () => {
  return(
    <div className="flex justify-center items-center space-x-4 mb-10
      max-[700px]:flex max-[700px]:flex-wrap max-[700px]:px-1"
    >

      <Link href={'/solar-system'} className="hover:underline decoration-purple-900 decoration-2 underline-offset-4">Back</Link>
      {systemSL.map((s, key) =>
        <div key={key} className="max-[700px]:p-2">
          <Link href={`/solar-system/${s}`}>
            <img src={`/planets/${s}.png`} alt={`Imagem ${s}`} className="h-14 max-[700px]:hidden"/>
            <p className="text-center capitalize  hover:underline decoration-purple-900 decoration-2 underline-offset-4">{s}</p>
          </Link>
        </div>
      )}
  </div>
  )
}
