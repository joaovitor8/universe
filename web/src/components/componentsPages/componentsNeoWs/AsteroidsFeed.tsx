/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

import { useEffect, useState } from "react"
import axios from "axios"

interface TypeApiAsteroids {
  id: string
  name: string
  orbiting_body: string
  potentially_hazardous: boolean
  absolute_magnitude: number
  relative_velocity_km_h: number
  estimated_diameter_meters: {
    estimated_diameter_min: number
    estimated_diameter_max: number
  }
}

export const AsteroidsFeed = () => {
  const [asteroidsFeed, setAsteroidsFeed] = useState<TypeApiAsteroids[]>([])
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
    <div className="h-screen flex flex-col items-center space-y-5">
      <div className="w-[90%] mt-20 space-x-5">
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
      </div>

      <div className="w-[1200px]">
        <Table>
          <TableCaption>Today&apos;s list of some information about nearby meteors.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>orbiting body</TableHead>
              <TableHead>potentially hazardous</TableHead>
              <TableHead>absolute magnitude</TableHead>
              <TableHead>relative velocity</TableHead>
              <TableHead>estimated diameter</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {asteroidsFeed.map((a, key) => (
              <TableRow key={key}>
                <TableCell>{a.id}</TableCell>
                <TableCell>{a.name}</TableCell>
                <TableCell>{a.orbiting_body}</TableCell>
                <TableCell>{a.potentially_hazardous ? "Yes" : "No"}</TableCell>
                <TableCell>{a.absolute_magnitude}</TableCell>
                <TableCell>{Math.floor(a.relative_velocity_km_h)} KM/H</TableCell>
                <TableCell>{Math.floor(a.estimated_diameter_meters.estimated_diameter_min)} to {Math.floor(a.estimated_diameter_meters.estimated_diameter_max)} M</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
