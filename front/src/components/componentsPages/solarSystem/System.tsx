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
      const response = await axios.get(`https://universe-back.onrender.com/api/solar-system`)
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
                  <CardDescription>{d.id}° Planeta depois do Sol</CardDescription>
                </CardHeader>
                <CardContent className="flex  max-[896px]:flex-col ">
                  <div className="max-[896px]:w-full max-[896px]:flex max-[896px]:justify-center   min-[897px]:w-1/2">
                    <img src={d.image} alt={d.name} className="h-[300px] w-[300px] mb-7 max-[426px]:h-[200px] max-[426px]:w-[200px]"/>
                  </div>

                  <div className="space-y-1">
                    <p><span className="text-violet-700 font-bold">Tipo:</span> {d.type}</p>
                    <p><span className="text-violet-700 font-bold">Gravidade:</span> {d.gravity}</p>
                    <p><span className="text-violet-700 font-bold">Diametro:</span> {d.diameter}</p>
                    <p><span className="text-violet-700 font-bold">Atmosfera:</span> {d.atmosphere}</p>
                    <p><span className="text-violet-700 font-bold">Temperatura Media:</span> {d.average_celsius_temperature}</p>
                    <p><span className="text-violet-700 font-bold">Composição:</span> {d.composition}</p>
                    <p><span className="text-violet-700 font-bold">Distancia do Sol:</span> {d.distance_to_the_sun}</p>
                    <p><span className="text-violet-700 font-bold">Satelites:</span> {d.satellites}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p><span className="text-violet-700 font-bold text-wrap">Historia da Descoberta:</span> {d.history_of_discovery}</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-[896px]:hidden"/>
        <CarouselNext className="max-[896px]:hidden"/>
      </Carousel>
    </div>
  )
}
