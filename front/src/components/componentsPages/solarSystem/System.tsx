/* eslint-disable @next/next/no-img-element */
"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import Link from "next/link"

const systemSL = [ "sun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "neptune", "uranus" ]

export const System = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
 
  useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return(
    <div className="flex justify-center items-center">
      <Carousel setApi={setApi} opts={{ loop: true, watchDrag: false }} className="flex justify-center items-center">
        <CarouselContent>
          {systemSL.map((s,key) =>
            <CarouselItem key={key} className="flex flex-col justify-center items-center basis-1/2">
              <p>{s}</p>
              <Link href={`/solar-system/${s}`} >
                <img src={`/planets/${s}.png`} alt="" className="h-[300px] w-[300px]" />
              </Link>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
