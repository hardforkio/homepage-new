import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Nav from '../Nav'

const PageHeader = styled.header` 
  -moz-transition: background-color 0.2s ease;
  -webkit-transition: background-color 0.2s ease;
  -ms-transition: background-color 0.2s ease;
  transition: background-color 0.2s ease;
  background: #2e3842;
  height: 3em;
  left: 0;
  line-height: 3em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`

const Header = ({isHome}) => {
  return (
    <PageHeader>
      <Logo isHome={isHome} />
      <Nav />
    </PageHeader>
  )
}

export default Header
