import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import React, { ComponentType, FunctionComponent } from 'react'

import { FooterData } from '../../data/footer/types'
import { LinkProps } from '../Link'
import styles from './Footer.module.scss'

const LegalBar: FunctionComponent = ({ children }) => (
  <div
    className={cn(
      'd-flex',
      'flex-column',
      'flex-md-row',
      'justify-content-center',
      'text-uppercase',
      'text-center',
    )}
  >
    {children}
  </div>
)

const LegalItem: FunctionComponent = ({ children }) => (
  <div className={cn('px-3', 'mb-2 mb-md-0', styles.verticalSeparatorOnMd)}>
    {children}
  </div>
)

export const FooterComponent: FunctionComponent<{
  ExternalLink: ComponentType<LinkProps>
  InternalLink: ComponentType<LinkProps>
  imprintLink: string
} & FooterData> = ({
  ExternalLink,
  InternalLink,
  githubLinkURL,
  contactEmail,
  imprintLinkText,
  copyrightText,
  imprintLink,
}) => (
  <div
    className={cn(
      'bg-dark py-3 py-md-5',
      styles.textGraySmallSpaced,
      styles.linkNoBorderAndWhiteOnHover,
    )}
  >
    <div className="d-flex mb-4 justify-content-center">
      <div className="px-3">
        <ExternalLink
          className={cn('border-0')}
          to={githubLinkURL}
          title="Github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </ExternalLink>
      </div>

      <div className="px-3">
        <ExternalLink
          className={cn('border-0')}
          to={`mailto:${contactEmail}`}
          title="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </ExternalLink>
      </div>
    </div>
    <LegalBar>
      <LegalItem>{copyrightText}</LegalItem>
      <LegalItem>
        <InternalLink to={imprintLink}>{imprintLinkText}</InternalLink>
      </LegalItem>
    </LegalBar>
  </div>
)
