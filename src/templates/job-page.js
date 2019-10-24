import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import SE0 from '../components/SEO'
import ArticleHeader from '../components/ArticleHeader/index.js'

export const JobTemplate = ({
  content,
  contentComponent,
  meta_title,
  meta_desc,
  title,
  slug,
}) => {
  const PostContent = contentComponent || Content

  return (
    <article>
      <SE0
        title={title}
        meta_title={meta_title}
        meta_desc={meta_desc}
        slug={slug}
      />
      <ArticleHeader title={title} subtitle="" />
      <PostContent content={content} />
    </article>
  )
}

JobTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  meta_title: PropTypes.string,
  meta_desc: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
}

const JobPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <JobTemplate
      content={post.html}
      contentComponent={HTMLContent}
      meta_title={post.frontmatter.meta_title}
      meta_desc={post.frontmatter.meta_description}
      title={post.frontmatter.title}
      slug={post.fields.slug}
    />
  )
}

JobPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default JobPage

export const pageQuery = graphql`
  query JobByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        meta_title
        meta_description
      }
    }
  }
`
