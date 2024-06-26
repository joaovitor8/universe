/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"

import { TypeApod } from "@/components/utils/Types"
import { useEffect, useState } from "react"
import axios from "axios"

export const PhotoDay = () => {
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
    <div className="flex flex-col items-center justify-center space-y-5 bg-green-700 w-full min-h-screen">
      <div className="flex items-start mt-20 space-x-5">
        {/* <Popover>
          <PopoverTrigger asChild>
            <button variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground" )}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "yyyy-MM-dd") : <span>Pick a date</span>}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus/>
          </PopoverContent>
        </Popover>

        <button onClick={GetApod}>Search</button> */}
      </div>

      <div className="flex justify-center space-x-3">
        <div className="w-[500px]">
          <a href={pictureTheDay?.hdurl} target="_blank">
            <img src={pictureTheDay?.url} alt={pictureTheDay?.media_type} className="rounded-md object-cover" />
          </a>
        </div>

        <div className="h-min w-[500px] space-y-10">
          <div>
            <div>{pictureTheDay?.title}</div>
            <div>{pictureTheDay?.date}</div>
          </div>
          <div>
            <p>{pictureTheDay?.explanation}</p>
          </div>
          <div>
            <p>{pictureTheDay?.copyright}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
