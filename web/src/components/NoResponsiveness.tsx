"use client"

import { useState } from "react"

export const NoResponsiveness = () => {
  const [noRespon, setNoRespon] = useState(false)

  let n = 1
  
  if (n === 2) {
    setNoRespon(true)
  } else {
    setNoRespon(false)
  }

  return noRespon
}
