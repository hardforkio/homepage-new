import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { withScroll } from 'react-window-decorators'
import transition from 'styled-transition-group'

const LogoWrap = transition.div`
  opacity: 1;
  
  &:enter {
    opacity: 0;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0;
    transition: opacity 0.2s ease;
  }
`
const LogoLink = styled(Link)`
  border: none;
  color: #ffffff;
  font-weight: 800;
  left: 1.25em;
  letter-spacing: 0.225em;
  position: absolute;
  text-decoration: none;
  top: 0;
`

@withScroll
export default class Logo extends React.Component {
  render () {
    let scrollCorrection = 60
    return (
      <LogoWrap mountOnEnter unmountOnExit timeout={300} in={(!this.props.isHome) || (this.props.scrollPositionY > (window.innerHeight - scrollCorrection))}>
        <LogoLink to='/' title='HARDFORK'>HARDFORK</LogoLink>
      </LogoWrap>
    )
  }
}
