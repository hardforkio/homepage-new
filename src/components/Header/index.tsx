import React, { FunctionComponent } from 'react'
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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`

interface HeaderProps {
  isHome?: boolean
}

const Header: FunctionComponent<HeaderProps> = ({ isHome = false }) => {
  return (
    <PageHeader>
      <Logo isHome={isHome} />
      <HeaderButton to="/jobs">We are hiring</HeaderButton>
      <Nav />
    </PageHeader>
  )
}

export default Header
