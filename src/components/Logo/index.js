import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import transition from 'styled-transition-group'

const LogoWrap = transition.div`
  background: rgb(46, 56, 66);
  height: 100%;
  opacity: 1;
  width: 100%;
  
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

class Logo extends React.Component {
  render() {
    let scrollCorrection = 60
    let positionToShowLogo =
      typeof window !== 'undefined' && window.innerHeight
        ? window.innerHeight - scrollCorrection
        : 0
    return (
      <LogoWrap
        mountOnEnter
        unmountOnExit
        timeout={300}
        in={
          !this.props.isHome || this.props.scrollPositionY > positionToShowLogo
        }
      >
        <LogoLink to="/" title="HARDFORK">
          HARDFORK
        </LogoLink>
      </LogoWrap>
    )
  }
}

export default Logo
