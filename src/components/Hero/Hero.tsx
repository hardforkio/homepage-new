import React, { FunctionComponent } from 'react'
import transition from 'styled-transition-group'
import bgimage from '../../img/banner.jpg'
import { Button } from 'reactstrap'
import { media } from '../../config/media'
import styles from './Hero.module.scss'
import cn from 'classnames'
import { AiOutlineArrowDown } from 'react-icons/ai'

const IntroBackground = transition.div`
    
      
      background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${(
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
  subTitle: string
  startHeadlineAnimation: boolean
  startBackgroundAnimation: boolean
  startMoreLinkAnimation: boolean
  setBackgroundAnimation: any
  LinkTag: any
}

export const HeroSectionComponent: FunctionComponent<IntroProps> = ({
  title,
  subTitle,
  startHeadlineAnimation,
  startBackgroundAnimation,
  startMoreLinkAnimation,
  setBackgroundAnimation,
  LinkTag,
}) => (
  <section
    className={cn(
      styles.intro,
      'd-flex justify-content-center text-center p-sm-0',
    )}
  >
    <IntroBackground
      data-bgimage={bgimage}
      mountOnEnter
      unmountOnExit
      timeout={3500}
      in={startBackgroundAnimation}
    />
    <div className="mt-auto mb-5">
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
    </div>
    <div className="mb-auto">
      <FadeIn mountOnEnter timeout={3500} in={startBackgroundAnimation}>
        <p className={cn(styles.spaced, 'text-uppercase')}>{subTitle}</p>
        <LinkTag to="/#contact">
          <Button className="px-5 my-4 text-uppercase" color="primary">
            Kontakt
          </Button>
        </LinkTag>
      </FadeIn>
    </div>

    <div
      className={cn(
        styles.fadedOut,
        startMoreLinkAnimation ? styles.fadeIn : undefined,
        'd-none d-sm-block mb-5',
      )}
    >
      <a
        className={cn(
          styles.smallText,
          styles.spaced,
          'text-uppercase align-items-end',
        )}
        href="#offerings"
      >
        <p>Mehr</p>
        <AiOutlineArrowDown size={40} />
      </a>
    </div>
  </section>
)
