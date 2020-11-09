import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import GithubIcon from "../../../static/logos/github.inline.svg"
import LinkedinIcon from "../../../static/logos/linkedin.inline.svg"
import AnimatedIcon from "../hooks/AnimatedIcon"
import HamburgerIcon from "../mobileNav/HamburgerMenu"
import { BreakPoints } from "../styles/BreakPoints"

const Header = () => {
  const linkStyles = {
    color: "var(--color-text-1)",
    fontSize: "var(--font-size-text-medium)",
    fontWeight: "var(--font-weight-normal)",
  }
  return (
    <Background>
      <Wrapper>
        <NavSocial>
          <GithubIcon className="svg-logos" />
          <LinkedinIcon className="svg-logos" />
        </NavSocial>
        <NavBar>
          <Link to="/" style={linkStyles}>
            About
          </Link>
          <Link to="/" style={linkStyles}>
            Work
          </Link>
          <Link to="/" style={linkStyles}>
            Contact
          </Link>
        </NavBar>
        <NavUtilities>
          <AnimatedIcon />
          <HamburgerIcon size={32} />
        </NavUtilities>
      </Wrapper>
    </Background>
  )
}

export default Header

const Background = styled.div`
  background-color: var(--color-background-1);
  margin-top: 30px;
  position: sticky;
  top: 0;
  z-index: 2;

  @media (max-width: ${BreakPoints.phone}) {
    background-color: transparent;
    margin-top: 0px;
  }
`
const Wrapper = styled.header`
  width: 100%;
  max-width: 1024px;
  margin: auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(8px);
`
const NavSocial = styled.div`
  display: flex;

  & > * {
    margin: 0 16px;

    & path {
      fill: var(--color-text-2);
    }

    &:hover path {
      fill: var(--color-text-1);
    }
  }
`

const NavBar = styled.nav`
  & > * {
    padding: 0 20px;
  }
  @media (max-width: ${BreakPoints.phone}) {
    display: none;
  }
`
const NavUtilities = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin: 0 16px;
  }
`
