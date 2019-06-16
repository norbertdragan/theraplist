import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Blob from "../../images/Blobs_hero.svg"

const Hero = props => {
  return (
    <section
      css={css`
        background-image: url(${Blob});
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20rem;
      `}
    >
      <h2>{props.headline}</h2>
    </section>
  )
}

export default Hero
