import React from "react"
import ThemeProvider from "./src/components/hooks/ThemeProvider"

export const onServiceWorkerUpdateReady = () => window.location.reload(true)

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
