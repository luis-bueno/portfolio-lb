import React, { createContext, useState } from "react"

export const MobileNavContext = createContext()

const MobileNavProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!isOpen)
  }

  return (
    <MobileNavContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </MobileNavContext.Provider>
  )
}

export default MobileNavProvider
