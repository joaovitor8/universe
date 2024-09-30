import { SolarSystemCarousel } from "@/components/componentsPages/solarSystem/SolarSystemCarousel"
import { Button } from "@/components/ui/button"


export default function SolarSystem() {
  return (
    <main className="flex flex-col justify-between my-20">
      <div className="text-center">
        <h2 className="text-4xl text-violet-700">Explore our Solar System</h2>
        <p>Click on one of the celestial bodies below and see more information about it.</p>
      </div>

      <SolarSystemCarousel />

      <div>
        <h3 className="text-3xl text-violet-700 text-center mb-3">Useful links to continue</h3>
        <div className="flex justify-center max-[700px]:flex-col">
          <Button variant={"link"} className="hover:text-violet-700" disabled>
            <a href="" target="_blank">Learn More - Wikipedia</a>
          </Button>

          <Button variant={"link"} className="hover:text-violet-700" disabled>
            <a href="" target="_blank">Learn More - Nasa</a>
          </Button>
          <Button variant={"link"} className="hover:text-violet-700">
            <a href="https://eyes.nasa.gov/apps/solar-system/#/home" target="_blank">Learn More - Map 3D</a>
          </Button>
        </div>
      </div>
    </main>
  )
}
