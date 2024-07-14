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
    <div className="h-screen flex justify-center items-center">
      <Carousel className="h-4/5 w-4/5">
        <CarouselContent>
          {data.map((d, key) => (
            <CarouselItem key={key}>
              <Card>
                <CardHeader>
                  <CardTitle>{d.name}</CardTitle>
                  <CardDescription>{d.id}° planet after the sun</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center space-x-10">
                  <img src={d.image} alt={d.name} className="h-[400px]"/>

                  <div className="space-y-1">
                    <p>Type: {d.type}</p>
                    <p>Gravity: {d.gravity}</p>
                    <p>Diameter: {d.diameter}</p>
                    <p>Atmosphere: {d.atmosphere}</p>
                    <p>Average Temperature Celsius: {d.average_celsius_temperature}</p>
                    <p>Composition: {d.composition}</p>
                    <p>Distance to the Sun: {d.distance_to_the_sun}</p>
                    <p>Characteristics: {d.characteristics}</p>
                    <p>satellites: {d.satellites}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p>History of Discovery: {d.history_of_discovery}</p>
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
