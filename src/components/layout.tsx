import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import config from '../../config'
import { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'

const hardforkTheme = {
  primary: '#ffffff',
  defaultBg: 'rgb(46, 56, 66)',
}

interface LayoutProps {
  title?: string
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  title = config.siteTitle,
}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <ThemeProvider theme={hardforkTheme}>
        <>
          <header>
            <Navbar linkTag={Link} className="fixed-top" />
          </header>
          {children}
          <Footer />
        </>
      </ThemeProvider>
    </div>
  )
}

export default Layout
