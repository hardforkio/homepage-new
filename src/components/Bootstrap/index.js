import React from 'react'
import html from './bootstrap.html'

export const Bootstrap = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
)
