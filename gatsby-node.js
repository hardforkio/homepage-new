/**
 * Created by vaibhav on 31/3/18
 */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// Fixes an issue with react-scroll-to plugin
// See https://github.com/component/scroll-to/issues/9 for more
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'develop-html') {
    config.loader('null', {
      test: /scroll-to/,
      loader: 'null-loader',
    })
  }
  if (stage === 'build-html') {
    config.loader('null', {
      test: /scroll-to/,
      loader: 'null-loader',
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
