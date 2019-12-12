import React, { FunctionComponent } from 'react'
import cn from 'classnames'

export const ContentWrap: FunctionComponent = ({ children }) => (
  <div className={cn('bg-light', 'text-dark', 'py-3', 'py-md-5')}>
    {children}
  </div>
)
