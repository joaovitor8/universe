"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useState } from "react"
import axios from "axios"

export const Lookup = () => {
  const [asteroidsID, setAsteroidsID] = useState()
  const [asteroidsLookup, setAsteroidsLookup] = useState()

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
      </div>
      <div className="flex">
        <Card>
          <CardHeader>
            <CardTitle>Orbital Data</CardTitle>
            <CardDescription>Information</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Aphelion distance: {asteroidsLookup?.orbital_data.aphelion_distance}</p>
            <p>Ascending node longitude: {asteroidsLookup?.orbital_data.ascending_node_longitude}</p>
            <p>Data arc in days: {asteroidsLookup?.orbital_data.data_arc_in_days}</p>
            <p>Eccentricity: {asteroidsLookup?.orbital_data.eccentricity}</p>
            <p>Epoch osculation: {asteroidsLookup?.orbital_data.epoch_osculation}</p>
            <p>Equinox: {asteroidsLookup?.orbital_data.equinox}</p>
            <p>First observation date: {asteroidsLookup?.orbital_data.first_observation_date}</p>
            <p>Inclination: {asteroidsLookup?.orbital_data.inclination}</p>
            <p>Jupiter tisserand invariant: {asteroidsLookup?.orbital_data.jupiter_tisserand_invariant}</p>
            <p>Last observation date: {asteroidsLookup?.orbital_data.last_observation_date}</p>
            <p>Mean anomaly: {asteroidsLookup?.orbital_data.mean_anomaly}</p>
            <p>Mean motion: {asteroidsLookup?.orbital_data.mean_motion}</p>
            <p>Minimum orbit intersection: {asteroidsLookup?.orbital_data.minimum_orbit_intersection}</p>
            <p>Observations used: {asteroidsLookup?.orbital_data.observations_used}</p>
            <p>Orbit class description: {asteroidsLookup?.orbital_data.orbit_class.orbit_class_description}</p>
            <p>Orbit class range: {asteroidsLookup?.orbital_data.orbit_class.orbit_class_range}</p>
            <p>Orbit class type: {asteroidsLookup?.orbital_data.orbit_class.orbit_class_type}</p>
            <p>Orbit determination date: {asteroidsLookup?.orbital_data.orbit_determination_date}</p>
            <p>Orbit id: {asteroidsLookup?.orbital_data.orbit_id}</p>
            <p>Orbit uncertainty: {asteroidsLookup?.orbital_data.orbit_uncertainty}</p>
            <p>Orbital period: {asteroidsLookup?.orbital_data.orbital_period}</p>
            <p>Perihelion argument: {asteroidsLookup?.orbital_data.perihelion_argument}</p>
            <p>Perihelion distance: {asteroidsLookup?.orbital_data.perihelion_distance}</p>
            <p>Perihelion time: {asteroidsLookup?.orbital_data.perihelion_time}</p>
            <p>Semi major axis: {asteroidsLookup?.orbital_data.semi_major_axis}</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
