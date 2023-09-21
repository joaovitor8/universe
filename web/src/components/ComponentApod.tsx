/* eslint-disable @next/next/no-img-element */
'use client'

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useState, useEffect } from "react"
import axios from "axios"

interface Apod {
  date: string
  explanation: string
  hdurl: string
  media_type: string
  servise_version: string
  title: string
  url: string
}

export const ComponentApod = () => {
  const [pictureTheDay, setPictureTheDay] = useState<Apod>()

  const PegarImagemDoDia = () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=...")
    .then((res) => setPictureTheDay(res.data))
    .catch((error) => { console.error(error) })
  }

  const PegarImagemPorData = () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=...&date=2023-09-19")
    .then((res) => console.log(res.data))
    .catch((error) => { console.error(error) })
  }

  useEffect(() => {
    PegarImagemDoDia()
    PegarImagemPorData()
  }, [])

  // console.log(pictureTheDay)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex space-x-5">
        <div className="w-[450px] flex">
          <AspectRatio ratio={16 / 9}>
            <img src={pictureTheDay?.hdurl} alt="Image" className="rounded-md object-cover" />
          </AspectRatio>
        </div>

        <div className="w-[450px] space-y-5">
          <h3>{pictureTheDay?.title} / {pictureTheDay?.date}</h3>
          <p>{pictureTheDay?.explanation}</p>
        </div>
      </div>
    </div>
  )
}

// APOD = Astronomy Picture of the Day
