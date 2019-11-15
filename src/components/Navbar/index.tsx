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
import { useFAQPage, hasFAQEntries } from '../../data/faqEntry'

interface NavbarProps {
  linkTag: any
  className?: string
}

interface NavbarComponentProps extends NavbarProps {
  isTransparent?: boolean
  showFAQ?: boolean
}

export const NavbarComponent: FunctionComponent<NavbarComponentProps> = ({
  isTransparent = true,
  linkTag,
  className,
  showFAQ = false,
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
      <NavbarToggler onClick={toggle} className="border-0 ml-auto" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto align-items-center text-light" navbar>
          <MenuEntries linkTag={linkTag} showFAQ={showFAQ} />
        </Nav>
      </Collapse>
    </ReactstrapNavbar>
  )
}

export const Navbar: FunctionComponent<NavbarProps> = props => {
  const [transparent] = useNavbarState()
  const faqPage = useFAQPage()
  return (
    <NavbarComponent
      {...props}
      showFAQ={hasFAQEntries(faqPage)}
      isTransparent={transparent}
    />
  )
}
