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
import { useNavbarState, usePathPrefix } from '../../utils/hooks'
import { Navbar as NavbarData } from '../../data/navbar'
import { useFAQPage, useNavbar } from '../../hooks/data'
import { hasFAQEntries } from '../../data/faqEntry/helper'

interface NavbarProps {
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
            contactLinkText={contactLinkText}
            FAQLinkText={FAQLinkText}
          />
        </Nav>
      </Collapse>
    </ReactstrapNavbar>
  )
}

export const Navbar: FunctionComponent<NavbarProps> = ({
  linkTag,
  className = '',
}) => {
  const [transparent] = useNavbarState()
  const faqPage = useFAQPage()
  const cmsData: NavbarData = useNavbar()

  return (
    <NavbarComponent
      {...cmsData}
      linkTag={linkTag}
      className={className}
      showFAQ={hasFAQEntries(faqPage)}
      isTransparent={transparent}
    />
  )
}
