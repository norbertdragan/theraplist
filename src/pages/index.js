import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import TherapList from "../components/TherapList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero headline="Find nomad-friendly therapists for online counseling." />
    <TherapList />
  </Layout>
)

export default IndexPage
