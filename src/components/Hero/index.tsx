import React, { FunctionComponent, useEffect, useState } from 'react'
import useIsInViewport from 'use-is-in-viewport'
import { HeroSectionComponent } from './component'
import { useNavbarState } from '../../utils/hooks'
import { Link } from 'gatsby'

interface IntroProps {
  headline: string
  subheadline: string
  contactButtonText: string
  moreLinkText: string
}

export const HeroSection: FunctionComponent<IntroProps> = ({
  headline,
  subheadline,
  contactButtonText,
  moreLinkText,
}) => {
  const [showHeadline, setShowHeadline] = useState(false)
  const [showSubheadline, setShowSubheadline] = useState(false)
  const [showBackground, setShowBackground] = useState(false)
  const [showMoreSection, setShowMoreSection] = useState(false)

  useEffect(() => {
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
  }, [])

  const [_, setTransparent] = useNavbarState()
  const [inView, ref] = useIsInViewport({ threshold: 90 })
  useEffect(() => {
    setTransparent(!!inView)
  }, [inView, setTransparent])

  return (
    <div ref={ref}>
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
