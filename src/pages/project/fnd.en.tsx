import React from 'react'
import { getHome } from '../../data/home'
import { LocaleProvider, NavbarStateProvider } from '../../utils/hooks'
import Layout from '../../components/layout'
import { ProjectPageComponent } from '../../components/PastProjects/Page'
import { filterBySlug } from '../../data/helpers'

const SLUG = 'fnd'

const FNDPage = () => {
  const { head, projects } = getHome('en')
  const fndProject = filterBySlug(SLUG)(projects)

  return (
    <LocaleProvider value="en">
      <NavbarStateProvider>
        <Layout {...head}>
          <ProjectPageComponent {...fndProject} />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default FNDPage
