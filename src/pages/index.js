import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Find nomad-friendly therapists for online counseling.</h2>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
