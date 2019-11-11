import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import transition from 'styled-transition-group'
import bgimage from '../../img/banner.jpg'
import { Button, Row, Col } from 'reactstrap'
import { media } from '../../config/media'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import styles from './Hero.module.scss'
import { blurryBackgroundBanner } from '../../scss/global.module.scss'

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

interface IntroProps {
  title: string
  heading: string
  startHeadlineAnimation: boolean
  startBackgroundAnimation: boolean
  startMoreLinkAnimation: boolean
  setBackgroundAnimation: any
  LinkTag: any
}

export const HeroSectionComponent: FunctionComponent<IntroProps> = ({
  title,
  heading,
  startHeadlineAnimation,
  startBackgroundAnimation,
  startMoreLinkAnimation,
  setBackgroundAnimation,
  LinkTag,
}) => (
  <Row>
    <Col>
      <Intro>
        <IntroBackground
          className={cn(blurryBackgroundBanner)}
          data-bgimage={bgimage}
          mountOnEnter
          unmountOnExit
          timeout={3500}
          in={startBackgroundAnimation}
        />
        <div>
          <IntroHeadline
            unmountOnExit
            timeout={1000}
            in={startHeadlineAnimation}
            onEntered={() => {
              setBackgroundAnimation(true)
            }}
          >
            {title}
          </IntroHeadline>
          <IntroWrap>
            <FadeIn mountOnEnter timeout={3500} in={startBackgroundAnimation}>
              <IntroText>{heading}</IntroText>
              <LinkTag to="/#contact">
                <Button className="px-5 text-uppercase" color="primary">
                  Kontakt
                </Button>
              </LinkTag>
            </FadeIn>
          </IntroWrap>
        </div>

        <Row className="pt-5">
          <Col
            className={cn(
              styles.fadedOut,
              startMoreLinkAnimation ? styles.fadeIn : undefined,
            )}
          >
            <a
              className={cn(
                styles.spacedLink,
                'd-sm-inline text-uppercase align-items-end',
              )}
              href="#offerings"
            >
              <p>Mehr</p>
              <FontAwesomeIcon icon={faArrowDown} size="2x" />
            </a>
          </Col>
        </Row>
      </Intro>
    </Col>
  </Row>
)
