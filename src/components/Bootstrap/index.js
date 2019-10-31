import React from 'react'
import html from './bootstrap.html'

export const Bootstrap = () => (
  <div
    style={{ background: 'black' }}
    dangerouslySetInnerHTML={{ __html: html }}
  />
)
