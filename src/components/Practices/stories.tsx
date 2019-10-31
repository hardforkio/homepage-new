import React from 'react'
import { storiesOf } from '@storybook/react'
import { Practices } from '.'
import { data, Practice } from '../../data/home'

const PRACTICES_HEADLINE = 'Blockchain Software made in Germany'
const PRACTICES_DESCRIPTION =
  'Die Blockchain kann in vielen Fällen erhebliches Einsparungs- oder Sicherheitspotential bieten. Wir helfen Ihnen diese Potentiale freizulegen. Wir helfen wir Ihnen die Anforderungen und Annahmen kritisch zu hinterfragen und so besonders nachhaltige Lösungen zu produzieren.'
const PRACTICES: Practice[] = data.practices.slice()

storiesOf('Practices Section', module)
  .add('many practices', () => (
    <Practices
      headline={PRACTICES_HEADLINE}
      description={PRACTICES_DESCRIPTION}
      practices={PRACTICES}
    />
  ))
  .add('2 practices', () => (
    <Practices
      headline={PRACTICES_HEADLINE}
      description={PRACTICES_DESCRIPTION}
      practices={PRACTICES.slice(0, 2)}
    />
  ))
  .add('3 practices', () => (
    <Practices
      headline={PRACTICES_HEADLINE}
      description={PRACTICES_DESCRIPTION}
      practices={PRACTICES.slice(0, 3)}
    />
  ))
