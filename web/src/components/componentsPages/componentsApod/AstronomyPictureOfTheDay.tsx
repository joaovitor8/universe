/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

import { useEffect, useState } from "react"
import axios from "axios"

interface TypeApod {
  hdurl: string
  url: string
  title: string
  date: string
  explanation: string
  copyright: string
  media_type: string
}

export const AstronomyPictureOfTheDay = () => {
  const [pictureTheDay, setPictureTheDay] = useState<TypeApod>()
  const [date, setDate] = useState<Date>()

  const GetApod = () => {
    try {
      const formatToday = `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`
      const formatDate = date ? `${date?.getFullYear()}-${String(Number(date?.getMonth())+1).padStart(2, "0")}-${String(date?.getDate()).padStart(2, "0")}` : `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`

      if (formatDate > formatToday) {
        alert("Select dates before or equal to today")
      } else {
        axios.get(`http://localhost:3333/api/apod?date=${formatDate}`)
          .then((res) => setPictureTheDay(res.data))
          .catch((error) => { console.error(error) })
      }
    } catch (error) {
      console.error("Error when searching for image", error)
    }
  }

  useEffect(() => {
    GetApod()
  }, [])

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-5">
      <div className="w-[1020px] flex items-start space-x-5">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground" )}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "yyyy-MM-dd") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus/>
          </PopoverContent>
        </Popover>

        <Button onClick={GetApod}>Buscar</Button>
      </div>

      <div className="flex space-x-5">
        <div className="h-[500px] w-[500px]">
          <AspectRatio ratio={16 / 9}>
            <a href={pictureTheDay?.hdurl} target="_blank">
              <img src={pictureTheDay?.url} alt={pictureTheDay?.media_type} className="h-[500px] w-[500px] rounded-md object-cover" />
            </a>
          </AspectRatio>
        </div>

        <Card className="h-min w-[500px]">
          <CardHeader>
            <CardTitle>{pictureTheDay?.title}</CardTitle>
            <CardDescription>{pictureTheDay?.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{pictureTheDay?.explanation}</p>
          </CardContent>
          <CardFooter>
            <p>{pictureTheDay?.copyright}</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
