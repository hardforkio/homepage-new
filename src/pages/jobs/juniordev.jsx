import React from 'react'
import { JobPage } from '../../components/Jobs/job'
import Layout from '../../components/layout'
import { data } from '../../data/jobs'
// eslint-disable-next-line import/no-webpack-loader-syntax
import juniorDev from 'raw-loader!../../data/juniorDev.md'

export default () => (
  <Layout isHeaderTransparent={false}>
    <JobPage description={data.posts[0]} content={juniorDev} />
  </Layout>
)
