/* eslint-disable react-hooks/exhaustive-deps */
"use client"

// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/Button"

import { TypeAsteroidsFeed } from "@/components/Types"
import { useEffect, useState } from "react"
import axios from "axios"

export const Feed = () => {
  const [asteroidsFeed, setAsteroidsFeed] = useState<TypeAsteroidsFeed[]>([])
  const [date, setDate] = useState<Date>()

  const GetAsteroidsFeed = () => {
    try {
      const formatDate = date ? `${date?.getFullYear()}-${String(Number(date?.getMonth())+1).padStart(2, "0")}-${String(date?.getDate()).padStart(2, "0")}` : `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`

      axios.get(`http://127.0.0.1:4000/api/neows/feed?date=${formatDate}`)
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
    <div className="h-screen">
      <table>
        <thead>
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Estimated Diameter (km)</th>
            <th className="p-2">Miss Distance (km)</th>
            <th className="p-2">Relative Velocity (km/h)</th>
            <th className="p-2">Is Potentially Hazardous</th>
          </tr>
        </thead>
        <tbody>
          {asteroidsFeed.map((asteroid) => (
            <tr key={asteroid.id}>
              <td className="p-2">{asteroid.id}</td>
              <td className="p-2">{asteroid.name}</td>
              <td className="p-2">{asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(3)}</td>
              <td className="p-2">{asteroid.close_approach_data[0].miss_distance.kilometers}</td>
              <td className="p-2">{asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour}</td>
              <td className="p-2">{asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
