import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import config from '../../meta/config'
import {ThemeProvider, injectGlobal} from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,600italic,800,800italic');
  
  body {
    font-family: Open Sans,Helvetica,sans-serif;
    font-weight: 400;
    letter-spacing: .075em;
    line-height: 1.65em;
    margin: 0;
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
      <NavBar />
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
