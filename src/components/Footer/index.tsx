import React from 'react'
import { Footer as FooterComponent } from './component'
import { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { SafeExternalLink } from '../Link'
import { useFooter, Footer as FooterData } from '../../data/footer'

export const Footer: FunctionComponent = () => {
  const footerData: FooterData = useFooter()
  return (
    <FooterComponent
      InternalLink={Link}
      ExternalLink={SafeExternalLink}
      {...footerData}
    />
  )
}
