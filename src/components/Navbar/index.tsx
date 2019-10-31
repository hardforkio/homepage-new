import React, { useState, useCallback, FunctionComponent } from 'react'
import { Navbar, Nav, Collapse, NavbarToggler, NavbarBrand } from 'reactstrap'
import { MenuEntries } from './MenuEntries'
import cn from 'classnames'
import styles from './NavBar.module.scss'

export const NavbarComponent: FunctionComponent<{
  isTransparent?: boolean
  linkTag: any
  className?: string
}> = ({ isTransparent = false, linkTag, className }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])
  return (
    <Navbar
      className={cn(
        className,
        isTransparent && !isOpen ? 'bg-transparent' : 'bg-dark',
        styles.transitionOnColorChange,
      )}
      dark
      expand="md"
    >
      <NavbarBrand tag={linkTag} to="/">
        {isTransparent ? '' : 'HARDFORK'}
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="border-0" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto align-items-center text-light" navbar>
          <MenuEntries linkTag={linkTag} />
        </Nav>
      </Collapse>
    </Navbar>
  )
}
