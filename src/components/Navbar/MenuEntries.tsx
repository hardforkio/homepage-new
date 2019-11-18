import React, { FunctionComponent } from 'react'
import { NavItem, NavLink } from 'reactstrap'
import * as R from 'ramda'
import { useLocale, useLocation } from '../../utils/hooks'
import { HistoryLocation } from '@reach/router'
import { LocalizedLink } from '../Link'

export const MenuEntries = ({
  linkTag,
  showFAQ,
}: {
  linkTag: any
  showFAQ: boolean
}) => (
  <>
    {[
      <NavItem key="contact">
        <NavLink href="#contact">KONTAKT</NavLink>
      </NavItem>,
      <NavItem key="faq" className={showFAQ ? '' : 'd-none'}>
        <LocalizedLink to="/faq" linkTag={linkTag}>
          FAQ
        </LocalizedLink>
      </NavItem>,
      <NavItem key="languageSwitcher">
        <LanguageSwitcher linkTag={linkTag} />
      </NavItem>,
    ]}
  </>
)

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
