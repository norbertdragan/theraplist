import React, { useState, useEffect } from "react"
import TherapCard from "../TherapCard"

const TherapList = () => {
  const [therapists, setTherapists] = useState([])

  const fetchData = async url => {
    const response = await fetch(url)
    const json = await response.json()
    setTherapists(json)
  }

  useEffect(() => {
    fetchData("https://api.sheety.co/6f1c17b5-cb83-40ec-8071-548c4c552464")
  }, [])

  return (
    <div>
      <button onClick={() => console.log(therapists)}>PRESSS MEE</button>
      {therapists.map((therapist, key) => {
        return <TherapCard therapist={therapist} key={key} />
      })}
    </div>
  )
}

export default TherapList