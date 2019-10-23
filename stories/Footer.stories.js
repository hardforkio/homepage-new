import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import {ThemeProvider} from 'styled-components'

import Footer from '../src/components/Footer'

const hardforkTheme = {
  primary: '#ffffff',
  defaultBg: 'rgb(46, 56, 66)',
}

storiesOf('components/Footer', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('using hardfork theme', () => (
    <ThemeProvider theme={hardforkTheme} >
      <Footer />
    </ThemeProvider>))
