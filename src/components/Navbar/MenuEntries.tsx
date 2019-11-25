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
  return (
    <>
      {[
        <NavItem key="contact">
          <NavLink href="#contact">{contactLinkText}</NavLink>
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
