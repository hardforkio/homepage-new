import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { NavbarComponent } from './Navbar'
import Footer from './Footer'
import config from '../../config'
import styledNormalize from 'styled-normalize'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { Link } from 'gatsby'
import { media } from '../config/media'

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

  html {
    font-size: 11pt;
    font-weight: 400;
    letter-spacing: .075em;
    margin: 0;
    
    ${media.greaterThan('sm')`
      font-size: 12pt;
    `}
    ${media.greaterThan('md')`
      font-size: 13pt;
    `}
    ${media.greaterThan('xl')`
      font-size: 15pt;
    `}
  }
  
  body {
    background: rgb(46, 56, 66);
    color: #ffffff;
    font-family: Open Sans,Helvetica,sans-serif;
    font-weight: 400;
    line-height: 1.65em;
    margin: 0;
    }
  
  blockquote {
    border-left: solid 4px #dfdfdf;
    font-style: italic;
    margin: 0 0 2em 0;
    padding: 0.5em 0 0.5em 2em;
    
    > p {
      margin: 0 !important;
    }
  }
  
`

const hardforkTheme = {
  primary: '#ffffff',
  defaultBg: 'rgb(46, 56, 66)',
}

const Layout: FunctionComponent<{ isHeaderTransparent?: boolean }> = ({
  children,
  isHeaderTransparent = true,
}) => (
  <div>
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <ThemeProvider theme={hardforkTheme}>
      <header>
        <NavbarComponent
          linkTag={Link}
          isTransparent={isHeaderTransparent}
          className="fixed-top"
        />
      </header>
    </ThemeProvider>
    <ThemeProvider theme={hardforkTheme}>{children}</ThemeProvider>
    <ThemeProvider theme={hardforkTheme}>
      <Footer />
    </ThemeProvider>
  </div>
)

export default Layout
