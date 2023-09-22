/* eslint-disable @next/next/no-img-element */
'use client'

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useState, useEffect } from "react"
import axios from "axios"

export const AstronomyPictureOfTheDay = () => {
  const [pictureTheDay, setPictureTheDay] = useState([])

  const GetApod = () => {
    axios.get("http://localhost:3333/api/apod")
    .then((res) => setPictureTheDay(res.data))
    .catch((error) => { console.error(error) })
  }

  useEffect(() => {
    GetApod()
  }, [])

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex space-x-5">
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9}>
            <a href={pictureTheDay.hdurl} target="_blank">
              <img src={pictureTheDay.url} alt={pictureTheDay.media_type} className="rounded-md object-cover" />
            </a>
          </AspectRatio>
        </div>

        <div className="w-[450px] space-y-5">
          <h3 className="text-2xl">{pictureTheDay.title} / {pictureTheDay.date}</h3>
          <p>{pictureTheDay.explanation}</p>
        </div>
      </div>
    </div>
  )
}
