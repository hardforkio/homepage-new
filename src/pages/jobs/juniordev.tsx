import React from 'react'
import { JobPage } from '../../components/Jobs/job'
import Layout from '../../components/layout'
import { data } from '../../data/jobs'
import { ShowTransparentNavbarProvider } from '../../utils/showNavbarContext'

export default () => (
  <ShowTransparentNavbarProvider value={false}>
    <Layout>
      <JobPage post={data.posts[0]} />
    </Layout>
  </ShowTransparentNavbarProvider>
)
