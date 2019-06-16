import React, { useEffect } from "react"
import profilePhoto from "../../images/profile.png"
import "./style.css"

const TherapCard = props => {
  props = props.therapist
  return (
    <div className="card-box">
      <img className="therapist-photo" src={profilePhoto} alt="" />
      <h3 className="therapist-name"> {props.name}</h3>
      <span className="location">
        UTC {props.timezone}
        {props.countryEmoji}
        {props.country}
      </span>
      <div className="title">{props.title}</div>
      <div className="language">Speaks: {props.languages}</div>
      <div className="divider"></div>
      <div>
        {props.experties.split(",").map((experty, key) => (
          <span className="experty" key={key}>
            {experty}
          </span>
        ))}
      </div>
      <div className="price">USD {props.hourlyRate}/hour</div>
      <button className="visit-website-button">Visit Website</button>
    </div>
  )
}

export default TherapCard
