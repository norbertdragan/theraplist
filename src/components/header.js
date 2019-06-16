/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    css={css`
      margin-bottom: "1.45rem";
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        max-width: 960px;
        padding: 1.45rem 1.0875rem;
        display: flex;
        justify-content: space-between;
      `}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          css={css`
            color: #000000 !important;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 1.125rem;
            font-weight: black;
          `}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link
        to="/join"
        css={css`
          color: var(--color-primary);
          text-decoration: none;
        `}
      >
        Join as a Therapist
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
