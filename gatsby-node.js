require('ts-node').register() // To use imports from ts files. See https://github.com/gatsbyjs/gatsby/issues/1457#issuecomment-446006181
const path = require(`path`)
const { getProjects } = require('./src/data/project')
const R = require('ramda')

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    node: { fs: 'empty' },
    module: {
      rules: [
        {
          test: /\.md$/i,
          use: 'raw-loader',
        },
        {
          test: /\.html$/i,
          use: 'raw-loader',
        },
      ],
    },
    plugins: [
      plugins.define({
        'global.GENTLY': false,
      }),
    ],
  })
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const germanTranslations = getProjects('de')
  const englishTranslations = getProjects('en')

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
