import React, { FunctionComponent, useEffect } from 'react'
import styles from './ArticleHeader.module.scss'
import cn from 'classnames'
import { useNavbarState } from '../../utils/hooks'
import useIsInViewport from 'use-is-in-viewport'

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
  <div className={cn(styles.articleHeader)}>
    <h3 className="text-uppercase mb-4 font-weight-bold">{title}</h3>
    <h6 className="text-uppercase">{subtitle}</h6>
  </div>
)
