import React from 'react'
import { NavItem, NavLink } from 'reactstrap'

export const MenuEntries = ({ linkTag }: { linkTag: any }) => (
  <>
    {[
      <NavItem key="contact">
        <NavLink to="/#contact" tag={linkTag}>
          KONTAKT
        </NavLink>
      </NavItem>,
    ]}
  </>
)
