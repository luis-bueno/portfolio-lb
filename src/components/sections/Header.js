import React from "react"
import styled from "styled-components"

export const Header = () => {
  return (
    <div>
      <Title>HELLO</Title>
    </div>
  )
}

const Title = styled.h1`
  color: var(--color-text);
  font-size: var(--font-size-h1);
`
