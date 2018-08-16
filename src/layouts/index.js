import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import config from '../../meta/config'
import styledNormalize from 'styled-normalize'
import {ThemeProvider, injectGlobal} from 'styled-components'
import media from 'styled-media-query'

injectGlobal`
  ${styledNormalize}

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,600italic,800,800italic');
  
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *, .row, :after, :before {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  body {
    background: rgb(46, 56, 66);
    color: #ffffff;
    font-family: Open Sans,Helvetica,sans-serif;
    font-size: 11pt;
    font-weight: 400;
    letter-spacing: .075em;
    line-height: 1.65em;
    margin: 0;
    
    ${media.greaterThan('medium')`
      font-size: 12pt;
    `}
    ${media.greaterThan('large')`
      font-size: 13pt;
    `}
  }
  
`

const hardforkTheme = {
  primary: '#ffffff',
  defaultBg: 'rgb(46, 56, 66)',
}

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta name='description' content={config.siteDescription} />
    </Helmet>
    <ThemeProvider theme={hardforkTheme}>
      <Header />
    </ThemeProvider>
    <ThemeProvider theme={hardforkTheme}>
      {children()}
    </ThemeProvider>
    <ThemeProvider theme={hardforkTheme}>
      <Footer />
    </ThemeProvider>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
