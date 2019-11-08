import React from 'react'
import { NavItem, NavLink } from 'reactstrap'

export const MenuEntries = ({ linkTag }: { linkTag: any }) => (
  <>
    {[
      <NavItem key="hiring">
        <NavLink
          to="/jobs"
          tag={linkTag}
          className="btn btn-primary text-uppercase text-white px-5 mx-2 d-none d-md-inline"
        >
          We are hiring
        </NavLink>
      </NavItem>,
      <NavItem key="jobs">
        <NavLink to="/jobs" tag={linkTag}>
          JOBS
        </NavLink>
      </NavItem>,
      <NavItem key="contact">
        <NavLink to="/#contact" tag={linkTag}>
          KONTAKT
        </NavLink>
      </NavItem>,
      <NavItem key="faq">
        <NavLink to="/faq" tag={linkTag}>
          FAQ
        </NavLink>
      </NavItem>,
    ]}
  </>
)
