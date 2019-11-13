import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import { TitleBanner, TitleBannerComponent } from '.'
import { Navbar } from '../Navbar'
import { DispatchActionLink } from '../../storybook/helpers'

const TITLE = 'JOBS'
const SUBTITLE = 'Hardfork.io | Berlin'

storiesOf('Title Banner', module)
  .add('default', () => (
    <TitleBannerComponent title={TITLE} subtitle={SUBTITLE} />
  ))
  .add('with header', () => (
    <div>
      <Navbar linkTag={DispatchActionLink} className="fixed-top" />
      <TitleBanner title={TITLE} subtitle={SUBTITLE} />
    </div>
  ))
