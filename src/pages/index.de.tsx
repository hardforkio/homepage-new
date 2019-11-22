import React from 'react'
import { NavbarStateProvider, LocaleProvider } from '../utils/hooks'
import { HomePage as HomepageComponent } from '../components/Home'
import Layout from '../components/layout'
import { getHome } from '../data/home'

const HomePage = () => {
  const { seo, title } = getHome('de')

  return (
    <LocaleProvider value="de">
      <NavbarStateProvider>
        <Layout {...seo} title={title}>
          <HomepageComponent />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default HomePage
