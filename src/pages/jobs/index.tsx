import React from 'react'
import { Jobs } from '../../components/Jobs'
import Layout from '../../components/layout'
import { NavbarStateProvider } from '../../utils/hooks'

export default () => (
  <NavbarStateProvider>
    <Layout>
      <Jobs />
    </Layout>
  </NavbarStateProvider>
)
