/* eslint-disable react-hooks/exhaustive-deps */
"use client"

// import { Gallery } from "@/components/componentsPages/apod/Gallery"
import { PhotoDay } from "@/components/componentsPages/apod/PhotoDay"
// import Loading from '@/app/loading'
import { TypeApod } from "@/components/Types"

import React, { useState, useEffect } from 'react'
import axios from "axios"

// import { DateRange } from "react-day-picker"
// import { addDays } from "date-fns"

export const APIsApod = () => {
  const today = new Date()

  // const formatYesterday = `${today.getFullYear()}-${String(today.getMonth()-1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`
  // const formatToday = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`

  const [pictureTheDay, setPictureTheDay] = useState<TypeApod>()
  // const [galleryPictureTheDay, setGalleryPictureTheDay] = useState<TypeApodGallery[]>([])

  const [datePhotoDay, setDatePhotoDay] = useState<Date>()
  // const [dateGallery, setDateGallery] = useState<DateRange | undefined>({ from: new Date(formatYesterday), to: addDays(new Date(formatToday), 1) })

  // const [loading, setLoading] = useState(true)


  const GetApod = async () => {
    try {
      const formatToday = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`
      const formatDate = datePhotoDay ? `${datePhotoDay?.getFullYear()}-${String(Number(datePhotoDay?.getMonth())+1).padStart(2, "0")}-${String(datePhotoDay?.getDate()).padStart(2, "0")}` : `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`

      if (new Date(formatDate) > new Date(formatToday)) {
        alert("Select dates before or equal to today")
      } else {
        const response = await axios.get(`http://127.0.0.1:4000/api/apod?date=${formatDate}`)
        setPictureTheDay(response.data)
      }
    } catch (error) {
      console.error("Error when searching for image", error)
    }
  }


  //https://universe-back.onrender.com
  //http://127.0.0.1:4000


  // const GetGalleryApod = async () => {
  //   try {
  //     // const formtDateFrom = `${dateGallery?.from?.getFullYear()}-${String(Number(dateGallery?.from?.getMonth()) + 1).padStart(2, "0")}-${String(dateGallery?.from?.getDate()).padStart(2, "0")}`
  //     // const formatDateTo = `${dateGallery?.to?.getFullYear()}-${String(Number(dateGallery?.to?.getMonth()) + 1).padStart(2, "0")}-${String(dateGallery?.to?.getDate()).padStart(2, "0")}`

  //     if (new Date(formtDateFrom) > new Date(formatToday) || new Date(formatDateTo) > new Date(formatToday)) {
  //       alert("Selecione datas anteriores ou iguais a hoje")
  //     } else {
  //       const response = await axios.get(`https://universe-back.onrender.com/api/apod/gallery?start_date=${formtDateFrom}&end_date=${formatDateTo}`)
  //       if (response.data.length > 100) {
  //         alert("Limite máximo de requisições atingido! (máximo 40)")
  //       } else {
  //         setGalleryPictureTheDay(response.data)
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Erro ao buscar imagem:", error)
  //   }
  // }

  useEffect(() => {
    GetApod()
    // GetGalleryApod()

    // Buscar ambos os dados simultaneamente
    // Promise.all([GetApod(), GetGalleryApod()]).then(() => { setLoading(false) })
  }, [])

  // if (loading) {
  //   return <Loading />
  // }

  return (
    <main className="my-20 flex flex-col items-center">
      <PhotoDay pictureTheDay={pictureTheDay} datePhotoDay={datePhotoDay} setDatePhotoDay={setDatePhotoDay} GetApod={GetApod}/>
      {/* <Gallery galleryPictureTheDay={galleryPictureTheDay} dateGallery={dateGallery} setDateGallery={setDateGallery} GetGalleryApod={GetGalleryApod}/> */}
    </main>
  )
}
