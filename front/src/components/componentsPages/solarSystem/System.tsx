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
      const response = await axios.get(`http://127.0.0.1:4000/api/solar-system`)
      setData(response.data)
    } catch (error) {
      console.error("", error)
    }
  }

  useEffect(() => {
    GetPlanets()
  }, [])

  return(
    <div className="flex justify-center items-center"></div>
  )
}
