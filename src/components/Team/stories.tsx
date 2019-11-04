import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import { Team } from './'

const members = [
  {
    name: 'M',
    jobTitle: 'Dev',
    imgSrc: 'https://placeimg.com/250/250/people',
  },
  {
    name: 'M',
    jobTitle: 'Dev',
    imgSrc: 'https://placeimg.com/250/250/people',
  },
  {
    name: 'M',
    jobTitle: 'Dev',
    imgSrc: 'https://thispersondoesnotexist.com/image',
  },
]

storiesOf('Team', module).add('default', () => (
  <div className="container">
    <Team members={members} />
  </div>
))
