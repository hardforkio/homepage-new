import React, { FunctionComponent } from 'react'

export interface LinkProps {
  className?: string
  to: string
  title?: string
}

export const SafeExternalLink: FunctionComponent<LinkProps> = ({
  className,
  children,
  to,
  title,
}) => (
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
