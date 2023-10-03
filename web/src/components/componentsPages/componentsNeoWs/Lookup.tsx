"use client"

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
      <div>
        <div>
          <p>Orbital Data Information</p>
          <p>01 aphelion distance: {asteroidsLookup?.orbital_data.aphelion_distance}</p>
          <p>02 ascending node longitude: {asteroidsLookup?.orbital_data.ascending_node_longitude}</p>
          <p>03 data arc in days: {asteroidsLookup?.orbital_data.data_arc_in_days}</p>
          <p>04 eccentricity: {asteroidsLookup?.orbital_data.eccentricity}</p>
          <p>05 epoch osculation: {asteroidsLookup?.orbital_data.epoch_osculation}</p>
          <p>06 equinox: {asteroidsLookup?.orbital_data.equinox}</p>
          <p>07 first observation date: {asteroidsLookup?.orbital_data.first_observation_date}</p>
          <p>08 inclination: {asteroidsLookup?.orbital_data.inclination}</p>
          <p>09 jupiter tisserand invariant: {asteroidsLookup?.orbital_data.jupiter_tisserand_invariant}</p>
          <p>10 last observation date: {asteroidsLookup?.orbital_data.last_observation_date}</p>
          <p>11 mean anomaly: {asteroidsLookup?.orbital_data.mean_anomaly}</p>
          <p>12 mean motion: {asteroidsLookup?.orbital_data.mean_motion}</p>
          <p>13 minimum orbit intersection: {asteroidsLookup?.orbital_data.minimum_orbit_intersection}</p>
          <p>14 observations used: {asteroidsLookup?.orbital_data.observations_used}</p>
          <p>---</p>
          <p>15 orbit class - orbit class description: {asteroidsLookup?.orbital_data.orbit_class.orbit_class_description}</p>
          <p>16 orbit class - orbit class range: {asteroidsLookup?.orbital_data.orbit_class.orbit_class_range}</p>
          <p>17 orbit class - orbit class type: {asteroidsLookup?.orbital_data.orbit_class.orbit_class_type}</p>
          <p>---</p>
          <p>18 orbit determination date: {asteroidsLookup?.orbital_data.orbit_determination_date}</p>
          <p>19 orbit id: {asteroidsLookup?.orbital_data.orbit_id}</p>
          <p>20 orbit uncertainty: {asteroidsLookup?.orbital_data.orbit_uncertainty}</p>
          <p>21 orbital period: {asteroidsLookup?.orbital_data.orbital_period}</p>
          <p>22 perihelion argument: {asteroidsLookup?.orbital_data.perihelion_argument}</p>
          <p>23 perihelion distance: {asteroidsLookup?.orbital_data.perihelion_distance}</p>
          <p>24 perihelion time: {asteroidsLookup?.orbital_data.perihelion_time}</p>
          <p>25 semi major axis: {asteroidsLookup?.orbital_data.semi_major_axis}</p>
        </div>
      </div>
    </div>
  )
}
