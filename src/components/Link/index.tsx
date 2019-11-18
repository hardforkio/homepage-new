import React, { FunctionComponent } from 'react'
import { NavLink } from 'reactstrap'
import { useLocale } from '../../utils/hooks'

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

export const LocalizedLink: FunctionComponent<{
  to: string
  className?: string
  linkTag: any
}> = ({ linkTag, to, children, className }) => {
  const locale = useLocale()
  const currentPrefix = locale === 'en' ? '/en' : '/de'
  return (
    <NavLink tag={linkTag} className={className} to={`${currentPrefix}${to}`}>
      {children}
    </NavLink>
  )
}
