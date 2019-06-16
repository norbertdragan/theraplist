import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import TherapList from "../components/TherapList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <TherapList />
  </Layout>
)

export default IndexPage
