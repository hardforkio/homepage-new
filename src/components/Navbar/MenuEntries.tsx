import React from 'react'
import { NavItem, NavLink } from 'reactstrap'

export const MenuEntries = ({
  linkTag,
  showFAQ,
}: {
  linkTag: any
  showFAQ: boolean
}) => (
  <>
    {[
      <NavItem key="contact">
        <NavLink href="#contact">KONTAKT</NavLink>
      </NavItem>,
      <NavItem key="faq" className={showFAQ ? '' : 'd-none'}>
        <NavLink to="/de/faq" tag={linkTag}>
          FAQ
        </NavLink>
      </NavItem>,
    ]}
  </>
)
