import React from 'react'

import { HomePage as HomepageComponent } from '../components/Home'
import Layout from '../components/layout'
import { getHome } from '../data/home'
import { LocaleProvider, NavbarStateProvider } from '../utils/hooks'

const HomePage = () => {
  const { head } = getHome('en')

  return (
    <LocaleProvider value="en">
      <NavbarStateProvider>
        <Layout {...head}>
          <HomepageComponent />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default HomePage
