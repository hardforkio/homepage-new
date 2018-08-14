import React from 'react'
import config from '../../../meta/config'
import styled from 'styled-components'
import media from 'styled-media-query'

const Footer = styled.footer`
  background-color: ${props => props.theme.defaultBg};
  color: ${props => props.theme.primary};
  
  ${media.lessThan('medium')`

    /* screen width is less than 768px (medium) */
    background: red;
  `}

  ${media.between('medium', 'large')`
    /* screen width is between 768px (medium) and 1170px (large) */
    background: green;
  `}

  ${media.greaterThan('large')`

    /* screen width is greater than 1170px (large) */
    background: blue;
  `}
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
