import { About } from "@/components/componentsPages/componentsApod/About"
import { PhotoDay } from "@/components/componentsPages/componentsApod/PhotoDay"
import { Gallery } from "@/components/componentsPages/componentsApod/Gallery"

export default function Apod() {
  return (
    <main>
      {/* <About />
      <div className="my-10"></div> */}
      <PhotoDay />
      <div className="my-10"></div>
      <Gallery />
    </main>
  )
}
