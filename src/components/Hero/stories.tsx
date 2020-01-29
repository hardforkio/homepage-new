import '../../scss/main.scss'

import { Link as ReachLink } from '@reach/router'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { HeroSectionComponent } from './component'

storiesOf('Hero Section', module).add('default', () => (
  <HeroSectionComponent
    subTitle={'IHR PARTNER FÜR ANSPRUCHSVOLLE SOFTWAREPROJEKTE'}
    title={'Hardfork'}
    showSubHeadline
    showBackground
    showHeadline
    showMoreSection
    LinkTag={ReachLink}
    contactButtonText="Kontakt"
    moreLinkText="Mehr"
  />
))
