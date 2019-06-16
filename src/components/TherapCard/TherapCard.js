import React from "react"

const TherapCard = props => {
  return (
    <div>
      {props.name}
      {props.language}
      {props.timezone}
      USD {props.hourlyRate}/hour
      {props.license}
      {props.yearsOfExperience} years of experience
    </div>
  )
}

export default TherapCard
