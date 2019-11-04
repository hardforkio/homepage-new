import React from 'react'
import { JobPage } from '../../components/Jobs/job'
import Layout from '../../components/layout'
import { data } from '../../data/jobs'
import { NavbarStateProvider } from '../../utils/hooks'

export default () => (
  <NavbarStateProvider>
    <Layout>
      <JobPage post={data.posts[0]} />
    </Layout>
  </NavbarStateProvider>
)
