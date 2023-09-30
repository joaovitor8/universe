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
    <div className="h-screen flex flex-col items-center space-y-5 p-5">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="search" placeholder="enter the ID" onChange={(e) => setAsteroidsID(e.target.value)}/>
        <Button onClick={GetAsteroidsLookup}>Search</Button>
      </div>
      <div></div>
    </div>
  )
}
