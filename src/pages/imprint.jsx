import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content from '../components/Content'
import ArticleHeader from '../components/ArticleHeader/index.js'
import { data } from '../data/imprint'

export const AboutPageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <article>
      <ArticleHeader title={title} subtitle={subtitle} />
      <PageContent content={content} />
    </article>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>{data.meta_title}</title>
        <meta name="description" content={data.meta_description} />
      </Helmet>
      <AboutPageTemplate
        title={data.title}
        subtitle={data.subtitle}
        content={data.text}
      />
    </div>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage
