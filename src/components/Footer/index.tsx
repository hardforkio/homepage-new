import React from 'react'
import { FooterComponent } from './component'
import { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { SafeExternalLink } from '../Link'
import { usePathPrefix } from '../../utils/hooks'
import { useFooter } from '../../hooks/data'
import { FooterData } from '../../data/footer/types'

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
