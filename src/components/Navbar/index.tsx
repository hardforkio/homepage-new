import React, { FunctionComponent } from 'react'
import { useNavbarState } from '../../utils/hooks'
import { Navbar as NavbarData } from '../../data/navbar/types'
import { useFAQPage, useNavbar } from '../../hooks/data'
import { hasFAQEntries } from '../../data/faqEntry/helper'
import { NavbarComponent, NavbarProps } from './component'

export const Navbar: FunctionComponent<NavbarProps> = ({
  linkTag,
  className = '',
}) => {
  const [transparent] = useNavbarState()
  const faqPage = useFAQPage()
  const cmsData: NavbarData = useNavbar()

  return (
    <NavbarComponent
      {...cmsData}
      linkTag={linkTag}
      className={className}
      showFAQ={hasFAQEntries(faqPage)}
      isTransparent={transparent}
    />
  )
}
