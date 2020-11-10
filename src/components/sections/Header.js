import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import GithubIcon from "../../../static/logos/github.inline.svg"
import LinkedinIcon from "../../../static/logos/linkedin.inline.svg"
import AnimatedIcon from "../hooks/AnimatedIcon"
import HamburgerIcon from "../mobileNav/HamburgerMenu"
import { BreakPoints } from "../styles/BreakPoints"

const Header = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <NavSocial>
          <GithubIcon />
          <LinkedinIcon />
        </NavSocial>
        <NavBar>
          <Link to="/">About</Link>
          <Link to="/">Work</Link>
          <Link to="/">Contact</Link>
        </NavBar>
        <NavUtilities>
          <AnimatedIcon />
          <HamburgerIcon size={32} />
        </NavUtilities>
      </WrapperContent>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  background-color: var(--color-background-1);
  margin-top: 30px;
  z-index: 2;
  position: sticky;
  top: 0;

  @media (max-width: ${BreakPoints.phone}) {
    background-color: transparent;
    margin-top: 0px;
  }
`
const WrapperContent = styled.header`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(20px);
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
    color: var(--color-text-1);
    font-size: var(--font-size-text-medium);
    font-weight: var(--font-weight-normal);
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
