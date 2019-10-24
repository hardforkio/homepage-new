import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Nav from '../Nav'
import { HeaderButton } from '../Button'

const PageHeader = styled.header`
  -moz-transition: background-color 0.2s ease;
  -webkit-transition: background-color 0.2s ease;
  -ms-transition: background-color 0.2s ease;
  transition: background-color 0.2s ease;
  background: transparent;
  height: 3em;
  left: 0;
  line-height: 3em;
  width: 100%;
`

const Fixed = styled.div`
  position: fixed;
  z-index: 10;
`

export const HeaderComponent = ({ isHome }) => {
  return (
    <PageHeader>
      <Logo isHome={isHome} />
      <HeaderButton to="/jobs" label="We are hiring">
        We are hiring
      </HeaderButton>
      <Nav />
    </PageHeader>
  )
}

const Header = ({ isHome }) => {
  return (
    <Fixed>
      <HeaderComponent isHome={isHome} />
    </Fixed>
  )
}

export default Header
