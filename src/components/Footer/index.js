import React from 'react'
import config from '../../../meta/config'
import styled from 'styled-components'

const Footer = styled.footer`
  background-color: ${props => props.theme.defaultBg};
  color: ${props => props.theme.primary};
`

export default () => (
  <Footer className='footer'>
    <div className='container'>
      <div className='content has-text-centered'>
        <p>
          {config.copyright}
        </p>
      </div>
    </div>
  </Footer>
)
