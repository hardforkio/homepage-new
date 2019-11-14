import React from 'react'
import { NavbarStateProvider, LocaleProvider } from '../utils/hooks'
import { HomePage as HomepageComponent } from '../components/Home'
const HomePage = () => (
  <LocaleProvider value="de">
    <NavbarStateProvider>
      <HomepageComponent />
    </NavbarStateProvider>
  </LocaleProvider>
)

export default HomePage