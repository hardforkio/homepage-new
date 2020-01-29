import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'

import { Head as HeadProps } from '../../data/head/types'
import { useLocale } from '../../utils/hooks'

export const Head: FunctionComponent<HeadProps> = ({ title, meta }) => {
  const locale = useLocale()
  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `keywords`,
          content: meta.keywords,
        },
      ]}
    />
  )
}
