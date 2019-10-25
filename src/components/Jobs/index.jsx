import React from 'react'
import Helmet from 'react-helmet'
import { PostCard } from '../PostCard'
import ArticleHeader from '../ArticleHeader/index.js'
import { data } from '../../data/jobs'

export const Jobs = () => {
  const { posts } = data
  console.log(posts)

  return (
    <div>
      <Helmet>
        <title>Jobs @ Hardfork.io, Berlin</title>
      </Helmet>
      <ArticleHeader title="Jobs" subtitle="Hardfork.io | Berlin" />
      <PostCard posts={posts} />
    </div>
  )
}
