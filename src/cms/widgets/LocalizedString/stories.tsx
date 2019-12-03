import React from 'react'
import '../../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import cn from 'classnames'
import styles from '../styles.module.scss'
import { createLocalizedStringControl } from './control'
import { TranslationCollection } from '../../i18n-lib'
import { Locale } from '../../i18n-locales'

interface WrapperProps {
  locales: Locale[]
}

export const Wrapper: React.FunctionComponent<WrapperProps> = ({ locales }) => {
  const [value, setValue] = React.useState<TranslationCollection<string>>([])

  const LocalizedStringControl = createLocalizedStringControl(locales)

  return (
    <div>
      <div>In the widget I would see:</div>
      <div>
        <LocalizedStringControl
          forID={'widget-identifier'}
          classNameWrapper={cn(styles.netlify)}
          onChange={setValue}
          value={value}
        />
      </div>
      <div>And in the file I would save:</div>
      <div> {JSON.stringify(value, null, 2)}</div>
    </div>
  )
}

storiesOf('Widgets.LocalizedString', module)
  .add('default', () => <Wrapper locales={['de', 'en']} />)
  .add('exotic', () => (
    <Wrapper locales={['de', 'de-AT', 'en', 'en-US-POSIX']} />
  ))
