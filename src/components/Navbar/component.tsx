import cn from 'classnames'
import React, { FunctionComponent, useCallback, useState } from 'react'
import {
  Collapse,
  Nav,
  Navbar as ReactstrapNavbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap'

import { Navbar as NavbarData } from '../../data/navbar/types'
import { usePathPrefix } from '../../utils/hooks'
import { MenuEntries } from './MenuEntries'
import styles from './NavBar.module.scss'

export interface NavbarProps {
  linkTag: any
  className?: string
}

export interface NavbarComponentProps extends NavbarProps, NavbarData {
  isTransparent?: boolean
  showFAQ?: boolean
}

export const NavbarComponent: FunctionComponent<NavbarComponentProps> = ({
  isTransparent = true,
  linkTag,
  className,
  softwareLinkText,
  showFAQ = false,
  contactLinkText,
  FAQLinkText,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])
  const homePath = usePathPrefix('/')
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
      <NavbarBrand tag={linkTag} to={homePath}>
        HARDFORK
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="border-0 ml-auto" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto align-items-center text-light" navbar>
          <MenuEntries
            linkTag={linkTag}
            showFAQ={showFAQ}
            softwareLinkText={softwareLinkText}
            contactLinkText={contactLinkText}
            FAQLinkText={FAQLinkText}
          />
        </Nav>
      </Collapse>
    </ReactstrapNavbar>
  )
}
