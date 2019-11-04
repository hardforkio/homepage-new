import React, { FunctionComponent, useEffect } from 'react'
import bgimage from '../../img/banner.jpg'
import styles from './ArticleHeader.module.scss'
import cn from 'classnames'
import { useNavbarState } from '../../utils/hooks'
import useIsInViewport from 'use-is-in-viewport'

export const ArticleHeader: FunctionComponent<{
  title: string
  subtitle: string
}> = ({ title, subtitle }) => {
  const [inView, ref] = useIsInViewport()
  const [_, setTransparent] = useNavbarState()
  useEffect(() => {
    setTransparent(inView)
  }, [inView, setTransparent])
  console.log('inview', inView)
  return (
    <div ref={ref} className={cn(styles.articleHeader)} data-bgimage={bgimage}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}
