import React, { useEffect } from "react"
import profilePhoto from "../../images/profile.png"
import "./style.css"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const TherapCard = props => {
  props = props.therapist
  return (
    <div className="card-box">
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
          `}
        >
          <img className="therapist-photo" src={props.photo} alt="" />
          <div
            css={css`
              display: flex;
              /* align-items: center; */
            `}
          >
            <div
              css={css`
                padding-left: 2rem;
              `}
            >
              <h3 className="therapist-name"> {props.name}</h3>
              <div className="title">{props.title}</div>
              <div className="language">Speaks: {props.languages}</div>
              <div className="divider"></div>
            </div>
          </div>
          <span className="location">
            UTC {props.timezone}
            {props.countryEmoji}
            {props.country}
          </span>
        </div>
        <div
          css={css`
            margin-top: 2rem;
          `}
        >
          {props.experties.split(",").map((experty, key) => (
            <span className="experty" key={key}>
              {experty}
            </span>
          ))}
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <div className="price">USD {props.hourlyRate}/hour</div>
        <button className="visit-website-button">
          <a href={props.website}>Visit Website</a>
        </button>
      </div>
    </div>
  )
}

export default TherapCard
