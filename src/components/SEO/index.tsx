import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { SEOProps } from '../../data/seo'

interface SEOComponentProps extends SEOProps {
  lang: string
}

export const Seo: FunctionComponent<SEOComponentProps> = ({
  lang,
  title,
  description,
}) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
    ]}
  />
)
