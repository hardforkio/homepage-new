import React, { FunctionComponent, ComponentType } from 'react'

import cn from 'classnames'
import styles from './Footer.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { LinkProps } from '../Link'

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

const translations = {
  copyrightText: '© 2017-2019 Hardfork GmbH',
  imprintLinkText: 'Impressum',
}

export const Footer: FunctionComponent<{
  ExternalLink: ComponentType<LinkProps>
  InternalLink: ComponentType<LinkProps>
}> = ({ ExternalLink, InternalLink }) => (
  <footer
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
          to="https://github.com/hardforkio"
          title="Github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </ExternalLink>
      </div>

      <div className="px-3">
        <ExternalLink
          className={cn('border-0')}
          to="mailto:contact@hardfork.io"
          title="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </ExternalLink>
      </div>
    </div>
    <LegalBar>
      <LegalItem>{translations.copyrightText}</LegalItem>
      <LegalItem>
        <InternalLink to="/imprint">
          {translations.imprintLinkText}
        </InternalLink>
      </LegalItem>
    </LegalBar>
  </footer>
)
