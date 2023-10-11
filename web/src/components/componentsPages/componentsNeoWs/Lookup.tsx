"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { TypeLookupAsteroids } from "@/components/Types"
import { useState } from "react"
import axios from "axios"

export const Lookup = () => {
  const [asteroidsID, setAsteroidsID] = useState('')
  const [asteroidsLookup, setAsteroidsLookup] = useState<TypeLookupAsteroids>()

  const GetAsteroidsLookup = () => {
    try {
      axios.get(`http://localhost:3333/api/neows/lookup?id=${asteroidsID}`)
        .then((res) => setAsteroidsLookup(res.data))
        .catch((error) => { console.error(error) })
    } catch (error) {
      console.error("", error)
    }
  }

  console.log(asteroidsLookup)

  return (
    <div className="min-h-screen flex flex-col items-center space-y-5 p-5">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="search" placeholder="enter the ID" onChange={(e) => setAsteroidsID(e.target.value)}/>
        <Button onClick={GetAsteroidsLookup}>Search</Button>
        <span>Advanced Information</span>
      </div>
      <div className="flex flex-wrap space-x-1">
        <Card className="h-min w-[500px]">
          <CardHeader>
            <CardTitle>Orbital Data</CardTitle>
            <CardDescription>Information related to the orbit of a space object</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Equinox: {asteroidsLookup?.orbital_data.equinox}</p>
            <p>Observation date: {asteroidsLookup?.orbital_data.observation_date}</p>
            <p>Aphelion distance: {asteroidsLookup?.orbital_data.aphelion_distance}</p>
            <p>Perihelion distance: {asteroidsLookup?.orbital_data.perihelion_distance}</p>
            <p>Semi major axis: {asteroidsLookup?.orbital_data.semi_major_axis}</p>
            <p>Mean anomaly: {asteroidsLookup?.orbital_data.mean_anomaly}</p>
            <p>Mean motion: {asteroidsLookup?.orbital_data.mean_motion}</p>
            <p>Ascending node longitude: {asteroidsLookup?.orbital_data.ascending_node_longitude}</p>
            <p>Inclination: {asteroidsLookup?.orbital_data.inclination}</p>
            <p>Perihelion argument: {asteroidsLookup?.orbital_data.perihelion_argument}</p>
            <p>Eccentricity: {asteroidsLookup?.orbital_data.eccentricity}</p>
            <p>Observations used: {asteroidsLookup?.orbital_data.observations_used}</p>
            <p>Epoch osculation: {asteroidsLookup?.orbital_data.epoch_osculation}</p>
            <p>Minimum orbit intersection: {asteroidsLookup?.orbital_data.minimum_orbit_intersection}</p>
            <p>Perihelion time: {asteroidsLookup?.orbital_data.perihelion_time}</p>
            <p>Orbital period: {asteroidsLookup?.orbital_data.orbital_period}</p>
            <p>Jupiter tisserand invariant: {asteroidsLookup?.orbital_data.jupiter_tisserand_invariant}</p>
            <p>Orbit class description: {asteroidsLookup?.orbital_data.orbit_class_description}</p>
            <p>Orbit class range: {asteroidsLookup?.orbital_data.orbit_class_range}</p>
            <p>Orbit class type: {asteroidsLookup?.orbital_data.orbit_class_type}</p>
            <p>Orbit determination date: {asteroidsLookup?.orbital_data.orbit_determination_date}</p>
            <p>Orbit id: {asteroidsLookup?.orbital_data.orbit_id}</p>
            <p>Orbit uncertainty: {asteroidsLookup?.orbital_data.orbit_uncertainty}</p>
          </CardContent>
        </Card>

        <div className="space-y-1">
          <Card className="h-min w-[500px]">
            <CardHeader>
              <CardTitle>Estimated Diameter</CardTitle>
              <CardDescription>Diameter information in different measurements</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Miles: {asteroidsLookup?.estimated_diameter.miles}</p>
              <p>Kilometers: {asteroidsLookup?.estimated_diameter.kilometers}</p>
              <p>Meters: {asteroidsLookup?.estimated_diameter.meters}</p>
              <p>Feet: {asteroidsLookup?.estimated_diameter.feet}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Close Approach Data</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Data" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">A</SelectItem>
                  <SelectItem value="">B</SelectItem>
                  <SelectItem value="">C</SelectItem>
                </SelectContent>
              </Select>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
