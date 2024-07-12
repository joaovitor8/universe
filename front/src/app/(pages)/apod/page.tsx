import { Gallery } from "@/components/componentsPages/apod/Gallery"
import { PhotoDay } from "@/components/componentsPages/apod/PhotoDay"

export default function Apod() {
  return (
    <main className="space-y-40">
      <PhotoDay />
      <Gallery />
    </main>
  )
}
