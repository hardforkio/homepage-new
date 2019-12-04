require('ts-node').register() // To use imports from ts files. See https://github.com/gatsbyjs/gatsby/issues/1457#issuecomment-446006181
const path = require(`path`)
const glob = require('glob')
const { translateAndConvert } = require('./src/data/project/helpers')
const R = require('ramda')

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const projects = importAllForNode('./src/data/project')

  const germanTranslations = R.map(translateAndConvert('de'))(projects)

  const englishTranslations = R.map(translateAndConvert('en'))(projects)

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

const importAllForNode = filepath =>
  glob.sync(`${filepath}/*.json`).map(file => require(path.resolve(file)))
