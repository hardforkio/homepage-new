import { HistoryLocation } from '@reach/router'
import * as R from 'ramda'
import React, { FunctionComponent } from 'react'
import { NavItem, NavLink } from 'reactstrap'

import { Navbar as NavbarData } from '../../data/navbar/types'
import { useLocale, useLocation, usePathPrefix } from '../../utils/hooks'

interface MenuEntriesProps extends NavbarData {
  linkTag: any
  showFAQ: boolean
}

export const MenuEntries: FunctionComponent<MenuEntriesProps> = ({
  linkTag,
  showFAQ,
  contactLinkText = 'KONTAKT',
  FAQLinkText = 'FAQ',
  servicesLinkText = 'DIENSTLEISTUNGEN',
}) => {
  const FAQPath = usePathPrefix('/faq')
  const contactPath = usePathPrefix('/#contact')
  const servicesPath = usePathPrefix('/')
  return (
    <>
      {[
        <NavItem key="services">
          <NavLink href={servicesPath}>{servicesLinkText}</NavLink>
        </NavItem>,
        <NavItem key="contact">
          <NavLink href={contactPath}>{contactLinkText}</NavLink>
        </NavItem>,
        <NavItem key="faq" className={showFAQ ? '' : 'd-none'}>
          <NavLink to={FAQPath} tag={linkTag}>
            {FAQLinkText}
          </NavLink>
        </NavItem>,
        <NavItem key="languageSwitcher">
          <LanguageSwitcher linkTag={linkTag} />
        </NavItem>,
      ]}
    </>
  )
}

const LanguageSwitcher: FunctionComponent<{ linkTag: any }> = ({ linkTag }) => {
  const locale = useLocale()
  const { location } = useLocation()
  const toPrefix = locale === 'en' ? '/de' : '/en'
  const linkText = locale === 'en' ? 'DE' : 'EN'
  const currentPrefix = locale === 'en' ? '/en' : '/de'
  const to = R.pipe<HistoryLocation, string, string>(
    R.prop('pathname'),
    R.replace(currentPrefix, toPrefix),
  )(location)
  return (
    <NavLink to={to} tag={linkTag}>
      {linkText}
    </NavLink>
  )
}
