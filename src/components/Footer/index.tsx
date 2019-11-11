import React from 'react'
import { Footer as FooterComponent } from './component'
import { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { SafeExternalLink } from '../Link'

export const Footer: FunctionComponent = () => (
  <FooterComponent InternalLink={Link} ExternalLink={SafeExternalLink} />
)
