import React, { useContext } from "react"
import "./layout.css"
import { GlobalStyles } from "../styles/GlobalStyles"
import { ThemeContext } from "../hooks/ThemeProvider"

function Layout({ children }) {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <GlobalStyles theme={theme} />
      <main>{children}</main>
    </>
  )
}

export default Layout
