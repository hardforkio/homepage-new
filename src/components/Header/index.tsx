import React, { useState, useCallback, FunctionComponent } from 'react'
import { Navbar, Nav, Collapse, NavbarToggler, NavbarBrand } from 'reactstrap'

export const Header: FunctionComponent<{
  isHome?: boolean
  MenuEntries: any
}> = ({ isHome = false, MenuEntries }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])
  return (
    <header>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="#home">{isHome ? 'HARDFORK' : ''}</NavbarBrand>
        <NavbarToggler onClick={toggle} className='border-0' />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto align-items-center' navbar>
            <MenuEntries />
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  )
}
