import React from "react"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <main>{children}</main>
    </>
  )
}

export default Layout
