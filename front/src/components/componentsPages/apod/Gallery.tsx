/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

import { CalendarIcon } from "@radix-ui/react-icons"
import { DateRange } from "react-day-picker"
import { addDays, format } from "date-fns"
import { cn } from "@/lib/utils"

import { TypeApodGallery } from "@/components/Types"
import { useState, useEffect } from "react"
import axios from "axios"

export const Gallery = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const today = new Date()
  const formatYesterday = `${today.getFullYear()}-${String(today.getMonth()-1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`
  const formatToday = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`

  const [galleryPictureTheDay, setGalleryPictureTheDay] = useState<TypeApodGallery[]>([])
  const [date, setDate] = useState<DateRange | undefined>({ from: new Date(formatYesterday), to: addDays(new Date(formatToday), 1) })

  const GetGalleryApod = async () => {
    try {
      const formtDateFrom = `${date?.from?.getFullYear()}-${String(Number(date?.from?.getMonth()) + 1).padStart(2, "0")}-${String(date?.from?.getDate()).padStart(2, "0")}`
      const formatDateTo = `${date?.to?.getFullYear()}-${String(Number(date?.to?.getMonth()) + 1).padStart(2, "0")}-${String(date?.to?.getDate()).padStart(2, "0")}`

      if (new Date(formtDateFrom) > new Date(formatToday) || new Date(formatDateTo) > new Date(formatToday)) {
        alert("Selecione datas anteriores ou iguais a hoje")
      } else {
        const response = await axios.get(`http://localhost:3333/api/apod/gallery?start_date=${formtDateFrom}&end_date=${formatDateTo}`)
        if (response.data.length > 100) {
          alert("Limite máximo de requisições atingido! (máximo 40)")
        } else {
          setGalleryPictureTheDay(response.data)
        }
      }
    } catch (error) {
      console.error("Erro ao buscar imagem:", error)
    }
  }

  useEffect(() => {
    GetGalleryApod()
  }, [])

  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="flex space-x-5">
        <div className={cn("grid gap-2", className)}>
          <Popover>
            <PopoverTrigger asChild>
              <Button id="date" variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "yyyy-MM-dd")} /{" "}
                      {format(date.to, "yyyy-MM-dd")}
                    </>
                  ) : (
                    format(date.from, "yyyy-MM-dd")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2}/>
            </PopoverContent>
          </Popover>
        </div>

        <Button onClick={GetGalleryApod}>Search</Button>
      </div>

      <div className="w-full flex flex-wrap justify-center pb-5">
        {galleryPictureTheDay.map((img, key) => (
          <a href={img.hdurl} key={key} target="_blank">
            <img src={img.url} alt={img.media_type} className="m-1 h-[300px] w-[300px]"/>
          </a>
        ))}
      </div>
    </div>
  )
}
