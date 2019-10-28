import React from 'react'
import { Button, NavItem, NavLink } from 'reactstrap'
import { Link } from 'gatsby'

export const MenuEntries = () => (
  <>
    {[
      <NavItem key="jobs">
        <Button
          className="mr-md-5"
          to="/jobs"
          tag={({ to, children }) => <Link to={to}>{children}</Link>}
          color="danger"
        >
          WE ARE HIRING
        </Button>
      </NavItem>,
      <NavItem key="home">
        <NavLink to="/" tag={Link}>
          STARTSEITE
        </NavLink>
      </NavItem>,
      <NavItem key="jobs">
        <NavLink to="/jobs" tag={Link}>
          JOBS
        </NavLink>
      </NavItem>,
      <NavItem key="contact">
        <NavLink to="/contact" tag={Link}>
          KONTAKT
        </NavLink>
      </NavItem>,
    ]}
  </>
)
