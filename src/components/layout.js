/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,

            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <footer
          css={css`
            background: var(--color-primary);
            color: white;
            padding: 4rem 0;
            text-align: center;
            font-weight: 600;
          `}
        >
          <div
            css={css`
              max-width: 60rem;
              margin: auto;
            `}
          >
            © {new Date().getFullYear()}, Designed and built by <a>Nadia</a> and{" "}
            <a>Norbi</a> at a Hackathon in Bali ❤️
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
