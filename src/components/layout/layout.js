import React, { useContext } from "react"
import "./layout.css"
import { GlobalStyles } from "../styles/GlobalStyles"
import { ThemeContext } from "../hooks/ThemeProvider"
import MobileNavProvider from "../mobileNav/MobileNavProvider"

function Layout({ children }) {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <MobileNavProvider>
        <GlobalStyles theme={theme} />
        {children}
      </MobileNavProvider>
    </>
  )
}

export default Layout
