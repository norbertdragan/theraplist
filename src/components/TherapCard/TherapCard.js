import React, { useEffect } from "react"
import "./style.css"

const TherapCard = props => {
  props = props.therapist
  return (
    <div>
      <img src={props.photo} alt="" />
      <h3> {props.name}</h3>
      <span>
        UTC {props.timezone}
        {props.countryEmoji}
        {props.country}
      </span>
      <div>{props.title}</div>
      <div>Speaks: {props.languages}</div>
      <div>
        {props.experties.split(",").map((experty, key) => (
          <span className="experty" key={key}>
            {experty}
          </span>
        ))}
      </div>
      <div>USD {props.hourlyRate}/hour</div>
      <button>Visit Website</button>
    </div>
  )
}

export default TherapCard
