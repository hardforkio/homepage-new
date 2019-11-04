import React from 'react'
import { Jobs } from '../../components/Jobs'
import Layout from '../../components/layout'
import { ShowTransparentNavbarProvider } from '../../utils/showNavbarContext'

export default () => (
  <ShowTransparentNavbarProvider value={false}>
    <Layout>
      <Jobs />
    </Layout>
  </ShowTransparentNavbarProvider>
)
