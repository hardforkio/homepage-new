import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import { HeroSectionComponent } from './Hero'
import { Link as ReachLink } from '@reach/router'

storiesOf('Hero Section', module).add('default', () => (
  <HeroSectionComponent
    subTitle={'IHR PARTNER FÜR ANSPRUCHSVOLLE SOFTWAREPROJEKTE'}
    title={'Hardfork'}
    setBackgroundAnimation={() => {}}
    startBackgroundAnimation={true}
    startHeadlineAnimation={true}
    startMoreLinkAnimation={true}
    LinkTag={ReachLink}
  />
))
