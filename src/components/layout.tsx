import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'

import { Head as HeadProps } from '../data/head/types'
import { Footer } from './Footer'
import { Head } from './Head'
import { Navbar } from './Navbar'

const Layout: FunctionComponent<HeadProps> = ({ children, title, meta }) => (
  <div>
    <Head title={title} meta={meta} />
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
