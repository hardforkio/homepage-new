import React, { FunctionComponent } from 'react'
import Link from 'gatsby-link'

import cn from 'classnames'
import styles from './Footer.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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

const Footer = () => (
  <footer
    className={cn(
      'bg-dark py-3 py-md-5',
      styles.textGraySmallSpaced,
      styles.linkNoBorderAndWhiteOnHover,
    )}
  >
    <div className="d-flex mb-4 justify-content-center">
      <div className="px-3">
        <a
          className={cn('border-0')}
          href="https://github.com/hardforkio"
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      <div className="px-3">
        <a
          className={cn('border-0')}
          href="mailto:contact@hardfork.io"
          title="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
    <LegalBar>
      <LegalItem>{translations.copyrightText}</LegalItem>
      <LegalItem>
        <Link to="/de/imprint">{translations.imprintLinkText}</Link>
      </LegalItem>
    </LegalBar>
  </footer>
)

export default Footer
