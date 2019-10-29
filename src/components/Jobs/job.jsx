import React from 'react'
import PropTypes from 'prop-types'
import { ContentWrap } from '../Content'
import SE0 from '../SEO'
import ArticleHeader from '../ArticleHeader/index'

export const JobComponent = ({ content }) => (
  <article>
    <SE0
      title={content.title}
      meta_title={content.meta_title}
      meta_desc={content.meta_desc}
      slug={content.slug}
    />
    <ArticleHeader title={content.title} subtitle="" />
    <ContentWrap>
      <div>
        <h1>{content.headline}</h1>
        <h2>{content.workplaceHeadline}</h2>
        <p>{content.workplaceDescription}</p>
        <h2>{content.jobHeadline}</h2>
        <p>{content.jobDescription}</p>
        <h2>{content.skillsHeadline}</h2>
        <p>{content.skillsDescription}</p>
        <h2>{content.howWeWorkHeadline}</h2>
        <p>{content.howWeWorkDescription}</p>
        <h2>{content.factsHeadline}</h2>
        <p>{content.factsDescription}</p>
        <h2>{content.howToEnrollHeadline}</h2>
        <p>{content.howToEnrollDescription}</p>
      </div>
    </ContentWrap>
  </article>
)

export const JobPage = ({ post }) => <JobComponent content={post} />

JobPage.propTypes = {
  data: PropTypes.object,
}
