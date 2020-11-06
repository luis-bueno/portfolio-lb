import React, { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"
import sunIcon from "../../../static/icons/sun.svg"
import moonIcon from "../../../static/icons/moon.svg"
import styled from "styled-components"

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <img src={theme === "light" ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  )
}
export default ToggleTheme

const Wrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;

  &:focus {
    outline: none;
    transition: 0.3s all;
  }
`
