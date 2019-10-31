import React from 'react'
import { JobPage } from '../../components/Jobs/job'
import Layout from '../../components/layout'
import { data } from '../../data/jobs'

export default () => (
  <Layout isHeaderTransparent={false}>
    <JobPage post={data.posts[0]} />
  </Layout>
)
