import React from 'react'
import { NavbarStateProvider, LocaleProvider } from '../utils/hooks'

const HomePage = () => (
  <LocaleProvider value="en">
    <NavbarStateProvider>
      <HomePage />
    </NavbarStateProvider>
  </LocaleProvider>
)

export default HomePage
