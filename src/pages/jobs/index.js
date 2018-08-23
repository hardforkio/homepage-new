import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import PostCard from '../../components/PostCard'
import ArticleHeader from '../../components/ArticleHeader/index.js'

export default class JobsPage extends Component {
  render () {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark

    return (
      <div>
        <Helmet>
          <title>Jobs @ Hardfork.io, Berlin</title>
        </Helmet>
        <ArticleHeader title='Jobs' subtitle='Hardfork.io | Berlin' />
        <PostCard posts={posts} articleType='job-page' />
      </div>
    )
  }
}

JobsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const jobsPageQuery = graphql`
  query JobsPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 130)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
