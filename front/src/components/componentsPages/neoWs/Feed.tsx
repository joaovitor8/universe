/* eslint-disable react-hooks/exhaustive-deps */
"use client"

// import { } from "@/components/ui/Table"

import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

import { TypeAsteroidsFeed } from "@/components/Types"
import { useEffect, useState } from "react"
import axios from "axios"

export const Feed = () => {
  const [asteroidsFeed, setAsteroidsFeed] = useState<TypeAsteroidsFeed[]>([])
  const [date, setDate] = useState<Date>()

  const GetFeed = () => {
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
    GetFeed()
  }, [])

  console.log(asteroidsFeed)

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <div className="flex items-center space-x-1">
        <Input type="date" onChange={(e) => setDate(new Date(e.target.value))} className="w-full sm:w-auto"/>
        
        <Button onClick={GetFeed} className="w-full sm:w-auto">Search</Button>
      </div>

      <table className="border border-purple-700 rounded-lg">
        <thead className="border border-purple-700">
          <tr>
            <th className="p-2 border border-purple-700">ID</th>
            <th className="p-2 border border-purple-700">Name</th>
            <th className="p-2 border border-purple-700">Absolute Magnitude</th>
            <th className="p-2 border border-purple-700">Sentinel Object</th>
            <th className="p-2 border border-purple-700">Potentially Dangerous</th>
            <th className="p-2 border border-purple-700">Link JPL</th>
          </tr>
        </thead>
        <tbody>
          {asteroidsFeed.map((asteroid) => (
            <tr key={asteroid.id}>
              <td className="p-2 border border-purple-700">{asteroid.id}</td>
              <td className="p-2 border border-purple-700">{asteroid.name}</td>
              <td className="p-2 border border-purple-700">{asteroid.absolute_magnitude_h}</td>
              <td className="p-2 border border-purple-700">{asteroid.sentry_object ? "Yes" : "No"}</td>
              <td className="p-2 border border-purple-700">{asteroid.potentially_hazardous ? "Yes" : "No"}</td>
              <td className="p-2 border border-purple-700">
                <a href={asteroid.nasa_jpl_url} target="_blank">Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
