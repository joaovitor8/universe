import { PhotoDay } from "@/components/componentsPages/apod/PhotoDay"
import { Gallery } from "@/components/componentsPages/apod/Gallery"


export default function Apod() {
  return (
    <main>
      <PhotoDay />
      <div className="m-20"></div>
      <Gallery />
    </main>
  )
}
