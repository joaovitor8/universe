/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from "react"
import axios from "axios"

export const AstronomyPictureOfTheDayGallery = () => {
  const [galleryPictureTheDay, setGalleryPictureTheDay] = useState([])

  const GetGalleryApod = () => {
    axios.get("http://localhost:3333/api/apod-gallery")
    .then((res) => setGalleryPictureTheDay(res.data))
    .catch((error) => { console.error(error) })
  }

  useEffect(() => {
    GetGalleryApod()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-4/5 w-4/5 flex flex-wrap justify-center p-5">
        {galleryPictureTheDay.map((i, key) => (
          <a href={i.hdurl} target="_blank" key={key} className="h-[400px] w-[400px] m-3">
            <img src={i.url} alt={i.media_type} className="rounded-md object-cover h-[400px] w-[400px]" />
          </a>
        ))}
      </div>
    </div>
  )
}
