import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import { blurryBackgroundBanner } from '../../scss/global.module.scss'
import styles from './Background.module.scss'

export const BlurryBackground: FunctionComponent<{ show: boolean }> = ({
  show,
}) => (
  <div
    className={cn(
      blurryBackgroundBanner,
      styles.introBackground,
      show ? 'show' : '',
    )}
  />
)
