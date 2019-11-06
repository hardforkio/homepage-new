import React, { FunctionComponent } from 'react'

import { action } from '@storybook/addon-actions'

interface ExternalLinkProps {
  className: string
  to: string
  title?: string
}

export const SafeExternalLink: FunctionComponent<ExternalLinkProps> = ({
  className,
  children,
  to,
  title,
}: any) => (
  <a
    className={className}
    title={title}
    href={to}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

export const MockedExternalLink: FunctionComponent<ExternalLinkProps> = ({
  className,
  children,
  to,
}: any) => (
  <a
    className={className}
    href={to}
    onClick={event => {
      event.preventDefault()
      action(`Would open url`)(to)
    }}
  >
    {children}
  </a>
)
