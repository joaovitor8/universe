import { About } from "@/components/componentsPages/componentsDonki/About"
import { SpaceWeather } from "@/components/componentsPages/componentsDonki/SpaceWeather"

export default function Donki() {
  return (
    <main>
      <About />
      <div className="my-10"></div>
      <SpaceWeather />
    </main>
  )
}
