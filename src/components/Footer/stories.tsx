import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from '.'
import { NavItem, Button, NavLink } from 'reactstrap'
import { ThemeProvider } from 'styled-components'

const hardforkTheme = {
  primary: '#ffffff',
  defaultBg: 'rgb(46, 56, 66)',
}

storiesOf('Footer', module).add('default', () => (
  <ThemeProvider theme={hardforkTheme}>
    <Footer />
  </ThemeProvider>
))
