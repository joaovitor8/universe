/* eslint-disable @next/next/no-img-element */
"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { TypePlanetas } from "@/components/Types"
import { useEffect, useState } from "react"
import axios from "axios"

export const System = () => {
  const [data, setData] = useState<TypePlanetas[]>([])

  const GetPlanets = async () => {
    try {
      const response = await axios.get(`http://localhost:3333/api/solar-system`)
      setData(response.data)
    } catch (error) {
      console.error("", error)
    }
  }

  useEffect(() => {
    GetPlanets()
  }, [])

  return(
    <div className="flex justify-center items-center">
      <Carousel className="h-4/5 w-4/5 pb-3">
        <CarouselContent>
          {data.map((d, key) => (
            <CarouselItem key={key}>
              <Card>
                <CardHeader>
                  <CardTitle>{d.name}</CardTitle>
                  <CardDescription>{d.id}° planet after the sun</CardDescription>
                </CardHeader>
                <CardContent className="flex   sm:flex-col sm:space-y-5   lg:flex-row lg:items-center lg:space-x-10">
                  <div className="w-full   sm:flex sm:justify-center">
                    <img src={d.image} alt={d.name} className="h-[400px] w-[400px]"/>
                  </div>

                  <div className="space-y-1">
                    <p><span className="text-violet-700 font-bold">Type:</span> {d.type}</p>
                    <p><span className="text-violet-700 font-bold">Gravity:</span> {d.gravity}</p>
                    <p><span className="text-violet-700 font-bold">Diameter:</span> {d.diameter}</p>
                    <p><span className="text-violet-700 font-bold">Atmosphere:</span> {d.atmosphere}</p>
                    <p><span className="text-violet-700 font-bold">Average Temperature Celsius:</span> {d.average_celsius_temperature}</p>
                    <p><span className="text-violet-700 font-bold">Composition:</span> {d.composition}</p>
                    <p><span className="text-violet-700 font-bold">Distance to the Sun:</span> {d.distance_to_the_sun}</p>
                    <p><span className="text-violet-700 font-bold">Characteristics:</span> {d.characteristics}</p>
                    <p><span className="text-violet-700 font-bold">satellites:</span> {d.satellites}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p><span className="text-violet-700 font-bold">History of Discovery:</span> {d.history_of_discovery}</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
