import React from 'react'

import Layout from '../components/layout'
import { ProjectPageComponent } from '../components/PastProjects/Page'
import { LocaleProvider, NavbarStateProvider } from '../utils/hooks'

export default ({ pageContext }) => (
  <LocaleProvider value="en">
    <NavbarStateProvider>
      <Layout {...pageContext.head}>
        <ProjectPageComponent {...pageContext} />
      </Layout>
    </NavbarStateProvider>
  </LocaleProvider>
)
