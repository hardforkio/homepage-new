import React from 'react'
import { Imprint } from '../components/Imprint'
import Layout from '../components/layout'
import { NavbarStateProvider } from '../utils/hooks'

export default () => (
  <NavbarStateProvider>
    <Layout>
      <Imprint />
    </Layout>
  </NavbarStateProvider>
)
