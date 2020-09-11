/**
 * Created by vaibhav on 31/3/18
 */
const config = require('./config')
const { setBranchEnvironment } = require('./envHelper')

setBranchEnvironment()

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    rssMetadata: {
      /* eslint-disable camelcase*/
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/icons/icon-512x512.png`,
      author: config.userName,
      copyright: config.copyright,
      /* eslint-enable camelcase*/
    },
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cache',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'cms-images',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/navbar/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        /* eslint-disable camelcase*/
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        /* eslint-enable camelcase*/
        display: 'standalone',
        icons: [
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': ['Referrer-Policy: strict-origin'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src:
          'https://polyfill.io/v3/polyfill.min.js?flags=gated&features=IntersectionObserver',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.ts`,
        customizeWebpackConfig: config => {
          config.node = {
            ...config.node,
            fs: 'empty',
          }
        },
      },
    },
    'gatsby-plugin-i18n',
    `gatsby-plugin-remove-serviceworker`,
  ],
}
