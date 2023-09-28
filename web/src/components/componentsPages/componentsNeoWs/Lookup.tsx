"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useEffect, useState } from "react"
import axios from "axios"

export const Lookup = () => {
  const [asteroidsLookup, setAsteroidsLookup] = useState()

  const GetAsteroidsLookup = () => {
    try {
      axios.get(`http://localhost:3333/api/neows/lookup?asteroid_id=${''}`)
        .then((res) => setAsteroidsLookup(res.data))
        .catch((error) => { console.error(error) })

    } catch (error) {
      console.error("", error)
    }
  }

  useEffect(() => {}, [])

  return (
    <div className="min-h-screen">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="search" placeholder="enter the ID" />
        <Button type="submit">Search</Button>
      </div>
      <div></div>
    </div>
  )
}
