/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import config from '../../../config'
import Helmet from 'react-helmet'

const SE0 = ({ title, metaTitle, metaDesc, cover, slug }) => {
  let postURL = config.siteUrl + slug
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
  let image = config.siteUrl + realPrefix + cover
  const blogURL = config.siteUrl + config.pathPrefix
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ]

  schemaOrgJSONLD.push([
    {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': postURL,
            name: title,
            image,
          },
        },
      ],
    },
    {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      headline: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      metaDesc,
    },
  ])

  return (
    <Helmet>
      <title>{metaTitle}</title>
      {/* General tags */}
      <meta name="description" content={metaDesc} />
      <meta name="image" content={cover} />
      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      {/* OpenGraph tags */}
      <meta property="og:url" content={postURL} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={image} />
      <meta
        property="fb:app_id"
        content={config.siteFBAppID ? config.siteFBAppID : ''}
      />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SE0
