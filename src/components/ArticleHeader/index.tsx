import React, { FunctionComponent } from 'react'
import bgimage from '../../img/banner.jpg'
import styles from './ArticleHeader.module.scss'
import cn from 'classnames'

export const ArticleHeader: FunctionComponent<{
  title: string
  subtitle: string
}> = ({ title, subtitle }) => (
  <header className={cn(styles.articleHeader)} data-bgimage={bgimage}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </header>
)
