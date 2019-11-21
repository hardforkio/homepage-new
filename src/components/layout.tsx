import React, { FunctionComponent } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import config from '../../config'
import { Link } from 'gatsby'
import { Seo } from './SEO'
import { useSEO } from '../data/seo'
import { useLocale } from '../utils/hooks'

interface LayoutProps {
  title?: string
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  title = config.siteTitle,
}) => {
  const { description } = useSEO()
  const locale = useLocale()
  return (
    <div>
      <Seo title={title} description={description} lang={locale} />
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
