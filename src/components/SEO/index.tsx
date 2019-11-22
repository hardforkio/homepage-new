import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { useLocale } from '../../utils/hooks'

export interface SEOContent {
  metaDescription: string
  metaKeywords: string
}
export interface SEOProps extends SEOContent {
  title: string
}

export const Seo: FunctionComponent<SEOProps> = ({
  title,
  metaDescription,
  metaKeywords,
}) => {
  const locale = useLocale()
  return (
    <Helmet
      htmlAttributes={{
        locale,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `keywords`,
          content: metaKeywords,
        },
      ]}
    />
  )
}
