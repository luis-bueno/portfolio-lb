import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Header from "../components/sections/Header"
import SideMenu from "../components/mobileNav/SideMenu"
import Hero from "../components/sections/Hero"
import ScriptHero from "../components/scripts/ScriptHero"

const IndexPage = () => (
  <Layout>
    <SEO title="Luis Bueno" />
    <ScriptHero />
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
