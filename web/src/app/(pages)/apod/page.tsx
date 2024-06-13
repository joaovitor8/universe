import { About } from "@/components/componentsPages/apod/About"
import { PhotoDay } from "@/components/componentsPages/apod/PhotoDay"
import { Gallery } from "@/components/componentsPages/apod/Gallery"

export default function Apod() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <About />
      <div className="my-10"></div>
      {/* <PhotoDay /> */}
      <div className="my-10"></div>
      {/* <Gallery /> */}
    </main>
  )
}
