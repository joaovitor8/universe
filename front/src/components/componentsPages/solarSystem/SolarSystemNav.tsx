import Link from "next/link"

const systemSL = ["sun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]  //"pluto"

export const SolarSystemNav = () => {
  return( 
    <div className="grid grid-cols-3 gap-1 mb-10 mx-5 sm:grid-cols-4 md:flex md:justify-center">
      {systemSL.map((s, key) =>
        <div key={key} className="border border-purple-700 text-center rounded p-1 md:w-28">
          <Link href={`/solar-system/${s}`}>{s}</Link>
        </div>
      )}
    </div>
  )
}
