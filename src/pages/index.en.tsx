import React from 'react'
import { NavbarStateProvider, LocaleProvider } from '../utils/hooks'
import { HomePage as HomepageComponent } from '../components/Home'
import Layout from '../components/layout'
import { getHome } from '../data/home'

const HomePage = () => {
  const { metaTitle, metaDescription } = getHome('en')

  return (
    <LocaleProvider value="en">
      <NavbarStateProvider>
        <Layout metaTitle={metaTitle} metaDescription={metaDescription}>
          <HomepageComponent />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default HomePage
