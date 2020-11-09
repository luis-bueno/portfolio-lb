import React, { useContext } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { MobileNavContext } from "../mobileNav/MobileNavProvider"

const HamburgerIcon = ({ size }) => {
  const { isOpen, toggleOpen } = useContext(MobileNavContext)

  const svgProps = useSpring({
    transform: `rotate(${isOpen ? -45 : 0}deg)`,
    config: {
      tension: 150,
      friction: 25,
    },
  })

  const line1Props = useSpring({
    x1: isOpen ? size / 2 : size * 0.15,
    y1: isOpen ? 0 : size * 0.3,
    x2: isOpen ? size / 2 : size * 0.85,
    y2: isOpen ? size : size * 0.3,
    config: {
      tension: 150,
      friction: 22,
    },
  })
  const line2Props = useSpring({
    x1: isOpen ? 0 : size * 0.85,
    y1: isOpen ? size / 2 : size * 0.7,
    x2: isOpen ? size : size * 0.15,
    y2: isOpen ? size / 2 : size * 0.7,
    config: {
      tension: 110,
      friction: 22,
    },
  })

  return (
    <Svg
      onClick={() => toggleOpen()}
      style={{
        width: size,
        height: size,
        ...svgProps,
      }}
    >
      <animated.line
        {...line1Props}
        stroke="var(--color-text-1)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <animated.line
        {...line2Props}
        stroke="var(--color-text-1)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  )
}

const Svg = styled(animated.svg)`
  display: block;
  overflow: visible;
  transform-origin: center center;
`

export default HamburgerIcon
