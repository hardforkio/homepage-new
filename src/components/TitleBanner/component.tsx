import React, { FunctionComponent } from 'react'
import { Container } from 'reactstrap'
import cn from 'classnames'
import { blurryBackgroundBanner } from '../../scss/global.module.scss'
import * as styles from './component.module.scss'

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