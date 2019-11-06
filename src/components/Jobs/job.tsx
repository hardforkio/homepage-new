import React, { FunctionComponent } from 'react'
import { ContentWrap } from '../Content'
import SE0 from '../SEO'
import { ArticleHeader } from '../ArticleHeader/index'
import ReactMarkdown from 'react-markdown'
import { Job } from '../../data/jobs'

export const JobComponent: FunctionComponent<{
  description: Job
  content: string
}> = ({
  description: { title, metaTitle, metaDescription, slug },
  content,
}) => (
  <article>
    <SE0
      title={title}
      meta_title={metaTitle}
      meta_desc={metaDescription}
      slug={slug}
      cover=""
    />
    <ArticleHeader title={title} subtitle="" />
    <ContentWrap>
      <div>
        <ReactMarkdown source={content} />
      </div>
    </ContentWrap>
  </article>
)
