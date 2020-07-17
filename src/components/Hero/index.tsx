import { Link } from 'gatsby'
import React, { FunctionComponent, useEffect, useState } from 'react'
import useIsInViewport from 'use-is-in-viewport'

import { useNavbarState } from '../../utils/hooks'
import { HeroSectionComponent } from './component'

interface IntroProps {
  headline: string
  subheadline: string
  contactButtonText: string
  moreLinkText: string
  showAnimation: boolean
}

export const HeroSection: FunctionComponent<IntroProps> = ({
  headline,
  subheadline,
  contactButtonText,
  moreLinkText,
  showAnimation,
}) => {
  const [showHeadline, setShowHeadline] = useState(!showAnimation)
  const [showSubheadline, setShowSubheadline] = useState(!showAnimation)
  const [showBackground, setShowBackground] = useState(!showAnimation)
  const [showMoreSection, setShowMoreSection] = useState(!showAnimation)

  useEffect(() => {
    if (showAnimation) {
      setTimeout(() => {
        setShowBackground(true)
      }, 100)
      setTimeout(() => {
        setShowHeadline(true)
      }, 750)
      setTimeout(() => {
        setShowSubheadline(true)
      }, 1000)
      setTimeout(() => {
        setShowMoreSection(true)
      }, 2000)
    }
  }, [showAnimation])

  const [, setTransparent] = useNavbarState()
  const [inView, ref] = useIsInViewport({ threshold: 90 })
  useEffect(() => {
    setTransparent(!!inView)
  }, [inView, setTransparent])

  return (
    <div ref={ref} className="text-white">
      <HeroSectionComponent
        subTitle={subheadline}
        title={headline}
        contactButtonText={contactButtonText}
        moreLinkText={moreLinkText}
        showSubHeadline={showSubheadline}
        showBackground={showBackground}
        showHeadline={showHeadline}
        showMoreSection={showMoreSection}
        LinkTag={Link}
      />
    </div>
  )
}
