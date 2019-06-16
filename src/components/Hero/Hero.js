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
      <h2
        css={css`
          font-size: 2.25rem;
          text-align: center;
          font-weight: 700;
          max-width: 50rem;
          padding: 0 2rem;
        `}
      >
        Find <mark>nomad-friendly</mark> therapists for online counseling.
      </h2>
    </section>
  )
}

export default Hero
