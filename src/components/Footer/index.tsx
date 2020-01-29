import { Link } from 'gatsby'
import React from 'react'
import { FunctionComponent } from 'react'

import { FooterData } from '../../data/footer/types'
import { useFooter } from '../../hooks/data'
import { usePathPrefix } from '../../utils/hooks'
import { SafeExternalLink } from '../Link'
import { FooterComponent } from './component'

export const Footer: FunctionComponent = () => {
  const footerData: FooterData = useFooter()
  const imprintLink: string = usePathPrefix('/imprint')
  return (
    <FooterComponent
      InternalLink={Link}
      ExternalLink={SafeExternalLink}
      imprintLink={imprintLink}
      {...footerData}
    />
  )
}
