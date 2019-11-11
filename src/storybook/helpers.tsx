import React, { FunctionComponent } from 'react'
import { action } from '@storybook/addon-actions'
import { LinkProps } from '../components/Link'

export const DispatchActionLink: FunctionComponent<LinkProps> = ({
  className,
  children,
  to,
}: any) => (
  <a
    className={className}
    href={to}
    onClick={event => {
      event.preventDefault()
      action('Would open url')(to)
    }}
  >
    {children}
  </a>
)
