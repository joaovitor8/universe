import { System } from "@/components/componentsPages/solarSystem/System"

export default function SolarSystem() {
  return (
    <main className="h-screen flex flex-col justify-between my-20">
      <div>
        <p>Explore o nosso Sistema Solar</p>
        <p>Mapa 3D</p>
      </div>

      <System />
    </main>
  )
}
