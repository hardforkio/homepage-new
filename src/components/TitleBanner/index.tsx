import React, { FunctionComponent, useEffect } from 'react'
import { Container } from 'reactstrap'
import useIsInViewport from 'use-is-in-viewport'
import { useNavbarState } from '../../utils/hooks'
import cn from 'classnames'
import { blurryBackgroundBanner } from '../../scss/global.module.scss'
import * as styles from './component.module.scss'

export const TitleBanner: FunctionComponent<{
  title: string
  subtitle: string
}> = ({ title, subtitle }) => {
  const [inView, ref] = useIsInViewport({ threshold: 80 })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setTransparent] = useNavbarState()
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

export const TitleBannerComponent: FunctionComponent<{
  title: string
  subtitle: string
}> = ({ title, subtitle }) => (
  <div className={cn(styles.viewportHeight50, blurryBackgroundBanner)}>
    <Container className="h-100 text-center d-flex flex-column justify-content-center">
      <h3 className="mb-4">{title}</h3>
      <h6>{subtitle}</h6>
    </Container>
  </div>
)
