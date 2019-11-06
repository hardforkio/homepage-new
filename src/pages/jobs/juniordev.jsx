import React from 'react'
import { JobComponent } from '../../components/Jobs/job'
import Layout from '../../components/layout'
import { data as jobs } from '../../data/jobs'
// eslint-disable-next-line import/no-webpack-loader-syntax
import juniorDev from 'raw-loader!../../data/juniorDev.md'

export default () => (
  <Layout isHeaderTransparent={false}>
    <JobComponent description={jobs[0]} content={juniorDev} />
  </Layout>
)
