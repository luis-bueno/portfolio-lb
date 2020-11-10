import React from "react"
import styled from "styled-components"
import HeroImg from "../../../static/illustrations/hero.inline.svg"
import ArrowIcon from "../../../static/icons/arrow-right.inline.svg"
import { H1, B1, TextMedium } from "../styles/TextStyles"
import { ButtonCTA } from "../buttons/ButtonCTA"
import { BreakPoints } from "../styles/BreakPoints"

const Hero = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <HeroText>
            <H1>LUIS BUENO</H1>
            <B1>Designer that code</B1>
          </HeroText>
          <HeroCTA>
            <HeroCTAText>
              I build amazing experiences <br />
              connecting creativity and technology!
            </HeroCTAText>
            <ButtonCTA>
              <ButtonCTAText>
                See my work
                <ArrowIcon />
              </ButtonCTAText>
            </ButtonCTA>
          </HeroCTA>
        </TextWrapper>
        <HeroImgWrapper>
          <HeroImg />
        </HeroImgWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1024px;
  /* height: clamp(300px, 50vh, 450px); */
  margin: 100px auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: max-content minmax(600px, 1fr);
  /* grid-template-rows: clamp(300px, 50vh, 450px); */
  gap: 50px;
  justify-items: start;
  align-items: end;
  /* @media (max-width: ${BreakPoints.laptop}) {
    margin: 50px;
  } */
  /* @media (max-width: ${BreakPoints.laptop}) {
    margin: 0px;
  } */
`
const TextWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 50px;
`

const HeroText = styled.div``

const HeroCTA = styled.div``

const HeroCTAText = styled(TextMedium)`
  line-height: 1.4;
  padding-bottom: 10px;
`
const ButtonCTAText = styled(TextMedium)`
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 20px;
`

const HeroImgWrapper = styled.div`
  height: 100%;
  width: 100%;
  @media (max-width: ${BreakPoints.phone}) {
    display: none;
  }
`
