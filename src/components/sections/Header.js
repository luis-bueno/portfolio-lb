import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import github from "../../../static/logos/github.svg"
import linkedin from "../../../static/logos/linkedin.svg"
import sunIcon from "../../../static/icons/sun.svg"
import moonIcon from "../../../static/icons/moon.svg"

export const Header = () => {
  const linkStyles = {
    color: "var(--color-text-1)",
    fontSize: "var(--font-size-text-medium)",
    fontWeight: "var(--font-weight-normal)",
  }
  return (
    <Wrapper>
      <NavSocial>
        <img style={{ marginRight: "16px" }} src={github} alt="github" />
        <img src={linkedin} alt="linkedin" />
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
        <WrapperUtilities type="button">
          <img src={sunIcon} alt={"sun"} />
        </WrapperUtilities>
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

const NavBar = styled.nav``
const NavUtilities = styled.div``
const Ul = styled.ul`
  display: flex;
`
const Li = styled.li`
  padding: 0 20px;
`
const WrapperUtilities = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;

  &:focus {
    outline: none;
    transition: 0.3s all;
  }
`
