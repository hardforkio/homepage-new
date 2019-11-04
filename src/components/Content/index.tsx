import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import styles from './Content.module.scss'

export const ContentWrap: FunctionComponent = ({ children }) => (
  <div className={cn(styles.contentStyles)}>{children}</div>
)
