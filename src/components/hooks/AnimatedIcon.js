import React from "react"
import { animated } from "react-spring"
import AnimationProperties from "./AnimationProperties"
import { ThemeContext } from "./ThemeProvider"

const AnimatedIcon = () => {
  const [isDarkMode, setDarkMode] = React.useState(false)
  const { toggleTheme } = React.useContext(ThemeContext)

  const toggleDarkMode = () => {
    setDarkMode(previous => !previous)
  }

  const [
    svgContainerProps,
    centerCircleProps,
    maskedCircleProps,
    linesProps,
  ] = AnimationProperties(isDarkMode)

  console.log(svgContainerProps)

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      onClick={() => {
        toggleDarkMode()
        toggleTheme()
      }}
      style={{
        cursor: "pointer",
        ...svgContainerProps,
      }}
    >
      <mask id="myMask2">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <animated.circle style={maskedCircleProps} r="9" fill="black" />
      </mask>

      <animated.circle
        cx="12"
        cy="12"
        style={centerCircleProps}
        fill="currentColor"
        mask="url(#myMask2)"
      />
      <animated.g stroke="currentColor" style={linesProps}>
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </animated.g>
    </animated.svg>
  )
}
export default AnimatedIcon
