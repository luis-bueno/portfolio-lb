import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import GithubIcon from "../../../static/logos/github.inline.svg"
import LinkedinIcon from "../../../static/logos/linkedin.inline.svg"
import ToggleTheme from "../hooks/ToggleTheme"
import "./styles.css"

export const Header = () => {
  const linkStyles = {
    color: "var(--color-text-1)",
    fontSize: "var(--font-size-text-medium)",
    fontWeight: "var(--font-weight-normal)",
  }
  return (
    <Wrapper>
      <NavSocial>
        <GithubIcon className="svg-logos" />
        <LinkedinIcon className="svg-logos" />
      </NavSocial>
      <NavBar>
        <Ul>
          <Li>
            <Link to="/" style={linkStyles}>
              About
            </Link>
          </Li>
          <Li>
            <Link to="/" style={linkStyles}>
              Works
            </Link>
          </Li>
          <Li>
            <Link to="/" style={linkStyles}>
              Contact
            </Link>
          </Li>
        </Ul>
      </NavBar>
      <NavUtilities>
        <ToggleTheme />
      </NavUtilities>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100%;
  max-width: 1000px;
  margin: 60px auto;
  padding: 0 16px;
  height: 60px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavSocial = styled.div`
  display: flex;
`

const NavBar = styled.nav`
  /* color: white; */
`
const NavUtilities = styled.div``
const Ul = styled.ul`
  display: flex;
`
const Li = styled.li`
  padding: 0 20px;
`

// {
/* <div
style={{
  height: "32px",
  backgroundImage: url("../../../static/logos/linkedin.svg"),
}}
></div> */
// }
