/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

import { TypeAsteroidsFeed } from "@/components/Types"
import { useEffect, useState } from "react"
import axios from "axios"

export const Feed = () => {
  const [asteroidsFeed, setAsteroidsFeed] = useState<TypeAsteroidsFeed[]>([])
  const [date, setDate] = useState<Date>()

  const GetAsteroidsFeed = () => {
    try {
      const formatDate = date ? `${date?.getFullYear()}-${String(Number(date?.getMonth())+1).padStart(2, "0")}-${String(date?.getDate()).padStart(2, "0")}` : `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`

      axios.get(`http://localhost:3333/api/neows/feed?date=${formatDate}`)
        .then((res) => setAsteroidsFeed(res.data))
        .catch((error) => { console.error(error) })

    } catch (error) {
      console.error("", error)
    }
  }

  useEffect(() => {
    GetAsteroidsFeed()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center space-y-5">
      <div className="mt-20 space-x-5">
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

        <Button onClick={GetAsteroidsFeed}>Search</Button>

        <span>Basic Information</span>
      </div>

      <div className="">
        <Table>
          <TableCaption>Today&apos;s list of some information about nearby meteors.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-violet-700 font-bold">ID</TableHead>
              <TableHead className="text-violet-700 font-bold">Name</TableHead>
              <TableHead className="text-violet-700 font-bold">Absolute Magnitude</TableHead>
              <TableHead className="text-violet-700 font-bold">Sentry Object</TableHead>
              <TableHead className="text-violet-700 font-bold">Potentially Hazardous</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {asteroidsFeed.map((a, key) => (
              <TableRow key={key}>
                <TableCell>{a.id}</TableCell>
                <TableCell>{a.name}</TableCell>
                <TableCell>{a.absolute_magnitude}</TableCell>
                <TableCell>{a.sentry_object ? "Yes" : "No"}</TableCell>
                <TableCell>{a.potentially_hazardous ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
