import React, { useState, useCallback, FunctionComponent } from 'react'
import {
  Navbar as ReactstrapNavbar,
  Nav,
  Collapse,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap'
import { MenuEntries } from './MenuEntries'
import cn from 'classnames'
import styles from './NavBar.module.scss'
import { useNavbarState } from '../../utils/hooks'

interface NavbarProps {
  linkTag: any
  className?: string
}

interface NavbarComponentProps extends NavbarProps {
  isTransparent?: boolean
}

export const NavbarComponent: FunctionComponent<NavbarComponentProps> = ({
  isTransparent = true,
  linkTag,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])
  return (
    <ReactstrapNavbar
      className={cn(
        className,
        isTransparent && !isOpen ? 'bg-transparent' : 'bg-dark',
        styles.transitionOnColorChange,
      )}
      dark
      expand="md"
    >
      <NavbarBrand tag={linkTag} to="/">
        HARDFORK
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="border-0" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto align-items-center text-light" navbar>
          <MenuEntries linkTag={linkTag} />
        </Nav>
      </Collapse>
    </ReactstrapNavbar>
  )
}

export const Navbar: FunctionComponent<NavbarProps> = props => {
  const [transparent] = useNavbarState()
  console.log('transparent is null', transparent === null)
  return <NavbarComponent {...props} isTransparent={transparent} />
}
