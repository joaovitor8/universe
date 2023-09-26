import { AstronomyPictureOfTheDay } from "@/components/componentsPages/componentsApod/AstronomyPictureOfTheDay"
import { AstronomyPictureOfTheDayGallery } from "@/components/componentsPages/componentsApod/AstronomyPictureOfTheDayGallery"
import { Separator } from "@/components/ui/separator"

export default function Apod() {
  return (
    <main>
      <AstronomyPictureOfTheDay />
      <div className="my-20 flex items-center justify-center">
        <Separator className="w-3/4"/>
      </div>
      <AstronomyPictureOfTheDayGallery />
    </main>
  )
}
