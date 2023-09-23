import { AstronomyPictureOfTheDay } from "@/components/componentsPages/componentsApod/AstronomyPictureOfTheDay"
import { AstronomyPictureOfTheDayGallery } from "@/components/componentsPages/componentsApod/AstronomyPictureOfTheDayGallery"
import { Separator } from "@/components/ui/separator"

export default function Apod() {
  return (
    <main>
      <AstronomyPictureOfTheDay />
      <div className="flex items-center justify-center">
        <Separator className="w-1/2"/>
      </div>
      <AstronomyPictureOfTheDayGallery />
    </main>
  )
}
