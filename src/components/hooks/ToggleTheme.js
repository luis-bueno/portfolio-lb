import React, { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"
import SunIcon from "../../../static/icons/sun.inline.svg"
import MoonIcon from "../../../static/icons/moon.inline.svg"
import styled from "styled-components"
import "./styles.css"

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const RenderAuthButton = () => {
    if (theme === "light") {
      return <MoonIcon className="svg-toggle" />
    } else {
      return <SunIcon className="svg-toggle" />
    }
  }

  return (
    <Wrapper onClick={toggleTheme}>
      <RenderAuthButton />
    </Wrapper>
  )
}
export default ToggleTheme

const Wrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 3s all;

  &:focus {
    outline: none;
    transition: 3s all;
  }
`
