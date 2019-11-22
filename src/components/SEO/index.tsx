import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'

interface SEOProps {
  lang: string
  metaTitle: string
  metaDescription: string
}

export const Seo: FunctionComponent<SEOProps> = ({
  lang,
  metaTitle,
  metaDescription,
}) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={metaTitle}
    meta={[
      {
        name: `description`,
        content: metaDescription,
      },
      {
        property: `og:title`,
        content: metaTitle,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        property: `og:type`,
        content: `website`,
      },
    ]}
  />
)
