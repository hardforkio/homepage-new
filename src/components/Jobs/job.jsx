import React from 'react'
import { ContentWrap } from '../Content'
import SE0 from '../SEO'
import ArticleHeader from '../ArticleHeader/index'
import ReactMarkdown from 'react-markdown'

export const JobComponent = ({ description, content }) => (
  <article>
    <SE0
      title={description.title}
      meta_title={description.meta_title}
      meta_desc={description.meta_desc}
      slug={description.slug}
      cover=""
    />
    <ArticleHeader title={description.title} subtitle="" />
    <ContentWrap>
      <div>
        <ReactMarkdown source={content} />
      </div>
    </ContentWrap>
  </article>
)

export const JobPage = ({ description, content }) => (
  <JobComponent description={description} content={content} />
)
