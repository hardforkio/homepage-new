import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header } from '.'
import { NavItem, Button, NavLink } from 'reactstrap'

const MenuEntries = () => (
  <>
    {[
      <NavItem key="jobs">
        <Button className="mr-md-5" to="/jobs" color="danger">
          WE ARE HIRING
        </Button>
      </NavItem>,
      <NavItem key="home">
        <NavLink to="/">STARTSEITE</NavLink>
      </NavItem>,
      <NavItem key="jobs">
        <NavLink to="/jobs">JOBS</NavLink>
      </NavItem>,
      <NavItem key="contact">
        <NavLink to="/contact">KONTAKT</NavLink>
      </NavItem>,
    ]}
  </>
)

storiesOf('Header', module)
  .add('default', () => <Header MenuEntries={MenuEntries} />)
  .add('transparent', () => <Header MenuEntries={MenuEntries} isHome={true} />)
