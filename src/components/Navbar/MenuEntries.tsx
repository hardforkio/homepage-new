import React, { FunctionComponent } from 'react'
import { NavItem, NavLink } from 'reactstrap'

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
}) => (
  <>
    {[
      <NavItem key="contact">
        <NavLink href="#contact">{contactLinkText}</NavLink>
      </NavItem>,
      <NavItem key="faq" className={showFAQ ? '' : 'd-none'}>
        <NavLink to="/de/faq" tag={linkTag}>
          {FAQLinkText}
        </NavLink>
      </NavItem>,
    ]}
  </>
)
