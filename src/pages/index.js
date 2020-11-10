import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Header from "../components/sections/Header"
import SideMenu from "../components/mobileNav/SideMenu"
import Hero from "../components/sections/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Luis Bueno" />
    <SideMenu />
    <Header />
    <Hero />
    <div
      style={{
        height: "200vh",
      }}
    ></div>
  </Layout>
)

export default IndexPage
