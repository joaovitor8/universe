"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { TypePlanetas } from "@/components/Types"
import { useEffect, useState } from "react"
import axios from "axios"

export const System = () => {
  const [data, setData] = useState([])

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

  console.log(data)

  return(
    <div>
      <div>
        {data.map((d, key) => (
          <div key={key}>
            <p>{d.id}</p>
            <p>{d.nome}</p>
            <p>{d.tipo}</p>
            <p>{d.diâmetro_km}</p>
            <p>{d.distancia_ao_sol_ua}</p>
            <p>{d.satelites}</p>
            <p>{d.composicao}</p>
            <p>{d.temperatura_media_celsius}</p>
            <p>{d.atmosfera}</p>
            <p>{d.gravidade}</p>
            <p>{d.caracteristicas}</p>
            <p>{d.historia_da_descoberta}</p>
          </div>
        ))}
      </div>

      <Carousel>
        <CarouselContent>
          <CarouselItem>A</CarouselItem>
          <CarouselItem>B</CarouselItem>
          <CarouselItem>C</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>


    </div>
  )
}
