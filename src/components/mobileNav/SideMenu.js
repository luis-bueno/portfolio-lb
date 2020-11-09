import React, { useContext } from "react"
import { Keyframes, animated } from "react-spring/renderprops"
import delay from "delay"
import { MobileNavContext } from "./MobileNavProvider"
import { Link } from "gatsby"
import styled from "styled-components"

const Sidebar = Keyframes.Spring({
  open: { delay: 0, x: 0 },
  close: async call => {
    await delay(300)
    await call({ delay: 0, x: 100 })
  },
})

const Content = Keyframes.Trail({
  open: { x: 0, opacity: 1, delay: 300 },
  close: { x: 100, opacity: 0, delay: 0 },
})

const items = [
  <Link to="/">About</Link>,
  <Link to="/">Work</Link>,
  <Link to="/">Contact</Link>,
]

const config = {
  tension: 700,
  friction: 60,
  clamp: true,
}

const SideMenu = () => {
  const { isOpen } = useContext(MobileNavContext)

  const state = isOpen ? "open" : "close"

  return (
    <Sidebar native state={state}>
      {({ x }) => (
        <Wrapper
          style={{
            transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
          }}
        >
          <Content
            native
            config={config}
            state={state}
            items={items}
            keys={items.map((_, i) => i)}
            reverse={!isOpen}
          >
            {(item, i) => ({ x, ...props }) => (
              <animated.div
                style={{
                  transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                  ...props,
                }}
              >
                {item}
              </animated.div>
            )}
          </Content>
        </Wrapper>
      )}
    </Sidebar>
  )
}

export default SideMenu

const Wrapper = styled(animated.div)`
  background: var(--color-background-2);
  backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  & > * {
    padding: 16px;
    font-size: 32px;
    & > * {
      color: var(--color-text-1);
    }
  }
`
