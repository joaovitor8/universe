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

export const AsteroidsFeed = () => {
  const [asteroidsFeed, setAsteroidsFeed] = useState([])
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

  console.log(asteroidsFeed)

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-5">
      <div className="w-[1200px] space-x-5">
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

        <Button onClick={GetAsteroidsFeed}>Buscar</Button>
      </div>

      <div className="w-[1200px]">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>absolute magnitude</TableHead>
              <TableHead>estimated diameter</TableHead>
              <TableHead>potentially hazardous</TableHead>
              <TableHead>approach date</TableHead>
              <TableHead>relative velocity</TableHead>
              <TableHead>distance</TableHead>
              <TableHead>orbiting body</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {asteroidsFeed.map((a, key) => (
              <TableRow key={key}>
                <TableCell>{a.id}</TableCell>
                <TableCell>{a.name}</TableCell>
                <TableCell>{a.absolute_magnitude_h}</TableCell>
                <TableCell>{Math.round(a.estimated_diameter.meters.estimated_diameter_min)} to {Math.round(a.estimated_diameter.meters.estimated_diameter_max)} M</TableCell>
                <TableCell>{a.is_potentially_hazardous_asteroid ? "Yes" : "No"}</TableCell>
                <TableCell>{a.close_approach_data[0].close_approach_date}</TableCell>
                <TableCell>{Math.round(a.close_approach_data[0].relative_velocity.kilometers_per_hour)} KM/H</TableCell>
                <TableCell>{Math.round(a.close_approach_data[0].miss_distance.kilometers)} KM</TableCell>
                <TableCell>{a.close_approach_data[0].orbiting_body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
