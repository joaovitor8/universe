/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

import { useState, useEffect } from "react"
import axios from "axios"


export const CME = () => {
  const [cme, setCme] = useState()
  const [date, setDate] = useState<Date>()

  const GetCME = () => {
    try {
      const formatToday = `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`
      const formatDate = date ? `${date?.getFullYear()}-${String(Number(date?.getMonth())+1).padStart(2, "0")}-${String(date?.getDate()).padStart(2, "0")}` : `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`

      if (formatDate > formatToday) {
        alert("Select dates before or equal to today ...........")
      } else {
        axios.get(`http://localhost:3333/api/donki/cme?date=${formatDate}`)
          .then((res) => setCme(res.data))
          .catch((error) => { console.error(error) })
      }
    } catch (error) {
      console.error("Error when searching for image .........", error)
    }
  }

  useEffect(() => {
    GetCME()
  }, [])

  console.log(cme)

  return (
    <div className="min-h-screen">
      <div className="w-[1012px] flex items-start mt-20 space-x-5">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground" )}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "yyyy-MM-dd") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus/>
          </PopoverContent>
        </Popover>

        <Button onClick={GetCME}>Search</Button>
      </div>
    </div>
  )
}
