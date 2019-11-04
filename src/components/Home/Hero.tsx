import React, {
  FunctionComponent,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react'
import styled from 'styled-components'
import transition from 'styled-transition-group'
import arrow from '../../img/arrow.svg'
import bgimage from '../../img/banner.jpg'
import { Button } from 'reactstrap'
import { Link } from 'gatsby'
import { media } from '../../config/media'
import { useNavbarState } from '../../utils/hooks'
import useIsInViewport from 'use-is-in-viewport'

const Intro = styled.section`
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  cursor: default;
  overflow: hidden;
  position: relative;
  text-align: center;
  padding: 7em 3em 7em 3em;
  height: auto;
  min-height: 0;
  ${media.greaterThan('sm')`
      height: 100vh;
      min-height: 35em;
      padding: 0;
    `}
`
const IntroBackground = transition.div`
    
      background-image: -moz-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${(
        props: any,
      ) => props['data-bgimage']});
      background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${(
        props: any,
      ) => props['data-bgimage']});
      background-image: -ms-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${(
        props: any,
      ) => props['data-bgimage']});
      background-image: linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${(
        props: any,
      ) => props['data-bgimage']});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      content: "";
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      opacity: 1;
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;
      
      &:enter {
        opacity: 0;
      }
      &:enter-active {
        opacity: 1;
        transition: opacity 3.5s ease;
      }
    
  `
const IntroHeadline = transition.h1`
    color: #fff;
    display: inline-block;
    font-size: 1.25em;
    font-weight: 800;
    letter-spacing: .225em;
    line-height: 1.75em;
    margin: 0 0 1em 0;
    opacity: 1;
    padding: .35em 1em;
    position: relative;
    text-transform: uppercase;
    z-index: 1;
    
    ${media.greaterThan('md')`
      font-size: 1.75em;
    `}
    
    &::before {
      background: #fff;
      content: "";
      display: block;
      height: 2px;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
      
    &::after {
      background: #fff;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      position: absolute;
      right: 0;
      width: 100%;
    }
    
    &:enter {
      opacity: 0;
      transform: scale(0.9);
       
      &::after,
      &::before {
        width: 0;
      }
    }
    &:enter-active {
      opacity: 1;
      transform: scale(1);
      transition: transform 0.5s ease, opacity 0.5s ease;
      
      &::after,
      &::before {
        width: 100%;
        transition: width 0.85s ease;
        transition-delay: 0.25s;
      }
      
    }
  `
const IntroWrap = styled.div`
  margin: 2em 0 2em 0;
  height: 120px;
`
const IntroText = styled.p`
  letter-spacing: 0.225em;
  margin: 0 0 2em 0;
  min-height: 1.75em;
  text-transform: uppercase;
`
const FadeIn = transition.div`
    opacity: 1;
    
    &:enter {
      opacity: 0;
    }
    &:enter-active {
      opacity: 1;
      transition: opacity 3.5s ease;
    }
  `

const MoreLink = transition.a`
    border: none;
    bottom: 0;
    color: inherit;
    display: none;
    font-size: 0.8em;
    height: 8.5em;
    left: 50%;
    letter-spacing: .225em;
    margin-left: -8.5em;
    opacity: 1;
    outline: 0;
    padding-left: .225em;
    position: absolute;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    width: 16em;
    z-index: 1;
    
    ${media.greaterThan('sm')`
      display: block;
    `}
      
    &::after {
      background-image: url(${(props: any) => props['data-arrow']});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      bottom: 4em;
      content: '';
      display: block;
      height: 1.5em;
      left: 50%;
      margin: 0 0 0 -0.75em;
      position: absolute;
      width: 1.5em;
    }
    
    &:enter {
      opacity: 0;
      transform: translateY(8.5em);
    }
    &:enter-active {
      opacity: 1;
      transform: translateY(0);
      transition: transform 0.75s ease, opacity 0.75s ease;
    }
  `

interface IntroProps {
  startSecondAnimation: boolean
  startAnimation: boolean
  setSecondAnimation: Dispatch<SetStateAction<boolean>>
  title: string
  heading: string
  startThirdAnimation: boolean
}

export const HeroSection: FunctionComponent<IntroProps> = ({
  startSecondAnimation,
  startAnimation,
  setSecondAnimation,
  title,
  heading,
  startThirdAnimation,
}) => {
  const [_, setTransparent] = useNavbarState()
  const [inView, ref] = useIsInViewport({ threshold: 10 })
  useEffect(() => {
    setTransparent(inView)
  }, [inView, setTransparent])

  return (
    <Intro innerRef={ref}>
      <IntroBackground
        data-bgimage={bgimage}
        mountOnEnter
        unmountOnExit
        timeout={3500}
        in={startSecondAnimation}
      />
      <div>
        <IntroHeadline
          unmountOnExit
          timeout={1000}
          in={startAnimation}
          onEntered={() => {
            setSecondAnimation(true)
          }}
        >
          {title}
        </IntroHeadline>
        <IntroWrap>
          <FadeIn mountOnEnter timeout={3500} in={startSecondAnimation}>
            <IntroText>{heading}</IntroText>
            <p>
              <Link to="/#contact">
                <Button className="px-5 text-uppercase" color="primary">
                  Kontakt
                </Button>
              </Link>
            </p>
          </FadeIn>
        </IntroWrap>
      </div>
      <MoreLink
        href="#offerings"
        data-arrow={arrow}
        mountOnEnter
        timeout={750}
        in={startThirdAnimation}
      >
        Mehr
      </MoreLink>
    </Intro>
  )
}
