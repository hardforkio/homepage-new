import { graphql, useStaticQuery } from 'gatsby'
import * as R from 'ramda'
import React, { FunctionComponent } from 'react'

import { Locale } from '../../cms/i18n'
import { hasFAQEntries } from '../../data/faqEntry/helper'
import { Navbar as NavbarData } from '../../data/navbar/types'
import { useFAQPage } from '../../hooks/data'
import { useLocale, useNavbarState } from '../../utils/hooks'
import { NavbarComponent, NavbarProps } from './component'

export const query = graphql`
  query NavbarQuery {
    navbarJson {
      translations {
        locale
        value {
          FAQLinkText
          contactLinkText
          servicesLinkText
          softwareLinkText
        }
      }
    }
  }
`

export const Navbar: FunctionComponent<NavbarProps> = ({
  linkTag,
  className = '',
}) => {
  const [transparent] = useNavbarState()
  const faqPage = useFAQPage()
  const locale = useLocale()
  const cmsData = useStaticQuery(query)
  const translatedData: NavbarData = getNavbarTranslation(locale, cmsData)

  return (
    <NavbarComponent
      {...translatedData}
      linkTag={linkTag}
      className={className}
      showFAQ={hasFAQEntries(faqPage)}
      isTransparent={transparent}
    />
  )
}
const getNavbarTranslation: (locale: Locale, data: any) => NavbarData = (
  locale,
  data,
) =>
  R.pipe<any, any, any, NavbarData>(
    R.path(['navbarJson', 'translations']),
    R.find(R.propEq('locale', locale)),
    R.prop('value'),
  )(data)
