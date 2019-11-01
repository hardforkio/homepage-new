import React from 'react'
import Helmet from 'react-helmet'
import { PostCard } from '../PostCard'
import ArticleHeader from '../ArticleHeader/index'
import { data } from '../../data/jobs'

export const Jobs = () => (
  <div>
    <Helmet>
      <title>Jobs @ Hardfork.io, Berlin</title>
    </Helmet>
    <ArticleHeader title="Jobs" subtitle="Hardfork.io | Berlin" />
    <PostCard posts={data.posts} />
  </div>
)
