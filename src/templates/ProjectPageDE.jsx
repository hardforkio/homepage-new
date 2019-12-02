import React from 'react'
import { LocaleProvider, NavbarStateProvider } from '../utils/hooks'
import Layout from '../components/layout'
import { ProjectPageComponent } from '../components/PastProjects/Page'

export default ({ pageContext }) => (
  <LocaleProvider value="de">
    <NavbarStateProvider>
      <Layout {...pageContext.head}>
        <ProjectPageComponent {...pageContext} />
      </Layout>
    </NavbarStateProvider>
  </LocaleProvider>
)
