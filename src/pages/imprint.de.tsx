import React, { FunctionComponent } from 'react'

import { Imprint } from '../components/Imprint'
import Layout from '../components/layout'
import { getImprint } from '../data/imprint'
import { LocaleProvider, NavbarStateProvider } from '../utils/hooks'

const ImprintPage: FunctionComponent<{}> = () => {
  const { head } = getImprint('de')

  return (
    <LocaleProvider value="de">
      <NavbarStateProvider>
        <Layout {...head}>
          <Imprint />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default ImprintPage
