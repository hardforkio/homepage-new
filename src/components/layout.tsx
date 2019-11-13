import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import config from '../../config'
import { Link } from 'gatsby'

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
      <header>
        <Navbar linkTag={Link} className="fixed-top" />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
