import React, { FunctionComponent } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Link } from 'gatsby'
import { Seo, SEOProps } from './SEO'

const Layout: FunctionComponent<SEOProps> = ({
  children,
  title,
  metaDescription,
  metaKeywords,
}) => (
  <div>
    <Seo
      title={title}
      metaDescription={metaDescription}
      metaKeywords={metaKeywords}
    />
    <header>
      <Navbar linkTag={Link} className="fixed-top" />
    </header>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Layout
