import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { Header } from "../components/sections/Header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
  </Layout>
)

export default IndexPage
