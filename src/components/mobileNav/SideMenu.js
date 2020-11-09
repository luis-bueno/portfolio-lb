// import './styles.css';
import React, { useState } from "react"
import { Keyframes, animated } from "react-spring/renderprops"
import delay from "delay"
import HamburgerIcon from "./HamburgerIcon"
import styled from "styled-components"

const Sidebar = Keyframes.Spring({
  open: { delay: 0, x: 0 },
  close: async call => {
    await delay(300)
    await call({ delay: 0, x: -100 })
  },
})

const Content = Keyframes.Trail({
  open: { x: 0, opacity: 1, delay: 0 },
  close: { x: -100, opacity: 0, delay: 0 },
})

const items = [
  <p>Hello</p>,
  <p>Hello</p>,
  <p>Hello</p>,
  <p>Hello</p>,
  <p>Hello</p>,
]

const config = {
  tension: 700,
  friction: 60,
  clamp: true,
}

const SideMenu = () => {
  //   const [open, setOpen] = useState(false)

  //   const toggleOpen = () => {
  //     setOpen(!open)
  //   }

  const state = open ? "open" : "close"

  return (
    <Sidebar native state={state}>
      {({ x }) => (
        <animated.div
          className="sidebar"
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
            reverse={!open}
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
        </animated.div>
      )}
    </Sidebar>
  )
}

export default SideMenu

const Body = styled.div`
  margin: 0;
  background-color: lightblue;
  width: 100%;
  height: 200vh;
`
{
  /* <UnstyledButton
style={{ position: "absolute", zIndex: "2" }}
onClick={() => toggleOpen()}
>
<HamburgerFlippyIcon isOpen={open} size={32} />
</UnstyledButton> */
}
