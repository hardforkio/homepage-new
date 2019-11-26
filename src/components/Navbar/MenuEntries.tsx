import React, { FunctionComponent } from 'react'
import { NavItem, NavLink } from 'reactstrap'
import { usePathPrefix } from '../../utils/hooks'

export const MenuEntries: FunctionComponent<{
  linkTag: any
  showFAQ: boolean
  contactLinkText: string
  FAQLinkText: string
}> = ({
  linkTag,
  showFAQ,
  contactLinkText = 'KONTAKT',
  FAQLinkText = 'FAQ',
}) => {
  const FAQPath = usePathPrefix('/faq')
  const contactPath = usePathPrefix('/#contact')
  return (
    <>
      {[
        <NavItem key="contact">
          <NavLink href={contactPath}>{contactLinkText}</NavLink>
        </NavItem>,
        <NavItem key="faq" className={showFAQ ? '' : 'd-none'}>
          <NavLink to={FAQPath} tag={linkTag}>
            {FAQLinkText}
          </NavLink>
        </NavItem>,
      ]}
    </>
  )
}
