import React from "react"
import ThemeProvider from "./src/components/hooks/ThemeProvider"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
