import React, { FunctionComponent, useEffect, useState } from 'react'
import useIsInViewport from 'use-is-in-viewport'
import { HeroSectionComponent } from './Hero'
import { useNavbarState } from '../../utils/hooks'
import { Link } from 'gatsby'

interface IntroProps {
  title: string
  heading: string
}

export const HeroSection: FunctionComponent<IntroProps> = ({
  title,
  heading,
}) => {
  const [startAnimation, setAnimation] = useState(false)
  const [startSecondAnimation, setSecondAnimation] = useState(false)
  const [startThirdAnimation, setThirdAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
    setTimeout(() => {
      setThirdAnimation(true)
    }, 2000)
  }, [])

  const [_, setTransparent] = useNavbarState()
  const [inView, ref] = useIsInViewport({ threshold: 95 })
  useEffect(() => {
    setTransparent(inView)
  }, [inView, setTransparent])

  return (
    <div ref={ref}>
      <HeroSectionComponent
        heading={heading}
        title={title}
        setBackgroundAnimation={setSecondAnimation}
        startBackgroundAnimation={startSecondAnimation}
        startHeadlineAnimation={startAnimation}
        startMoreLinkAnimation={startThirdAnimation}
        LinkTag={Link}
      />
    </div>
  )
}
