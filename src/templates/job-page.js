import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Link from 'gatsby-link'
import Content, {HTMLContent} from '../components/Content'
import SE0 from '../components/SEO'
import Disqus from '../components/Disqus'
import Share from '../components/Share'

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
    <section className='section'>
      <SE0
        title={title}
        meta_title={meta_title}
        meta_desc={meta_desc}
        slug={slug}
      />
      <div className='container content'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
              {title}
            </h1>
            <PostContent content={content} />
            <hr />
            <Share
              title={title}
              slug={slug}
              excerpt={meta_desc}
            />
            <hr />
            <Disqus
              title={title}
              slug={slug}
            />
          </div>
        </div>
      </div>
    </section>
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

const JobPage = ({data}) => {
  const {markdownRemark: post} = data
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
