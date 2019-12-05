import React, { FunctionComponent, useEffect } from 'react'
import useIsInViewport from 'use-is-in-viewport'
import { useNavbarState } from '../../utils/hooks'
import { TitleBannerComponent } from './component'

export const TitleBanner: FunctionComponent<{
  title: string
  subtitle: string
}> = ({ title, subtitle }) => {
  const [inView, ref] = useIsInViewport({ threshold: 80 })
  const [, setTransparent] = useNavbarState()
  useEffect(() => {
    if (inView !== null) {
      setTransparent(inView)
    }
  }, [inView, setTransparent])
  return (
    <div ref={ref}>
      <TitleBannerComponent title={title} subtitle={subtitle} />
    </div>
  )
}
