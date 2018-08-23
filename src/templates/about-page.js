import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import media from 'styled-media-query'
import Content, {HTMLContent} from '../components/Content'
import ArticleHeader from '../components/ArticleHeader/index.js'

export const AboutPageTemplate = ({title, subtitle, content, contentComponent}) => {
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

const AboutPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        content={post.html}
      />
    </div>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
      }
    }
  }
`
