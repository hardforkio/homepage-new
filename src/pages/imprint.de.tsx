import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import { Imprint } from '../components/Imprint'
import { NavbarStateProvider, LocaleProvider } from '../utils/hooks'
import { getImprint } from '../data/imprint'

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
