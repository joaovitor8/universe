/* eslint-disable @next/next/no-img-element */

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Link from "next/link"

const systemSL = [ "earth", "mars", "jupiter", "saturn", "neptune", "uranus", "sun", "mercury", "venus" ]

export const SolarSystemCarousel = () => {
  return(
    <Carousel opts={{ loop: true }} className="flex justify-center items-center my-10">
      <CarouselContent className="h-[450px]">
        {systemSL.map((s,key) =>
          <CarouselItem key={key} className="flex flex-col justify-center items-center basis-1/2 max-[800px]:basis-full">
            <Link href={`/solar-system/${s}`} >
              <p>{s}</p>
              <img src={`/planets/${s}.png`} alt="" className="h-[300px] w-[300px] duration-700 hover:h-[400px] hover:w-[400px]" />
            </Link>
          </CarouselItem>
        )}
      </CarouselContent>
    </Carousel>
  )
}
