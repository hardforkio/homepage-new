import React from 'react'
import { Imprint } from '../components/Imprint'
import Layout from '../components/layout'
import { ShowTransparentNavbarProvider } from '../utils/showNavbarContext'

export default () => (
  <ShowTransparentNavbarProvider value={false}>
    <Layout>
      <Imprint />
    </Layout>
  </ShowTransparentNavbarProvider>
)
