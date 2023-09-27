import { AstronomyPictureOfTheDay } from "@/components/componentsPages/componentsApod/AstronomyPictureOfTheDay"
import { AstronomyPictureOfTheDayGallery } from "@/components/componentsPages/componentsApod/AstronomyPictureOfTheDayGallery"

export default function Apod() {
  return (
    <main>
      <AstronomyPictureOfTheDay />
      <div className="my-10"></div>
      <AstronomyPictureOfTheDayGallery />
    </main>
  )
}


// Astronomy Picture of the Day