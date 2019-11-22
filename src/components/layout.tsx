import React, { FunctionComponent } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Link } from 'gatsby'
import { Seo } from './SEO'
import { useLocale } from '../utils/hooks'

interface LayoutProps {
  metaTitle: string
  metaDescription: string
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  metaTitle,
  metaDescription,
}) => {
  const locale = useLocale()
  return (
    <div>
      <Seo
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        lang={locale}
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
}

export default Layout
