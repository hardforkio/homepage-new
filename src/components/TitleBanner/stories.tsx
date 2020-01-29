import '../../scss/main.scss'

import { storiesOf } from '@storybook/react'
import React from 'react'

import { DispatchActionLink } from '../../storybook/helpers'
import { NavbarComponent } from '../Navbar/component'
import { TitleBannerComponent } from './component'

const TITLE = 'JOBS'
const SUBTITLE = 'Hardfork.io | Berlin'

storiesOf('Title Banner', module)
  .add('default', () => (
    <TitleBannerComponent title={TITLE} subtitle={SUBTITLE} />
  ))
  .add('with header', () => (
    <div>
      <NavbarComponent
        linkTag={DispatchActionLink}
        className="fixed-top"
        contactLinkText="CONTACT"
        FAQLinkText="FAQ"
        showFAQ={true}
      />
      <TitleBannerComponent title={TITLE} subtitle={SUBTITLE} />
    </div>
  ))
