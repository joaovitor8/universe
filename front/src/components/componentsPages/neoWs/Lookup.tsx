"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

import { TypeAsteroidsLookup } from "@/components/Types"
import { useState } from "react"
import axios from "axios"

export const Lookup = () => {
  const [asteroidsID, setAsteroidsID] = useState('')
  const [asteroidsLookup, setAsteroidsLookup] = useState<TypeAsteroidsLookup>()
  // const [closeApproachDate, setCloseApproachDate] = useState(0)

  const GetAsteroidsLookup = () => {
    try {
      axios.get(`http://localhost:3333/api/neows/lookup?id=${asteroidsID}`)
        .then((res) => setAsteroidsLookup(res.data))
        .catch((error) => { console.error(error) })
    } catch (error) {
      console.error("", error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center space-y-5 pb-5">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="enter the ID" onChange={(e) => setAsteroidsID(e.target.value)}/>
        <Button onClick={GetAsteroidsLookup}>Search</Button>
        <span>Advanced Information</span>
      </div>
      <div className="flex">
        <Card className="h-min w-[500px]">
          <CardHeader>
            <CardTitle>Orbital Data</CardTitle>
            <CardDescription>Information related to the orbit of a space object</CardDescription>
          </CardHeader>
          <CardContent>
            <p><span className="text-violet-700 font-bold">Equinox:</span> {asteroidsLookup?.orbital_data.equinox}</p>
            <p><span className="text-violet-700 font-bold">Observation date:</span> {asteroidsLookup?.orbital_data.observation_date}</p>
            <p><span className="text-violet-700 font-bold">Aphelion distance:</span> {asteroidsLookup?.orbital_data.aphelion_distance}</p>
            <p><span className="text-violet-700 font-bold">Perihelion distance:</span> {asteroidsLookup?.orbital_data.perihelion_distance}</p>
            <p><span className="text-violet-700 font-bold">Semi major axis:</span> {asteroidsLookup?.orbital_data.semi_major_axis}</p>
            <p><span className="text-violet-700 font-bold">Mean anomaly:</span> {asteroidsLookup?.orbital_data.mean_anomaly}</p>
            <p><span className="text-violet-700 font-bold">Mean motion:</span> {asteroidsLookup?.orbital_data.mean_motion}</p>
            <p><span className="text-violet-700 font-bold">Ascending node longitude:</span> {asteroidsLookup?.orbital_data.ascending_node_longitude}</p>
            <p><span className="text-violet-700 font-bold">Inclination:</span> {asteroidsLookup?.orbital_data.inclination}</p>
            <p><span className="text-violet-700 font-bold">Perihelion argument:</span> {asteroidsLookup?.orbital_data.perihelion_argument}</p>
            <p><span className="text-violet-700 font-bold">Eccentricity:</span> {asteroidsLookup?.orbital_data.eccentricity}</p>
            <p><span className="text-violet-700 font-bold">Observations used:</span> {asteroidsLookup?.orbital_data.observations_used}</p>
            <p><span className="text-violet-700 font-bold">Epoch osculation:</span> {asteroidsLookup?.orbital_data.epoch_osculation}</p>
            <p><span className="text-violet-700 font-bold">Minimum orbit intersection:</span> {asteroidsLookup?.orbital_data.minimum_orbit_intersection}</p>
            <p><span className="text-violet-700 font-bold">Perihelion time:</span> {asteroidsLookup?.orbital_data.perihelion_time}</p>
            <p><span className="text-violet-700 font-bold">Orbital period:</span> {asteroidsLookup?.orbital_data.orbital_period}</p>
            <p><span className="text-violet-700 font-bold">Jupiter tisserand invariant:</span> {asteroidsLookup?.orbital_data.jupiter_tisserand_invariant}</p>
            <p><span className="text-violet-700 font-bold">Orbit class description:</span> {asteroidsLookup?.orbital_data.orbit_class_description}</p>
            <p><span className="text-violet-700 font-bold">Orbit class range:</span> {asteroidsLookup?.orbital_data.orbit_class_range}</p>
            <p><span className="text-violet-700 font-bold">Orbit class type:</span> {asteroidsLookup?.orbital_data.orbit_class_type}</p>
            <p><span className="text-violet-700 font-bold">Orbit determination date:</span> {asteroidsLookup?.orbital_data.orbit_determination_date}</p>
            <p><span className="text-violet-700 font-bold">Orbit id:</span> {asteroidsLookup?.orbital_data.orbit_id}</p>
            <p><span className="text-violet-700 font-bold">Orbit uncertainty:</span> {asteroidsLookup?.orbital_data.orbit_uncertainty}</p>
          </CardContent>
        </Card>

        <div className="space-y-1">
         <Card className="h-min w-[500px]">
            <CardHeader>
              <CardTitle>Estimated Diameter</CardTitle>
              <CardDescription>Diameter information in different measurements</CardDescription>
            </CardHeader>
            <CardContent>
              <p><span className="text-violet-700 font-bold">Miles:</span> {asteroidsLookup?.estimated_diameter.miles}</p>
              <p><span className="text-violet-700 font-bold">Kilometers:</span> {asteroidsLookup?.estimated_diameter.kilometers}</p>
              <p><span className="text-violet-700 font-bold">Meters:</span> {asteroidsLookup?.estimated_diameter.meters}</p>
              <p><span className="text-violet-700 font-bold">Feet:</span> {asteroidsLookup?.estimated_diameter.feet}</p>
            </CardContent>
          </Card>

          {/* <Card className="h-min w-[500px]">
            <CardHeader>
              <CardTitle>Close Approach</CardTitle>
              <CardDescription>Data on speeds, distances and more</CardDescription>
            </CardHeader>
            <CardContent>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  {asteroidsLookup?.close_approach.map((dt, key) => <SelectItem value={dt.close_approach_date} key={key}>{dt.close_approach_date}</SelectItem> )}
                </SelectContent>
              </Select>

              <p>Date: {asteroidsLookup?.close_approach[closeApproachDate].close_approach_date_full}</p>
              <p>---</p>
              <div>
                <p>Kilometers per Second: {asteroidsLookup?.close_approach[0].relative_velocity.kilometers_second}</p>
                <p>Kilometers per Hour: {asteroidsLookup?.close_approach[0].relative_velocity.kilometers_hour}</p>
                <p>Miles per Hour: {asteroidsLookup?.close_approach[0].relative_velocity.miles_hour}</p>
              </div>
              <p>---</p>
              <div>
                <p>Astronomical: {asteroidsLookup?.close_approach[0].miss_distance.astronomical}</p>
                <p>Lunar: {asteroidsLookup?.close_approach[0].miss_distance.lunar}</p>
                <p>Kilometers: {asteroidsLookup?.close_approach[0].miss_distance.kilometers}</p>
                <p>Miles: {asteroidsLookup?.close_approach[0].miss_distance.miles}</p>
              </div>
              <p>---</p>
              <p>Orbiting Body: {asteroidsLookup?.close_approach[0].orbiting_body}</p>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  )
}

// className="text-violet-700 font-bold"