import React, { FunctionComponent, useEffect } from 'react'

import cn from 'classnames'
import { useNavbarState } from '../../utils/hooks'
import useIsInViewport from 'use-is-in-viewport'

import { blurryBackgroundBanner } from '../../scss/global.module.scss'
import { largePadding } from './ArticleHeader.module.scss'

export const ArticleHeader: FunctionComponent<{
  title: string
  subtitle: string
}> = ({ title, subtitle }) => {
  const [inView, ref] = useIsInViewport({ threshold: 80 })
  const [_, setTransparent] = useNavbarState()
  useEffect(() => {
    if (inView !== null) {
      setTransparent(inView)
    }
  }, [inView, setTransparent])
  return (
    <div ref={ref}>
      <ArticleHeaderComponent title={title} subtitle={subtitle} />
    </div>
  )
}

export const ArticleHeaderComponent: FunctionComponent<{
  title: string
  subtitle: string
}> = ({ title, subtitle }) => (
  <div className={cn('text-center', largePadding, blurryBackgroundBanner)}>
    <h3 className="mb-4">{title}</h3>
    <h6>{subtitle}</h6>
  </div>
)
