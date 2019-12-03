const path = require(`path`)
require('ts-node').register() // To use imports from ts files. See https://github.com/gatsbyjs/gatsby/issues/1457#issuecomment-446006181
const { translateAndConvert } = require('./src/data/project/helpers')
const R = require('ramda')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allProjectJson {
        nodes {
          slug
          title
          usedTechnologies
          translations {
            locale
            value {
              application
              client
              clientLink
              image
              product
              reference
              responsibilities
            }
          }
          head {
            translations {
              locale
              value {
                title
                meta {
                  description
                  keywords
                }
              }
            }
          }
        }
      }
    }
  `)
  const germanTranslations = R.map(translateAndConvert('de'))(
    result.data.allProjectJson.nodes,
  )

  const englishTranslations = R.map(translateAndConvert('en'))(
    result.data.allProjectJson.nodes,
  )

  R.forEach(props => {
    createPage({
      path: `/de/project/${props.slug}`,
      component: path.resolve(`src/templates/ProjectPageDE.jsx`),
      context: {
        ...props,
      },
    })
  })(germanTranslations)

  R.forEach(props => {
    createPage({
      path: `/en/project/${props.slug}`,
      component: path.resolve(`src/templates/ProjectPageEN.jsx`),
      context: {
        ...props,
      },
    })
  })(englishTranslations)
}
