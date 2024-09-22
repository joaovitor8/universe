/* eslint-disable @next/next/no-img-element */

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

// <p><span className="text-red-400">Diameter:</span> Mars has a diameter of ≅6779 KM</p>
// <p>Tamanho em comparação com a Terra: Marte é cerca de metade do tamanho da Terra.</p>

// <p><span className="text-red-400">Distance to the Sun:</span> Mars is about 140 million kilometers or ≅1.5 UA from the Sun.</p>


export default function Mars() {
  return (
    <main className="flex flex-col items-center text-justify my-20">

      <div className="w-[800px] flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="flex flex-col justify-around">
            <h2 className="text-4xl text-red-400 mt-10 mb-20">MARS: The red planet</h2>
            <p><span className="text-red-400">Mars</span> is the fourth planet from the Sun and the second smallest in the Solar System, after Mercury. Named after the Roman god of war, it is often described as the &quot;Red Planet&quot; because the iron oxide that predominates on its surface gives it a reddish appearance.</p>
          </div>
          <img src="/planets/mars.png" alt="Planet Mars" className="h-[400px] w-[400px]"/>
        </div>
          <p><span className="text-red-400">Mars</span> is a rocky planet with a thin atmosphere, with surface features that resemble both the impact craters of the Moon and the volcanoes, valleys, deserts, and polar ice caps of Earth. <span className="text-red-400">Mars</span>&apos; rotation period and seasonal cycles are also similar to those of Earth, as is the tilt that produces its seasons. <span className="text-red-400">Mars</span> is home to Olympus Mons, the second-tallest known mountain in the Solar System (the tallest on a planet), and Valles Marineris, a gigantic canyon. The smooth North Polar Basin in the northern hemisphere of <span className="text-red-400">Mars</span> covers about 40% of the planet and may be a large impact scar. <span className="text-red-400">Mars</span> has two known moons, Phobos and Deimos, which are small and irregularly shaped. These moons may be captured asteroids, similar to 5261 Eureka, a Martian Trojan asteroid.</p>
      </div>

      <Separator className="my-10 w-[800px]"/>

      <div className="w-[800px] flex gap-5">
        <div>
          <h3 className="text-red-400 text-3xl text-center mb-3">Geology</h3>
          <p><span className="text-red-400">Surface:</span> The surface of Mars is predominantly rocky, composed mainly of basalt, similar to the volcanic rocks found on Earth. The characteristic reddish color is due to the presence of iron oxide.</p>
          <p><span className="text-red-400">Volcanoes:</span> Mars is home to the largest volcano in the Solar System, Olympus Mons, an extinct volcano about 27 km high. In addition to this, there are several other volcanic calderas and vast lava plains.</p>
          <p><span className="text-red-400">Craters:</span> The Martian surface is marked by numerous impact craters, the result of collisions with asteroids and comets over billions of years.</p>
          <p><span className="text-red-400">Mountains:</span> In addition to Olympus Mons, Mars has large canyon systems, such as Valles Marineris, which extends for thousands of kilometers.</p>
        </div>
        <div>
          <h3 className="text-red-400 text-3xl text-center mb-3">Atmosphere</h3>
          <p><span className="text-red-400">Composition:</span> The Martian atmosphere is very thin, composed mainly of carbon dioxide (95%), as well as nitrogen, argon and small amounts of other gases.</p>
          <p><span className="text-red-400">Atmospheric pressure:</span> The atmospheric pressure on Mars is about 100 times lower than that on Earth, which makes the atmosphere very thin and incapable of retaining heat.</p>
          <p><span className="text-red-400">Climate:</span> The Martian climate is extremely cold and dry, with temperatures ranging from -140°C to 20°C. The thin atmosphere and the great distance from the Sun contribute to these low temperatures.</p>
          <p><span className="text-red-400">Winds:</span> Mars is known for its intense dust storms, which can cover the entire planet and last for months. These storms are caused by large temperature differences between day and night, which generate strong winds.</p>
        </div>
      </div>

      <Separator className="my-10 w-[800px]"/>

      <div className="w-[800px] flex gap-5 flex-col">
        <h3 className="text-red-400 text-3xl text-center mb-3">Natural Satellites</h3>
        <div className="flex gap-5">
          <div className="flex flex-col justify-between items-start">
            <p><span className="text-red-400">Phobos:</span> The larger of the two moons, Phobos, orbits Mars at a very close distance, completing a revolution every 7 hours and 39 minutes. Phobos is thought to be gradually approaching Mars and in a few million years it could collide with the planet or break up into a ring.</p>
            <Button variant={"link"} className="hover:text-red-400">
              <a href="https://en.wikipedia.org/wiki/Phobos_(moon)" target="_blank">Learn More</a>
            </Button>
          </div>
          <img src="/img/Phobos_moon.jpg" alt="Phobos" className="rounded-xl" />
        </div>
        <div className="flex gap-5">
          <img src="/img/Deimos_moon.jpg" alt="Deimos" className="rounded-xl" />
          <div className="flex flex-col justify-between items-end">
            <p><span className="text-red-400">Deimos:</span> The smaller moon, Deimos, orbits Mars at a greater distance and more slowly than Phobos. Both moons are important for studying the formation and evolution of Mars and the Solar System.</p>
            <Button variant={"link"} className="hover:text-red-400">
              <a href="https://en.wikipedia.org/wiki/Deimos_(moon)" target="_blank">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-10 w-[800px]"/>

      <div className="w-[800px]">
        <h3 className="text-red-400 text-3xl text-center mb-3">Space Exploration</h3>

        <p><span className="text-red-400">History of Discovery:</span> Mars has been known since ancient times and was often associated with war gods due to its reddish color. Telescopic observations have revealed details of the surface and the characteristics of its thin atmosphere. Modern space missions have provided a clearer view of the geology and atmosphere of Mars.</p>

        <p><span className="text-red-400">First Rovers:</span> The first probes to reach Mars were the Mariners, in the 1960s, which sent the first close-up images of the planet.</p>
        <p><span className="text-red-400">Viking:</span> In the 1970s, the Viking probes made the first successful landings on Mars, searching for signs of life.</p>
        <p><span className="text-red-400">Pathfinder and Sojourner:</span> The Pathfinder mission in 1997 marked the United States&apos; return to Mars and included the first rover to explore the Martian surface, Sojourner.</p>
        <p><span className="text-red-400">Spirit and Opportunity:</span> In 2004, NASA launched the twin rovers Spirit and Opportunity, which far exceeded their life expectancy, exploring Martian geology for years..</p>
        <p><span className="text-red-400">Curiosity:</span> In 2012, NASA sent the Curiosity rover, a true mobile laboratory, to study the past and present habitability of Mars.</p>
        <p><span className="text-red-400">Perseverance:</span> In 2021, NASA landed the Perseverance rover on Mars, with the aim of searching for signs of ancient life and collecting samples for a future return to Earth.</p>
      </div>

      <Separator className="my-10 w-[800px]"/>

      {/* <div>
        <p>imagens</p>
      </div>

      <Separator className="my-10 w-[800px]"/> */}

      <div className="w-[800px]">
        <h3 className="text-3xl text-center mb-3">Useful links to continue <span className="text-red-400">Exploring</span></h3>
        <div className="flex justify-center">
          <Button variant={"link"} className="hover:text-red-400">
            <a href="https://en.wikipedia.org/wiki/Mars" target="_blank">Learn More - Wikipedia</a>
          </Button>

          <Button variant={"link"} className="hover:text-red-400">
            <a href="https://www.nasa.gov/?search=mars" target="_blank">Learn More - Nasa</a>
          </Button>
        </div>
      </div>

    </main>
  )
}
