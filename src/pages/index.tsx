import React from 'react'
import { data } from '../data/home'
import { HomePageTemplate } from '../components/Home'
import { NavbarStateProvider } from '../utils/hooks'
import Layout from '../components/layout'

const HomePage = () => (
  <NavbarStateProvider>
    <Layout>
      <HomePageTemplate {...data} />
    </Layout>
  </NavbarStateProvider>
)

export default HomePage
