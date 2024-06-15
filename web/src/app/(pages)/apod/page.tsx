import { About } from "@/components/componentsPages/apod/About"
import { PhotoDay } from "@/components/componentsPages/apod/PhotoDay"
import { Gallery } from "@/components/componentsPages/apod/Gallery"

export default function Apod() {
  return (
    <main className="flex flex-col items-center justify-center">
      <About />
      <PhotoDay />
      {/* <Gallery /> */}
    </main>
  )
}
