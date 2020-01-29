import cn from 'classnames'
import React, { FunctionComponent } from 'react'

import { blurryBackgroundBanner } from '../../scss/global.module.scss'
import styles from './Background.module.scss'

export const WithBlurryBackground: FunctionComponent<{
  show: boolean
  className: string
}> = ({ show, children, className }) => (
  <div className={className}>
    <div
      className={cn(
        blurryBackgroundBanner,
        styles.introBackground,
        show ? 'show' : '',
        'position-absolute',
      )}
    />
    {children}
  </div>
)
